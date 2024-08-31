import Modal from "@/components/generators/modal";
import SignIn from "@/components/signIn/SingIn";

export default async function page() {
  return (
    <Modal>
      <SignIn />
    </Modal>
  );
}
