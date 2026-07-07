import { useState, useEffect } from "react";
import { useRef } from "react";
const imageList = [
  {
    id: "G1",
    src: `${import.meta.env.BASE_URL}img/gallery/G1.webp`,
    style: { top: "0.0%", left: "7.47%" },
    prjId: "sister-no-sister",
  },
  {
    id: "G2",
    src: `${import.meta.env.BASE_URL}img/gallery/G2.webp`,
    style: { top: "0.26%", left: "64.09%" },
    prjId: "sister-no-sister",
  },
  {
    id: "G3",
    src: `${import.meta.env.BASE_URL}img/gallery/G3.webp`,
    style: { top: "3.92%", left: "58.0%" },
    prjId: "sister-no-sister",
  },
  {
    id: "G4",
    src: `${import.meta.env.BASE_URL}img/gallery/G4.webp`,
    style: { top: "5.45%", left: "7.21%" },
    prjId: "sister-no-sister",
  },
  {
    id: "G5",
    src: `${import.meta.env.BASE_URL}img/gallery/G5.webp`,
    style: { top: "6.15%", left: "44.25%" },
    prjId: "sister-no-sister",
  },
  {
    id: "G6",
    src: `${import.meta.env.BASE_URL}img/gallery/G6.webp`,
    style: { top: "10.61%", left: "6.22%" },
    prjId: "library-of-silenced-voices",
  },
  {
    id: "G7",
    src: `${import.meta.env.BASE_URL}img/gallery/G7.webp`,
    style: { top: "10.87%", left: "57.14%" },
    prjId: "library-of-silenced-voices",
  },
  {
    id: "G8",
    src: `${import.meta.env.BASE_URL}img/gallery/G8.webp`,
    style: { top: "15.12%", left: "10.38%" },
    prjId: "library-of-silenced-voices",
  },
  {
    id: "G9",
    src: `${import.meta.env.BASE_URL}img/gallery/G9.webp`,
    style: { top: "17.97%", left: "45.04%" },
    prjId: "lobotomized-city",
  },
  {
    id: "G10",
    src: `${import.meta.env.BASE_URL}img/gallery/G10.webp`,
    style: { top: "20.27%", left: "13.1%" },
    prjId: "lobotomized-city",
  },
  {
    id: "G11",
    src: `${import.meta.env.BASE_URL}img/gallery/G11.webp`,
    style: { top: "23.71%", left: "5.49%" },
    prjId: "mirage-in-the-mirror",
  },
  {
    id: "G12",
    src: `${import.meta.env.BASE_URL}img/gallery/G12.webp`,
    style: { top: "23.71%", left: "38.69%" },
    prjId: "mirage-in-the-mirror",
  },
  {
    id: "G13",
    src: `${import.meta.env.BASE_URL}img/gallery/G13.webp`,
    style: { top: "27.8%", left: "7.28%" },
    prjId: "mirage-in-the-mirror",
  },
  {
    id: "G14",
    src: `${import.meta.env.BASE_URL}img/gallery/G14.webp`,
    style: { top: "27.8%", left: "63.69%" },
    prjId: "mirage-in-the-mirror",
  },
  {
    id: "G15",
    src: `${import.meta.env.BASE_URL}img/gallery/G15.webp`,
    style: { top: "31.37%", left: "15.15%" },
    prjId: "mirage-in-the-mirror",
  },
  {
    id: "G16",
    src: `${import.meta.env.BASE_URL}img/gallery/G16.webp`,
    style: { top: "34.02%", left: "69.44%" },
    prjId: "mirage-in-the-mirror",
  },
  {
    id: "G17",
    src: `${import.meta.env.BASE_URL}img/gallery/G17.webp`,
    style: { top: "37.1%", left: "5.49%" },
    prjId: "fishing-house",
  },
  {
    id: "G18",
    src: `${import.meta.env.BASE_URL}img/gallery/G18.webp`,
    style: { top: "36.65%", left: "37.96%" },
    prjId: "fishing-house",
  },
  {
    id: "G19",
    src: `${import.meta.env.BASE_URL}img/gallery/G19.webp`,
    style: { top: "42.5%", left: "40.34%" },
    prjId: "mass-of-glow",
  },
  {
    id: "G20",
    src: `${import.meta.env.BASE_URL}img/gallery/G20.webp`,
    style: { top: "45.0%", left: "5.89%" },
    prjId: "mass-of-glow",
  },
  {
    id: "G21",
    src: `${import.meta.env.BASE_URL}img/gallery/G21.webp`,
    style: { top: "49.39%", left: "58.27%" },
    prjId: "orpheus-and-eurydice",
  },
  {
    id: "G22",
    src: `${import.meta.env.BASE_URL}img/gallery/G22.webp`,
    style: { top: "50.22%", left: "5.89%" },
    prjId: "orpheus-and-eurydice",
  },
  {
    id: "G23",
    src: `${import.meta.env.BASE_URL}img/gallery/G23.webp`,
    style: { top: "54.7%", left: "58.4%" },
    prjId: "orpheus-and-eurydice",
  },
  {
    id: "G24",
    src: `${import.meta.env.BASE_URL}img/gallery/G24.webp`,
    style: { top: "57.6%", left: "4.63%" },
    prjId: "through-veiled-eyes",
  },
  {
    id: "G25",
    src: `${import.meta.env.BASE_URL}img/gallery/G25.webp`,
    style: { top: "60.89%", left: "51.06%" },
    prjId: "through-veiled-eyes",
  },
  {
    id: "G26",
    src: `${import.meta.env.BASE_URL}img/gallery/G26.webp`,
    style: { top: "61.61%", left: "2.78%" },
    prjId: "through-veiled-eyes",
  },
  {
    id: "G27",
    src: `${import.meta.env.BASE_URL}img/gallery/G27.webp`,
    style: { top: "65.69%", left: "25.0%" },
    prjId: "phantom-of-chapel",
  },
  {
    id: "G28",
    src: `${import.meta.env.BASE_URL}img/gallery/G28.webp`,
    style: { top: "71.54%", left: "9.39%" },
    prjId: "phantom-of-chapel",
  },
  {
    id: "G29",
    src: `${import.meta.env.BASE_URL}img/gallery/G29.webp`,
    style: { top: "72.58%", left: "72.62%" },
    prjId: "phantom-of-chapel",
  },
  {
    id: "G30",
    src: `${import.meta.env.BASE_URL}img/gallery/G30.webp`,
    style: { top: "76.08%", left: "9.39%" },
    prjId: "anna-in-the-tropic",
  },
  {
    id: "G31",
    src: `${import.meta.env.BASE_URL}img/gallery/G31.webp`,
    style: { top: "81.0%", left: "57.87%" },
    prjId: "anna-in-the-tropic",
  },
  {
    id: "G32",
    src: `${import.meta.env.BASE_URL}img/gallery/G32.webp`,
    style: { top: "82.89%", left: "6.81%" },
    prjId: "opera-of-heent",
  },
  {
    id: "G33",
    src: `${import.meta.env.BASE_URL}img/gallery/G33.webp`,
    style: { top: "87.06%", left: "26.39%" },
    prjId: "hedda-gabler",
  },
  {
    id: "G34",
    src: `${import.meta.env.BASE_URL}img/gallery/G34.webp`,
    style: { top: "91.92%", left: "6.81%" },
    prjId: "hedda-gabler",
  },
  {
    id: "G35",
    src: `${import.meta.env.BASE_URL}img/gallery/G35.webp`,
    style: { top: "94.34%", left: "3.7%" },
    prjId: "bubbeled-tears",
  },
  {
    id: "G36",
    src: `${import.meta.env.BASE_URL}img/gallery/G36.webp`,
    style: { top: "95.15%", left: "60.91%" },
    prjId: "bubbeled-tears",
  },
];
import { Link } from "react-router-dom";
import InteractiveLine from "../components/InteractiveLine";
import InteractivePuppet from "../components/InteractivePuppet";

