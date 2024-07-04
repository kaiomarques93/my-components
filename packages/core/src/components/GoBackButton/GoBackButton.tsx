import { MdChevronLeft } from 'react-icons/md'
import { GoBackButtonProps } from './GoBackButton.types'

const GoBackButton = ({
  pageURL,
  goToPage,
  goToPreviousPage,
}: GoBackButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        if (pageURL) {
          goToPage(pageURL)
        } else {
          goToPreviousPage()
        }
      }}
      className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-x-background-lines"
    >
      <MdChevronLeft />
    </button>
  )
}

export default GoBackButton
