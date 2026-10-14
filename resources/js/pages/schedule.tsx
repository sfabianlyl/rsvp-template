import Layout from '@/components/layout';
import { weddingConfig } from '@/config/wedding';

export default function Schedule() {
    const { ceremony, reception } = weddingConfig.events;

    return (
        <Layout title="Schedule">
            <div className="min-h-screen">
                <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center mb-24 space-y-6">
                        <h1 className="font-serif text-6xl text-foreground">The Schedule</h1>
                        <p className="text-xl text-muted-foreground font-serif italic tracking-wide">{weddingConfig.dateDisplay}</p>
                    </div>

                    {/* Hero Image Section */}
                    <div className="mb-32 max-w-4xl mx-auto">
                        <div className="relative overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src="/images/schedule.webp"
                                alt="Pre-wedding Photoshoot"
                                loading="eager"
                                fetchPriority="high"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-center mt-6 text-muted-foreground font-serif text-lg">
                            We joyfully invite you to celebrate our union and love.
                        </p>
                        <p className="text-center mt-2 text-muted-foreground italic font-serif text-lg">
                            “Let us rejoice and be glad.”<br className="inline md:hidden"></br> (Psalm 118:24)
                        </p>
                    </div>

                    <div className="space-y-32 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-foreground/10">

                        {/* Event 1: Ceremony */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group">
                            {/* Image - Left on Desktop, Top on Mobile */}
                            <div className="w-full md:w-[calc(50%-4rem)] mb-12 md:mb-0 order-1">
                                <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3] md:aspect-auto">
                                    <img
                                        src={ceremony.image}
                                        alt={ceremony.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Dot - Center on Desktop */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-4 h-4 rounded-full border border-foreground/10 shadow-sm z-10 top-1/2 -translate-y-1/2">
                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                            </div>

                            {/* Content - Right on Desktop, Bottom on Mobile */}
                            <div className="w-full md:w-[calc(50%-4rem)] pl-16 md:pl-0 py-4 text-center md:text-left space-y-8 order-2 relative">
                                {/* Mobile Dot */}
                                <div className="absolute left-[-44px] top-6 flex md:hidden items-center justify-center w-4 h-4 rounded-full border border-foreground/10 shadow-sm z-10">
                                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-3xl font-serif text-foreground">
                                        {ceremony.title}
                                        {ceremony.subtitle && <><br />{ceremony.subtitle}</>}
                                    </h2>
                                    <p className="text-xl font-serif text-primary italic lowercase tracking-wider">{ceremony.time}</p>
                                </div>

                                <div className="space-y-1">
                                    <p className="font-serif text-foreground tracking-[0.15em] text-sm uppercase font-medium">{ceremony.venueName}</p>
                                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0 font-light">{ceremony.venueAddress}</p>
                                </div>

                                <p className="text-muted-foreground italic font-light">{ceremony.attire}</p>

                                <div className="space-y-3 text-sm text-muted-foreground font-light max-w-sm mx-auto md:mx-0">
                                    {ceremony.parkingNotes.map((note, idx) => (
                                        <p key={idx}>{note}</p>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start pt-4">
                                    <a href={ceremony.calendarLink} target="_blank" rel="noopener noreferrer" className="text-foreground border-b border-foreground/20 pb-1 hover:border-primary hover:text-primary transition-all font-serif font-bold text-lg tracking-wide">Add to calendar</a>
                                    <a href={ceremony.mapsLink} target="_blank" rel="noopener noreferrer" className="text-foreground border-b border-foreground/20 pb-1 hover:border-primary hover:text-primary transition-all font-serif font-bold text-lg tracking-wide">Google Maps</a>
                                    <a href={ceremony.wazeLink} target="_blank" rel="noopener noreferrer" className="text-foreground border-b border-foreground/20 pb-1 hover:border-primary hover:text-primary transition-all font-serif font-bold text-lg tracking-wide">Waze</a>
                                </div>
                            </div>
                        </div>

                        {/* Event 2: Reception Dinner */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group">
                            {/* Image - Right on Desktop, Top on Mobile */}
                            <div className="w-full md:w-[calc(50%-4rem)] mb-12 md:mb-0 order-1 md:order-3">
                                <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3] md:aspect-auto">
                                    <img
                                        src={reception.image}
                                        alt={reception.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Dot - Center on Desktop */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-4 h-4 rounded-full border border-foreground/10 shadow-sm z-10 top-1/2 -translate-y-1/2">
                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                            </div>

                            {/* Content - Left on Desktop, Bottom on Mobile */}
                            <div className="w-full md:w-[calc(50%-4rem)] pl-16 md:pl-0 py-4 text-center md:text-right space-y-8 order-2 md:order-1 relative">
                                {/* Mobile Dot */}
                                <div className="absolute left-[-44px] top-6 flex md:hidden items-center justify-center w-4 h-4 rounded-full border border-foreground/10 shadow-sm z-10">
                                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-3xl font-serif text-foreground">{reception.title}</h2>
                                    <p className="text-xl font-serif text-primary italic lowercase tracking-wider">{reception.time}</p>
                                </div>

                                <div className="space-y-1">
                                    <p className="font-serif text-foreground tracking-[0.15em] text-sm uppercase font-medium">{reception.venueName}</p>
                                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto md:ml-auto md:mr-0 font-light">{reception.venueAddress}</p>
                                </div>

                                <p className="text-muted-foreground italic font-light">{reception.attire}</p>

                                <div className="space-y-3 text-sm text-muted-foreground font-light max-w-sm mx-auto md:ml-auto md:mr-0">
                                    {reception.parkingNotes.map((note, idx) => (
                                        <p key={idx}>{note}</p>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-end pt-4">
                                    <a href={reception.calendarLink} target="_blank" rel="noopener noreferrer" className="text-foreground border-b border-foreground/20 pb-1 hover:border-primary hover:text-primary transition-all font-serif font-bold text-lg tracking-wide">Add to calendar</a>
                                    <a href={reception.mapsLink} target="_blank" rel="noopener noreferrer" className="text-foreground border-b border-foreground/20 pb-1 hover:border-primary hover:text-primary transition-all font-serif font-bold text-lg tracking-wide">Google Maps</a>
                                    <a href={reception.wazeLink} target="_blank" rel="noopener noreferrer" className="text-foreground border-b border-foreground/20 pb-1 hover:border-primary hover:text-primary transition-all font-serif font-bold text-lg tracking-wide">Waze</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
