import { useRouter } from "next/router";

export default function Doc() {
	const router = useRouter();
	const { params = [] } = router.query;
	const [feature, concept, part] = params;
	console.log(params);
	console.log(feature, concept, part);

	if (feature && concept && part) {
		return (
			<h1>
				{" "}
				Viewing docs for feature {feature} and concept {concept} part {part}{" "}
			</h1>
		);
	} else if (feature && concept) {
		return (
			<h1>
				Viewing docs for feature {feature} and concept {concept}{" "}
			</h1>
		);
	} else if (feature) {
		return <h1>Viewing docs for feature {feature}</h1>;
	}
	return (
		<div>
			<h1>Official Docs Page </h1>
		</div>
	);
}
