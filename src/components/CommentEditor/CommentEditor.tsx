import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import AuthOverlay from "./AuthOverlay";
import UserInfo from "./UserInfo";
import { toast, ToastContainer, Zoom } from "react-toastify";

interface Props {
  slug: string;
}

export default function CommentEditor({ slug }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const editorRef = useRef(null); // ref to the editor container itself
  const quillEditorRef = useRef<Quill | null>(null); // ref to the object returned by new Quill(...)
  const recaptchaRef = useRef(null);

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

  function handleCaptcha(token) {
    setCaptchaToken(token);
  }

  function resetEditor() {
    quillEditorRef.current.setText("");
  }

  function filterEmptyTextInput() {
    const text = quillEditorRef.current.getText();
    if (text.length < 5) {
      toast("Your comment is too short.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    filterEmptyTextInput();

    try {
      await new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute("YOUR_SITE_KEY", { action: "submit" })
            .then((token) => {
              setCaptchaToken(token);
              resolve(token);
            })
            .catch(reject);
        });
      });

      const response = await fetch(
        "https://verifycaptcha-kq2wxpng4q-uc.a.run.app",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: captchaToken }),
        },
      );

      const data = await response.json();
      console.log("reCAPTCHA response:", data);

      if (!data.success || data.score < 0.5) {
        toast.warn("Suspicious activity detected. Please try again.");
        setLoading(false);
        return;
      }

      const delta = quillEditorRef.current.getContents();
      await addDoc(collection(db, "comments", slug, "comments"), {
        text: JSON.parse(JSON.stringify(delta)),
        createdAt: serverTimestamp(),
        slug: slug,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      resetEditor();
    } catch (err) {
      console.error("Error adding comment", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      {user && <UserInfo user={user} resetEditor={resetEditor} />}
      <form className="relative rounded-xl">
        <div ref={editorRef} />

        <button
          disabled={true}
          type="submit"
          onClick={handleSubmit}
          className="hover:shadow-md/50 absolute bottom-4 right-4 flex w-20 items-center justify-center rounded-[0.7rem] bg-dark-600 px-4 py-[0.5rem] text-sm text-white transition-all hover:scale-105 hover:rounded-md"
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
      <ToastContainer
        transition={Zoom}
        position="bottom-center"
        autoClose={4000}
        toastClassName="dark:bg-dark-500 text-yellow-200 dark:text-dark-0"
        progressClassName="bg-green-300"
      />
    </div>
  );
}
