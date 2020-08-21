import React from 'react'
import Main from './pages/Main'
import About from './pages/About'
import Toast from './components/Toast'
import Countries from './pages/Countries/index'
import Navbar from './components/Navbar'
import Country from './pages/Country'
import { ToastProps } from './helpers/types'
import { ThemeProvider, Theme } from '@material-ui/core'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'


function App(props: { theme?: Theme, toastProps?: ToastProps }) {
  return (
    <ThemeProvider theme={props.theme as Theme}>
      <Router>
        <Navbar />
        <Toast {...props.toastProps as ToastProps} />
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={Country} path="/countries/:country" />
          <Route component={Countries} path="/countries" />
          <Route component={About} path="/about" />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}



export default App;
