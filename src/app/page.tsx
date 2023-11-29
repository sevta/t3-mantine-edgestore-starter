import { Button, Group, Stack, Title } from "@mantine/core";
import Link from "next/link";
import AuthButton from "./_components/auth-button";

interface PageProps {}

export default async function Page({}: PageProps) {
  return (
    <div className="relative min-h-screen w-full bg-slate-100 p-20">
      <Title fz={54} className="tracking-tight">
        Starterkit t3 prisma mantine edgestore
      </Title>
      <Stack mt="sm" gap={5}>
        <AuthButton />
        <Group>
          <Button component={Link} href="/post">
            Go to post
          </Button>
        </Group>
      </Stack>
    </div>
  );
}
