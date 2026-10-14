import { useEffect, useRef, useState } from 'react';

const images = [
    '/images/gallery1.webp',
    '/images/gallery2.webp',
    '/images/gallery3.webp',
    '/images/gallery4.webp',
    '/images/gallery5.webp',
    '/images/gallery6.webp',
    '/images/gallery7.webp',
    '/images/gallery8.webp',
    '/images/gallery9.webp',
    '/images/gallery10.webp',
];

export default function Gallery() {
    // Duplicate images for seamless scrolling
    const scrollImages = [...images, ...images];

    return (
        <div className="relative w-full overflow-hidden bg-white/50 border-y border-border/40 py-4">
            <div className="flex w-max animate-scroll-continuous">
                {scrollImages.map((src, index) => (
                    <div
                        key={index}
                        className="inline-block px-2 shrink-0"
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            loading="eager"
                            className="h-[300px] w-auto rounded-lg shadow-sm object-cover hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* Gradient overlays for smooth fading at edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream to-transparent z-10" />
        </div>
    );
}
