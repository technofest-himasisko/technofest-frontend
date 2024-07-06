import { toast } from "sonner";

function useCopy() {
  const copyToClipboard = (text: string) => {
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast.success("Berhasil menyalin");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      console.error("Clipboard API not supported");
    }
  };

  return { copyToClipboard };
}

export default useCopy;
