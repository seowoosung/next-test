const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jusikdabang.com";
const excludePaths = process.env.NEXT_PUBLIC_EXCLUDE_PATHS
  ? process.env.NEXT_PUBLIC_EXCLUDE_PATHS.split(",")
  : [];
const includePaths = process.env.NEXT_PUBLIC_INCLUDE_PATHS
  ? process.env.NEXT_PUBLIC_INCLUDE_PATHS.split(",")
  : [];

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  exclude: excludePaths,
  additionalPaths: async (config) => {
    return includePaths.length && includePaths[0] !== "*"
      ? includePaths.map((path) => ({
          loc: path,
          changefreq: "daily",
          priority: 0.7,
        }))
      : [];
  },
};
