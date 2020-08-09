import React from 'react'
import CountryToolTip from './CountryToolTip'
import { ChartProps } from '../helpers/types'
import { AreaChart, XAxis, Area, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts'


const DataAreaChart = ({ color, data, dataKey }: ChartProps) => {
	return (<ResponsiveContainer width={1100} height={250}>
		<AreaChart data={data || []}>
			<defs>
				<linearGradient id={dataKey} x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor={color} stopOpacity={0.8} />
					<stop offset="95%" stopColor={color} stopOpacity={0} />
				</linearGradient>
			</defs>
			<XAxis dataKey="date" />
			<YAxis width={100} />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip content={CountryToolTip} />
			<Area type="monotone" dataKey={dataKey} stroke={color} fillOpacity={1} fill={`url(#${dataKey})`} />
		</AreaChart>
	</ResponsiveContainer>)
}


export default DataAreaChart