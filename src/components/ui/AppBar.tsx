import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CircleUser, Menu, Package2, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Input } from './input'
// import { ModeToggle } from '../mode-toggle'
import { ServiceName } from '@/App'

export function AppBar() {
  const service: ServiceName = window.location.pathname.split(
    '/'
  )[1] as ServiceName
  return (
    <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
      <nav className='hidden flex-row gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <a
          href='/'
          className='flex items-center gap-2 text-lg font-semibold md:text-base'
        >
          <Package2 className='h-6 w-6' />
          <span className='sr-only'>Acme Inc</span>
        </a>
        <a
          href='/service1'
          className={`${service === 'service1' ? 'text-foreground' : 'text-muted-foreground'} whitespace-nowrap transition-colors hover:text-foreground`}
        >
          Service 1
        </a>
        <a
          href='/service2'
          className={`${service === 'service2' ? 'text-foreground' : 'text-muted-foreground'} whitespace-nowrap transition-colors hover:text-foreground`}
        >
          Service 2
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='grid gap-6 text-lg font-medium'>
            <a
              href='/'
              className='flex items-center gap-2 text-lg font-semibold'
            >
              <Package2 className='h-6 w-6' />
              <span className='sr-only'>Acme Inc</span>
            </a>
            <a
              href='/service1'
              className={`${service === 'service1' ? '' : 'text-muted-foreground'} hover:text-foreground`}
            >
              Service 1
            </a>
            <a
              href='/service2'
              className={`${service === 'service2' ? '' : 'text-muted-foreground'} hover:text-foreground`}
            >
              Service 2
            </a>
          </nav>
        </SheetContent>
      </Sheet>

      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <form className='ml-5 flex-1 sm:flex-initial'>
          <div className='relative'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search services...'
              className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
            />
          </div>
        </form>
        {/* <ModeToggle /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='secondary' size='icon' className='rounded-full'>
              <CircleUser className='h-5 w-5' />
              <span className='sr-only'>Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
