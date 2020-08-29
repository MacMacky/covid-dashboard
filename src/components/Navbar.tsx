import React, { useEffect, useState, useContext } from 'react'
import ButtonLink from './ButtonLink'
import { ThemeType } from '../helpers/types'
import { ThemeContext } from '../helpers/contexts'
import { Brightness2Outlined as Moon, WbSunny as Sun } from '@material-ui/icons'
import { AppBar, Toolbar, Typography, IconButton, colors } from '@material-ui/core'


const Navbar = () => {
	const [themeStyles, setThemeStyles] = useState<any>({})
	const { setTheme, theme } = useContext(ThemeContext)
	const [type, setType] = useState<ThemeType>('light')

	useEffect(() => {
		if (type === 'dark') {
			setThemeStyles({ backgroundColor: theme.palette.background.paper })
		} else {
			setThemeStyles({ backgroundColor: theme.palette.primary.main })
		}
	}, [type])

	useEffect(() => {
		const type = localStorage.getItem('_theme') || 'light'
		setType(type as ThemeType);
		setTheme(type as ThemeType);
	}, [])


	return (
		<div style={{ flexGrow: 1 }}>
			<AppBar position="static" color="primary" style={themeStyles}>
				<Toolbar>
					<Typography children="Covid" variant="h6" style={{ flexGrow: 1 }} />
					<ButtonLink to={process.env.PUBLIC_URL} label="World" />
					<ButtonLink to={`${process.env.PUBLIC_URL}/countries`} label="Countries" />
					<ButtonLink to={`${process.env.PUBLIC_URL}/about`} label="About" />
					<IconButton onClick={() => {
						const newType = type === 'dark' ? 'light' : 'dark'
						localStorage.setItem('_theme', newType)
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