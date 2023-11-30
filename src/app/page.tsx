import { getServerAuthSession } from "@/server/auth";
import { Button, Group, Text, Title } from "@mantine/core";
import Link from "next/link";
import AuthButton from "./_components/auth-button";

interface PageProps {}

export default async function Page({}: PageProps) {
  const session = await getServerAuthSession();

  return (
    <div className="relative min-h-screen w-full bg-slate-100 p-20">
      <Title fz={93} className="font-black tracking-tight">
        Starterkit t3
      </Title>
      <Text c="dimmed">T3 Stack, prisma, next-auth, mantine, edgestore</Text>
      <Group mt="lg" gap={5}>
        <AuthButton />
        {!session && (
          <Button variant="light" component={Link} href="/auth/register">
            Register
          </Button>
        )}

        <Button component={Link} href="/post">
          Go to post
        </Button>
      </Group>
    </div>
  );
}
