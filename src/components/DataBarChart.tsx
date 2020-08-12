import React from 'react'
import CountryToolTip from './CountryToolTip'
import CountryToolTipTwo from './CountryToolTipTwo'
import { Skeleton } from '@material-ui/lab'
import { ChartProps } from '../helpers/types'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import { chartColors } from './renderChart';


const DataBarChart = ({ loading, data, color, dataKey, dataKeys }: ChartProps) => {
  let bars = null, isMultiple = false
  if (Array.isArray(dataKeys)) {
    isMultiple = true
    bars = dataKeys.map((key, i) => (
      <Bar key={key} dataKey={key} fill={chartColors[i]} />
    ))
  } else {
    bars = <Bar dataKey={dataKey} fill={color} />
  }

  return (
    <ResponsiveContainer width='99%' height={250} >
      {loading ? <Skeleton height={250} variant="rect" /> :
        <BarChart data={data || []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis width={100} />
          <Tooltip content={!isMultiple ? CountryToolTip : CountryToolTipTwo} />
          <Legend verticalAlign="top" />
          {bars}
        </BarChart>
      }
    </ResponsiveContainer>)
}

export default DataBarChart