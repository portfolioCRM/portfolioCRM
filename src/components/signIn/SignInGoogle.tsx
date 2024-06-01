import { signIn } from "../../../service/auth/auth";

export function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google").then((response) => console.log(response, "res"));
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
