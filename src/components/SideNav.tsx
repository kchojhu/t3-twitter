import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
interface IProps {};

export const SideNav: FC<IProps> = (props) => {
    const session = useSession();
    const user = session.data?.user;
    return (
        <nav className="sticky top-0 px-2 py-4">
            <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href={`/profiles/${user?.id}`}>Profile</Link>
                </li>
            </ul>
        </nav>
    );
}
