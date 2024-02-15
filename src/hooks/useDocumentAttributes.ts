import { $ } from '@builder.io/qwik'

export function useDocumentAttributes () {
  const setAttribute = $((qualifiedName: string, value: string): void => {
    globalThis.document.documentElement.setAttribute(qualifiedName, value)
  })
  const getAttribute = $((qualifiedName: string): string | null => {
    return globalThis.document.documentElement.getAttribute(qualifiedName)
  })
  return {
    setAttribute,
    getAttribute
  }
}