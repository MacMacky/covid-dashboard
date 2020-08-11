import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import theme, { createTheme } from './theme'
import { Theme } from '@material-ui/core'
import { ToastProps } from './helpers/types';
import { ThemeContext, ToastContext } from './helpers/contexts'

const CovidApp = () => {
  const [currentTheme, setTheme] = useState<Theme>(theme)
  const [toastProps, setToastProps] = useState<ToastProps>({ message: null, open: false, type: 'error' })

  const toggleTheme = (type: 'dark' | 'light') => {
    setTheme(createTheme(type))
  }

  const toggleToast = (toastProps: ToastProps) => {
    setToastProps(toastProps)
  }

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme: currentTheme, setTheme: toggleTheme }}>
        <ToastContext.Provider value={{ toastProps, toggleToast }}>
          <App theme={currentTheme} toastProps={toastProps} />
        </ToastContext.Provider>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}


ReactDOM.render(
  <CovidApp />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
