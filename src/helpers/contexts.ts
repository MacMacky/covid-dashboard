
import { createContext } from 'react'
import theme from '../theme'

export const ThemeContext = createContext({
  theme,
  setTheme: (type: 'dark' | 'light') => { }
})

export const SortContext = createContext<{ data: any[] | null, sortData: (sortOptions: any) => void }>({
  data: [],
  sortData: (sortOptions: any) => { }
})

