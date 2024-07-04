export type PageTitleProps = {
  title: string
  subtitle?: string
  className?: string
  breadcrumbs?: { name: string; url?: string; action?: () => void }[]
  goBackButtonURL?: string
  goToPage: (url?: string) => void
  goToPreviousPage: () => void
  goToBreadCrumbLink: (url?: string) => void
}
