import Image from "next/image";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import Container from "./Container";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-3 z-50">
      <Container>
        <nav className="flex justify-between">
          <div className="flex">
            <Sheet>
              <SheetTrigger className="sm:hidden block ">
                <Menu />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col">
                      <Link href="/">Our Story</Link>
                      <Link href="/">Capabilities</Link>
                      <Link href="/">Innovation</Link>
                      <Link href="/">Network</Link>
                      <Link href="/">Contact</Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={100} />
            </Link>
          </div>
          <div className=" items-center mx-auto hidden md:flex">
            <Navbar />
          </div>
          <div className="flex justify-center items-center">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
