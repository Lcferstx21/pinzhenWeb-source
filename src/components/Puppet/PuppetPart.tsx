type PuppetPartProps = {
  src: string;
  top: number;
  left: number;
  width: number;
  height: number;
  angle: number;
  origin: string;
  showOriginDot?: boolean;
  OriginDotSmall?: boolean;
  wiggle?: boolean;
};

const PuppetPart: React.FC<PuppetPartProps> = ({
  src,
  top,
  left,
  width,
  height,
  angle,
  origin,
  showOriginDot = false,
  OriginDotSmall = false,
  wiggle = false,
}) => {
  const [originX, originY] = origin.split(" ").map((v) => parseFloat(v));

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `rotate(${angle}deg)`,
          transformOrigin: origin,
          animation: wiggle ? "wiggle 7s infinite ease-in-out" : undefined,
        }}
      >
        {showOriginDot && (
          <img
            src={
              OriginDotSmall
                ? `${import.meta.env.BASE_URL}imgPuppet/RotatePoint2.webp`
                : `${import.meta.env.BASE_URL}imgPuppet/RotatePoint.webp`
            }
            alt="origin"
            style={{
              position: "absolute",
              top: originY,
              left: originX,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />
        )}
        <img src={src} alt="part" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

type NestedPuppetPartProps = PuppetPartProps & {
  children?: React.ReactNode;
  wiggle?: boolean;
};

export const NestedPuppetPart: React.FC<NestedPuppetPartProps> = ({
  src,
  top,
  left,
  width,
  height,
  angle,
  origin,
  showOriginDot = false,
  OriginDotSmall = false,
  children,
  wiggle = false,
}) => {
  const [originX, originY] = origin.split(" ").map((v) => parseFloat(v));

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `rotate(${angle}deg)`,
          transformOrigin: origin,
          animation: wiggle ? "wiggle2 4s infinite ease-in-out" : undefined,
        }}
      >
        {showOriginDot && (
          <img
            src={
              OriginDotSmall
                ? `${import.meta.env.BASE_URL}imgPuppet/RotatePoint2.webp`
                : `${import.meta.env.BASE_URL}imgPuppet/RotatePoint.webp`
            }
            alt="origin"
            style={{
              position: "absolute",
              top: originY,
              left: originX,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />
        )}
        <img src={src} alt="part" style={{ width: "100%", height: "100%" }} />
        {children}
      </div>
    </div>
  );
};

export default PuppetPart;
