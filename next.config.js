/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: '',

            },
            {
                protocol: "https",
                hostname: "www.ducatisp.com.br",
                port: '',

            }
        ]
    }
}

module.exports = nextConfig
