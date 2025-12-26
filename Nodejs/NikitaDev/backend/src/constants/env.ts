const Env_Keys = {
	MONGO_URI: "MONGO_URI",
	HOST: "HOST",
	PORT: "PORT",
	APP_ORIGIN: "APP_ORIGIN",
	JWT_SECRET: "JWT_SECRET",
	JWT_REFRESH_SECRET: "JWT_REFRESH_SECRET",
	EMAIL_SENDER: "EMAIL_SENDER",
	RESEND_API_KEY: "RESEND_API_KEY",
	NODE_ENV: "NODE_ENV",
};

const getEnv = (key: string, defaultValue?: string): string => {
	const value = process.env[key] || defaultValue;

	if (value === undefined) {
		throw new Error(`Missing environment variable ${key}`);
	}

	return value;
};

export const PORT = +getEnv(Env_Keys.PORT);
export const HOST = getEnv(Env_Keys.HOST);
export const NODE_ENV = getEnv(Env_Keys.NODE_ENV);
export const MONGO_URI = getEnv(Env_Keys.MONGO_URI);
export const APP_ORIGIN = getEnv(Env_Keys.APP_ORIGIN);
export const JWT_SECRET = getEnv(Env_Keys.JWT_SECRET);
export const JWT_REFRESH_SECRET = getEnv(Env_Keys.JWT_REFRESH_SECRET);
export const EMAIL_SENDER = getEnv(Env_Keys.EMAIL_SENDER);
export const RESEND_API_KEY = getEnv(Env_Keys.RESEND_API_KEY);
