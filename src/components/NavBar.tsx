'use client';
import Link from "next/link";
import DarkModeToggle from './DarkModeToggle';
import Image from "next/image";

export function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-left">
                <li>
                    <Link href="/">J-Moment</Link>
                </li>
            </ul>
            <ul className="navbar-right">
                <li>
                    <DarkModeToggle />
                </li>
                <li>
                    <Link href="https://github.com/J-Moment" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/icons/GithubIcon.png"
                            alt="Github"
                            width={40}
                            height={40}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};