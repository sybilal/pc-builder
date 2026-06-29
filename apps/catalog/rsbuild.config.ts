import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
    plugins: [
        pluginReact(),
        pluginModuleFederation({
            name: 'catalog',
            exposes: {
                './App': './src/App.tsx',
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
    server: { port: 3001 },
    dev: {
        assetPrefix: 'http://localhost:3001',
    },
    output: {
        assetPrefix: process.env.PUBLIC_URL || 'http://localhost:3001',
    },
});