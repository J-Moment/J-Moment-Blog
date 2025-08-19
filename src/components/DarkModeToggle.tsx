import Image from "next/image";

export default function DarkModeToggle() {
    return (
        <>
            <Image
                src="/icons/DarkModeIcon.png"
                alt="Dark Mode Toggle"
                width={40}
                height={40}
            />
        </>
    );
}