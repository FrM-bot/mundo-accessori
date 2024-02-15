import { Routes } from '@/lib/routes'
import { Slot, component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Home as HomeIcon, User as UserIcon } from '@/icons'
 
const Layout = component$(() => {
  return (
    <>
      <header class="pb-4 absolute inset-0 mx-auto h-fit pt-8">
        <div class="sm:mx-20 mx-6 flex justify-between">
          <Link href={Routes.toHome}>
            <HomeIcon />
          </Link>
          <nav>
            <ul>
              <li>
                <UserIcon />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main class='min-h-[80vh] rounded-md md:px-0'>
        <Slot />
      </main>
    </>
  )
})

export default Layout
