import { useState } from "react";

const PrjDetail = ({
  left,
  right,
  bottom,
  onResize,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  bottom?: React.ReactNode;
  onResize?: (percent: number) => void;
}) => {
  const [leftWidthPercent, setLeftWidthPercent] = useState(40); // 初始左侧
  const onlyShowTitle = leftWidthPercent <= 25;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (leftWidthPercent === 5) {
      // 仅标题模式下，点击分割条直接恢复为默认宽度
      setLeftWidthPercent(40);
      onResize?.(40);
      return;
    }

    document.body.style.userSelect = "none"; // 禁止文本选中

    const startX = e.clientX;
    const container = e.currentTarget.parentElement;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const newLeftPercent =
        (((container.offsetWidth * leftWidthPercent) / 100 + deltaX) /
          container.offsetWidth) *
        100;

      let clampedLeftPercent = Math.min(55, newLeftPercent);
      if (leftWidthPercent > 25 && clampedLeftPercent <= 25) {
        // 拖动从内容模式进入仅标题模式，直接变为5%
        clampedLeftPercent = 5;
      } else {
        clampedLeftPercent = Math.max(5, clampedLeftPercent);
      }

      setLeftWidthPercent(clampedLeftPercent);
      onResize?.(clampedLeftPercent);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = ""; // 恢复文本选择
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex w-full h-screen pt-12">
      {/* 左侧区域 */}
      <div
        className="bg-white h-full overflow-hidden relative flex flex-col"
        style={{ flexBasis: `${leftWidthPercent}%` }}
      >
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {left}
        </div>
        {!onlyShowTitle && <div className="h-24 w-full shrink-0">{bottom}</div>}
      </div>

      {/* 可拖动的中间分隔条 */}
      <div className="w-4 flex cursor-col-resize" onMouseDown={handleMouseDown}>
        <div className="w-2 h-full hover:border-r hover:border-black hover: transition"></div>
        <div className="w-2 h-full hover:border-l hover:border-black hover: transition"></div>
      </div>

      {/* 右侧区域 */}
      <div
        className="h-full overflow-auto flex-1 relative"
        style={{ flexBasis: `${100 - leftWidthPercent}%` }}
      >
        {right}
      </div>
    </div>
  );
};

export default PrjDetail;
