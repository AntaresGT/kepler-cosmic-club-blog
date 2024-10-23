/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        'lucide-react'
    ],
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs)$/,
            use: ['raw-loader', 'glslify-loader'],
        });

        return config;
    }
};

export default nextConfig;
