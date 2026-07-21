import { Link } from 'react-router-dom'

export function Footer() {
  return <footer className="px-4 pb-4 sm:px-6"><div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-3xl bg-ink px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between"><Link className="font-display text-lg font-bold tracking-[-0.06em]" to="/">SHRII MEDIA</Link><p className="text-xs text-white/50">© {new Date().getFullYear()} Shrii Media. All rights reserved.</p></div></footer>
}
