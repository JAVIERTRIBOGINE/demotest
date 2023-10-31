export enum TAGS {
  ADMIN = 'admin',
  HOME = 'home',
  ACCOUNTS = 'accounts',
  READ = 'read',
  DETAIL = 'detail',
  LOGIN = 'login',
}

export const BLOCKED_TAGS: string[] = [TAGS.HOME, TAGS.READ];

export const ROOT_ADMIN_SEGMENT = '/admin';
