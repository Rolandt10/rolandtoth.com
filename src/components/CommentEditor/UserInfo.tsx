import { auth } from "../../lib/firebase";
import { signOut, type User } from "firebase/auth";

interface Props {
  user: User;
  resetEditor: () => void;
}

export default function UserInfo({ user, resetEditor }: Props) {
  const logout = () => {
    signOut(auth);
    resetEditor();
  };

  return (
    <div className="flex justify-between pb-4 text-xsm">
      <div className="flex items-center gap-2">
        <img
          className="w-8 rounded-full"
          src={user.photoURL}
          alt="Your profile photo taken from Google or Github"
        />
        <p>{user.displayName}</p>
      </div>
      <button
        onClick={logout}
        type="button"
        className="rounded-2xl border border-dark-500 px-3 dark:bg-dark-700 hover:dark:border-dark-400/50"
      >
        Sign out
      </button>
    </div>
  );
}
