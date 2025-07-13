import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  as?: "ul" | "ol";
  level?: 1 | 2;
  className?: string;
}

export default function List({
  children,
  as: Tag = "ul",
  level = 1,
  className = "",
}: Props) {
  const paddingLeft = `pl-${level * 1}`;
  return (
    <Tag
      className={`list-none space-y-5 ${level !== 1 && "pl-[0.625rem] pt-[2.3125rem]"} ${paddingLeft} ${className}`}
    >
      {children}
    </Tag>
  );
}
