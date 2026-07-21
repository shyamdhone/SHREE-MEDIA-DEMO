import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export function SiteLayout() {
  return <div className="site-shell"><Navbar /><main id="main-content"><Outlet /></main><Footer /></div>
}
