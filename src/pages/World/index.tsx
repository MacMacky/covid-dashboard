import React, { useState, useEffect } from 'react'
import WorldTableHead from './WorldTableHead'
import WorldTableBody from './WorldTableBody'
import TableLoadingRow from '../../components/TableLoadingRow'
import { useFetch } from '../../helpers/hooks'
import { SortContext } from '../../helpers/contexts'
import { PaperContainer } from '../../containers/PaperContainer'
import { log, ModifyResponseCallback } from '../../helpers'
import { TableContainer, Paper, Table } from '@material-ui/core'
import { RowData } from '../../helpers/types'

interface SortOption {
	sortBy: keyof RowData
	orderBy?: 'asc' | 'desc'
	type?: 'string' | 'number'
}

const sortComparison = ({ type, sortBy, orderBy }: SortOption) => (a: any, b: any) => {
	if (type === 'string') {
		if (orderBy === 'asc') {
			return a[sortBy].localeCompare(b[sortBy])
		} else {
			return b[sortBy].localeCompare(a[sortBy])
		}
	} else {
		if (orderBy === 'asc') {
			return a[sortBy] - b[sortBy]
		} else {
			return b[sortBy] - a[sortBy]
		}
	}
}


const sortCallback = (oldData: RowData[], options: SortOption) => {
	const newData = oldData.slice().sort(sortComparison(options))
	return newData
}

const World = () => {
	const [error, loading, response] = useFetch('https://coronavirus-19-api.herokuapp.com/countries', ModifyResponseCallback)
	const [data, setSortedData] = useState<RowData[] | null>(null)
	const [options, setOptions] = useState<SortOption>({ orderBy: 'desc', sortBy: 'country' })

	useEffect(() => {
		setSortedData(response)
	}, [loading, response])

	const sortData = ({ sortBy, type }: SortOption) => {
		const order = options.orderBy === 'asc' ? 'desc' : 'asc'
		setOptions({ sortBy, orderBy: order, type })
		setSortedData(state => sortCallback(state as RowData[],
			{ orderBy: order, sortBy, type }))
	}

	return <SortContext.Provider value={{ data, sortData }}>
		<PaperContainer>
			<TableContainer component={Paper}>
				<Table>
					<WorldTableHead opts={options} />
					{
						loading ?
							<TableLoadingRow />
							: <WorldTableBody data={data || []} />
					}
				</Table>
			</TableContainer>
		</PaperContainer>
	</SortContext.Provider>
}


export default World