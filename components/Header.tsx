import Image from "next/image";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="px-3">
      <nav className="flex">
        <div>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="flex items-center mx-auto">
          <Navbar />
        </div>
        <div className="flex justify-center items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
