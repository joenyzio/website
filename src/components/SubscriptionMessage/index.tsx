import { Message } from '@components/Message'
import { Project } from '@root/payload-cloud-types'

export const SubscriptionMessage: React.FC<Project> = ({
  team,
  slug,
  stripeSubscriptionStatus,
  stripeSubscriptionID,
}) => {
  const projectRoute = team && typeof team !== 'string' && `/cloud/${team?.slug}/${slug}`

  // TODO: replace this with a real API call
  const getSubscriptionDetails = () => {
    return {
      daysRemaining: 14,
      nextBillingDate: 'August 16th, 2023',
    }
  }

  if (stripeSubscriptionStatus === 'active') {
    return null
  }

  if (stripeSubscriptionStatus === 'canceled') {
    return <Message error="Your project's subscription has been canceled." />
  }

  if (stripeSubscriptionStatus === 'incomplete') {
    return <Message error="Your project's subscription is incomplete." />
  }

  if (stripeSubscriptionStatus === 'incomplete_expired') {
    return <Message error="Your project's subscription has expired." />
  }

  if (stripeSubscriptionStatus === 'past_due') {
    return (
      <Message
        error="Your payment method is past due. To avoid deletion,"
        cta={{
          label: 'update your payment method',
          route: `${projectRoute}/settings/billing`,
        }}
      />
    )
  }

  if (stripeSubscriptionStatus === 'trialing') {
    const { daysRemaining, nextBillingDate } = getSubscriptionDetails()

    return (
      <Message
        warning={`You have ${daysRemaining} days remaining on your free trial. Your next billling date is ${nextBillingDate}.`}
        cta={{
          label: 'View Billing',
          route: `${slug}/settings/billing`,
        }}
        dismissable
      />
    )
  }

  if (stripeSubscriptionStatus === 'unpaid') {
    return (
      <Message
        error="Your payment method has been declined. Your project will be deleted if you do not add a valid payment method."
        cta={{
          label: 'Update your payment method',
          route: `${projectRoute}/settings/billing`,
        }}
      />
    )
  }

  if (stripeSubscriptionStatus === 'paused') {
    return <Message warning="Your project's subscription has been paused." />
  }

  return null
}
