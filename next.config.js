/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/login',
            destination: 'https://cms.dankennedy.me',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
