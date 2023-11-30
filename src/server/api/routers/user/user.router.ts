import bcrypt from "bcrypt";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { createUserInput } from "./user.schema";
export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(createUserInput)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (user) {
        throw new Error("User already exists");
      }

      return ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: bcrypt.hashSync(input.password, 10),
        },
      });
    }),
});
