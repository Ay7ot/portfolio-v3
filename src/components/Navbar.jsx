import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="bg-[#fff] dark:bg-[#ffffff0d] rounded-[1rem] p-2 flex justify-between nav_border border-[#DCDFEA] border-[1px] dark:border-[#ffffff1a]">
            <div className="flex items-center gap-3">
                <Logo />
                <p className="text-[18px] dark:text-white font-semibold leading-7">Ayomide</p>
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
