import mdx from "@next/mdx";

const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doodleipsum.com",
      },
    ],
  },
};

export default withMDX(nextConfig);
