import { useEffect, useState, useRef } from "react";
import PuppetPart from "./PuppetPart";
import { NestedPuppetPart } from "./PuppetPart";

const BASE_WIDTH = 4688;
const BASE_HEIGHT = 2637;

const Puppet = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const widthScale = window.innerWidth / BASE_WIDTH;
      const heightScale = window.innerHeight / BASE_HEIGHT;
      setScale(Math.min(widthScale, heightScale));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="overflow-hidden scrollbar-hide relative mt-8  "
      style={{ height: BASE_HEIGHT * scale, width: BASE_WIDTH * scale }}
    >
      <img
        src={`${import.meta.env.BASE_URL}imgPuppet/baseDrawingNotape.webp`}
        className="origin-top-left"
        style={{
          // width: BASE_WIDTH * scale,
          // height: BASE_HEIGHT * scale,
          // transform: `scale(${scale})`,
          position: "absolute",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
      <div
        ref={containerRef}
        className=" origin-top-left"
        style={{
          width: BASE_WIDTH * scale,
          height: BASE_HEIGHT * scale,
          transform: `scale(${scale})`,
          position: "absolute",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        {/* 头部 */}
        <PuppetPart
          src={`${import.meta.env.BASE_URL}imgPuppet/head.webp`}
          top={303}
          left={1116}
          width={452}
          height={468}
          angle={0}
          origin="168px 170px"
          showOriginDot={true}
          wiggle={true}
        />

        {/* 左腿 */}
        <PuppetPart
          src={`${import.meta.env.BASE_URL}imgPuppet/legL.webp`}
          top={1317}
          left={678}
          width={1016}
          height={678}
          angle={0}
          origin="913px 130px"
          showOriginDot={true}
          wiggle={true}
        />

        {/* handL2G 容器 */}
        <NestedPuppetPart
          src={`${import.meta.env.BASE_URL}imgPuppet/handL2G.webp`}
          top={1620}
          left={2543}
          width={1099}
          height={601}
          angle={0}
          origin="136px 131px"
          showOriginDot={true}
          wiggle={true}
        >
          {/* handL1 前臂 */}
          <PuppetPart
            src={`${import.meta.env.BASE_URL}imgPuppet/handL1.webp`}
            top={331}
            left={288}
            width={811}
            height={270}
            angle={0}
            origin="87px 175px"
            showOriginDot={true}
            wiggle={true}
          />
        </NestedPuppetPart>

        {/* 右臂 handR2 容器 */}
        <NestedPuppetPart
          src={`${import.meta.env.BASE_URL}imgPuppet/handR2G.png`}
          top={202}
          left={2960}
          width={789}
          height={1006}
          angle={0}
          origin="109px 899px"
          showOriginDot={true}
          wiggle={true}
        >
          {/* handR1 前臂 */}
          <PuppetPart
            src={`${import.meta.env.BASE_URL}imgPuppet/handR1.webp`}
            top={0}
            left={411}
            width={378}
            height={778}
            angle={0}
            origin="102px 678px"
            showOriginDot={true}
            wiggle={true}
          />
        </NestedPuppetPart>

        {/* 右腿 */}
        <PuppetPart
          src={`${import.meta.env.BASE_URL}imgPuppet/legR.webp`}
          top={850}
          left={1904}
          width={761}
          height={1119}
          angle={0}
          origin="654px 90px"
          showOriginDot={true}
          wiggle={true}
        />
      </div>
    </div>
  );
};

export default Puppet;
