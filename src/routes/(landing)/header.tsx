import { DarkMode } from '@/components/dark-mode'
// import { Button } from '@/components/ui/button'
import { User as UserIcon } from '@/icons'
import { Routes } from '@/lib/routes'
import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

const NavLinks = [
  {
    href: Routes.toInventory,
    label: 'Inventory'
  }
]

export const Header = component$(() => {
  return (
    <header class="sticky top-0 z-50 w-full border-b border-border/40 dark:border-neutral-900/40 bg-background/95 dark:bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-14 max-w-screen-xl items-center">
        <div class="mr-4 hidden md:flex gap-x-6">
          <a class="mr-6 flex items-center space-x-2" href="/">
            <span class="hidden font-bold sm:inline-block">
                AppName
            </span>
          </a>
          <nav class="flex items-center gap-6 text-sm">
            {
              NavLinks.map(({ href, label }) => (
                <Link key={label} class="transition-colors hover:text-foreground/80 text-foreground/60 dark:text-white dark:opacity-60 dark:hover:opacity-100 duration-200" href={href}>
                  {label}
                </Link>
              ))
            }
          </nav>
        </div>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R96la:" data-state="closed">
          <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
            <path d="M3 5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
          </svg>
          <span class="sr-only">
            Toggle Menu
          </span>
        </button>
        <div class="flex flex-1 items-center justify-end space-x-2 ">
          <nav class="flex items-center gap-1">
            <Link href={Routes.toSignIn} class='py-2 px-2 dark:text-indigo-200 text-indigo-700 hover:drop-shadow-lg group'>
              <UserIcon />
              <span class="sr-only">Toggle theme</span>
            </Link>
            <DarkMode />
          </nav>
        </div>
      </div>
    </header>
  )
})