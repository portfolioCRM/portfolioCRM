import { signIn } from "../../../service/auth/auth";
import ConnectionButton from "./ConnectionButton";

export function SignInFacebook() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("facebook");
      }}
    >
      <ConnectionButton
        logo="/image/social_media/facebook.png"
        title="facebook"
      />
    </form>
  );
}
