import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface NavbarProps {
    isAuthenticated?: boolean;
}

export default function Navbar({ isAuthenticated = false }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { auth } = usePage().props as { auth: { user: { nama: string; role: string } | null } };

    const navigation = [
        { name: 'Beranda', href: '/' },
        { name: 'Katalog Buku', href: '/katalog' },
        { name: 'Tentang', href: '/tentang' },
    ];

    const authNavigation = isAuthenticated ? [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Peminjaman', href: '/peminjaman' },
        { name: 'Reservasi', href: '/reservasi' },
        { name: 'Profil', href: '/profil' },
    ] : [];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 dark:bg-gray-900/90 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2" aria-label="Bookie Home">
                            <svg
                                className="w-8 h-8 text-orange-600 dark:text-orange-500"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <rect x="1" y="1" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="2"/>
                                <path d="M8 10h16M8 16h12M8 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">Bookie</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        {authNavigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Actions (Desktop) */}
                    <div className="hidden md:flex md:items-center md:gap-4">
                        {isAuthenticated ? (
                            <>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    Halo, {auth?.user?.nama}
                                </span>
                                <span
                                    className="px-2 py-1 text-xs font-medium rounded-full
                                        bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300
                                        capitalize"
                                >
                                    {auth?.user?.role?.replace('_', ' ')}
                                </span>
                                <form method="POST" action="/logout">
                                    <button
                                        type="submit"
                                        className="text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                                    >
                                        Keluar
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors"
                                >
                                    Daftar
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800 animate-slide-down">
                        <div className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {authNavigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <hr className="border-gray-200 dark:border-gray-700" />
                            {isAuthenticated ? (
                                <div className="px-3 py-2 space-y-2">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Halo, {auth?.user?.nama}</p>
                                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 capitalize">
                                        {auth?.user?.role?.replace('_', ' ')}
                                    </span>
                                    <form method="POST" action="/logout">
                                        <button
                                            type="submit"
                                            className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            Keluar
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="px-3 py-2 space-y-2">
                                    <Link
                                        href="/login"
                                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="block px-3 py-2 text-base font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-colors text-center"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Daftar
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}