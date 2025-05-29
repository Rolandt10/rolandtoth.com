import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function GalleryClient() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery--individual",
      children: "a",
      pswpModule: () => import("photoswipe"),
      allowPanToNext: false,
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return null;
}
