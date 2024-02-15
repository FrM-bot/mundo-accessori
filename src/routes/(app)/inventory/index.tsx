import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { routeLoader$ } from '@builder.io/qwik-city'
import { Button } from '@/components/ui/button'
import { getJoke } from '@/services'
import { toast } from 'sonner'
import { Endpoints } from '@/services/endpoints'

export const useJoke = routeLoader$(async () => {
  const response = await getJoke(Endpoints.joke, {
    headers: {
      Accept: 'application/json'
    }
  })
  return response
})

export default component$(() => {
  const inventory = useJoke()

  return (
    <div class='min-h-[70vh] md:grid md:grid-cols-[.4fr,1fr] flex flex-col gap-4'>
      <div>
        {JSON.stringify(inventory)}
      </div>
      <div class='flex gap-2'>
        <Button class='h-fit' onClick$={() => toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })}>Sooner</Button>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Inventory',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
}
