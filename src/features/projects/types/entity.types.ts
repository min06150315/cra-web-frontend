import type { ResTagDto } from "@/features/tag/types";
import type { BaseEntity } from "@/types/common.types";

export interface Project extends BaseEntity {
  semester: string;
  teamName: string;
  serviceName: string;
  content: string;
  gitHubUrl?: string;
  serviceUrl?: string;
  members: string[];
  imageUrl?: string;
  tags: ResTagDto[];
}