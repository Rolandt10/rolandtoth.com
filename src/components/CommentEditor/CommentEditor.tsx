import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import AuthOverlay from "./AuthOverlay";
import UserInfo from "./UserInfo";

interface Props {
  slug: string;
}

export default function CommentEditor({ slug }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const editorRef = useRef(null); // ref to the editor container itself
  const quillEditorRef = useRef<Quill | null>(null); // ref to the object returned by new Quill(...)
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!quillEditorRef.current) {
      quillEditorRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Share your thoughts...",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "link"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block"],
          ],
        },
      });
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const delta = quillEditorRef.current.getContents();

    try {
      await addDoc(collection(db, "comments", slug, "comments"), {
        text: JSON.parse(JSON.stringify(delta)),
        createdAt: serverTimestamp(),
        slug: slug,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      quillEditorRef.current.setText("");
    } catch (err) {
      console.error("Error adding comment", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      {user && <UserInfo user={user} />}
      <form className="relative rounded-xl">
        <div ref={editorRef} />
        <button
          type="submit"
          onClick={handleSubmit}
          className="absolute bottom-4 right-4 flex w-20 items-center justify-center rounded-[0.7rem] bg-dark-600 px-4 py-[0.5rem] text-sm text-white"
        >
          {loading ? (
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : (
            "Submit"
          )}
        </button>
        {!user && <AuthOverlay />}
      </form>
    </div>
  );
}
