import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface Props {
  title: string;
  trigger: ReactNode;
  children: ReactNode;
}

export default function Modal({ title, trigger, children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content className="fixed inset-0 z-50 m-auto max-h-[90%] w-[80vw] max-w-2xl overflow-hidden overflow-y-auto rounded-xl bg-white shadow-xl focus:outline-none">
          <Dialog.Title className="pl-5 pt-5 text-xl font-semibold text-dark-500/90">
            {title}
          </Dialog.Title>
          <div className="p-5 text-dark-400">{children}</div>
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className="absolute right-4 top-5 text-2xl text-gray-600 hover:text-black"
            >
              &times;
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
