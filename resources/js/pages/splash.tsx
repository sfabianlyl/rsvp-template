import { Head, Link } from '@inertiajs/react';
import { weddingConfig } from '@/config/wedding';

export default function Splash() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black font-sans">
            <Head title="Wedding Invite" />

            {/* Background Image with Dark Tint */}
            <div
                className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-[10000ms] scale-110 animate-pulse-slow"
                style={{
                    backgroundImage: "url('/images/splash2.webp')",
                    filter: "brightness(0.4) contrast(1.1)"
                }}
            />
            {/* Hidden image to force high priority loading/decoding of background */}
            <img
                src="/images/splash.webp"
                className="hidden"
                aria-hidden="true"
                fetchPriority="high"
                loading="eager"
            />

            {/* Foreground Content */}
            <div className="relative z-10 text-center px-6 py-12 max-w-2xl bg-black/20 backdrop-blur-[2px] rounded-2xl border border-white/10 animate-in fade-in zoom-in duration-1000">
                <header className="space-y-6">
                    <p className="font-sans tracking-[0.3em] uppercase text-xs md:text-sm text-white/80 font-medium mb-4">
                        You're Invited to
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight font-bold tracking-tight px-4">
                        <span className="text-white italic">{weddingConfig.coupleShortName}'s</span> <br />
                        Wedding
                    </h1>

                    <div className="w-16 h-px bg-white/20 mx-auto my-8" />

                    <div className="pt-4">
                        <Link
                            href="/home"
                            className="inline-block bg-white text-black px-12 py-4 rounded-full font-serif text-xl tracking-wide hover:bg-accent hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transform hover:-translate-y-1 active:scale-95"
                        >
                            Open Invitation
                        </Link>
                    </div>
                </header>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute inset-0 pointer-events-none border-[40px] border-black/5 z-20" />
        </div>
    );
}

