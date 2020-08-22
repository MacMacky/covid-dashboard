import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { formatNumber } from '../helpers'
import { Grid, Typography } from '@material-ui/core'



const LabelWithIcon = ({ Icon, color, label, value = 0, loading = false, }:
  { Icon: React.ElementType, color: string, label: string, value?: number, loading?: boolean }) => {
  return (
    <Grid item md={12} xs={12} sm={12} lg={4}>
      <Grid container justify="center">
        <Grid item>
          <Icon className="responsive-icon" style={{ fill: color }} />
        </Grid>
        <Grid item>
          <Typography children={label} variant="h3" style={{ color, marginLeft: 10 }} gutterBottom />
        </Grid>
      </Grid>
      <Grid justify="center" container>
        <Grid item md={6}>
          <Typography variant="h4" component="div" align="center" gutterBottom>
            {loading ? <Skeleton /> : value ? formatNumber(value) : 'Unknown'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LabelWithIcon