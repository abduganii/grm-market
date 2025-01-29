import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["grm-upload.getter.uz"],
  },
};

export default withNextIntl(nextConfig);
