import React from 'react'
import ImageFlag from './ImageFlag'
import { capitalize } from '../helpers'
import { Paper, Typography } from '@material-ui/core'

const CountryToolTip = ({ payload, label, active }: { payload: any, label: string, active: boolean }) => {
  if (active) {
    const { dataKey = '', value = '', color = '', payload: p = {} } = payload ? payload[0] : {}
    const { code, country } = p
    return (
      <Paper style={{ padding: 15, textAlign: 'center' }}>
        <Typography variant="h5" children={country} />
        <ImageFlag code={code} width={40} />
        <Typography variant="h6" children={`${capitalize(dataKey)}: ${value}`} style={{ color }} />
        <Typography variant="body1" children={label} />
      </Paper>
    );
  }

  return null;
}

export default CountryToolTip