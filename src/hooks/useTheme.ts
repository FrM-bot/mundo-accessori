import { useSignal, $, useStylesScoped$ } from '@builder.io/qwik'

const useTheme = () => {
  // 1
  const theme = useSignal('dark')

  // 2
  useStylesScoped$(`
    .dark {
      background: #1d2033;
      color: white;
    }
    .light {
      background: white;
      color: black;
    }
  
    .light, .dark {
      padding: 1rem;
    }
  `)
  
  // 3
  const toggleTheme = $(() => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  })
  
  // 4
  return {
    theme,
    toggleTheme,
  }
}

export default useTheme