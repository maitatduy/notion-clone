import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link className="hidden md:flex items-center gap-x-2" href={"/"}>
            <Image
                src="/notion-dark.svg"
                height="40"
                width="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/notion.svg"
                height="40"
                width="40"
                alt="Logo"
                className="hidden dark:block"
            />
            <p className="font-semibold">NotionClone</p>
        </Link>
    );
}
