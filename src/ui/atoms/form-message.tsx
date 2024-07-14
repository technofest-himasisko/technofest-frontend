import { cn } from "@/lib/utils/common";
import React from "react";

interface FormMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: string[] | undefined;
}

const FormMessage = React.forwardRef<HTMLDivElement, FormMessageProps>(
  ({ className, messages, ...props }, ref) => {
    if (!messages) {
      return undefined;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "-mt-2 flex flex-col gap-y-0.5 text-sm font-medium text-red-400",
          className,
        )}
        {...props}
      >
        {messages.map((message, key) => (
          <p key={key}>{message}</p>
        ))}
      </div>
    );
  },
);

FormMessage.displayName = "FormMessage";

export default FormMessage;
