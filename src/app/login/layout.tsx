import { Layout } from "@/components";
import { auth } from "../../../service/auth/auth";
import AuthLayout from "@/components/admin/AuthLayout";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user) return redirect("/admin");
  const user = session?.user;
  console.log(user, "user");
  return <Layout>{children}</Layout>;
}
