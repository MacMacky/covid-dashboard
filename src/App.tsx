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
          <Route component={Main} path={process.env.PUBLIC_URL} exact />
          <Route component={Country} path={`${process.env.PUBLIC_URL}/countries/:country`} />
          <Route component={Countries} path={`${process.env.PUBLIC_URL}/countries`} />
          <Route component={About} path={`${process.env.PUBLIC_URL}/about`} />
          <Redirect to={process.env.PUBLIC_URL} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}



export default App;
