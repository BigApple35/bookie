import { Head } from '@inertiajs/react';
import MainLayout from '@/components/Layout/MainLayout';
import HeroSection from '@/components/Home/HeroSection';
import FeaturesSection from '@/components/Home/FeaturesSection';
import CTASection from '@/components/Home/CTASection';

export default function HomepageGuest() {
    return (
        <MainLayout showNavbar={true} showFooter={true}>
            <Head title="Bookie - Sistem Informasi Perpustakaan Terintegrasi" />
            <HeroSection />
            <FeaturesSection />
            <CTASection />
        </MainLayout>
    );
}