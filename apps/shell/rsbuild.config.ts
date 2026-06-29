import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

const REMOTES = {
    catalog: process.env.CATALOG_URL || 'http://localhost:3001',
    // builder + viewer are added here once those apps exist. Registering a
    // remote whose manifest 404s makes the MF runtime throw RUNTIME-003 at
    // startup, so they stay out until they're real:
    // builder: process.env.BUILDER_URL || 'http://localhost:3002',
    // viewer: process.env.VIEWER_URL || 'http://localhost:3003',
};

export default defineConfig({
    plugins: [
        pluginReact(),
        pluginModuleFederation({
            name: 'shell',
            remotes: {
                catalog: `catalog@${REMOTES.catalog}/mf-manifest.json`,
            },
            shared: {
                react: { singleton: true, requiredVersion: '^18.2.0' },
                'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
                zustand: { singleton: true },
                '@pcb/core': { singleton: true },
                '@pcb/ui': { singleton: true },
            },
        }),
    ],
    server: { port: 3000 },
});