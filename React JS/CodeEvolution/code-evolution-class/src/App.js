import EventBind from "./components/BindingEventHandlers/EventBind";
import FunctionClick from "./components/EventHandling/FunctionClick";
import ParentComponent from "./components/LiftingStateUp/ParentComponent";
import Counter from "./components/setState/Counter";
import Message from "./components/state/Message";
import NameList from "./components/ListRendering/NameList";
import Form from "./components/FormHandling/Form";
import LifecycleA from "./components/ComponentLifeCycle/LifecycleA.js";
import ParentComp from "./components/PureComponentsClass/ParentComp";
import RefDemo from "./components/Refs/RefDemo";
import CallBackRefDemo from "./components/Refs/CallBackRefDemo";
import ForwardRefToClass from "./components/Refs/ForwardRefToClass";
import ForwardRefToFunction from "./components/Refs/ForwardRefToFunction";
import Portal from "./components/Portals/Portal";
import Hero from "./components/ComponentLifeCycle/ErrorBoundary/Hero";
import ErrorBoundary from "./components/ComponentLifeCycle/ErrorBoundary/ErrorBoundary";
import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./components/HigherOrderComponents/HoverCounter";

function App() {
	return (
		<div className="App">
			{/* <Message /> */}
			{/* <Counter /> */}
			{/* <FunctionClick /> */}
			{/* <EventBind /> */}
			{/* <ParentComponent /> */}
			{/* <NameList /> */}
			{/* <Form /> */}
			{/* <LifecycleA /> */}
			{/* <ParentComp /> */}
			{/* <RefDemo /> */}
			{/* <CallBackRefDemo /> */}
			{/* <ForwardRefToClass /> */}
			{/* <ForwardRefToFunction /> */}
			{/* <Portal /> */}
			{/* <ErrorBoundary>
				<Hero heroName="IronMan" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Superman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Joker" />
			</ErrorBoundary> */}
			Higher Order Functions
			<ClickCounter />
			<HoverCounter />
		</div>
	);
}

export default App;
