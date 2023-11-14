import { NavLinks } from './nav-links'
import { ModeToggle } from './mode-toggle'
import { GitHubButton } from './github-button'

export function Nav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={`flex justify-between items-center h-16 `} {...props}>
      <div className='ml-4'>
        <h3 className="text-xl font-bold cursor-pointer">Erik Celander</h3>
      </div>
      <div className="">
        <NavLinks />
      </div>
      <div className='flex mr-4'>
        <div className='mr-2'>
          <GitHubButton />
        </div>
        <ModeToggle />
      </div>
    </div>
  )
}
