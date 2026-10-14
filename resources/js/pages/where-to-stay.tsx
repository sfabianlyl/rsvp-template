import Layout from '@/components/layout';
import { Link } from '@inertiajs/react';
import { weddingConfig } from '@/config/wedding';

export default function WhereToStay() {
    const stays = weddingConfig.accommodations;

    return (
        <Layout title="Where to Stay">
            <div className="min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-6xl text-foreground mb-6">Where to Stay</h1>
                        <p className="text-xl text-muted-foreground font-light italic">Accommodation options for our guests.</p>
                    </div>

                    <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
                        <p>We’re so grateful to have friends and family travelling to celebrate this special day with us 🤍</p>
                        <br></br><p>To help with your stay, we’ve pinned a few accommodation options conveniently located near both our ceremony and reception venues.</p>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg border border-border/40 aspect-video w-full flex items-center justify-center bg-card">
                        <div className="text-center p-8 space-y-4">
                            <p className="font-serif text-2xl text-foreground">Interactive Map</p>
                            <p className="text-muted-foreground text-sm max-w-md mx-auto">
                                Accommodation pins and directions to both wedding venues.
                            </p>
                            <a
                                href={weddingConfig.accommodationsMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-serif text-base font-bold tracking-wide hover:bg-primary/90 transition-all"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href={weddingConfig.accommodationsMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:underline font-medium"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <div className="mt-10 pt-10 text-center">
                        {stays.map((stay, index) => (
                            <div key={index} className="mt-15 text-center">
                                <h3 className="font-serif text-3xl text-foreground mb-2">{stay.name}</h3>
                                <p className="text-xl text-muted-foreground font-light mb-3">{stay.address}</p>
                                <Link
                                    href={stay.link}
                                    className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-serif text-xl font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                                    target="_blank"
                                >
                                    View
                                </Link>
                            </div>
                        ))}                        
                    </div>
                    

                    <div className="mt-10 pt-10">
                        <div className="text-center space-y-10">
                            <p className="text-xl text-muted-foreground font-light">If you have any questions or concerns, please contact:</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-24">
                                <div className="space-y-2">
                                    <p className="font-serif text-2xl text-primary font-medium">{weddingConfig.groom.shortName}</p>
                                    <a href={`tel:${weddingConfig.groom.contactPhone}`} className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide">{weddingConfig.groom.contactPhone}</a>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-serif text-2xl text-primary font-medium">{weddingConfig.bride.shortName}</p>
                                    <a href={`tel:${weddingConfig.bride.contactPhone}`} className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide">{weddingConfig.bride.contactPhone}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
