import { Link } from '@inertiajs/react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    trend?: string;
    trendUp?: boolean;
    href?: string;
    color: 'orange' | 'blue' | 'green' | 'purple' | 'red';
}

const statColors = {
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
    red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
};

function StatCard({ title, value, icon, trend, trendUp = true, href, color }: StatCardProps) {
    const colors = statColors[color];

    return (
        <Link
            href={href || '#'}
            className={`group relative p-6 bg-white dark:bg-gray-800 rounded-2xl border ${colors.border} hover:border-opacity-50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300`}
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
                    {trend && (
                        <p className={`text-sm mt-2 flex items-center gap-1 ${trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {trendUp ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V5" />
                                )}
                            </svg>
                            {trend}
                        </p>
                    )}
                </div>
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>
            </div>
        </Link>
    );
}

interface DashboardStatsProps {
    stats: {
        bukuTersedia: number;
        peminjamanAktif: number;
        reservasiMenunggu: number;
        dendaBelumLunas: number;
        totalAnggota: number;
        bukuTerpopuler: number;
    };
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
    const statCards = [
        {
            title: 'Buku Tersedia',
            value: stats.bukuTersedia.toLocaleString('id-ID'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253v-13Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            trend: '+12% dari bulan lalu',
            href: '/katalog',
            color: 'orange' as const,
        },
        {
            title: 'Peminjaman Aktif',
            value: stats.peminjamanAktif.toLocaleString('id-ID'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            trend: '5 jatuh tempo hari ini',
            trendUp: false,
            href: '/peminjaman',
            color: 'blue' as const,
        },
        {
            title: 'Reservasi Menunggu',
            value: stats.reservasiMenunggu.toLocaleString('id-ID'),
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            trend: '3 siap diambil',
            href: '/reservasi',
            color: 'green' as const,
        },
        {
            title: 'Denda Belum Lunas',
            value: `Rp ${stats.dendaBelumLunas.toLocaleString('id-ID')}`,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            trend: 'Rp 2.450.000 tertunggak',
            trendUp: false,
            href: '/denda',
            color: 'red' as const,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, index) => (
                <StatCard key={stat.title} {...stat} style={{ animationDelay: `${index * 100}ms` }} />
            ))}
        </div>
    );
}