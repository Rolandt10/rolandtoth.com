import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../../lib/firebase";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import AuthOverlay from "./AuthOverlay";
import UserInfo from "./UserInfo";

export default function CommentEditor() {
  const [user, setUser] = useState<User | null>(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!editorRef.current) return;
    new Quill(editorRef.current, {
      theme: "snow",
      placeholder: "Share your thoughts...",
      modules: {
        toolbar: [["bold", "italic", "underline", "link"]],
      },
    });
  }, []);

  return (
    <div className="relative">
      {user && <UserInfo user={user} />}
      <form className="relative overflow-hidden rounded-xl">
        <div ref={editorRef} />
        <button
          type="submit"
          className="absolute bottom-4 right-4 rounded-full bg-dark-600 px-4 py-[0.45rem] text-sm text-white"
        >
          Submit
        </button>
        {!user && <AuthOverlay />}
      </form>
    </div>
  );
}
