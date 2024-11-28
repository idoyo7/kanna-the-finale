import { ImgHTMLAttributes, useEffect, useRef } from "react";
import Image from "next/image";

import useZoom from "./useZoom";

export default function ZoomableImage(
  props: ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    width: number;
    height: number;
  }
) {
  const { attach, detach } = useZoom();
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const { current: image } = imageRef;

    attach(image);

    return () => {
      detach(image);
    };
  }, [attach, detach]);

  return <Image {...props} alt={props.alt || ""} ref={imageRef} />;
}
