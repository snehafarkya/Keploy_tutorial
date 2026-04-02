import rehypePrettyCode from "rehype-pretty-code";
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
}
export const mdxOptions = {
  rehypePlugins: [rehypePrettyCode],
};

export default withMDX(nextConfig)