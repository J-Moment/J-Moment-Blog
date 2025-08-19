import { ReactNode } from "react";
import { NavBar } from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>My Blog</title>
            </head>
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    );
}