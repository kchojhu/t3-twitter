import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
interface IProps {}

export const SideNav: FC<IProps> = (props) => {
  const session = useSession();
  const { data: sessionData } = useSession();
  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {sessionData && (
          <li>
            <Link href={`/profiles/${sessionData.user.id}`}>Profile</Link>
          </li>
        )}
        <li>
          <button
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </li>
      </ul>
    </nav>
  );
};
