import { cn } from '@/utils/cn'
import { BreadCrumb } from '../BreadCrumb'
import { GoBackButton } from '../GoBackButton'
import { PageTitleProps } from './PageTitle.types'

const PageTitle = ({
  title,
  subtitle,
  className,
  breadcrumbs,
  goBackButtonURL,
  goToPage,
  goToPreviousPage,
  goToBreadCrumbLink,
}: PageTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      {breadcrumbs && (
        <BreadCrumb paths={breadcrumbs} goToPage={goToBreadCrumbLink} />
      )}
      <div className="flex items-center gap-3">
        <GoBackButton
          pageURL={goBackButtonURL}
          goToPreviousPage={goToPreviousPage}
          goToPage={goToPage}
        />
        <div className={cn('flex flex-col tracking-[-0.24px]', className)}>
          <span className="font-semibold lg:text-xl">{title}</span>
          <span
            className={
              'whitespace-nowrap text-xs text-text-description lg:text-sm'
            }
          >
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
