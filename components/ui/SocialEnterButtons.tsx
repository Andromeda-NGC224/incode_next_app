import { AuthProviders } from "@/lib/actions";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialEnterButtons({
  titleGit,
  titleGoogle,
}: {
  titleGit: string;
  titleGoogle: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="submit"
        name="action"
        value={AuthProviders.GITHUB}
        className="group w-full mx-auto h-10 relative flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-900 focus:outline-none  disabled:opacity-50 cursor-pointer"
      >
        <FaGithub className="text-xl transition-transform duration-200 group-hover:scale-110" />
        {titleGit}
      </button>
      <button
        type="submit"
        name="action"
        value={AuthProviders.GOOGLE}
        className="group w-full mx-auto h-10 relative flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-100 focus:outline-none   disabled:opacity-50 cursor-pointer border border-gray-300"
      >
        <FcGoogle className="text-xl transition-transform duration-200 group-hover:scale-110" />
        {titleGoogle}
      </button>
    </div>
  );
}
