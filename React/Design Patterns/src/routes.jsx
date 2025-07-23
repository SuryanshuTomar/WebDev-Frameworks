import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContextReducer from "./Topics/AdvancedTopics/ContextReducer";
import AdvancedTopics from "./Topics/AdvancedTopics";
import DesignPatterns from "./Topics/DesignPatterns";
import Topics from "./Topics";
import ForwardingRef from "./Topics/AdvancedTopics/ForwardingRef";
import ComponentComposition from "./Topics/AdvancedTopics/ComponentComposition";
import PresentationPattern from "./Topics/DesignPatterns/PresentationPattern/Index";
import HOCPattern from "./Topics/DesignPatterns/HOCPattern";
import CompoundPattern from "./Topics/DesignPatterns/CompoundCompositionPattern";
import HooksPattern from "./Topics/DesignPatterns/HooksPattern";
import RenderPropsPattern from "./Topics/DesignPatterns/RenderPropsPattern";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Topics />,
			},
			{
				path: "advanced",
				element: <AdvancedTopics />,
				children: [
					{
						path: "context-reducer",
						element: <ContextReducer />,
					},
					{
						path: "forwarding-ref",
						element: <ForwardingRef />,
					},
					{
						path: "component-composition",
						element: <ComponentComposition />,
					},
				],
			},
			{
				path: "design-patterns",
				element: <DesignPatterns />,
				children: [
					{
						path: "presentation-pattern",
						element: <PresentationPattern />,
					},
					{
						path: "hoc-pattern",
						element: <HOCPattern />,
					},
					{
						path: "compound-pattern",
						element: <CompoundPattern />,
					},
					{
						path: "hooks-pattern",
						element: <HooksPattern />,
					},
					{
						path: "render-props-pattern",
						element: <RenderPropsPattern />,
					},
				],
			},
		],
	},
]);
