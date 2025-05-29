import Modal from "../Modal/Modal";

export default function InlineModal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Modal
      title={title}
      trigger={<button className="cursor-pointer underline">{title}</button>}
    >
      {children}
    </Modal>
  );
}
