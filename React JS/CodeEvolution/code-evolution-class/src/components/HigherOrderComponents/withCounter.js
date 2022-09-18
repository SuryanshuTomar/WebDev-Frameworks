import React from "react";

// The HOC will be named starting with "with" followed by functionality in camelCase
const withCounter = (WrappedComponent, incrementNum = 1) => {
	// The new enhanced component which will be returned will be named same as the HOC but with PascalCase
	class WithCounter extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				count: 0,
			};
		}

		incrementCount = () => {
			this.setState((prevState) => ({
				count: prevState.count + incrementNum,
			}));
		};

		render() {
			return (
				// The originalComponent should be name WrappedComponent
				<WrappedComponent
					name="Death"
					incrementCount={this.incrementCount}
					count={this.state.count}
					{...this.props}
				/>
			);
		}
	}
	return WithCounter;
};

export default withCounter;
