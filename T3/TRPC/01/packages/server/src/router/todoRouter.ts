import { z } from "zod";
import { prisma } from "../lib/prismaClient";
import { trpc } from "../lib/trpc";

export const todoRouter = trpc.router({
	list: trpc.procedure.query(({ ctx }) => {
		return prisma.todo.findMany();
	}),
	create: trpc.procedure
		.input(
			z.object({
				title: z.string().min(3),
			})
		)
		.mutation(({ input, ctx }) => {
			const title = input.title;
			return prisma.todo.create({
				data: {
					title,
					isCompleted: false,
				},
			});
		}),
	delete: trpc.procedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(({ input, ctx }) => {
			return prisma.todo.delete({
				where: {
					id: input.id,
				},
			});
		}),
	update: trpc.procedure
		.input(
			z.object({
				id: z.string(),
				isCompleted: z.boolean(),
			})
		)
		.mutation(({ input, ctx }) => {
			ctx.user;
			return prisma.todo.update({
				where: { id: input.id },
				data: {
					isCompleted: input.isCompleted,
				},
			});
		}),
});
