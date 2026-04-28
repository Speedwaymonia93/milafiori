export const COOKIE_CONSENT_NAME = 'osk_cookie_consent';
export const COOKIE_CONSENT_VALUE = 'accepted';

const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function hasCookieConsent(): boolean {
  if (typeof document === 'undefined') {
    return false;
  }

  return document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .some((cookie) => cookie === `${COOKIE_CONSENT_NAME}=${COOKIE_CONSENT_VALUE}`);
}

export function acceptCookieConsent(): void {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = `${COOKIE_CONSENT_NAME}=${COOKIE_CONSENT_VALUE}; path=/; max-age=${CONSENT_MAX_AGE_SECONDS}; samesite=lax`;
}
