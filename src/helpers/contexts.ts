
import { createContext } from 'react'
import theme from '../theme'
import { ToastProps, ThemeType } from './types'

export const ThemeContext = createContext({
	theme,
	setTheme: (type: ThemeType) => { }
})

export const SortContext = createContext<{ data: any[] | null, sortData: (sortOptions: any) => void }>({
	data: [],
	sortData: (sortOptions: any) => { }
})

export const ToastContext = createContext<{ toastProps: ToastProps, toggleToast: (toastProps: ToastProps) => void }>({
	toastProps: { open: false, message: null },
	toggleToast: (toastProps: any) => { }
})
