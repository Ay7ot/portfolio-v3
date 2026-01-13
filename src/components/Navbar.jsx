import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="bg-glass rounded-[1rem] p-2 flex justify-between nav_border border-standard border-[1px]">
            <div className="flex items-center gap-3">
                <Logo />
                <p className="text-[18px] text-primary font-semibold leading-7">Ayomide</p>
            </div>
            <div className="flex items-center justify-center">
                <a
                    href="mailto:ayomidotzee@gmail.com"
                    className="text-white nav_button"
                >
                    <p>Let&apos;s Talk</p>
                </a>
            </div>
        </nav>
    )
}
