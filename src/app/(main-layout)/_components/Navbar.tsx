import Link from "next/link";
import { ModeToggle } from "../(home)/_components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
            <Link
                className="inline-flex items-center justify-center text-sm font-medium hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                href={"/login"}
            >
                Login
            </Link>
            <Button className="cursor-pointer rounded-sm text-sm font-medium hover:bg-primary/90 h-10 px-3 py-2">
                Get Notion Free
            </Button>
            <ModeToggle />
        </div>
    );
}
