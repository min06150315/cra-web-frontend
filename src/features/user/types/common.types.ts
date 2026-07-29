export const UserRole = {
  ADMIN: 'ROLE_ADMIN',
  USER: 'ROLE_USER',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
