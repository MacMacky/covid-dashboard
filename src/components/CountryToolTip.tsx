import React from 'react'
import { capitalize } from '../helpers'
import { Paper, Typography } from '@material-ui/core'

const CountryToolTip = ({ payload, label, active }: { payload: any, label: string, active: boolean }) => {
	if (active) {
		const { dataKey, value, color } = payload[0]
		const { code, country } = payload[0].payload
		return (
			<Paper style={{ padding: 15, textAlign: 'center' }}>
				<Typography variant="h5" children={country} />
				<img src={`https://flagcdn.com/w40/${code}.png`} alt="Country Flag" />
				<Typography variant="h6" children={`${capitalize(dataKey)}: ${value}`} style={{ color }} />
				<Typography variant="body1" children={label} />
			</Paper>
		);
	}

	return null;
}

export default CountryToolTip