const GalleryPage = () => {
  const [imageSizes, setImageSizes] = useState<{ [key: string]: number }>({});
  const [scale, setScale] = useState(1);
  const scaledRef = useRef<HTMLDivElement>(null); // 🔸 被 scale 的子容器
  const containerRef = useRef<HTMLDivElement>(null); // 🔸 父容器

  useEffect(() => {
    const updateScale = () => {
      const newScale = window.innerWidth / 1512;
      setScale(newScale);

      if (scaledRef.current && containerRef.current) {
        const rawHeight = scaledRef.current.offsetHeight;
        containerRef.current.style.height = `${rawHeight * newScale}px`;
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (scaledRef.current && containerRef.current) {
      const rawHeight = scaledRef.current.offsetHeight;
      containerRef.current.style.height = `${rawHeight * scale}px`;
    }
  }, [scale]);

  const handleLoad = (
    e: React.SyntheticEvent<HTMLImageElement>,
    id: string
  ) => {
    const img = e.currentTarget;
    const originalWidth = img.naturalWidth;
    setImageSizes((prev) => ({ ...prev, [id]: originalWidth / 4 }));
  };

  return (
    <div className="w-full overflow-hidden bg-white" ref={containerRef}>
      <div className="h-14"></div>

      <div className="h-24"></div>

      <div
        ref={scaledRef}
        className="relative "
        style={{
          width: "1512px",
          height: `${(16030 / 1512) * 1512}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* 缓动的线 */}
        <InteractiveLine />
        {/* puppet */}
        <InteractivePuppet />
        {imageList.map((img) => (
          <Link
            to={`/project/${img.prjId}`}
            key={img.id}
            className="cursor-none"
          >
            <div
              className="absolute"
              style={{
                top: img.style?.top || "0%",
                left: img.style?.left || "0%",
              }}
            >
              <img
                src={img.src}
                alt={`Gallery ${img.id}`}
                loading="lazy"
                onLoad={(e) => handleLoad(e, img.id)}
                style={{
                  width: imageSizes[img.id]
                    ? `${imageSizes[img.id]}px`
                    : "auto",
                  height: "auto",
                  objectFit: "contain",
                  maxWidth: "100%",
                }}
              />
            </div>
          </Link>
        ))}
      </div>

      <button
        className="cursor-none fixed bottom-4 right-4 h-[40px] w-[40px] rounded-full hover:border hover:border-black hover:bg-white flex items-center justify-center z-10 hover:scale-105 transition-transform duration-300 ease-in-out bg-transparent mix-blend-difference text-white hover:text-black hover:mix-blend-normal"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <svg
          width="9"
          height="28"
          viewBox="0 0 9 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 28V3L9 10.8082" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>
    </div>
  );
};

export default GalleryPage;
