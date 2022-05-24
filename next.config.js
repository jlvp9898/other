const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
module.exports = {
  images: {
    domains: ['delorean.billregulator.com', 'scontent.cdninstagram.com', 'scontent-mia3-1.cdninstagram.com', 'scontent-mia3-2.cdninstagram.com', 'scontent-mia3-3.cdninstagram.com', 'video-mia3-1.cdninstagram.com', 'video-mia3-2.cdninstagram.com', 'scontent-mad1-1.cdninstagram.com', 'scontent-mad1-2.cdninstagram.com', 'video-mad1-1.cdninstagram.com', 'video-mad1-2.cdninstagram.com', 'scontent-bos3-1.cdninstagram.com'],
  },
  
}
