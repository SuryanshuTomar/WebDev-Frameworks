import {
	createTransport,
	getTestMessageUrl,
	SendMailOptions,
} from "nodemailer";
import config from "config";
import { Config } from "../../config/default";
import { logEvents } from "../utils/logger.utils";

// Create Test Credentials for the SMTP server.
// (async function () {
// 	const creds = await nodemailer.createTestAccount();
// 	console.log({ creds });
// })();

// Get the SMTP default values from the default config file.
const smtp = config.get<Config["smtp"]>("smtp");

// Create a Mail Transporter for the SMTP server
const transporter = createTransport({
	...smtp,
	auth: {
		user: smtp.user,
		pass: smtp.pass,
	},
});

export async function sendEmail(payload: SendMailOptions) {
	transporter.sendMail(payload, async (error, info) => {
		if (error) {
			await logEvents(
				"Error sending the email :\n" + error.message,
				"errLog.log",
				"error"
			);
			return;
		}

		await logEvents(
			`Preview URL: ${getTestMessageUrl(info)}`,
			"reqLog.log",
			"info"
		);
	});
}
