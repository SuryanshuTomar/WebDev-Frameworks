import Repo from "@/app/components/Repo";
import Link from "next/link";

const RepoPage = ({ params: { repo_name: name } }) => {
	return (
		<div className="card">
			<Link href={"/code/repos"} className="btn btn-back">
				Back To Repositories
			</Link>
			<Repo name={name} />
		</div>
	);
};
export default RepoPage;
