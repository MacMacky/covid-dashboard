import React, { useState } from 'react'
import '../App.css'
import renderChart from '../components/renderChart'
import { PaperContainer } from '../containers/PaperContainer'
import { RouteComponentProps } from 'react-router-dom'
import { modifyResponseCountryCB } from '../helpers'
import { useFetch, useChangeDocumentTitle } from '../helpers/hooks';
import { CountryData, Chart, CountryRouteProps } from '../helpers/types'
import { Grid, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'


const Country = ({ location: { state } }: RouteComponentProps<{}, {}, CountryRouteProps>) => {
	const [error, loading, response] = useFetch<CountryData>('https://pomber.github.io/covid19/timeseries.json',
		modifyResponseCountryCB(state), {})
	const [chart, setChart] = useState<Chart>('bar')

	const handleChartChange = (e: any): void => {
		setChart(e.target.value)
	}

	useChangeDocumentTitle()

	return (
		<PaperContainer justify="center">
			<Grid item>
				<Grid container justify="center">
					<FormControl variant="outlined" style={{ minWidth: 250, marginBottom: 15 }}>
						<InputLabel id="chart-label">Choose Chart</InputLabel>
						<Select value={chart} labelId="chart-label" onChange={handleChartChange} label="Choose Chart">
							<MenuItem value="bar">Bar</MenuItem>
							<MenuItem value="area">Area</MenuItem>
							<MenuItem value="line">Line</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				{renderChart(chart, loading, response)}
			</Grid>
		</PaperContainer  >
	)
}
// For Covid picture
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
// 		href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export default Country