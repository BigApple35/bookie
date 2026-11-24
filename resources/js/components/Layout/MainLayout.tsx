import Navbar from './Navbar';
import Footer from './Footer';
import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
    showNavbar?: boolean;
    showFooter?: boolean;
}

export default function MainLayout({
    children,
    showNavbar = true,
    showFooter = true,
}: MainLayoutProps) {
    const { auth } = usePage().props as { auth: { user: { nama: string; role: string } | null } };
    const isAuthenticated = !!auth?.user;

    return (
        <div className="flex min-h-screen flex-col bg-[#FDFDFC] dark:bg-[#0a0a0a]">
            {showNavbar && <Navbar isAuthenticated={isAuthenticated} />}
            <main className="flex-1 pt-16 pb-12">
                {children}
            </main>
            {showFooter && <Footer isAuthenticated={isAuthenticated} />}
        </div>
    );
}