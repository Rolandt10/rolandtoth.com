import * as RadixTooltip from "@radix-ui/react-tooltip";

interface Props {
  children: React.ReactNode;
  text: string;
  delayDuration?: number;
  side?: "bottom" | "top" | "right" | "left";
  open?: boolean;
  onOpenChange?: any;
}

export default function Tooltip({
  children,
  text,
  delayDuration = 200,
  side = "bottom",
  open,
  onOpenChange,
}: Props) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root open={open} onOpenChange={onOpenChange}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="animate-fadeIn rounded-lg px-3 py-1 text-xsm shadow-md dark:bg-dark-600/80"
            sideOffset={7}
            side={side}
          >
            {text}
            <RadixTooltip.Arrow className="dark:fill-dark-600/80" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
