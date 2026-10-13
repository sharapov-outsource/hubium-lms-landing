import { getImageProps } from "next/image";
import type { Locale } from "../lib/site";

const SIZES = {
  desktop: { width: 2560, height: 1600 },
  mobile: { width: 1170, height: 2532 },
};

/**
 * A Hubium LMS screenshot from public/screens in the visitor's theme: the dark capture under
 * prefers-color-scheme: dark, the light one otherwise.
 */
export function Shot({
  locale,
  screen,
  alt,
  sizes,
  priority,
  kind = "desktop",
  className,
}: {
  locale: Locale;
  screen: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  kind?: keyof typeof SIZES;
  className?: string;
}) {
  const common = { alt, sizes, quality: 90, ...SIZES[kind] };
  const {
    props: { srcSet: dark },
  } = getImageProps({ ...common, src: `/screens/${locale}-${screen}-dark.webp` });
  const { props: light } = getImageProps({
    ...common,
    src: `/screens/${locale}-${screen}-light.webp`,
    priority,
  });
  return (
    <picture className={className}>
      <source media="(prefers-color-scheme: dark)" srcSet={dark} sizes={sizes} />
      <img {...light} alt={alt} />
    </picture>
  );
}
