import { Button } from "@/ui/atoms/button";
import { FormButton } from "@/ui/atoms/form-button";
import { GithubLogo, GoogleLogo } from "@phosphor-icons/react/dist/ssr";

export default function LoginOauth() {
  return (
    <section className="flex gap-x-2">
      <FormButton
        variant="outline"
        className="flex w-full flex-row items-center gap-x-1"
      >
        <GoogleLogo weight="bold" className="text-[1.5em]" />
        <span>Google</span>
      </FormButton>
      <FormButton
        variant="outline"
        className="flex w-full flex-row items-center gap-x-1"
      >
        <GithubLogo weight="bold" className="text-[1.5em]" />
        <span>GitHub</span>
      </FormButton>
    </section>
  );
}
