import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import Footer from './footer';
import Navbar from './navbar';
import { weddingConfig } from '@/config/wedding';

interface LayoutProps extends PropsWithChildren {
    title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
            <Head title={title ? `${title} - ${weddingConfig.coupleShortName}` : `${weddingConfig.coupleShortName} Wedding`} />

            <Navbar />

            <main className="flex-grow pt-20 animate-in fade-in duration-700" style={{zIndex: 10,position: "relative"}}>
                {children}
            </main>
            <div className="bg-flowers"></div>
            <Footer />
        </div>
    );
}
