export const ManageTokenCategory = {
  SIGNUP: 'SIGNUP',
  PASSWORD_CHANGE: 'PASSWORD_CHANGE',
  EMAIL_VALID: 'EMAIL_VALID',
} as const;

export type ManageTokenCategory =
  (typeof ManageTokenCategory)[keyof typeof ManageTokenCategory];
