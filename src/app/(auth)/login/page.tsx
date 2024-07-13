import { Card } from "@/ui/atoms/card";
import SectionHeader from "@/ui/molecules/section-header";
import Footer from "@/ui/organisms/footer";
import LoginForm from "@/ui/organisms/login/form";
import LoginOauth from "@/ui/organisms/login/oauth";
import Link from "next/link";

interface Props {
  searchParams: {
    error: string;
  };
}

export default function Page({ searchParams }: Props) {
  return (
    <>
      <SectionHeader title="Login" />
      <Card className="mt-4">
        <p className="mb-8 text-2xl font-semibold">Login dengan</p>
        <LoginForm />
        <div className="relative flex items-center py-8">
          <div className="flex-grow border-t border-slate-100/20"></div>
          <span className="mx-4 flex-shrink text-sm text-slate-100/20">
            atau dengan
          </span>
          <div className="flex-grow border-t border-slate-100/20"></div>
        </div>
        <LoginOauth error={searchParams.error} />
        <p className="mt-6 text-center text-slate-100/50">
          Belum memiliki akun?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Registrasi
          </Link>
        </p>
      </Card>
    </>
  );
}
