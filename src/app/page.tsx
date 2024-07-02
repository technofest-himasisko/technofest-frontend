import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh items-center justify-center">
      <Image
        src="/logo.png"
        alt="Technology Festival 2024"
        width={120}
        height={120}
      />
      <h1 className="mt-10 text-xl">Technology Festival 2024</h1>
      <p>Coming Soon</p>
    </div>
  );
}
