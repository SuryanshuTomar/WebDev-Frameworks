const responseSchema = {
	200: {
		properties: {
			message: { type: "string" },
		},
		required: ["message"],
	},
};

export const greetingsController = (fastify, options, done) => {
	// router handlers
	const schemaOptions1 = {
		schema: {
			response: responseSchema,
		},
	};
	fastify.get("/", schemaOptions1, (req, reply) => {
		return {
			message: "Hello World!, from Fastify!",
		};
	});

	done();
};
