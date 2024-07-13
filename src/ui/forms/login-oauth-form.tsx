import { GithubLogo, GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import { FormButton } from "../atoms/form-button";
import { loginGoogle } from "@/lib/actions/login-google";
import { loginGithub } from "@/lib/actions/login-github";

export default function LoginOauthForm() {
  return (
    <section className="flex gap-x-2">
      <form action={loginGoogle} className="w-full">
        <FormButton
          variant="outline"
          type="submit"
          className="flex w-full flex-row items-center gap-x-1"
        >
          <GoogleLogo weight="bold" className="text-[1.5em]" />
          <span>Google</span>
        </FormButton>
      </form>
      <form action={loginGithub} className="w-full">
        <FormButton
          variant="outline"
          type="submit"
          className="flex w-full flex-row items-center gap-x-1"
        >
          <GithubLogo weight="bold" className="text-[1.5em]" />
          <span>GitHub</span>
        </FormButton>
      </form>
    </section>
  );
}
