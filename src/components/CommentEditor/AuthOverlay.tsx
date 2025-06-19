import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { GithubIcon, GoogleIcon } from "../Icons/Icons";

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
          className="flex items-center gap-1 rounded-2xl border border-dark-400/50 px-3 py-1 text-sm text-dark-500 shadow-sm hover:border-dark-500/50 dark:bg-dark-0"
        >
          <GoogleIcon
            size={15}
            viewBox="0 0 58 58"
            stroke-width="4"
            className="text-dark-400"
          />
          <span>Google</span>
        </button>
        <button
          onClick={loginGitHub}
          type="button"
          className="flex items-center gap-1 rounded-2xl border border-dark-400/50 px-3 py-1 text-sm text-dark-500 shadow-sm hover:border-dark-500/50 dark:bg-dark-0"
        >
          <GithubIcon size={14} className="text-dark-400" />
          <span>GitHub</span>
        </button>
      </div>
    </div>
  );
}
