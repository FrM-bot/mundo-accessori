import { cn } from '@/lib/utils'
import { component$, Slot, type ButtonHTMLAttributes } from '@builder.io/qwik'

const Variants = {
  primary: 'bg-indigo-300/30 dark:bg-neutral-950 dark:text-indigo-200 dark:hover:bg-neutral-950 dark:hover:border-indigo-500 dark:border-indigo-800 dark:hover:shadow-indigo-700/10 px-[.8rem] py-[.4rem] text-indigo-800 hover:text-indigo-500 fill-transparent rounded-md disabled:opacity-60 disabled:cursor-not-allowed border shadow-md hover:shadow-lg border-indigo-600 hover:border-indigo-300 hover:bg-indigo-200/30 active:tracking-wide duration-200',
  text: 'hover:text-black duration-200 disabled:opacity-60 dark:hover:text-indigo-600 disabled:cursor-not-allowed',
  secondary: 'bg-white/50 text-black px-[.8rem] py-[.4rem] rounded-md border border-black hover:bg-white/80 disabled:opacity-60 disabled:cursor-not-allowed hover:border-black/50 shadow-none shadow hover:shadow-xl hover:bg-neutral-50 active:bg-neutral-100 active:shadow-none active:tracking-wide duration-200',
  tertiary: 'hover:text-black bg-white shadow-md border border-neutral-200 duration-200 p-2 rounded-md hover:shadow-lg active:shadow-md active:border-neutral-100 disabled:opacity-60 disabled:cursor-not-allowed',
  error: 'text-black duration-200 px-[1rem] py-[.4rem] border border-pink-500 text-pink-500 rounded-md bg-pink-50/90 shadow-lg shadow-neutral-100 dark:shadow-neutral-950 hover:shadow-pink-600/10 dark:hover:shadow-pink-600/10 dark:bg-pink-600/10 block hover:bg-pink-100/90'
}

export type ButtonVariant = keyof typeof Variants

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const Button = component$(({ variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      class={cn(Variants[variant], props.class ?? '')}
    >
      <Slot />
    </button>
  )
})

export { Button }
