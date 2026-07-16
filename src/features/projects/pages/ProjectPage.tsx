import { useState } from 'react';
import { PROJECT_DATA, type Project } from '@/features/projects/data/projects';
import { ProjectCard } from '@/features/projects/components/ProjectCard';
import { ProjectModal } from '@/features/projects/components/ProjectModal';

export const ProjectPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 메인 타이틀 부분 */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 uppercase">
            CRA에서 진행된 프로젝트 둘러보기
          </h2>
        </div>

        {/* 프로젝트 카드 나오는 부분 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECT_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* 누르면 모달 창 렌더링 */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
};
