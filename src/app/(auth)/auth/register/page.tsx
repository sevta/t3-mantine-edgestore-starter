import { getServerAuthSession } from "@/server/auth";
import { Container } from "@mantine/core";
import { redirect } from "next/navigation";
import RegisterForm from "../_components/register-form";

interface PageProps {}

export default async function Page({}: PageProps) {
  const session = await getServerAuthSession();

  if (session) return redirect("/");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-100">
      <Container size="sm">
        <RegisterForm />
      </Container>
    </div>
  );
}
