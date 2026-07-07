import { useNavigate, useLocation } from "react-router-dom";
import { projects } from "../data/projects";

const IndexPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = location.pathname.split("/").pop(); // 获取当前路径中的 id

  return (
    <div className="w-full pt-12 overflow-x-hidden h-screen">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`cursor-hover-target flex justify-between w-full items-center px-6 md:px-24 py-4 border-t 
            transition-all
            ${
              project.id === currentId
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white hover:scale-105"
            }
          `}
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <div className="font-bold w-1/2 md:w-2/5">{project.title}</div>
          <div
            className="flex gap-2 text-sm font-thin
            w-1/2 md:w-3/5 overflow-visible text-ellipsis whitespace-nowrap"
          >
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="text-sm">{project.year}</div>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
