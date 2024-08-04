import { cn } from "@/lib/utils/common";
import styles from "./loading.module.css";

export default function Loading() {
  return <div className={cn(styles.loader, "h-6 md:h-10")} />;
}
