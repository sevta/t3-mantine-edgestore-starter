import { z } from "zod";

export const createUserInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
});

export type CreateUserInput = z.TypeOf<typeof createUserInput>;
