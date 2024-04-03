import { Metadata } from "next";

export const universalMetadata = (
  pageTitle?: string,
  pageDescription?: string
): Metadata => {
  return {
    metadataBase: new URL(`https://www.suratmeditates.org`),
    title: {
      default: pageTitle ?? 'Surat Meditates',
      template: `%s | ${pageTitle ?? 'Surat Meditates'}`,
    },
    description:
      pageDescription ??
      'Surat Meditates offers an extensive range of meditation techniques designed to cater to diverse preferences and needs.',
    verification: {
      google:
        'google-site-verification=4mBfSAtYKChPD9u_zdXpndZSjLG5Jo1H0fzAiIgEifo',
    },
  };
};
