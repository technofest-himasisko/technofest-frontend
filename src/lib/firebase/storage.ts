import { storage } from "@/lib/firebase/client";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";

export async function uploadFile(
  file: Blob | Uint8Array | ArrayBuffer,
  url: string | undefined,
) {
  const storageRef = ref(storage, url);

  const result = await uploadBytes(storageRef, file);

  return getDownloadURL(ref(storage, result.metadata.fullPath));
}
