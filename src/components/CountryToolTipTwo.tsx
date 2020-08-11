import React from 'react'
import ImageFlag from './ImageFlag'
import { capitalize } from '../helpers'
import { Paper, Typography } from '@material-ui/core'

const CountryToolTipTwo = ({ payload, label, active }: { payload: any, label: string, active: boolean }) => {
  if (active) {
    const [confirmed, deaths, recovered] = payload
    const { dataKey: cKey, value: cVal, stroke: cfColor, color: cColor } = confirmed
    const { dataKey: dKey, value: dVal, stroke: ddColor, color: dColor } = deaths
    const { dataKey: rKey, value: rVal, stroke: rrColor, color: rColor } = recovered
    const { country, code } = confirmed.payload
    return (
      <Paper style={{ padding: 15, textAlign: 'center' }}>
        <Typography variant="h5" children={country} />
        <ImageFlag code={code} width={40} />
        <Typography variant="h6" children={`${capitalize(cKey)}: ${cVal}`} style={{ color: cColor || cfColor }} />
        <Typography variant="h6" children={`${capitalize(dKey)}: ${dVal}`} style={{ color: dColor || ddColor }} />
        <Typography variant="h6" children={`${capitalize(rKey)}: ${rVal}`} style={{ color: rColor || rrColor }} />
        <Typography variant="body1" children={label} />
      </Paper>
    );
  }

  return null;
}

export default CountryToolTipTwo