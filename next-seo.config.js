/* eslint-disable import/no-anonymous-default-export */
export default {
  titleTemplate: '%s - 서비스 페이지',
  openGraph: {
    type: 'website',
    site_name: '건강증진센터 위치보기 서비스',
    images: [
      { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'naver-site-verification',
      content: 'f7ce840bfed924300f28f1bfdc4ee758969285c7',
    },
    {
      name: 'google-site-verification',
      content: 'ji7VpXPkv1ZfH5Z9A01hwAEa_CnlSWwLNxnYtyy7s',
    },
  ],
};
