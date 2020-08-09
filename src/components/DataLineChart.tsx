import React from 'react'
import CountryToolTip from './CountryToolTip'
import { ChartProps } from '../helpers/types'
import { LineChart, XAxis, Line, CartesianGrid, Tooltip, YAxis, ResponsiveContainer, Legend } from 'recharts'


const DataLineChart = ({ data, dataKey, color }: ChartProps) => {
	return (
		<ResponsiveContainer width={1000} height={250} >
			<LineChart width={730} height={250} data={data} style={{ marginBottom: 15 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip content={CountryToolTip} />
				<Legend verticalAlign="top" />
				<Line type="monotone" dataKey={dataKey} stroke={color} />
			</LineChart>
		</ResponsiveContainer>
	)
}


export default DataLineChart