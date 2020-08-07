import React from 'react'
import WorldTableRow from './WorldTableRow'
import { TableBody } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { Align, RowData } from '../../helpers/types'

const WorldTableBody = ({ data, align = "center" }: { data: RowData[], align?: Align }) => {
	const history = useHistory()

	return (
		<TableBody>
			{data.map(d =>
				<WorldTableRow key={d.country} {...d} align={align} history={history} />
			)}
		</TableBody>
	)

}

export default WorldTableBody