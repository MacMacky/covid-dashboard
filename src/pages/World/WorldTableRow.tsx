import React, { memo } from 'react'
import { History } from 'history'
import { formatNumber } from '../../helpers'
import { Align, RowData } from '../../helpers/types'
import { TableCell, TableRow } from '@material-ui/core'

interface WorldTableRowData extends RowData {
	align?: Align,
	history: History
}

const WorldTableRow = memo(({ active, align, cases, todayCases, deaths, recovered, critical, code, country, history }: WorldTableRowData) => {
	return (
		<TableRow hover
			style={{ cursor: 'hover' }}
			onClick={() => {
				const _country = (country.includes(' ') ? country.split(' ').join('-') : country).toLowerCase()
				history.push(`/world/${_country}`, { country })
			}}>
			<TableCell align={align}>
				{code ? <img src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`} /> :
					null}
				<br />
				{country}
			</TableCell>
			<TableCell align={align}>{formatNumber(cases)}</TableCell>
			<TableCell align={align}>{formatNumber(todayCases)}</TableCell>
			<TableCell align={align}>{formatNumber(deaths)}</TableCell>
			<TableCell align={align}>{formatNumber(recovered)}</TableCell>
			<TableCell align={align}>{formatNumber(active)}</TableCell>
			<TableCell align={align}>{formatNumber(critical)}</TableCell>
		</TableRow>
	)
})


export default WorldTableRow