/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/tonyrodrigo',
   output: "export",
  images: {
    loader: 'imgix',
    path: '',
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
