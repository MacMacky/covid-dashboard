import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Paper, GridContentAlignment } from '@material-ui/core'

const paperContainerStyles = makeStyles({
	root: {
		margin: 10,
		width: 'auto',
		height: 'auto',
		padding: 25
	}
})

const PaperContainer = ({ children, justify = 'flex-start' }: { children: React.ReactNode, justify?: GridContentAlignment | any }) => {
	const styles = paperContainerStyles()
	return (
		<Grid container component={Paper}
			elevation={4}
			justify={justify}
			className={styles.root}
			children={children}
		/>
	)
}

export {
	PaperContainer
}