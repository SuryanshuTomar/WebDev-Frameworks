import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../contexts/auth-context";

const emailReducer = (prevState, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: prevState.value, isValid: prevState.value.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (prevState, action) => {
	if (action.type === "USER_PASSWORD") {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === "PASSWORD_BLUR") {
		return {
			value: prevState.value,
			isValid: prevState.value.trim().length > 6,
		};
	}
	return { value: "", isValid: false };
};

const Login = (props) => {
	const authCtx = useContext(AuthContext);

	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	const { isValid: isEmailValid } = emailState;
	const { isValid: isPasswordValid } = passwordState;

	useEffect(() => {
		// Debouncing
		const indentifier = setTimeout(() => {
			console.log("Checking Form Validity");
			setFormIsValid(isEmailValid && isPasswordValid);
		}, 500);
		return () => {
			console.log("Cleanup");
			clearTimeout(indentifier);
		};
		// Only rerendering the react page when the validation values of isEmailValid or isPasswordValid changes
		// This is an optimized appraoch for checking form validation
	}, [isEmailValid, isPasswordValid]);

	const emailChangeHandler = (event) => {
		// setEnteredEmail(event.target.value);
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });
	};

	const passwordChangeHandler = (event) => {
		// setEnteredPassword(event.target.value);
		// setFormIsValid(emailState.isValid && passwordState.isValid);
		dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });
	};

	const validateEmailHandler = () => {
		// setEmailIsValid(emailState.isValid);
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		// setPasswordIsValid(enteredPassword.trim().length > 6);
		dispatchPassword({ type: "PASSWORD_BLUR" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		authCtx.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
