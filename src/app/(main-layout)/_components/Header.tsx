import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "../(home)/_components/ModeToggle";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div
            className={cn(
                "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            )}
        >
            <Logo />
            <Navbar />
        </div>
    );
}
