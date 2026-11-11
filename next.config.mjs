/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep Turbopack scoped to this app when nested under the Lilasons repo
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
