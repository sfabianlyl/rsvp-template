import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import LoadingScreen from './components/loading-screen';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        function AppWithLoader() {
            const [isLoading, setIsLoading] = useState(true);

            return (
                <StrictMode>
                    {isLoading && (
                        <LoadingScreen
                            onLoadingComplete={() => setIsLoading(false)}
                        />
                    )}
                    {!isLoading && <App {...props} />}
                </StrictMode>
            );
        }

        root.render(<AppWithLoader />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
// initializeTheme();
