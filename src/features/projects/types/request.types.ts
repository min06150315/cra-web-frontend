import type { ProjectOrderBy } from '@/features/projects/types';

export interface ReqCreateProjectDto {
  semester: string;
  teamName: string;
  serviceName: string;
  content: string;
  gitHubUrl?: string;
  serviceUrl?: string;
  members: string[];
  imageUrl?: string;
  tagNames?: string[];
}

export interface ReqUpdateProjectDto {
  semester?: string;
  teamName?: string;
  serviceName?: string;
  content?: string;
  gitHubUrl?: string;
  serviceUrl?: string;
  members?: string[];
  imageUrl?: string;
  deleted?: boolean;
  tagNames?: string[];
}

export interface ReqGetProjectListParams {
  page: number;
  perPage: number;
  orderBy: ProjectOrderBy;
  isASC: boolean;
}
