import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Routes } from '@/lib/routes'
import { component$ } from '@builder.io/qwik'
import { Form, Link, routeAction$ } from '@builder.io/qwik-city'
// import { db } from '@/lib/db'
import { compareHash, signToken, expiresIn } from '@/lib/utils'

export const useAddUser = routeAction$(async (data) => {
  // This will only run on the server when the user submits the form (or when the action is called programmatically)
  const { email, password } = data as { email: string, password: string } 

  // const user = await db.users.findOne({
  //   where: {
  //     email
  //   }
  // })

  console.log(email)

  const user = {
    email: 'holasdasd@gmail.com',
    password: 'testp[assword'
  }

  if (!user?.email) {
    return {
      error: 'El usuario no está registrado'
    }
  }

  const check = await compareHash({ password, hash: user.password })

  if (!check) {
    return {
      error: 'Error al hacer login'
    }
  }

  const token = signToken({ email: user.email })

  return {
    success: true,
    token,
    expiresIn
  }
})

export default component$(() => {
  const action = useAddUser()

  console.log({ action })

  return (
    <section class='grid sm:grid-cols-[.6fr,1fr] grid-cols-1'>
      <div
        class='sm:px-20 xs:px-12 px-6 py-2 flex justify-center pt-20 h-screen border-r border-r-neutral-700 hover:border-r-indigo-800'
      >
        <div class='flex flex-col my-20 sm:w-96 w-full'>
          <div class='mb-10'>
            <h1 class='font-semibold text-3xl'>Inicia sessión</h1>
          </div>
          <Form action={action} class="flex flex-col gap-6">
            <Input name='email' type='email' placeholder='your_email@example.com' />
            <Input client:idle name='password' type='password' placeholder='••••••••' /> 
            <Button type='submit' class="mt-4 font-semibold">Log In</Button>
          </Form>
          <div class='text-sm mt-6'>
            <div class='flex gap-2'>
              <p class='opacity-50'>Don't you have an account?</p>
              <Link href={Routes.toLogIn}>Log in</Link>
            </div>
          </div>
        </div>
      </div>
      <div class='dark:bg-neutral-950/50 bg-gray-50'></div>
    </section>
  )
})