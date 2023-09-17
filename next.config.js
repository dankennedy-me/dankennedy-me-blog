/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains:['cms.dankennedy.me']
    },
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
