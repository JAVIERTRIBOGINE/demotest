import { BLOCKED_TAGS } from './constants/breadcumb';

export function isBloquedTag(tag: string): boolean {
  return BLOCKED_TAGS.includes(tag);
}
