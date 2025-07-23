import { TestAccount } from "nodemailer";

export type Config = {
	server: {
		port: number;
		domain: string;
	};
	cors: {
		origin: string[];
	};
	database: {
		uri: string;
	};
	smtp: TestAccount["smtp"] & Omit<TestAccount, "smtp">;
};

export default {
	server: {
		port: process.env.PORT ?? 3500,
		domain: "localhost",
	},
	cors: {
		origin: [
			"http://localhost:3000",
			"http://www.technotes.com",
			"http://technotes.com",
		],
	},
	database: {
		uri: "mongodb://127.0.0.1:27017/user-auth-api",
	},
	smtp: {
		user: "ukesodc7ijap63di@ethereal.email",
		pass: "2n1JCX8EVCCqyj1cV4",
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // set to "true" in production environment
	},
} as Config;
