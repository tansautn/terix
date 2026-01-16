/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Note: Standard Next.js expects 'app' in root or 'src'. 
  // If 'src-ts' is not automatically detected, ensure your build command or symlink handles it,
  // or strictly use 'src' directory content but conceptualize it as src-ts.
  // For this generated code, we assume the folder structure 'src-ts' is preferred by the user rule.
};

module.exports = nextConfig;