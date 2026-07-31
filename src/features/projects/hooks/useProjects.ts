import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getProjectList,
  getProjectDetail,
  createProject,
  updateProject,
  deleteProject,
} from '@/features/projects/api/project.api';
import type {
  ReqCreateProjectDto,
  ReqGetProjectListParams,
  ReqUpdateProjectDto,
} from '@/features/projects/types';
import { projectKeys } from './projectKeys';

// 프로젝트 리스트 페이지 조회
export const useProjectListQuery = (params: ReqGetProjectListParams) => {
  return useQuery({
    queryKey: projectKeys.list(params),
    queryFn: () => getProjectList(params),
  });
};

// 프로젝트 상세 조회
export const useProjectDetailQuery = (projectId: number) => {
  return useQuery({
    queryKey: projectKeys.detail(projectId),
    queryFn: () => getProjectDetail(projectId),
    enabled: Boolean(projectId),
  });
};

// 프로젝트 생성
export const useCreateProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: ReqCreateProjectDto) => createProject(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
    },
  });
};

// 프로젝트 수정
export const useUpdateProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ projectId, dto }: { projectId: number; dto: ReqUpdateProjectDto }) =>
      updateProject(projectId, dto),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: projectKeys.detail(variables.projectId),
      });
    },
  });
};

// 프로젝트 삭제
export const useDeleteProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (projectId: number) => deleteProject(projectId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
    },
  });
};
