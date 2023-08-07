import { Button } from '@components/Button'
import React from 'react'

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
  dismissable?: boolean
}> = ({ error, success, warning, className, margin, dismissable }) => {
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
        <p className={classes.label}>{label}</p>
        {dismissable && (
          <p className={classes.dismissable} onClick={() => setDismissed(true)}>
            Dismiss
          </p>
        )}
      </div>
    )
  }
  return null
}
