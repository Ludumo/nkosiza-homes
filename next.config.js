/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
      'http://acs.amazonaws.com/groups/global/AllUsers',
    ]
  }
}