import { publicClient, privateClient } from '@/api/client';
import type {
  ReqCreateProjectDto,
  ReqGetProjectListParams,
  ReqUpdateProjectDto,
  ResCreateProjectDto,
  ResDetailProjectDto,
  ResPageProjectDto,
  ResUpdateProjectDto,
} from '@/features/projects/types';

// 프로젝트 리스트 조회 (인증 X)
export const getProjectList = async ({
  page,
  perPage = 5,
  orderBy,
  isASC = true,
}: ReqGetProjectListParams): Promise<ResPageProjectDto> => {
  const { data } = await publicClient.get<ResPageProjectDto>(
    `/api/project/list/${page}`,
    {
      params: { perPage, orderBy, isASC },
    },
  );
  return data;
};

// 프로젝트 상세 조회 (인증 X)
export const getProjectDetail = async (
  projectId: number,
): Promise<ResDetailProjectDto> => {
  const { data } = await publicClient.get<ResDetailProjectDto>(
    `/api/project/view/${projectId}`,
  );
  return data;
};

// 프로젝트 생성 (인증 O)
export const createProject = async (
  dto: ReqCreateProjectDto,
): Promise<ResCreateProjectDto> => {
  const { data } = await privateClient.post<ResCreateProjectDto>(
    '/api/admin/project',
    dto,
  );
  return data;
};

// 프로젝트 수정
export const updateProject = async (
  projectId: number,
  dto: ReqUpdateProjectDto,
): Promise<ResUpdateProjectDto> => {
  const { data } = await privateClient.put<ResUpdateProjectDto>(
    `/api/admin/project/${projectId}`,
    dto,
  );
  return data;
};

// 프로젝트 삭제
export const deleteProject = async (projectId: number): Promise<void> => {
  await privateClient.delete(`/api/admin/project/${projectId}`);
};
