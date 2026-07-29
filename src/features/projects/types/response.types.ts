import type { ResTagDto } from "@/features/tag/types";
import type { BaseEntity } from "@/types/common.types";

export interface ResCreateProjectDto extends BaseEntity {
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

export interface ResDetailProjectDto {
  id: number;
  semester: string;
  teamName: string;
  serviceName: string;
  content: string;
  gitHubUrl?: string;
  serviceUrl?: string;
  members: string[];
  imageUrl?: string;
  tags: ResTagDto[];
  deleted: boolean;
  createAt: string;  // 명세 오탈자(createAt) 반영
  updatedAt?: string;
}

export interface ResListProjectDto {
  id: number;
  semester: string;
  teamName: string;
  serviceName: string;
  members: string[];
  imageUrl?: string;
  tags: ResTagDto[];
  deleted: boolean;
  createAt: string;  // 명세 오탈자(createAt) 반영
}

export interface ResPageProjectDto {
  resListProjectDtos: ResListProjectDto[];
  totalPages: number;
}

export interface ResUpdateProjectDto {
  id: number;
  semester: string;
  teamName: string;
  serviceName: string;
  content: string;
  gitHubUrl?: string;
  serviceUrl?: string;
  members: string[];
  imageUrl?: string;
  tags: ResTagDto[];
  deleted: boolean;
  createAt: string;  // 명세 오탈자(createAt) 반영
  updatedAt?: string;
}