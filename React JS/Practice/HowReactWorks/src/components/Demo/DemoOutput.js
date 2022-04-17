import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
	// This will be reevaluated but not rerendered because the value in the props will always be false
	console.log("DemoOutput Running !!");

	// if this DemoOutput is Re-evaluated then this MyParagraph which is the child component will also be re-evaluated
	return <MyParagraph>{props.show ? "This is new!" : " "}</MyParagraph>;
};

export default React.memo(DemoOutput);
