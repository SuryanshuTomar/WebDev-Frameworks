import Fastify from "fastify";
import { greetingsController } from "./controllers/greetings.controller.js";

// get the fastify instance
const fastify = Fastify({
	logger: true,
});

// router handlers
const schemaOptions1 = {};
fastify.get("/", schemaOptions1, (req, reply) => {
	return {
		message: "Hello World!, from Fastify!",
	};
});

// alternative method for defining route handlers
const schemaOptions2 = {
	params: {
		properties: {
			name: { type: "string" },
		},
		required: ["name"],
	},
	querystring: {
		properties: {
			lastname: { type: "string" },
		},
		required: ["lastname"],
	},
	response: {
		200: {
			properties: {
				message: { type: "string" },
			},
			required: ["message"],
		},
	},
};
fastify.route({
	method: "GET",
	url: "/hello/:name",
	schema: schemaOptions2,
	handler: (req, reply) => {
		return {
			message: "Hello " + req.params.name + " " + req.query.lastname + "!",
		};
	},
});

// register controllers
fastify.register(greetingsController, { prefix: "/greetings" });

// start the server
try {
	fastify.listen({ port: 3500 });
} catch (error) {
	process.exit(1);
}
