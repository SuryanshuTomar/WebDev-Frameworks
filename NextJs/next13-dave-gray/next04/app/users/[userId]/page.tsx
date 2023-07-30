import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import getAllUsers from "@/lib/getAllUsers";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

type Params = {
	params: {
		userId: string;
	};
};

// Segment-Level Caching - This will only do revalidate the request for this page fetch requests only.
// export const revalidate = 60;
// export const fetchCache = "force-cache";

// - Dynamic Params - It controls what happens when a dynamic segment is visited that was not generated with generateStaticParams.
// export const dynamicParams = true // by default value

export async function generateMetadata({
	params: { userId },
}: Params): Promise<Metadata> {
	const userData: Promise<User> = getUser(userId);
	const user: User = await userData;

	if (!user.name) {
		return {
			title: "User Not Found",
		};
	}

	return {
		title: user.name,
		description: `This is the page of ${user.name}`,
	};
}

export default async function UserPage({ params: { userId } }: Params) {
	const userData: Promise<User> = getUser(userId);
	const userPostsData: Promise<Post[]> = getUserPosts(userId);

	//const [user, userPosts] = await Promise.all([userData, userPostsData])

	const user = await userData;

	if (!user.name) notFound();

	return (
		<>
			<h2>{user.name}</h2>
			<br />
			<Suspense fallback={<h2>Loading...</h2>}>
				{/* @ts-expect-error Server Component */}
				<UserPosts promise={userPostsData} />
			</Suspense>
		</>
	);
}

export async function generateStaticParams() {
	const usersData: Promise<User[]> = getAllUsers();
	const users = await usersData;

	return users.map((user) => ({
		userId: user.id.toString(),
	}));
}
