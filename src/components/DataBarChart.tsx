import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

const DataBarChart = ({ loading, data, color, dataKey }: { loading: boolean, data: any[], color: string, dataKey: string }) => {
	return (
		<ResponsiveContainer width={1000} height={250}>
			{loading ? <Skeleton height={250} variant="rect" /> :
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis width={100} />
					<Tooltip />
					<Legend verticalAlign="top" />
					<Bar dataKey={dataKey} fill={color} />
				</BarChart>
			}
		</ResponsiveContainer>)
}

export default DataBarChart