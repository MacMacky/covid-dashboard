import React from 'react'
import CountryToolTip from './CountryToolTip'
import CountryToolTipTwo from './CountryToolTipTwo'
import { ChartProps } from '../helpers/types'
import { chartColors } from './renderChart'
import { AreaChart, XAxis, Area, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts'


const DataAreaChart = ({ color, data, dataKey, dataKeys }: ChartProps) => {
  let areas = null, isMultiple = false, gradients = null
  if (Array.isArray(dataKeys)) {
    isMultiple = true
    areas = dataKeys.map((key, i) => (
      <Area key={key} type="monotone" dataKey={key} fill={`url(#${key})`} stroke={chartColors[i]} fillOpacity={1} />
    ))
    gradients = dataKeys.map((key, i) => (
      <linearGradient id={key} x1="0" y1="0" x2="0" y2="1" key={key}>
        <stop offset="5%" stopColor={chartColors[i]} stopOpacity={0.8} />
        <stop offset="95%" stopColor={chartColors[i]} stopOpacity={0} />
      </linearGradient>
    ))
  } else {
    areas = <Area type="monotone" dataKey={dataKey} stroke={color} fillOpacity={1} fill={`url(#${dataKey})`} />
    gradients = <linearGradient id={dataKey} x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={color} stopOpacity={0.8} />
      <stop offset="95%" stopColor={color} stopOpacity={0} />
    </linearGradient>
  }

  return (<ResponsiveContainer width={1100} height={250}>
    <AreaChart data={data || []}>
      <defs>
        {gradients}
      </defs>
      <XAxis dataKey="date" />
      <YAxis width={100} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip content={!isMultiple ? CountryToolTip : CountryToolTipTwo} />
      {areas}
    </AreaChart>
  </ResponsiveContainer>)
}


export default DataAreaChart