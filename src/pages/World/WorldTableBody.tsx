import React from 'react'
import { Align, RowData } from '../../helpers/types'
import { TableBody } from '@material-ui/core'
import WorldTableRow from './WorldTableRow';

const WorldTableBody = ({ data, align = "center" }: { data: RowData[], align?: Align }) => {
	return (
		<TableBody>
			{data.map(d =>
				<WorldTableRow key={d.country} {...d} align={align} />
			)}
		</TableBody>
	)
}

export default WorldTableBody