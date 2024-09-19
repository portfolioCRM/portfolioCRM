import { Layout } from "@/components";
import AuthLayout from "@/components/admin/AuthLayout";

export default async function layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  console.log("first")
  return (
    <Layout>
      <AuthLayout>{children}</AuthLayout>
    </Layout>
  );
}
