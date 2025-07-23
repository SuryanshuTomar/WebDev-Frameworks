import Fastify, {
	FastifyInstance,
	FastifyReply,
	FastifyRequest,
} from "fastify";

import fastifyMongo from "@fastify/mongodb";

// declare the mutated request object interface
declare module "fastify" {
	export interface FastifyRequest {
		user: {
			name: string;
		};
	}
	export interface FastifyInstance {
		signJwt: () => string;
		verifyJwt: () => { name: string };
	}
}

// Get the fastify instance
const fastify = Fastify({
	logger: {
		transport: {
			target: "pino-pretty",
		},
	},
});

// Plugin for DB Connection
const dbConnection = async function (fastify: FastifyInstance) {
	// Register fastifyMongo plugin
	fastify.register(fastifyMongo, {
		url: "mongodb://localhost:27017/fastify",
	});

	fastify.log.info("Connected to MongoDB!");
};

// Plugin for grouping the routes
const userRoutes = async function (fastify: FastifyInstance) {
	fastify.post("/", {
		schema: {
			body: {
				properties: {
					name: { type: "string" },
					age: { type: "number" },
				},
				required: ["name", "age"],
			},
		},
		handler: async (
			request: FastifyRequest<{
				Body: {
					name: string;
					age: number;
				};
			}>,
			reply: FastifyReply
		) => {
			const { name, age } = request.body;
			const data = { name, age };
			const jwt = fastify.signJwt();
			const user = fastify.verifyJwt();
			return reply
				.code(201)
				.send({ message: "User created!", data, jwt, user });
		},
	});

	fastify.log.info("User Routes registered!");
};

// decorate requests
fastify.decorateRequest("user", null); // to optimize the request when mutatting the request object

// Add hooks
fastify.addHook(
	"preHandler",
	async (request: FastifyRequest, reply: FastifyReply) => {
		request.user = {
			name: "Bob Jones",
		};
	}
);

// Attach functionalities to the fastify instance so that we can access it anywhere in the app.
fastify.decorate("signJwt", () => {
	return "Signed JWT!";
});

fastify.decorate("verifyJwt", () => {
	return {
		name: "Tom Riddle",
	};
});

// Register DB connection plugin
fastify.register(dbConnection);

// Register fastify routes plugin
fastify.register(userRoutes, { prefix: "/api/user" });

// Route handler method 1
// fastify.get("/", async function () {
// 	return { message: "hello world!" };
// });

// Route handler method 2
fastify.get("/", {
	schema: {},
	handler: async (request: FastifyRequest, reply: FastifyReply) => {
		return {
			message: "hello world !",
			user: request.user,
			reply: reply.elapsedTime,
		};
	},
});

async function main() {
	try {
		await fastify.listen({
			port: 3500,
			host: "0.0.0.0",
		});
	} catch (error) {
		process.exit(1); // 1 means end the process with some failure.
	}
}

fastify.addHook("onRequest", async () => {
	fastify.log.info("Got a request");
});

fastify.addHook(
	"onResponse",
	async (request: FastifyRequest, reply: FastifyReply) => {
		fastify.log.info("Responding");
	}
);

// Gracefully shutdown the server
["SIGINT", "SIGTERM"].forEach((signal) => {
	process.on(signal, async () => {
		await fastify.close();
		process.exit(0); // 0 means end the process without any kind of failure
	});
});

main();
