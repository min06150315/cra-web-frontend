import { useState } from 'react';
import type { Project } from '@/features/projects/data/projects';
import { SkeletonCard } from '@/features/projects/components/SkeletonCard';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative h-full">
      {!isImageLoaded && <SkeletonCard />}

      <div
        onClick={onClick}
        className={`group bg-white rounded-2xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_#70b1f2] hover:shadow-[3px_3px_0px_0px_#70b1f2] hover:translate-x-1.25 hover:translate-y-1.25 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full ${
          isImageLoaded ? 'opacity-100' : 'absolute inset-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* 이미지 부분 */}
        <div className="relative aspect-16/10 overflow-hidden bg-gray-100 border-b-2 border-black">
          <span className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-bold px-2.5 py-1 rounded-md border border-white">
            {project.term}
          </span>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
          />
        </div>

        {/* 프로젝트 설명 부분 */}
        <div className="p-6 grow flex flex-col justify-between bg-white">
          <div>
            <h3 className="text-[20px] font-black mb-2 text-black line-clamp-1 group-hover:text-primary-hover transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm font-medium line-clamp-2 mb-6 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 기술 스택 */}
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
    </div>
  );
};
