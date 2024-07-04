import { MdArrowForwardIos } from 'react-icons/md'

import Show from '../Show/Show'
import { BreadcrumbsProps } from './BreadCrumb.types'

export function BreadCrumb({ paths, goToPage }: BreadcrumbsProps) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 text-xs font-medium text-text-primary xs:text-sm md:gap-3">
      {paths.map((path) => (
        <div key={path.name}>
          <Show when={!!path.url}>
            <div className="flex items-center gap-2 text-text-description md:gap-3">
              <button
                className="w-fit text-text-description"
                onClick={() => goToPage(path.url)}
              >
                {path.name}
              </button>
              <MdArrowForwardIos size={10} />
            </div>
          </Show>

          <Show when={!!path.action}>
            <div className="flex items-center gap-2 text-text-description md:gap-3">
              <span
                onClick={path.action}
                tabIndex={1}
                className="cursor-pointer"
              >
                {path.name}
              </span>
              <MdArrowForwardIos size={10} />
            </div>
          </Show>

          <Show when={!path.url && !path.action}>
            <span className="font-semibold">{path.name}</span>
          </Show>
        </div>
      ))}
    </div>
  )
}
