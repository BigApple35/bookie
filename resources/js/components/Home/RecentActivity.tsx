import { Link } from '@inertiajs/react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface ActivityItem {
    id: number;
    type: 'peminjaman' | 'pengembalian' | 'reservasi' | 'denda' | 'buku_baru';
    title: string;
    description: string;
    time: Date;
    user?: string;
    status: 'success' | 'pending' | 'warning' | 'info';
    href?: string;
}

const statusStyles = {
    success: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', icon: 'check' },
    pending: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400', icon: 'clock' },
    warning: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', icon: 'alert' },
    info: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', icon: 'info' },
};

function ActivityItemComponent({ activity }: { activity: ActivityItem }) {
    const styles = statusStyles[activity.status];

    return (
        <Link
            href={activity.href || '#'}
            className="group flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-opacity-50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200"
        >
            <div className={`w-10 h-10 rounded-lg ${styles.bg} flex items-center justify-center ${styles.text} flex-shrink-0`}>
                {styles.icon === 'check' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
                {styles.icon === 'clock' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
                {styles.icon === 'alert' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                )}
                {styles.icon === 'info' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">{activity.title}</h4>
                    <time className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap" dateTime={activity.time.toISOString()}>
                        {format(activity.time, 'HH:mm', { locale: id })}
                    </time>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{activity.description}</p>
                {activity.user && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Oleh: {activity.user}</p>
                )}
            </div>
        </Link>
    );
}

interface RecentActivityProps {
    activities: ActivityItem[];
    title?: string;
    showViewAll?: boolean;
    viewAllHref?: string;
}

export default function RecentActivity({ activities, title = 'Aktivitas Terbaru', showViewAll = true, viewAllHref = '/aktivitas' }: RecentActivityProps) {
    return (
        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
                {showViewAll && (
                    <Link
                        href={viewAllHref}
                        className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors flex items-center gap-1"
                    >
                        Lihat Semua
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                )}
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
                {activities.length > 0 ? (
                    activities.map((activity) => (
                        <ActivityItemComponent key={activity.id} activity={activity} />
                    ))
                ) : (
                    <div className="p-8 text-center">
                        <svg className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-gray-500 dark:text-gray-400">Belum ada aktivitas terbaru</p>
                    </div>
                )}
            </div>
        </section>
    );
}