export const ProjectOrderBy = {
  DATE: 'DATE',
  SEMESTER: 'SEMESTER',
} as const;

export type ProjectOrderBy = (typeof ProjectOrderBy)[keyof typeof ProjectOrderBy];