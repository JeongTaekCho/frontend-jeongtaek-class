/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  generateBuildId: () => "codecamp_deploy_09", //수정함

  // getServerSideProps 들어있는 페이지 제외하고 빌드시켜줘라 => next.config.js에서 exportPathMap으로 현재 페이지 제외시키기
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
