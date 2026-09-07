/**
 * Resolves a path in public/ against the site's base URL.
 *
 * Vite rewrites asset URLs it can see at build time, but paths written as
 * plain strings in src/data/site.js are invisible to it. On GitHub Pages the
 * site is served from /heal/ rather than /, so '/images/x.svg' would 404.
 * Every image goes through here instead.
 *
 * BASE_URL is '/' in dev and whatever `base` is set to in vite.config.js when
 * built, so this is a no-op locally.
 */
export default function asset(path) {
  return (
    import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
  )
}
