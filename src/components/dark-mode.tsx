import { component$, $ } from '@builder.io/qwik'
import { Sun as SunIcon, Moon as MoonIcon } from '@/icons'
import { Button } from './ui/button'
import { setAttribute, getAttribute } from '@/lib/HTMLdocument'
import { useCookies } from '@/hooks/useCookies'
// import { useDocumentAttributes } from '@/hooks/useDocumentAttributes'

export const DarkMode = component$(() => {
//   const resolver = $(useDocumentAttributes)
//   const promise = resolver()
  const { setCookie } = useCookies()

  const toggleTheme = $(() => {
    const theme = getAttribute('data-theme')

    if (theme === 'dark') {
      setAttribute('data-theme', 'light')
      setCookie({
        name: 'theme',
        value: 'light',
        path: '/'
      })
    }
    
    if (theme === 'light' || !theme) {
      setAttribute('data-theme', 'dark')
      setCookie({
        name: 'theme',
        value: 'dark',
        path: '/'
      })
    }
  })

  return (
    <Button onClick$={toggleTheme} class='py-2 px-2 dark:text-indigo-200 text-indigo-700 hover:drop-shadow-lg group'>
      {/* <span clas
      s='dark:-rotate-90 dark:scale-0 rotate-0 scale-100'>
      </span> */}
      {/* class="flex items-center relative justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0" type="button" id="radix-:R7d6la:" aria-haspopup="menu" aria-expanded="false" data-state="closed" */}
      <SunIcon class='dark:-rotate-90 dark:scale-0 dark:hidden rotate-0 scale-100 group-hover:scale-110 group-hover:[filter:drop-shadow(0px_0px_8px_rgba(67_56_202/_1))] duration-200' />

      {/* <span class='dark:rotate-0 dark:scale-100 rotate-90 scale-0'> */}
      <MoonIcon class='dark:rotate-0 dark:scale-100 dark:flex hidden rotate-90 scale-0 group-hover:scale-110 group-hover:[filter:drop-shadow(0px_0px_8px_rgba(199_210_254/_1))] duration-200' />
      {/* </span> */}
      <span class="sr-only">Toggle theme</span>
    </Button>
  )
})
