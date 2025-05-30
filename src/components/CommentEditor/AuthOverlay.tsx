import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function AuthOverlay() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const loginGoogle = () =>
    signInWithPopup(auth, googleProvider).catch(console.error);
  const loginGitHub = () =>
    signInWithPopup(auth, githubProvider).catch(console.error);

  return (
    <div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 rounded-xl bg-white/75 backdrop-blur-sm"
      style={{
        clipPath: "inset(0 round 4px)",
      }}
    >
      <p className="w-max rounded-full bg-dark-500 px-5 py-1 text-center text-sm text-dark-100 shadow-md">
        Sign in to leave a comment
      </p>
      <div className="flex gap-2">
        <button
          onClick={loginGoogle}
          type="button"
          className="rounded-2xl border border-dark-400/50 px-3 py-1 text-sm text-dark-500 shadow-sm dark:bg-dark-0"
        >
          Google
        </button>
        <button
          onClick={loginGitHub}
          type="button"
          className="rounded-2xl border border-dark-400/50 px-3 py-1 text-sm text-dark-500 shadow-sm dark:bg-dark-0"
        >
          GitHub
        </button>
      </div>
    </div>
  );
}
