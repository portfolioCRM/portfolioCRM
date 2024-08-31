import { signIn } from "../../../service/auth/auth";
import ConnectionButton from "./ConnectionButton";

export function SignInGitHub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <ConnectionButton logo="/image/social_media/github.png" title="github" />
    </form>
  );
}
