import ToggleTheme from "../ToggleTheme";

export default function HeaderToggleTheme() {
    return (
        <div className="navbar-sm flex items-center justify-end h-6 border-b-[1px] border-current">
            <ToggleTheme />
        </div>
    )
}