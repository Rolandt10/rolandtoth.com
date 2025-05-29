export default function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a href={href} className={`underline-fade ${className}`}>
      {children}
    </a>
  );
}
