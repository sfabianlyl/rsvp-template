import Gallery from '@/components/gallery';
import Layout from '@/components/layout';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { weddingConfig } from '@/config/wedding';

export default function Home() {
    const [daysUntilWedding, setDaysUntilWedding] = useState<number>(0);
    const [activeCard, setActiveCard] = useState<'groom' | 'bride' | null>(null);

    useEffect(() => {
        const weddingDate = new Date(weddingConfig.weddingDateISO);
        const calculateDays = () => {
            const now = new Date();
            const difference = weddingDate.getTime() - now.getTime();
            const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
            setDaysUntilWedding(days);
        };

        calculateDays();
        const interval = setInterval(calculateDays, 1000 * 60 * 60); // Update every hour

        return () => clearInterval(interval);
    }, []);

    return (
        <Layout title="Home">
            <div className="min-h-screen relative overflow-x-hidden">
                

                {/* Top Image Gallery */}
                <section className="pt-8 animate-in fade-in slide-from-top-4 duration-1000" style={{zIndex: 10,position: "relative"}}>
                    <Gallery />
                </section>

                {/* Hero / Welcome Content */}
                <div className="relative z-10 text-center py-20 px-4 space-y-8 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <p className="font-sans tracking-[0.2em] uppercase text-sm md:text-base text-foreground/60">
                        The Wedding Of
                    </p>
                    <h1 className="text-6xl md:text-8xl tracking-tight font-charline">
                        {weddingConfig.groom.fullName}
                    </h1>
                    <p className="font-sans tracking-[0.2em] uppercase text-sm md:text-base text-foreground/60">
                        and
                    </p>
                    <h1 className="text-6xl md:text-8xl tracking-tight font-charline">
                        {weddingConfig.bride.fullName}
                    </h1>

                    {/* Row 2: Bible Quote */}
                    <div className="pt-10">
                        <blockquote className="font-serif text-xl md:text-2xl italic text-center text-primary/70 max-w-3xl mx-auto px-6 leading-relaxed">
                            {weddingConfig.quote.verse}
                            <span className="block mt-2 text-base md:text-lg text-muted-foreground/60 not-italic">
                                {weddingConfig.quote.citation}
                            </span>
                        </blockquote>
                    </div>


                    {/* Section 1: Bride & Groom Information */}
                    <section className="max-w-5xl mx-auto pt-20 pb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                            {/* Groom Card */}
                            <div
                                className="group relative cursor-pointer"
                                onClick={() => setActiveCard(activeCard === 'groom' ? null : 'groom')}
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
                                    {/* Default Image */}
                                    <img
                                        src={weddingConfig.groom.photos.primary}
                                        alt={weddingConfig.groom.fullName}
                                        loading="eager"
                                        fetchPriority="high"
                                        className={cn(
                                            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0",
                                            activeCard === 'groom' && "opacity-0"
                                        )}
                                    />
                                    {/* Hover Image */}
                                    <img
                                        src={weddingConfig.groom.photos.hover}
                                        alt={weddingConfig.groom.fullName}
                                        loading="eager"
                                        className={cn(
                                            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100",
                                            activeCard === 'groom' && "opacity-100"
                                        )}
                                    />
                                    {/* Film Subtitle with Expandable Parent Info */}
                                    <div className={cn(
                                        "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/90",
                                        activeCard === 'groom' && "from-black/95 via-black/90"
                                    )}>
                                        <div className="p-6 text-white">
                                            <h3 className="font-serif text-2xl md:text-3xl font-bold">{weddingConfig.groom.fullName}</h3>
                                            {/* Parent Information - Expands on Hover */}
                                            <div className={cn(
                                                "overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-32 group-hover:mt-4",
                                                activeCard === 'groom' && "max-h-32 mt-4"
                                            )}>
                                                <p className="font-serif text-lg md:text-xl leading-relaxed">
                                                    <span className="font-sans italic text-base md:text-lg">{weddingConfig.groom.parentRole}</span><br />
                                                    {weddingConfig.groom.parents}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bride Card */}
                            <div
                                className="group relative cursor-pointer"
                                onClick={() => setActiveCard(activeCard === 'bride' ? null : 'bride')}
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
                                    {/* Default Image */}
                                    <img
                                        src={weddingConfig.bride.photos.primary}
                                        alt={weddingConfig.bride.fullName}
                                        loading="eager"
                                        fetchPriority="high"
                                        className={cn(
                                            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0",
                                            activeCard === 'bride' && "opacity-0"
                                        )}
                                    />
                                    {/* Hover Image */}
                                    <img
                                        src={weddingConfig.bride.photos.hover}
                                        alt={weddingConfig.bride.fullName}
                                        loading="eager"
                                        className={cn(
                                            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100",
                                            activeCard === 'bride' && "opacity-100"
                                        )}
                                    />
                                    {/* Film Subtitle with Expandable Parent Info */}
                                    <div className={cn(
                                        "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/90",
                                        activeCard === 'bride' && "from-black/95 via-black/90"
                                    )}>
                                        <div className="p-6 text-white">
                                            <h3 className="font-serif text-2xl md:text-3xl font-bold">{weddingConfig.bride.fullName}</h3>
                                            {/* Parent Information - Expands on Hover */}
                                            <div className={cn(
                                                "overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-32 group-hover:mt-4",
                                                activeCard === 'bride' && "max-h-32 mt-4"
                                            )}>
                                                <p className="font-serif text-lg md:text-xl leading-relaxed">
                                                    <span className="font-sans italic text-base md:text-lg">{weddingConfig.bride.parentRole}</span><br />
                                                    {weddingConfig.bride.parents}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Date & Countdown Redesign */}
                    <section className="max-w-6xl mx-auto pt-12 pb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                            {/* Calendar Column */}
                            <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-foreground/5 shadow-sm overflow-hidden">
                                <div className="relative z-10 space-y-8">
                                    {/* Calendar Header */}
                                    <div className="text-center space-y-1">
                                        <h3 className="font-serif text-3xl md:text-4xl text-primary flex items-center justify-center gap-4">
                                            {weddingConfig.calendar.monthYear}
                                        </h3>
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="max-w-md mx-auto">
                                        {/* Weekdays */}
                                        <div className="grid grid-cols-7 mb-4">
                                            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                                                <div key={day} className="text-center text-[10px] md:text-xs font-sans tracking-widest text-foreground/40 font-bold">
                                                    {day}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Days */}
                                        <div className="grid grid-cols-7 gap-y-4 md:gap-y-6">
                                            {[...Array(weddingConfig.calendar.startDayOffset)].map((_, i) => <div key={`empty-${i}`} />)}

                                            {[...Array(weddingConfig.calendar.totalDays)].map((_, i) => {
                                                const day = i + 1;
                                                const isWeddingDay = day === weddingConfig.calendar.weddingDay;

                                                return (
                                                    <div key={day} className="relative flex items-center justify-center">
                                                        {isWeddingDay && ( 
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16 text-[#A01515] fill-current">
                                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                        <span className={cn(
                                                            "relative z-10 font-serif text-xl md:text-2xl",
                                                            isWeddingDay ? "text-white font-bold" : "text-foreground/70"
                                                        )}>
                                                            {day < 10 ? `0${day}` : day}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Countdown Column */}
                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <h2 className="font-charline text-6xl leading-[6rem] md:leading-[10rem] text-primary/80 lowercase">
                                    Countdown
                                </h2>

                                <div className="space-y-1">
                                    <p className="font-serif text-lg md:text-xl tracking-[0.2em] text-foreground/60 uppercase">
                                        To Our Big Day
                                    </p>
                                </div>

                                <div className="flex items-baseline gap-4">
                                    <span className="font-serif text-8xl md:text-[8rem] font-bold text-[#A01515] leading-none">
                                        {daysUntilWedding < 10 ? `0${daysUntilWedding}` : daysUntilWedding}
                                    </span>
                                    <span className="font-serif text-3xl md:text-4xl text-foreground/40 tracking-widest font-light uppercase">
                                        Days
                                    </span>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <p className="font-sans text-lg md:text-xl text-foreground/60">
                                        From dream to 'I do'. <br></br> We can't wait to celebrate with you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="max-w-3xl mx-auto pt-5 space-y-5">
                        <div className="pt-5">

                            <Link
                                href="/rsvp"
                                className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-serif text-xl font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                            >
                                RSVP Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
