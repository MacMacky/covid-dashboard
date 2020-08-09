import React from 'react'
import CountryToolTip from './CountryToolTip'
import { ChartProps } from '../helpers/types'
import { LineChart, XAxis, Line, CartesianGrid, Tooltip, YAxis, ResponsiveContainer, Legend } from 'recharts'
import { chartColors } from './renderChart'
import CountryToolTipTwo from './CountryToolTipTwo'


const DataLineChart = ({ data, dataKey, color, dataKeys }: ChartProps) => {
	let lines = null, isMultiple = false
	if (Array.isArray(dataKeys)) {
		isMultiple = true
		lines = dataKeys.map((key, i) => (
			<Line key={key} type="monotone" dataKey={key} fill={chartColors[i]} stroke={chartColors[i]} />
		))
	} else {
		lines = <Line type="monotone" dataKey={dataKey} fill={color} stroke={color} />
	}

	return (
		<ResponsiveContainer width={1000} height={250} >
			<LineChart width={730} height={250} data={data} style={{ marginBottom: 15 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip content={!isMultiple ? CountryToolTip : CountryToolTipTwo} />
				<Legend verticalAlign="top" />
				{lines}
			</LineChart>
		</ResponsiveContainer>
	)
}


export default DataLineChart