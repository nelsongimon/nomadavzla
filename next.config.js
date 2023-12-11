/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/finalizar-compra",
  //       headers: [
  //        {
  //          key: "Content-Security-Policy",
  //          value: "upgrade-insecure-requests"
  //        }
  //       ],
  //     },
  //   ]
  // },
  images: {
    domains: [
      "www.nomadavzla.com",
      "placehold.co",
      "nomada-admin.test",
      "nomadavzla.store",
    ]
  },
}

module.exports = nextConfig
