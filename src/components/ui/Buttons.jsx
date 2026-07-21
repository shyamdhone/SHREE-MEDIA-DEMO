import { Link } from 'react-router-dom'

const styles = { primary: 'bg-ink text-white shadow-[0_10px_30px_rgba(17,17,17,0.14)] hover:-translate-y-0.5 hover:bg-black', secondary: 'border border-ink/10 bg-white text-ink hover:-translate-y-0.5 hover:border-ink/30' }
const sizes = { sm: 'px-4 py-2 text-xs', md: 'px-5 py-3 text-sm' }
function ButtonBase({ variant, size, className = '', children, ...props }) { return <button className={`inline-flex items-center justify-center rounded-full font-medium transition duration-300 ${styles[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button> }
export function PrimaryButton({ to, ...props }) { return to ? <Link className={`inline-flex items-center justify-center rounded-full font-medium transition duration-300 ${styles.primary} ${sizes[props.size || 'md']}`} to={to}>{props.children}</Link> : <ButtonBase variant="primary" {...props} /> }
export function SecondaryButton({ to, ...props }) { return to ? <Link className={`inline-flex items-center justify-center rounded-full font-medium transition duration-300 ${styles.secondary} ${sizes[props.size || 'md']}`} to={to}>{props.children}</Link> : <ButtonBase variant="secondary" {...props} /> }
