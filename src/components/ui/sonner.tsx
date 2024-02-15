/** @jsxImportSource react */
// import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'
import { qwikify$ } from '@builder.io/qwik-react'
import { type ComponentProps  } from 'react'

type ToasterProps = ComponentProps<typeof Sonner>

const ReactToaster = ({ ...props }: ToasterProps) => {
  // const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={'system' as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

const Toaster = qwikify$(ReactToaster)

export { Toaster }
