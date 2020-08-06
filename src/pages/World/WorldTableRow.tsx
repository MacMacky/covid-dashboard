import React, { memo } from 'react'
import { Align, RowData } from '../../helpers/types'
import { TableCell, TableRow } from '@material-ui/core'


interface WorldTableRowData extends RowData {
	align?: Align
}


const WorldTableRow = memo(({ active, align, cases, todayCases, deaths, recovered, critical, code, country }: WorldTableRowData) => {
	console.log('rendering')
	return (
		<TableRow>
			<TableCell align={align}>
				{code ? <img src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`} /> :
					null}
				<br />
				{country}
			</TableCell>
			<TableCell align={align}>{cases}</TableCell>
			<TableCell align={align}>{todayCases}</TableCell>
			<TableCell align={align}>{deaths}</TableCell>
			<TableCell align={align}>{recovered}</TableCell>
			<TableCell align={align}>{active}</TableCell>
			<TableCell align={align}>{critical}</TableCell>
		</TableRow>
	)
})


export default WorldTableRow