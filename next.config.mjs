import path from 'path'
import nextTranspileModules from 'next-transpile-modules'

/** @type {import('next').NextConfig} */
const nextConfig = nextTranspileModules([])({
    webpack: (config) => {
        // Set up path aliases
        config.resolve.alias['@'] = path.resolve('src') // Adjust 'src' based on your directory structure
        return config
    }
})

export default nextConfig
