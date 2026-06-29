import { lazy, Suspense } from 'react';

const CatalogApp = lazy(() => import('catalog/App'));
// const BuilderApp = lazy(() => import('builder/App'));

export function Workspace() {
    return (
        <div className="mx-auto max-w-3xl p-6">
            <header className="mb-6">
                <h1 className="text-2xl font-semibold text-[var(--text)]">
                    Game-to-PC Builder
                </h1>
                <p className="text-sm text-[var(--text-muted)]">
                    Pick parts that hit your game's recommended specs on budget.
                </p>
            </header>
            <Suspense
                fallback={
                    <div className="text-[var(--text-muted)]">Loading catalog…</div>
                }
            >
                <CatalogApp />
            </Suspense>
        </div>
    );
}