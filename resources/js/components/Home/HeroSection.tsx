import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-100/50 dark:bg-orange-900/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100/50 dark:bg-green-900/20 rounded-full blur-3xl animate-pulse delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6 animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                            </span>
                            Baru: Reservasi Buku Online & Notifikasi Otomatis
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 animate-fade-in-up delay-100">
                            Kelola Perpustakaan <br />
                            <span className="text-orange-600 dark:text-orange-400">Lebih Mudah & Cepat</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200 leading-relaxed">
                            Bookie adalah Sistem Informasi Perpustakaan Terintegrasi yang memudahkan
                            pengelolaan katalog buku, peminjaman, reservasi, dan denda secara digital
                            dengan antarmuka modern dan responsif.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up delay-300">
                            <Link
                                href="/register"
                                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                            >
                                Mulai Gratis Sekarang
                                <svg className="ml-2 inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                href="/login"
                                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                            >
                                Masuk ke Akun
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up delay-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Tersedia 24/7</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Real-time Sync</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Keamanan Data</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className="relative animate-fade-in-right delay-200">
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Main illustration container */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-blue-100 dark:from-orange-900/30 dark:via-gray-900 dark:to-blue-900/30 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
                                {/* Mock dashboard preview */}
                                <div className="absolute inset-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 overflow-hidden">
                                    {/* Top bar mock */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>

                                    {/* Book cards grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 transition-colors group"
                                            >
                                                <div className="w-full h-20 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg mb-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253v-13Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">Buku Terpopuler</h4>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Tersedia · 12 salinan</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats bar */}
                                    <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">2,847</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Total Buku</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,234</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Anggota Aktif</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">98.5%</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Kepuasan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-bounce-slow" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-bounce-slow delay-1000" />
                            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}