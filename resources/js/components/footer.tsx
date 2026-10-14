import { Heart } from 'lucide-react';
import { weddingConfig } from '@/config/wedding';

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-foreground/5">
            <div className="max-w-7xl mx-auto py-24 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <p className="font-serif text-3xl text-foreground">{weddingConfig.coupleShortName}</p>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-muted-foreground text-sm font-serif italic flex items-center gap-2">
                            with love <Heart size={14} className="text-primary/50 fill-primary/20" /> for our special day
                        </p>
                        <p className="text-muted-foreground/40 text-xs tracking-widest uppercase">
                            &copy; {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
