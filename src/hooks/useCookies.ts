import { $ } from '@builder.io/qwik'

// In days
const DEFAULT_MAX_AGE = 400

export const getCookieValue = ({ key, cookie }: { key: string, cookie: string | undefined }) => {
  if (!cookie) {
    return null
  }
  const decodedCookie = decodeURIComponent(cookie)
  const listOfCookies = decodedCookie.split(';')
  const cookieKeyValue = listOfCookies.find(cookie => cookie.startsWith(key))
  return cookieKeyValue?.split('=').at(1)
}

export const useCookies = () => {
  const getCookie = $((name: string) => {
    return getCookieValue({ key: name, cookie: globalThis.document.cookie })
  })

  const setCookie = $(({ name, value, maxAge = DEFAULT_MAX_AGE, expires, path }: { name: string, value: string, expires?: string | Date, maxAge?: number, path?: string }) => {
    const day = 60 * 60 * 24
    const baseCookie = {
      value: `${name}=${value};SameSite=strict;Secure;path=${path}`
    }
    if (maxAge) {
      baseCookie.value += `;max-age=${day * maxAge}`  
    }
    if (expires) {
      baseCookie.value += `;expires=${expires}`
    }

    if (path) {
      baseCookie.value += `;path=${path}`
    }
    document.cookie = baseCookie.value
  })

  return {
    setCookie,
    getCookie
  }
}