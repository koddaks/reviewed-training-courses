import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between gap-8">
           <div className="flex  w-full">
              <Button size="sm" variant="ghost" asChild>
                <Link href="/courses">Курси</Link>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <Link href="/about-us">Про нас</Link>
              </Button>
           </div>
           <div>
            <Button size="lg" variant="daylight" asChild>
                <Link href="/sign-in">Вхід</Link>
            </Button>
           </div>
        </div>
    )
}

export default Navbar;