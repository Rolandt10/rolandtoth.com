interface Props {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
  type: "button" | "submit";
}

export default function SocialLoginButton({
  onClick,
  label,
  icon,
  type = "button",
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex items-center gap-1 rounded-2xl border border-dark-400/50 px-3 py-1 text-sm text-dark-500 shadow-sm hover:border-dark-500/50 dark:bg-dark-0"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
