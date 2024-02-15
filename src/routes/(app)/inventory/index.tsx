import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { routeLoader$ } from '@builder.io/qwik-city'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { db } from '@/lib/db'
// import { getJoke } from '@/services'
// import { Endpoints } from '@/services/endpoints'
// import { products } from '@/lib/db/schema'

export const useProducts = routeLoader$(async () => {
  try {
    const products = await db.product?.findMany({
      include: {
        item: true
      }
    })
    return products
  } catch (error) {
    console.error(error)
    return []
  }
})

export default component$(() => {
  const inventory = useProducts()

  return (
    <div class='min-h-[70vh] md:grid md:grid-cols-[.4fr,1fr] flex flex-col gap-4'>
      <section class='border dark:border-neutral-800 p-4 rounded-lg sticky top-0 shadow-lg'>
        filters here
      </section>
      <div class='flex gap-2 flex-col'>
        {
          inventory.value.map(product => (
            <article class='rounded-lg border shadow-lg p-4 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:shadow-indigo-800/5' key={product.productId}>
              <h2 class='mb-4'>{product.name}</h2>
              <div class='flex gap-4 my-4'>
                <div class='flex flex-col gap-2'>
                  <span>Items</span>
                  <span>
                    {
                      product.item.length
                    }
                  </span>
                </div>
                <div class='flex flex-col gap-2'>
                  <span>Cantidad</span>
                  <span>
                    {
                      product.item.reduce((total, item) => total + item.quantity, 0)
                    }
                  </span>
                </div>
                <div class='flex flex-col gap-2'>
                  <span>Precio</span>
                  <span>
                    {
                      Number(product.item?.at(0)?.price) || 'N/A'
                    }
                  </span>
                </div>
              </div>
              <Button class='h-fit w-full' onClick$={() => toast('Event has been created', {
                description: 'Sunday, December 03, 2023 at 9:00 AM',
                action: {
                  label: 'Undo',
                  onClick: () => console.log('Undo'),
                },
              })}>Hacer oferta</Button>
            </article>
          ))
        }
        {/* <Button class='h-fit' onClick$={() => toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })}>Sooner</Button> */}
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
