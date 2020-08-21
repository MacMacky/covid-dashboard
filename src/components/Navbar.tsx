import React, { useEffect, useState, useContext } from 'react'
import ButtonLink from './ButtonLink'
import { ThemeContext } from '../helpers/contexts'
import { Brightness2Outlined as Moon, WbSunny as Sun } from '@material-ui/icons'
import { AppBar, Toolbar, Typography, IconButton, colors } from '@material-ui/core'


const Navbar = () => {
  const [themeStyles, setThemeStyles] = useState<any>({})
  const { setTheme, theme } = useContext(ThemeContext)
  const [type, setType] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    if (type === 'dark') {
      setThemeStyles({ backgroundColor: theme.palette.background.paper })
    } else {
      setThemeStyles({ backgroundColor: theme.palette.primary.main })
    }
  }, [type])

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" style={themeStyles}>
        <Toolbar>
          <Typography children="Covid" variant="h6" style={{ flexGrow: 1 }} />
          <ButtonLink to="/" label="Main" />
          <ButtonLink to="/countries" label="Countries" />
          <ButtonLink to="/about" label="About" />
          <IconButton onClick={() => {
            const newType = type === 'dark' ? 'light' : 'dark'
            setType(newType); setTheme(newType);
          }}>
            {type === 'light' ? <Moon style={{ fill: colors.grey[800] }} /> : <Sun style={{ fill: colors.yellow[200] }} />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}



export default Navbar