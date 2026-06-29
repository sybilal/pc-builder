import { NavLink } from "react-router";

const navLinks = [
    { label: 'Build', to: 'catalog', active: false },
    { label: 'Games', to: '/', active: true },
    { label: 'About', to: '#', active: false },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)]">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-12">
                <div className="text-xl font-bold tracking-tight text-[var(--text)]">
                    Game-to-PC Builder
                </div>
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.to}
                            className={
                                link.active
                                    ? 'border-b-2 border-[var(--accent)] pb-1 text-xs font-bold text-[var(--accent)] transition-colors'
                                    : 'text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]'
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <button className="hidden rounded-lg bg-[var(--accent)] px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90 md:block">
                        Build Now
                    </button>
                    <button
                        aria-label="Account"
                        className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                        </svg>
                    </button>
                    <button
                        aria-label="Cart"
                        className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
