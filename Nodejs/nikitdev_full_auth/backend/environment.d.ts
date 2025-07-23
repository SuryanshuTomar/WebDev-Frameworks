declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MONGO_URI: string;
			NODE_ENV: "development" | "production";
			APP_ORIGIN: string;
			JWT_SECRET: string;
			JWT_REFRESH_SECRET: string;
			EMAIL_SENDER: string;
			RESEND_API_KEY: string;
		}
	}
}

export {};
