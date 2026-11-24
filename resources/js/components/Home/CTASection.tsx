import { Link } from '@inertiajs/react';

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Siap Memulai dengan <span className="text-yellow-200">Bookie</span>?
                    </h2>
                    <p className="text-lg text-orange-100 mb-8 leading-relaxed">
                        Bergabunglah dengan ratusan perpustakaan yang telah bertransformasi digital.
                        Mulai gratis, tidak perlu kartu kredit, batal kapan saja.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/register"
                            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-orange-600 bg-white rounded-xl hover:bg-orange-50 transition-all duration-200 shadow-lg shadow-black/10"
                        >
                            Daftar Sekarang Gratis
                            <svg className="ml-2 inline-block w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            href="/demo"
                            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-orange-500/20 border-2 border-white rounded-xl hover:bg-orange-500/30 transition-all duration-200"
                        >
                            Tonton Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}