export const setAttribute = (qualifiedName: string, value: string): void => {
    globalThis.document.documentElement.setAttribute(qualifiedName, value)
  }
export const getAttribute = (qualifiedName: string): string | null => {
    return globalThis.document.documentElement.getAttribute(qualifiedName)
  }
