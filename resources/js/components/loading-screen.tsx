import { useEffect, useState } from 'react';

// Store images in a global set to prevent garbage collection while pages are mounting
const imageCache = new Set<HTMLImageElement>();

// All images that need to be preloaded from splash, home, and schedule pages
const imagesToPreload = [
    // Splash page
    '/images/splash.webp',

    // Home page
    '/images/groom1.webp',
    '/images/groom2.webp',
    '/images/bride1.webp',
    '/images/bride2.webp',
    '/images/flower-sketch-left.png',
    '/images/flower-sketch-right.png',

    // Gallery images (home page)
    '/images/gallery1.webp',
    '/images/gallery2.webp',
    '/images/gallery3.webp',
    '/images/gallery4.webp',
    '/images/gallery5.webp',
    '/images/gallery6.webp',
    '/images/gallery7.webp',
    '/images/gallery8.webp',
    '/images/gallery9.webp',

    // Schedule page
    '/images/schedule.webp',
];

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [loadedCount, setLoadedCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const totalImages = imagesToPreload.length;
    const progress = Math.round((loadedCount / totalImages) * 100);

    useEffect(() => {
        let mounted = true;
        let loadedImagesCount = 0;
        let timeoutId: NodeJS.Timeout;

        const preloadImages = async () => {
            // Safety timeout: force complete after 15 seconds to prevent indefinite hanging
            timeoutId = setTimeout(() => {
                if (mounted && !isComplete) {
                    console.warn('Loading timeout reached, forcing completion');
                    setLoadedCount(totalImages);
                    setIsComplete(true);
                    setTimeout(() => {
                        onLoadingComplete();
                    }, 500);
                }
            }, 15000);

            const imagePromises = imagesToPreload.map((src) => {
                return new Promise<void>((resolve) => {
                    const img = new Image();

                    const handleLoad = () => {
                        if (mounted) {
                            loadedImagesCount++;
                            setLoadedCount(loadedImagesCount);
                            // Keep a reference to the image to ensure it stays in browser cache/memory
                            imageCache.add(img);
                        }
                        resolve();
                    };

                    img.onload = handleLoad;

                    img.onerror = () => {
                        console.error(`Failed to load image: ${src}`);
                        // Even if an image fails, we still count it as "loaded"
                        // so the loading screen doesn't get stuck
                        if (mounted) {
                            loadedImagesCount++;
                            setLoadedCount(loadedImagesCount);
                        }
                        resolve();
                    };

                    img.src = src;
                });
            });

            await Promise.all(imagePromises);

            if (mounted) {
                // Clear the safety timeout since we completed successfully
                clearTimeout(timeoutId);

                // Small delay to ensure smooth transition
                setTimeout(() => {
                    setIsComplete(true);
                    setTimeout(() => {
                        onLoadingComplete();
                        // Clear the cache after a long delay to allow components to use them
                        // In a SPA, once they are painted once, they usually stay in cache
                        setTimeout(() => {
                            imageCache.clear();
                        }, 10000);
                    }, 500); // Fade out duration
                }, 500);
            }
        };

        preloadImages();

        return () => {
            mounted = false;
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [onLoadingComplete, isComplete, totalImages]);

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Spinner */}
            <div className="relative mb-8">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>

            {/* Loading text */}
            <p className="font-serif text-xl text-foreground/80 mb-4">
                Preparing Invitation...
            </p>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-border/23 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Progress percentage */}
            <p className="font-sans text-sm text-muted-foreground mt-3">
                {progress}%
            </p>
        </div>
    );
}
