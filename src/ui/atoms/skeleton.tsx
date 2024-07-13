import { cn } from "@/lib/utils/common";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("animate-pulse bg-slate-100/5", className)} {...props} />
  );
}

export { Skeleton };
