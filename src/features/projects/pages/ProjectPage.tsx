import { useState } from 'react';
import type { Project } from '@/features/projects/data/projects';
import { PROJECT_DATA } from '@/features/projects/data/projects';

export const ProjectPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 uppercase">
            CRA에서 진행된 프로젝트 둘러보기
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECT_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_#70b1f2] hover:shadow-[3px_3px_0px_0px_#70b1f2] hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border-b-2 border-black">
                <span className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-bold px-2.5 py-1 rounded-md border border-white">
                  {project.term}
                </span>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-[20px] font-black mb-2 text-black line-clamp-1 group-hover:text-[#388bdd] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm font-medium line-clamp-2 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] bg-black text-white font-bold px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {PROJECT_DATA.length === 0 && (
          <p className="text-center text-gray-500 font-bold my-20">
            등록된 프로젝트가 없습니다.
          </p>
        )}
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border-4 border-black rounded-3xl max-w-2xl w-full overflow-hidden shadow-[12px_12px_0px_0px_#70b1f2] relative text-black animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-black hover:bg-black hover:text-white text-xl z-10 bg-white border-2 border-black w-8 h-8 rounded-full flex items-center justify-center font-black transition-colors"
            >
              &times;
            </button>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full aspect-[16/9] object-cover border-b-4 border-black"
            />
            <div className="p-8">
              <span className="text-sm font-bold bg-[#70b1f2] text-black border border-black px-2 py-0.5 rounded-md inline-block">
                {activeProject.term} 기수 프로젝트
              </span>
              <h3 className="text-3xl font-black mt-2 mb-4 text-black">
                {activeProject.title}
              </h3>
              <p className="text-gray-800 font-medium leading-relaxed mb-8">
                {activeProject.description}
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 bg-gray-100 text-black border-2 border-black rounded-xl hover:bg-gray-200 text-sm font-bold transition-colors"
                >
                  닫기
                </button>
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-[#70b1f2] hover:bg-[#388bdd] text-white border-2 border-black rounded-xl text-sm font-black inline-block text-center shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    GitHub 방문
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
