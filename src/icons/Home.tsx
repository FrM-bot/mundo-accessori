import { type SVGAttributes } from '@builder.io/qwik'

interface Props {
  props?: SVGAttributes<SVGSVGElement>
}

interface Props extends SVGAttributes<SVGSVGElement> { }

export const Home = ({ ...props }: Props) =>
  (
    <svg height="25" viewBox="0 0 21 21" width="25" {...props}>
      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)">
        <path d="m.5 9.5 9-9 9 9" />
        <path d="m2.5 10.5v4c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4" />
      </g>
    </svg>
  )
