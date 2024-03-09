/** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         swcPlugins: [["next-superjson-plugin", {}]],
//       },
// };

// export default nextConfig;

const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
