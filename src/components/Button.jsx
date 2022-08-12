import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-primary-light-300 dark:bg-primary-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-primary-light-200 dark:focus:bg-primary-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light-300/50 dark:focus-visible:outline-primary-300/50 active:bg-primary-light-500 dark:active:bg-primary-500',
  secondary:
    'rounded-full bg-dark-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(styles[variant], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
