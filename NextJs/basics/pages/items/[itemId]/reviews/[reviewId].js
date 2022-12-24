import { useRouter } from "next/router";

function ReviewDetails() {
	const router = useRouter();
	const { reviewId, itemId } = router.query;

	return (
		<div>
			<h1>Dynamic Routes: Review Details - </h1>
			<br />
			<h3>
				Review "{reviewId}" for item "{itemId}"
			</h3>
		</div>
	);
}

export default ReviewDetails;
