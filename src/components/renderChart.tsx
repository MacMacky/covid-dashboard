import React from 'react'
import DataBarChart from '../components/DataBarChart'
import DataAreaChart from '../components/DataAreaChart'
import DataLineChart from '../components/DataLineChart'
import { colors } from '@material-ui/core'
import { Chart, CountryData } from '../helpers/types'

export const red = colors.red[500]
export const blue = colors.blue[500]
export const green = colors.green[500]
export const chartColors = [blue, red, green]

const renderChart = (chartType: Chart, loading: boolean, response: CountryData) => {
	if (chartType === 'bar') {
		return (
			<>
				<DataBarChart loading={loading}
					dataKey="deaths"
					data={response.deaths} color={red} />
				<DataBarChart loading={loading}
					dataKey="confirmed"
					data={response.confirmed} color={blue} />
				<DataBarChart loading={loading}
					dataKey="recovered"
					data={response.recovered} color={green} />
				<DataBarChart loading={loading}
					dataKeys={["confirmed", "deaths", "recovered"]}
					dataKey=""
					data={response.all} color={green} />
			</>
		)
	}

	if (chartType === 'area') {
		return (<>
			<DataAreaChart
				dataKey="deaths"
				data={response.deaths} color={red} />
			<DataAreaChart
				dataKey="confirmed"
				data={response.confirmed} color={blue} />
			<DataAreaChart
				dataKey="recovered"
				data={response.recovered} color={green} />
			<DataAreaChart
				dataKeys={["confirmed", "deaths", "recovered"]}
				dataKey=""
				data={response.all} />
		</>)
	}

	return (
		<>
			<DataLineChart
				dataKey="deaths"
				data={response.deaths} color={red} />
			<DataLineChart
				dataKey="confirmed"
				data={response.confirmed} color={blue} />
			<DataLineChart
				dataKey="recovered"
				data={response.recovered} color={green} />
			<DataLineChart
				dataKeys={["confirmed", "deaths", "recovered"]}
				dataKey=""
				data={response.all} />
		</>
	)
}

export default renderChart