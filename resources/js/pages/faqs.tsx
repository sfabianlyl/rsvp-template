import Layout from '@/components/layout';
import { weddingConfig } from '@/config/wedding';

export default function Faqs() {
    const faqs = [
        {
            question: "When is the RSVP Deadline?",
            answer: `Please RSVP by ${weddingConfig.rsvpDeadlineDisplay}, so we can finalise the guest list. We look forward to seeing you there.`
        },
        {
            question: "Will the Holy Matrimony (Church Ceremony) and Dinner be indoor or outdoor?",
            answer: "Both will be held indoors. We recommend bringing a light jacket or shawl to stay comfortable."
        },
        {
            question: "Can I bring a date or children?",
            answer: "Yes, you are welcome to bring a date. If you plan to bring children, kindly contact us in advance so we can make the necessary arrangements."
        },
        {
            question: "Is transportation provided between the ceremony and reception?",
            answer: "Unfortunately, no transportation will be provided. We recommend driving, taking rideshare, or carpooling with other guests."
        },
        {
            question: "Is parking available?",
            answer: (
                <div className="space-y-4">
                    <div>
                        <p className="font-semibold text-foreground mb-1">Holy Matrimony (Church Ceremony)</p>
                        <p>The church has on-site parking available. We kindly suggest arriving early or carpooling where possible.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-foreground mb-1">Dinner Reception</p>
                        <p>There is designated and roadside parking available near the reception venue. Please arrive early and consider carpooling.</p>
                    </div>
                </div>
            )
        },
        {
            question: "What should I wear?",
            answer: "We suggest cocktail attire with light tones, pretty pastels or floral motifs."
        },
        {
            question: "Can we take photos during the wedding?",
            answer: (
                <div>
                    <p>Yes, please do! We’d love for you to help capture all the special moments throughout the day.</p>
                    <p className="mt-2">Please note during the ceremony, professional photographers will be covering the service. Kindly remain seated and take photos from your place.</p>
                    <p className="mt-4 font-medium text-primary">Feel free to tag us or share your photos using: {weddingConfig.socialHashtag}.</p>
                </div>
            )
        },
        {
            question: "What is the couple’s preferred gift?",
            answer: "Your presence is the greatest gift to us. However, if you wish to give, we would be grateful for a monetary contribution to help us build our future together."
        }
    ];

    return (
        <Layout title="FAQs">
            <div className="min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h1 className="font-serif text-6xl text-foreground mb-6">Frequently Asked Questions</h1>
                        <p className="text-xl text-muted-foreground font-light italic">Everything you need to know about our big day.</p>
                    </div>

                    <div className="space-y-24">
                        {faqs.map((faq, index) => (
                            <div key={index} className="text-center space-y-6">
                                <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                                    {faq.question}
                                </h2>
                                <div className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="mt-40 pt-20 border-t border-foreground/10">
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
