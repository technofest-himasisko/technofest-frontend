import { ErrorCode } from "@/lib/definitions/constants";
import { errorCodeToErrorMessage } from "@/lib/utils/converter";
import { Alert, AlertDescription } from "@/ui/atoms/alert";
import LoginOauthForm from "@/ui/forms/login-oauth-form";

interface Props {
  error: string;
}

export default function RegisterOauth({ error }: Props) {
  return (
    <section>
      <LoginOauthForm />
      {error && (
        <Alert variant="danger" className="mt-4">
          <AlertDescription>
            {errorCodeToErrorMessage(error as ErrorCode)}
          </AlertDescription>
        </Alert>
      )}
    </section>
  );
}
