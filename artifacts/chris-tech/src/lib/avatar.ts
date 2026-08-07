/**
 * Generates a consistent, colorful "initials" avatar URL for a person,
 * used as a fallback whenever no uploaded photo is available.
 *
 * Same DiceBear "initials" style/version used across the Chris Tech
 * product family for visual consistency.
 */
export function getInitialsAvatarUrl(name: string): string {
  const seed = encodeURIComponent(name.trim());
  return `https://api.dicebear.com/5.x/initials/svg?seed=${seed}`;
}

/**
 * Resolves the avatar to render: an explicit photo if provided,
 * otherwise a generated initials avatar for the given name.
 */
export function resolveAvatarUrl(name: string, photoUrl?: string | null): string {
  return photoUrl && photoUrl.length > 0 ? photoUrl : getInitialsAvatarUrl(name);
}
