import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Genera sito statico nella cartella /out
  trailingSlash: true,     // Cloudflare Pages preferisce /pagina/
  images: {
    unoptimized: true,     // Necessario per export statico
  },
};

export default nextConfig;
