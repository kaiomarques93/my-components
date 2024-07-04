export interface BreadcrumbsProps {
  paths: { name: string; url?: string; action?: () => void }[]
  goToPage: (url?: string) => void
}
