import type { Project } from '@/features/projects/data/projects';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white border-4 border-black rounded-3xl max-w-2xl w-full overflow-hidden shadow-[12px_12px_0px_0px_#70b1f2] relative text-black animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:bg-black hover:text-white z-10 bg-white border-2 border-black w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X size={20} strokeWidth={3} />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover border-b-4 border-black"
        />

        <div className="p-8">
          <span className="text-sm font-bold bg-primary text-black border border-black px-2 py-0.5 rounded-md inline-block">
            {project.term} 기수 프로젝트
          </span>
          <h3 className="text-3xl font-black mt-2 mb-4 text-black">{project.title}</h3>
          <p className="text-gray-800 font-medium leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-100 text-black border-2 border-black rounded-xl hover:bg-gray-200 text-sm font-bold shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              닫기
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white border-2 border-black rounded-xl text-sm font-black inline-block text-center shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                GitHub 방문
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
