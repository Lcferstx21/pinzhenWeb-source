import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import type { ProjectItem } from "../data/projects";
import ResizableLayout from "../components/ResizableLayout";
import FadeInImage from "../components/FadeInImage";

const PrjDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project: ProjectItem | undefined = projects.find((p) => p.id === id);
  const rightRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const [leftWidth, setLeftWidth] = useState(40);
  const onlyShowTitle = leftWidth <= 25;

  // 如果项目不存在，自动跳转回首页
  useEffect(() => {
    if (!project) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [project, navigate]);

  // Scroll rightRef to top when id changes
  useEffect(() => {
    rightRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  // 如果项目不存在，直接返回 null
  if (!project) return null;

  const groupedImages = [];
  if (project.images) {
    for (let i = 0; i < project.images.length; i++) {
      const current = project.images[i];
      const next = project.images[i + 1];
      if (current.size === "small" && next?.size === "small") {
        groupedImages.push([current, next]);
        i++; // skip next
      } else {
        groupedImages.push(current);
      }
    }
  }
  // Use allImages for fullscreen display and navigation
  const allImages = project.images || [];

  return (
    <>
      {isFullscreen && fullscreenIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-5 right-8 z-50 bg-none"
          >
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 23L26 1" stroke="white" />
              <path d="M26 23L1 1" stroke="white" />
            </svg>
          </button>

          {/* 全屏图片或视频，马赛克模糊加载和翻页动画 */}
          {typeof allImages[fullscreenIndex].src === "string" &&
          allImages[fullscreenIndex].src.endsWith(".mp4") ? (
            <video
              key={fullscreenIndex}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[90vw] object-contain mb-4 transition-all duration-700 ease-in-out"
            >
              <source src={allImages[fullscreenIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              key={fullscreenIndex}
              src={allImages[fullscreenIndex].src}
              alt="fullscreen"
              className="max-h-[90vh] max-w-[90vw] object-contain mb-4 transition-all duration-700 ease-in-out blur-[80px] scale-110 will-change-filter"
              onLoad={(e) => {
                e.currentTarget.classList.remove("blur-[80px]", "scale-110");
                e.currentTarget.classList.add("blur-0", "scale-100");
              }}
            />
          )}

          <div className="flex justify-between w-full absolute bottom-10 px-10">
            <button
              onClick={() =>
                setFullscreenIndex(
                  (fullscreenIndex - 1 + allImages.length) % allImages.length
                )
              }
              className="bg-none"
            >
              <svg
                width="38"
                height="8"
                viewBox="0 0 38 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M38 1H2L9 7.5" stroke="white" />
              </svg>
            </button>
            <button
              onClick={() =>
                setFullscreenIndex((fullscreenIndex + 1) % allImages.length)
              }
              className="bg-none"
            >
              <svg
                width="38"
                height="8"
                viewBox="0 0 38 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 1H36.5L29.5 7.5" stroke="white" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <ResizableLayout
        left={
          <div className="relative h-full flex flex-col">
            {/* 左侧主要内容 */}
            <div
              className={`pt-6 flex-1 overflow-y-auto scrollbar-hide ${
                onlyShowTitle ? "pl-1 md:pl-4" : "px-2 md:px-16"
              }`}
            >
              <div className="transition-all duration-700 ease-in-out">
                <h1
                  className={`uppercase font-bold  origin-left transition-all duration-700 ease-in-out ${
                    onlyShowTitle
                      ? "md:text-2xl lg:text-4xl writing-vertical title-vertical"
                      : "text-4xl"
                  }`}
                  style={
                    onlyShowTitle
                      ? {
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          textAlign: "left",
                        }
                      : {}
                  }
                >
                  {project.title}
                </h1>
              </div>

              {!onlyShowTitle && (
                <>
                  <p className="font-bold mb-8 capitalize">
                    {project.subtitle}
                  </p>

                  <div className="text-sm font-light whitespace-pre-wrap pb-10">
                    {typeof project.description === "string"
                      ? project.description
                      : project.description.map((part, idx) =>
                          part.bold ? (
                            <span key={idx} style={{ fontWeight: "bold" }}>
                              {part.text}
                            </span>
                          ) : (
                            <span key={idx}>{part.text}</span>
                          )
                        )}
                  </div>
                  <div className="mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-block mr-3 font-thin">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        }
        // 左侧底部次要信息
        bottom={
          !onlyShowTitle && (
            <div className="h-full flex mx-1 md:mx-8 py-2 text-sm gap-1  justify-between border-t border-black ">
              {project.instructors.length > 0 && (
                <div>
                  <div className="text-xs font-semibold pt-1 pb-2">
                    INSTRUCTORS
                  </div>
                  {project.instructors.map((name) => (
                    <div
                      key={name}
                      className="text-[10px] leading-tight whitespace-pre-line"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}

              {project.collaborator && (
                <div
                  className={`${
                    project.instructors.length === 0
                      ? "text-left"
                      : "text-center"
                  }`}
                >
                  <div className="text-xs font-semibold pt-1 pb-2">
                    COLLABORATOR
                  </div>
                  <div className="text-[10px] leading-tight whitespace-pre-line">
                    {project.collaborator}
                  </div>
                </div>
              )}

              {project.location && (
                <div
                  className={`${
                    project.instructors.length === 0 && !project.collaborator
                      ? "text-left"
                      : "text-center"
                  }`}
                >
                  <div className="text-xs font-semibold pt-1 pb-2">
                    LOCATION
                  </div>
                  <div className="text-[10px] leading-tight whitespace-pre-line">
                    {project.location}
                  </div>
                </div>
              )}

              <div
                className={`${
                  project.instructors.length === 0 &&
                  !project.collaborator &&
                  !project.location
                    ? "text-left"
                    : "text-right"
                }`}
              >
                <div className="text-xs font-semibold pt-1 pb-2">YEAR</div>
                <div className="text-[10px] leading-tight">{project.term}</div>
              </div>
            </div>
          )
        }
        // 右侧图片
        right={
          <div className="relative h-full">
            <div
              className="flex flex-col gap-6 md:gap-10 lg:gap-16 overflow-y-auto h-full px-4 bg-white "
              ref={rightRef}
            >
              {groupedImages.map((group, index) => {
                if (Array.isArray(group)) {
                  // two small images in a row
                  return (
                    <div
                      key={index}
                      className="flex w-full gap-8 items-stretch"
                    >
                      {group.map((img, i) => (
                        <div
                          key={i}
                          className=""
                          style={{
                            flexGrow: 1,
                          }}
                        >
                          <FadeInImage
                            src={img.src}
                            className="cursor-hover-target object-contain h-full w-full"
                            onClick={() => {
                              const allIndex = allImages.findIndex(
                                (imgObj) => imgObj.src === img.src
                              );
                              setIsFullscreen(true);
                              setFullscreenIndex(allIndex);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  );
                } else {
                  // single large image or video
                  return (
                    <FadeInImage
                      key={index}
                      src={group.src}
                      alt={`${project.title} ${index + 1}`}
                      className="cursor-hover-target w-full object-contain"
                      onClick={() => {
                        const allIndex = allImages.findIndex(
                          (imgObj) => imgObj.src === group.src
                        );
                        setIsFullscreen(true);
                        setFullscreenIndex(allIndex);
                      }}
                    />
                  );
                }
              })}

              <button
                className="cursor-none absolute bottom-4 right-4 h-[40px] w-[40px] rounded-full hover:border hover:border-black hover:bg-white flex items-center justify-center z-10 hover:scale-105 transition-transform duration-300 ease-in-out bg-transparent mix-blend-difference text-white hover:text-black hover:mix-blend-normal"
                onClick={() => {
                  rightRef.current?.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <svg
                  width="9"
                  height="28"
                  viewBox="0 0 9 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 28V3L9 10.8082"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </button>

              {/* 后一个项目 */}
              {(() => {
                const currentIndex = projects.findIndex((p) => p.id === id);
                const nextProject =
                  projects[(currentIndex + 1) % projects.length];
                return (
                  <div
                    onClick={() => navigate(`/project/${nextProject.id}`)}
                    className="z-10 font-medium self-end cursor-hover-target hover:underline my-10 mt-12 mr-16"
                  >
                    <svg
                      className="inline-block mr-2"
                      width="33"
                      height="9"
                      viewBox="0 0 33 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-8.64267e-07 0.999999L30 1L22.1918 8"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                    Next Project
                  </div>
                );
              })()}
            </div>
          </div>
        }
        onResize={(percent) => setLeftWidth(percent)}
      />
    </>
  );
};

export default PrjDetail;
