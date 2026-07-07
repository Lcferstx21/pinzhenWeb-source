import { useEffect, useLayoutEffect, useRef, useState } from "react";

type FadeInImageProps = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
};

const FadeInImage = ({
  src,
  alt = "",
  className = "",
  onClick,
}: FadeInImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const media = mediaRef.current;
    if (media) {
      observer.observe(media);
    }

    return () => {
      if (media) observer.unobserve(media);
    };
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (mediaRef.current) {
        const rect = mediaRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const relativeY = rect.top / windowHeight;
        setOffsetY(relativeY * 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the src is a video (mp4)
  const isVideo = src.endsWith(".mp4");

  const baseClass = `transition-all duration-1000 ease-out ${
    isVisible ? "opacity-100" : "opacity-0"
  } ${loaded ? "blur-0" : "blur-[20px]"} ${className}`;

  const style = {
    transform: isVisible
      ? `translateY(${offsetY}px)`
      : "translateY(30px) scale(0.95)",
    willChange: "transform, opacity",
  };

  return isVideo ? (
    <video
      ref={mediaRef as React.RefObject<HTMLVideoElement>}
      className={baseClass}
      style={style}
      controls
      onLoadedData={() => setLoaded(true)}
      onClick={onClick}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img
      ref={mediaRef as React.RefObject<HTMLImageElement>}
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onClick={onClick}
      className={baseClass}
      style={style}
    />
  );
};

export default FadeInImage;
