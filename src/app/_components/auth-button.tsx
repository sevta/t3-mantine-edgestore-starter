"use client";

import {
  Avatar,
  Button,
  ButtonProps,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Text,
} from "@mantine/core";
import { IconMailCog } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
interface AuthButtonProps extends ButtonProps {
  showName?: boolean;
}

export default function AuthButton({
  showName = true,
  ...props
}: AuthButtonProps) {
  const session = useSession();

  return (
    <div>
      {session.status === "unauthenticated" ? (
        <Button
          variant="light"
          leftSection={<IconMailCog size={15} />}
          onClick={() => signIn("google")}
          {...props}
        >
          Login with google
        </Button>
      ) : (
        <Menu
          width={200}
          classNames={{
            itemLabel: "font-medium",
            dropdown: "shadow",
          }}
        >
          <MenuTarget>
            <Button
              variant="light"
              pl={5}
              {...(!showName && {
                pr: 0,
              })}
              leftSection={<Avatar size="sm" src={session.data?.user.image} />}
            >
              {showName && (
                <Text size="sm" fw={500}>
                  {session.data?.user.email}
                </Text>
              )}
            </Button>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            <MenuItem component={Link} href="/">
              Exit
            </MenuItem>
          </MenuDropdown>
        </Menu>
      )}
    </div>
  );
}
