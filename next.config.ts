import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"]
    }
  }
};

export default nextConfig;
