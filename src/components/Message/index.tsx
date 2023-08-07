import React from 'react'
import { CloseIcon } from '@root/icons/CloseIcon'

import classes from './index.module.scss'

// const icons = {
//   error: () => <div>!</div>,
//   success: CheckmarkIcon,
//   warning: () => <div>!</div>,
// }

export const Message: React.FC<{
  success?: string | null
  error?: string | null
  warning?: string | null
  className?: string
  margin?: boolean
  cta?: {
    label: string
    route: string
  }
  dismissable?: boolean
}> = ({ error, success, warning, className, margin, dismissable, cta }) => {
  // const type = error ? 'error' : success ? 'success' : 'warning'
  // const Icon = icons[type]

  const [dismissed, setDismissed] = React.useState(false)
  const label = error || success || warning

  if (!dismissed && label) {
    return (
      <div
        className={[
          classes.message,
          error && classes.error,
          success && classes.success,
          warning && classes.warning,
          className,
          margin === false && classes.noMargin,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {/* {Icon && (
          <div className={classes.icon}>
            <Icon />
          </div>
        )} */}
        <p className={classes.label}>
          {label}
          {cta && ' '}
          <a className={classes.cta} href={cta?.route}>
            {cta?.label}
          </a>
        </p>
        {dismissable && (
          <button className={classes.dismissable} onClick={() => setDismissed(true)}>
            <CloseIcon />
          </button>
        )}
      </div>
    )
  }
  return null
}
