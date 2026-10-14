import Layout from '@/components/layout';
import { useForm } from '@inertiajs/react';
import { weddingConfig } from '@/config/wedding';

export default function Rsvp({ success = false, attending: successAttending, error_message }: { success?: boolean; attending?: string; error_message?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        phone: '',
        email: '',
        attending: 'yes',
        has_plus_one: false,
        plus_one_name: '',
        plus_one_phone: '',
        plus_one_email: '',
        dietary_preference: '',
        message: ''
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/rsvp');
    };

    if (success || error_message) {
        return (
            <Layout title="RSVP">
                <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center animate-in fade-in zoom-in duration-500">
                    <div className="bg-card border border-primary/20 rounded-2xl p-12 shadow-lg">
                        {error_message ? (
                            <>
                                <h1 className="font-serif text-4xl text-destructive mb-6">Submission Error</h1>
                                <p className="text-lg text-foreground mb-8">
                                    Oops! It seems you have submitted before. Please contact the bride or groom if you'd like to make any changes to your RSVP. 
                                    <br></br><br></br>
                                    {weddingConfig.groom.shortName} - {weddingConfig.groom.contactPhone}
                                    <br></br>
                                    {weddingConfig.bride.shortName} - {weddingConfig.bride.contactPhone}
                                </p>
                            </>
                        ) : (
                            <>
                                <h1 className="font-serif text-4xl text-primary mb-6">Thank You for Your RSVP</h1>
                                {successAttending === 'yes' ? (
                                    <>
                                        <p className="text-lg text-foreground mb-4">
                                            Thank you for letting us know! We're so excited to celebrate our special day with you and truly appreciate your response.
                                        </p>
                                        <p className="text-muted-foreground mb-6">
                                            Looking forward to seeing you on our wedding day!
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-lg text-foreground mb-4">
                                            Thank you for letting us know. While we will miss celebrating with you in person, we truly appreciate your kind wishes and support.
                                        </p>
                                        <p className="text-muted-foreground mb-6">
                                            We hope to celebrate together another time and will keep you in our hearts on our special day.
                                        </p>
                                    </>
                                )}
                            </>
                        )}
                        <p className="font-serif text-xl italic">
                            With love,<br />
                            {weddingConfig.coupleShortName} ❤
                        </p>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="RSVP">
            <div className="min-h-screen">
                <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-6xl text-foreground mb-6">RSVP</h1>
                        <p className="text-xl text-muted-foreground font-light italic">{weddingConfig.rsvpDeadlineNotice}</p>
                    </div>

                    <form onSubmit={submit} className="space-y-16">
                        <div className="space-y-12">
                            <div>
                                <label htmlFor="name" className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-2">Guest Name <span className="text-destructive">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full border-0 border-b border-foreground/10 bg-transparent px-0 py-3 focus:border-primary focus:ring-0 transition-all text-xl font-light text-foreground placeholder:text-muted-foreground/30"
                                    placeholder="Full Name"
                                    required
                                />
                                {errors.name && <div className="text-destructive text-sm mt-1">{errors.name}</div>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-2">Phone Number <span className="text-destructive">*</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={data.phone}
                                    onChange={e => setData('phone', e.target.value)}
                                    className="w-full border-0 border-b border-foreground/10 bg-transparent px-0 py-3 focus:border-primary focus:ring-0 transition-all text-xl font-light text-foreground placeholder:text-muted-foreground/30"
                                    placeholder="+6012-3456789"
                                    required
                                />
                                {errors.phone && <div className="text-destructive text-sm mt-1">{errors.phone}</div>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-2">Email <span className="text-destructive">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="w-full border-0 border-b border-foreground/10 bg-transparent px-0 py-3 focus:border-primary focus:ring-0 transition-all text-xl font-light text-foreground placeholder:text-muted-foreground/30"
                                    placeholder="sample@email.com"
                                    required
                                />
                                {errors.email && <div className="text-destructive text-sm mt-1">{errors.email}</div>}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <label className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-4">Will you attend? <span className="text-destructive">*</span></label>
                            <div className="flex gap-16">
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            type="radio"
                                            value="yes"
                                            checked={data.attending === 'yes'}
                                            onChange={e => setData('attending', e.target.value)}
                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-foreground/20 text-primary checked:border-primary focus:ring-opacity-0 focus:ring-offset-0"
                                        />
                                        <div className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-xl font-light group-hover:text-primary transition-colors">Yes</span>
                                </label>
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            type="radio"
                                            value="no"
                                            checked={data.attending === 'no'}
                                            onChange={e => setData('attending', e.target.value)}
                                            className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-foreground/20 text-primary checked:border-primary focus:ring-opacity-0 focus:ring-offset-0"
                                        />
                                        <div className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-xl font-light group-hover:text-primary transition-colors">No</span>
                                </label>
                            </div>
                        </div>

                        {data.attending === 'yes' && (
                            <div className="animate-in slide-in-from-top-4 fade-in duration-700 space-y-12 pt-4">
                                <div className="space-y-6">
                                    <label className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-4">Are you bringing your plus one? <span className="text-destructive">*</span></label>
                                    <div className="flex gap-16">
                                        <label className="flex items-center space-x-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    value="yes"
                                                    checked={data.has_plus_one === true}
                                                    onChange={() => setData('has_plus_one', true)}
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-foreground/20 text-primary checked:border-primary focus:ring-opacity-0 focus:ring-offset-0"
                                                />
                                                <div className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="text-xl font-light group-hover:text-primary transition-colors">Yes</span>
                                        </label>
                                        <label className="flex items-center space-x-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    checked={data.has_plus_one === false}
                                                    onChange={() => setData('has_plus_one', false)}
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-foreground/20 text-primary checked:border-primary focus:ring-opacity-0 focus:ring-offset-0"
                                                />
                                                <div className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="text-xl font-light group-hover:text-primary transition-colors">No</span>
                                        </label>
                                    </div>
                                </div>

                                {data.has_plus_one && (
                                    <div className="animate-in slide-in-from-top-4 fade-in duration-700 space-y-12 pt-4">
                                        <div>
                                            <label htmlFor="plus_one_name" className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-2">Guest Name <span className="text-destructive">*</span></label>
                                            <input
                                                type="text"
                                                id="plus_one_name"
                                                value={data.plus_one_name}
                                                onChange={e => setData('plus_one_name', e.target.value)}
                                                className="w-full border-0 border-b border-foreground/10 bg-transparent px-0 py-3 focus:border-primary focus:ring-0 transition-all text-xl font-light text-foreground placeholder:text-muted-foreground/30"
                                                placeholder="Full Name"
                                                required={data.has_plus_one}
                                            />
                                            {errors.plus_one_name && <div className="text-destructive text-sm mt-1">{errors.plus_one_name}</div>}
                                        </div>

                                        <div>
                                            <label htmlFor="plus_one_phone" className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-2">Phone Number <span className="text-destructive">*</span></label>
                                            <input
                                                type="tel"
                                                id="plus_one_phone"
                                                value={data.plus_one_phone}
                                                onChange={e => setData('plus_one_phone', e.target.value)}
                                                className="w-full border-0 border-b border-foreground/10 bg-transparent px-0 py-3 focus:border-primary focus:ring-0 transition-all text-xl font-light text-foreground placeholder:text-muted-foreground/30"
                                                placeholder="+6012-3456789"
                                                required={data.has_plus_one}
                                            />
                                            {errors.plus_one_phone && <div className="text-destructive text-sm mt-1">{errors.plus_one_phone}</div>}
                                        </div>

                                        <div>
                                            <label htmlFor="plus_one_email" className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-2">Email <span className="text-destructive">*</span></label>
                                            <input
                                                type="email"
                                                id="plus_one_email"
                                                value={data.plus_one_email}
                                                onChange={e => setData('plus_one_email', e.target.value)}
                                                className="w-full border-0 border-b border-foreground/10 bg-transparent px-0 py-3 focus:border-primary focus:ring-0 transition-all text-xl font-light text-foreground placeholder:text-muted-foreground/30"
                                                placeholder="sample@email.com"
                                                required={data.has_plus_one}
                                            />
                                            {errors.plus_one_email && <div className="text-destructive text-sm mt-1">{errors.plus_one_email}</div>}
                                        </div>
                                    </div>
                                )}

                                {/* Dietary Preferences */}
                                <div className="space-y-8">
                                    <div>
                                        <label className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-4">
                                            Dietary Preference <span className="text-destructive">*</span>
                                        </label>
                                        <div className="flex gap-12">
                                            <label className="flex items-center space-x-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={data.dietary_preference === 'halal'}
                                                    onChange={e => setData('dietary_preference', e.target.checked ? 'halal' : '')}
                                                    className="h-5 w-5 cursor-pointer rounded border-foreground/20 text-primary focus:ring-opacity-0 focus:ring-offset-0"
                                                />
                                                <span className="text-xl font-light group-hover:text-primary transition-colors">Halal</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={data.dietary_preference === 'non-halal'}
                                                    onChange={e => setData('dietary_preference', e.target.checked ? 'non-halal' : '')}
                                                    className="h-5 w-5 cursor-pointer rounded border-foreground/20 text-primary focus:ring-opacity-0 focus:ring-offset-0"
                                                />
                                                <span className="text-xl font-light group-hover:text-primary transition-colors">Non-Halal</span>
                                            </label>
                                        </div>
                                        <p className="text-sm text-muted-foreground/60 mt-2 italic">Please note this will apply for you and your guest</p>
                                        {errors.dietary_preference && <div className="text-destructive text-sm mt-1">{errors.dietary_preference}</div>}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="pt-4">
                            <label htmlFor="message" className="block text-sm font-serif uppercase tracking-[0.2em] text-foreground/60 mb-2">
                                Would you like to leave a message or wish for the couple?
                                {data.attending === 'no' && <span className="text-destructive ml-1">*</span>}
                            </label>
                            <textarea
                                id="message"
                                value={data.message}
                                onChange={e => setData('message', e.target.value)}
                                className="w-full border-0 border-b border-foreground/10 bg-transparent px-0 py-3 focus:border-primary focus:ring-0 transition-all text-xl font-light text-foreground h-16 resize-none placeholder:text-muted-foreground/30"
                                placeholder={data.attending === 'no' ? 'Please share your well wishes...' : 'Optional'}
                                required={data.attending === 'no'}
                            />
                            {errors.message && <div className="text-destructive text-sm mt-1">{errors.message}</div>}
                        </div>

                        <div className="pt-12">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full border border-foreground/10 hover:border-primary py-5 px-10 rounded-full font-serif text-2xl font-bold tracking-wide hover:text-primary transition-all duration-500 disabled:opacity-50 group shadow-sm hover:shadow-md"
                            >
                                {processing ? 'Sending...' : 'Submit RSVP'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
