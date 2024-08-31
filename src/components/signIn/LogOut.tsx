import { signOut } from "../../../service/auth/auth";
import ConnectionButton from "./ConnectionButton";

export function LogOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <ConnectionButton logo="/image/social_media/google.png" title="logout" />
    </form>
  );
}
