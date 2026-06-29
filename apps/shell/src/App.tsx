import { createBrowserRouter, RouterProvider } from 'react-router';
import { Workspace } from './Workspace';
import { lazy, Suspense } from 'react';
const CatalogApp = lazy(() => import('catalog/App'));


const router = createBrowserRouter(
    [
        {
            element: <Workspace />,
            children: [
                {
                    path: '/',
                    element: <></>
                }
                ,
                {
                    path: '/catalog',
                    element: <Suspense
                        fallback={
                            <div className="text-[var(--text-muted)]">Loading catalog…</div>
                        }
                    >
                        <CatalogApp />
                    </Suspense>,
                },
            ],
        },
    ],
    // {
    //   basename: '/portfolio',
    // }
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;

