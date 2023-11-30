"use client";

import {
  CreateUserInput,
  createUserInput,
} from "@/server/api/routers/user/user.schema";
import { api } from "@/trpc/react";
import {
  Button,
  Card,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
interface RegisterFormProps {}

export default function RegisterForm({}: RegisterFormProps) {
  const form = useForm<CreateUserInput>({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate: zodResolver(createUserInput),
  });

  const router = useRouter();

  const registerUser = api.user.register.useMutation({
    onSuccess() {
      notifications.show({
        message: "User created successfully",
      });
      router.push("/");
    },
    onError(error, variables, context) {
      notifications.show({
        message: error.message,
      });
    },
  });

  return (
    <div>
      <Card w={400}>
        <form onSubmit={form.onSubmit((values) => registerUser.mutate(values))}>
          <Stack>
            <Title>Register</Title>
            <TextInput
              placeholder="Email"
              label="Email"
              {...form.getInputProps("email")}
            />
            <TextInput
              placeholder="Username"
              label="Username"
              {...form.getInputProps("name")}
            />
            <PasswordInput
              placeholder="Password"
              label="Password"
              {...form.getInputProps("password")}
            />
            <Group justify="end">
              <Button type="submit" loading={registerUser.isLoading}>
                Regiter
              </Button>
            </Group>
          </Stack>
        </form>
      </Card>
    </div>
  );
}
