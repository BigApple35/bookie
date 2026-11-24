import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import MainLayout from '@/components/Layout/MainLayout';
import DashboardStats from '@/components/Home/DashboardStats';
import QuickActions from '@/components/Home/QuickActions';
import RecentActivity from '@/components/Home/RecentActivity';

export default function HomepageAuth() {
    const { auth, flash } = usePage().props as {
        auth: { user: { nama: string; role: string } | null };
        flash: { success?: string; error?: string };
    };

    // Mock data - replace with actual data from Laravel controller
    const stats = {
        bukuTersedia: 2847,
        peminjamanAktif: 156,
        reservasiMenunggu: 23,
        dendaBelumLunas: 2450000,
        totalAnggota: 1234,
        bukuTerpopuler: 89,
    };

    const recentActivities = [
        {
            id: 1,
            type: 'peminjaman' as const,
            title: 'Peminjaman Baru',
            description: 'Ahmad Rizki meminjam "Laravel Modern Development" (2 copy)',
            time: new Date(Date.now() - 1000 * 60 * 5),
            user: 'Ahmad Rizki',
            status: 'success' as const,
            href: '/peminjaman/123',
        },
        {
            id: 2,
            type: 'pengembalian' as const,
            title: 'Pengembalian Buku',
            description: 'Siti Nurhaliza mengembalikan "Clean Code" - Denda: Rp 0',
            time: new Date(Date.now() - 1000 * 60 * 15),
            user: 'Siti Nurhaliza',
            status: 'success' as const,
            href: '/peminjaman/122',
        },
        {
            id: 3,
            type: 'reservasi' as const,
            title: 'Reservasi Siap Diambil',
            description: '"Design Patterns" kini tersedia untuk Budi Santoso (Antrean #1)',
            time: new Date(Date.now() - 1000 * 60 * 30),
            user: 'Budi Santoso',
            status: 'info' as const,
            href: '/reservasi/45',
        },
        {
            id: 4,
            type: 'denda' as const,
            title: 'Denda Dibayar',
            description: 'Dewi Sartika membayar denda Rp 15.000 via QRIS',
            time: new Date(Date.now() - 1000 * 60 * 60 * 2),
            user: 'Dewi Sartika',
            status: 'success' as const,
            href: '/denda/78',
        },
        {
            id: 5,
            type: 'buku_baru' as const,
            title: 'Buku Baru Ditambahkan',
            description: '"React 18 Advanced Patterns" - 3 copy tersedia di Rak A-12',
            time: new Date(Date.now() - 1000 * 60 * 60 * 4),
            user: 'Pustakawan Utama',
            status: 'pending' as const,
            href: '/buku/234',
        },
    ];

    return (
        <MainLayout showNavbar={true} showFooter={true}>
            <Head title="Dashboard - Bookie" />

            {/* Welcome Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800 rounded-2xl p-6 sm:p-8 text-white">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <p className="text-orange-100 text-sm font-medium uppercase tracking-wider mb-1">
                                Selamat datang kembali,
                            </p>
                            <h1 className="text-2xl sm:text-3xl font-bold">
                                {auth?.user?.nama || 'Pengguna'}
                            </h1>
                            <p className="text-orange-100 mt-1">
                                Role: <span className="font-medium capitalize">{auth?.user?.role?.replace('_', ' ')}</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4 sm:ml-auto">
                            {flash.success && (
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm">
                                    {flash.success}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Stats & Quick Actions */}
                    <div className="lg:col-span-2 space-y-8">
                        <DashboardStats stats={stats} />
                        <QuickActions />
                    </div>

                    {/* Right Column - Recent Activity */}
                    <div className="lg:col-span-1">
                        <RecentActivity
                            activities={recentActivities}
                            title="Aktivitas Terbaru"
                            showViewAll
                            viewAllHref="/aktivitas"
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}