import { auth } from "../../lib/firebase";
import { signOut, type User } from "firebase/auth";
import { motion } from "framer-motion";

interface Props {
  user: User;
  resetEditor: () => void;
}

export default function UserLoginInfo({ user, resetEditor }: Props) {
  const logout = () => {
    signOut(auth);
    resetEditor();
  };

  return (
    <motion.div
      layout={true}
      className="flex justify-between pb-4 text-xsm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <img
          className="w-8 rounded-full"
          src={user.photoURL || "/default-profile.jpg"}
          alt="Your profile photo taken from Google or Github"
          onError={(e) => {
            e.currentTarget.src = "/default-profile.jpg";
          }}
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
    </motion.div>
  );
}
