import { cn } from '@/lib/utils'
import { type SVGAttributes } from '@builder.io/qwik'

interface Props extends SVGAttributes<SVGSVGElement> {
  class?: string

 }

export const User = ({ ...props }: Props) => {
  return (
    <svg width="15" height="15" viewBox="0 0 21 21" fill='currentColor' {...props} class={cn('h-[1.2rem] w-[1.2rem] fill-transparent', props.class)}><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"/></svg>
  )
}
