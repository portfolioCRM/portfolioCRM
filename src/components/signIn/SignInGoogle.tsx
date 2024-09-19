import { signIn } from "../../../service/auth/auth";
import ConnectionButton from "./ConnectionButton";

export function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <ConnectionButton logo="/image/social_media/google.png" title="google" />
    </form>
  );
}
