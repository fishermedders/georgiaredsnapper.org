/**
 * base.js — Runtime base-path detection.
 *
 * Evaluated once when first imported. /RedSnapper_Staging must be checked
 * before /RedSnapper because /RedSnapper is a prefix of /RedSnapper_Staging.
 */

const { pathname } = window.location;

export const BASE = pathname.startsWith("/RedSnapper_Staging")
  ? "/RedSnapper_Staging"
  : pathname.startsWith("/RedSnapper")
    ? "/RedSnapper"
    : "/";

export const IS_STAGING = BASE === "/RedSnapper_Staging";
