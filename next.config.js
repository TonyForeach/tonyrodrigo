/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash:true,
  basePath: '/tonyrodrigo',
  //output: "export",
  images: {
    unoptimized: true, // Puede ayudar si estás enfrentando problemas con la optimización de imágenes
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },

}

module.exports = nextConfig
