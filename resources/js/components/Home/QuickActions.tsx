import { Link } from '@inertiajs/react';

interface QuickActionProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    color: 'orange' | 'blue' | 'green' | 'purple' | 'red' | 'indigo';
    badge?: string;
}

const actionColors = {
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', hover: 'hover:bg-orange-200 dark:hover:bg-orange-900/50' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', hover: 'hover:bg-blue-200 dark:hover:bg-blue-900/50' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', hover: 'hover:bg-green-200 dark:hover:bg-green-900/50' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', hover: 'hover:bg-purple-200 dark:hover:bg-purple-900/50' },
    red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', hover: 'hover:bg-red-200 dark:hover:bg-red-900/50' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', hover: 'hover:bg-indigo-200 dark:hover:bg-indigo-900/50' },
};

function QuickAction({ title, description, icon, href, color, badge }: QuickActionProps) {
    const colors = actionColors[color];

    return (
        <Link
            href={href}
            className={`group relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-opacity-50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 flex flex-col h-full ${colors.hover}`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>
                {badge && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                        {badge}
                    </span>
                )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className={`inline-flex items-center gap-1 text-sm font-medium ${colors.text} group-hover:gap-2 transition-all duration-200`}>
                    Mulai
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}

export default function QuickActions() {
    const actions = [
        {
            title: 'Scan & Pinjam',
            description: 'Scan barcode buku dan kartu anggota untuk proses peminjaman cepat dalam hitungan detik.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            href: '/peminjaman/scan',
            color: 'orange' as const,
            badge: 'Baru',
        },
        {
            title: 'Kelola Reservasi',
            description: 'Lihat antrean reservasi, notifikasi buku tersedia, dan kelola pengambilan buku.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            href: '/reservasi',
            color: 'blue' as const,
        },
        {
            title: 'Terima Pengembalian',
            description: 'Proses pengembalian buku, cek kondisi, dan hitung otomatis denda keterlambatan.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            href: '/pengembalian',
            color: 'green' as const,
        },
        {
            title: 'Kelola Denda',
            description: 'Lihat daftar denda belum lunas, terima pembayaran QRIS/Tunai, dan cetak struk.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            href: '/denda',
            color: 'red' as const,
        },
        {
            title: 'Tambah Buku Baru',
            description: 'Input katalog buku baru dengan barcode, ISBN, kategori, dan multiple copy stok.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            href: '/buku/tambah',
            color: 'purple' as const,
        },
        {
            title: 'Laporan Bulanan',
            description: 'Generate laporan statistik peminjaman, pendapatan denda, dan buku terpopuler.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            href: '/laporan',
            color: 'indigo' as const,
        },
    ];

    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Aksi Cepat</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {actions.map((action, index) => (
                    <QuickAction key={action.title} {...action} style={{ animationDelay: `${index * 100}ms` }} />
                ))}
            </div>
        </section>
    );
}