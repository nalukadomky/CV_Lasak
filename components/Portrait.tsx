"use client";

import { useEffect, useState } from "react";

const PHOTO = "/lukas.jpg";
const PLACEHOLDER = "/portrait.svg";

/**
 * Zobrazí profilovou fotografii z /public/lukas.jpg.
 * Dokud tam fotka není (nebo se nenačte), ukáže se elegantní
 * placeholder (portrait.svg). Test probíhá až po připojení komponenty,
 * aby chyba načtení při SSR nezůstala „zamrzlá“.
 */
export default function Portrait() {
  const [src, setSrc] = useState(PLACEHOLDER);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setSrc(PHOTO);
    img.onerror = () => setSrc(PLACEHOLDER);
    img.src = PHOTO;
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Lukáš Lasák"
      className="h-full w-full object-cover object-center"
      loading="eager"
      decoding="async"
    />
  );
}
