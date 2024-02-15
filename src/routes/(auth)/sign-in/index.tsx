import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Routes } from '@/lib/routes'
import { component$ } from '@builder.io/qwik'
import { Form, Link } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <section class='grid sm:grid-cols-[.6fr,1fr] grid-cols-1'>
      <div
        class='sm:px-20 xs:px-12 px-6 py-2 flex justify-center pt-20 h-screen border-r border-r-neutral-700 hover:border-r-indigo-800'
      >
        <div class='flex flex-col my-20 sm:w-96 w-full'>
          <div class='mb-10'>
            <h1 class='font-semibold text-3xl'>Inicia sessión</h1>
          </div>
          <Form class="flex flex-col gap-6">
            <Input name='email' type='email' placeholder='your_email@example.com' />
            <Input client:idle name='password' type='password' placeholder='••••••••' /> 
            <Button class="mt-4 font-semibold">Sign Up</Button>
          </Form>
          <div class='text-sm mt-6'>
            <div class='flex gap-2'>
              <p class='opacity-50'>Don't you have an account?</p>
              <Link href={Routes.toSignUp}>Sign in</Link>
            </div>
          </div>
        </div>
      </div>
      <div class='dark:bg-neutral-950/50 bg-gray-50'></div>
    </section>
  )
})