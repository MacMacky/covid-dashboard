import React, { useState } from 'react'
import '../App.css'
import renderChart from '../components/renderChart'
import LabelWithIcon from '../components/LabelWithIcon';
import { PaperContainer } from '../containers/PaperContainer'
import { RouteComponentProps } from 'react-router-dom'
import { modifyResponseCountryCB } from '../helpers'
import { useFetch, useChangeDocumentTitle } from '../helpers/hooks';
import { CountryData, Chart, CountryRouteProps } from '../helpers/types'
import { Grid, Select, MenuItem, FormControl, InputLabel, colors } from '@material-ui/core'
import { GroupAdd, PersonAddDisabled, PeopleAlt, Language, Report } from '@material-ui/icons'


const Country = ({ location: { state } }: RouteComponentProps<{}, {}, CountryRouteProps>) => {
	const [error, loading, response] = useFetch<CountryData>('https://pomber.github.io/covid19/timeseries.json',
		modifyResponseCountryCB({ country: state.country, code: state.code }), {})
	const [chart, setChart] = useState<Chart>('bar')

	const handleChartChange = (e: any): void => {
		setChart(e.target.value)
	}

	useChangeDocumentTitle()

	return (
		<PaperContainer>
			<Grid container justify="center" style={{ marginBottom: 50 }}>
				<LabelWithIcon label="Total Cases" loading={loading} value={state.totalCases} color={colors.yellow[700]} Icon={PeopleAlt} />
				<LabelWithIcon label="Total Deaths" loading={loading} value={state.totalDeaths} color={colors.red[400]} Icon={PersonAddDisabled} />
				<LabelWithIcon label="Total Recovered" loading={loading} value={state.totalRecovered} color={colors.green[500]} Icon={GroupAdd} />
			</Grid>
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
				<Grid container justify="center">
					{renderChart(chart, loading, response)}
				</Grid>
			</Grid>
		</PaperContainer  >
	)
}
// For Covid picture
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
// 		href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export default Country