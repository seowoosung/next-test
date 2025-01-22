import Head from "next/head";
import React from "react";

export const DEFAULT_TITLE = "Next Test";
export const DEFAULT_SUBTITLE = "Next Test";
export const DEFAULT_DESCRIPTION = "Next Test";

interface ISeoHeadProps {
  title?: string;
  subTitle?: string;
  description?: string;
}

const SeoHead = ({ title, subTitle, description }: ISeoHeadProps) => {
  const pageTitle = `${title ?? DEFAULT_TITLE} - ${subTitle ?? DEFAULT_SUBTITLE}`;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const previewUrl = "/logo.png";

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index,follow" />
      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={previewUrl} />
      <meta property="og:site_name" content={DEFAULT_TITLE} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content={process.env.NEXT_PUBLIC_SITE_URL?.replace("https://", "")}
      />
      <meta property="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={previewUrl} />
    </Head>
  );
};

export default React.memo(SeoHead);
