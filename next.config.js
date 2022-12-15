/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
      'https://ludumobucket.s3.eu-central-1.amazonaws.com'
    ]
  }
}

