import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { formatNumber } from '../helpers'
import { Grid, Typography } from '@material-ui/core'



const LabelWithIcon = ({ Icon, iconSize = 60, color, label, value = 0, loading = false }:
	{ Icon: React.ElementType, iconSize?: number, color: string, label: string, value?: number, loading?: boolean }) => {
	return (
		<Grid item md={4}>
			<Grid container justify="center">
				<Grid item>
					<Icon style={{ fontSize: iconSize, fill: color }} />
				</Grid>
				<Grid item>
					<Typography children={label} variant="h3" style={{ color }} />
				</Grid>
			</Grid>
			<Grid justify="center" container>
				<Grid item md={6}>
					<Typography variant="h4" component="div" align="center">
						{loading ? <Skeleton /> : value ? formatNumber(value) : 'Unknown'}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default LabelWithIcon