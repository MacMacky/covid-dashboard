import React, { useState } from 'react'
import '../App.css'
import ImageFlag from '../components/ImageFlag'
import renderChart from '../components/renderChart'
import LabelWithIcon from '../components/LabelWithIcon'
import { Skeleton } from '@material-ui/lab'
import { PaperContainer } from '../containers/PaperContainer'
import { RouteComponentProps } from 'react-router-dom'
import { modifyResponseCountryCB } from '../helpers'
import { MAIN_API, TIME_SERIES_API } from '../helpers/config'
import { Chart, CountryRouteProps, CountryModifiedResponse } from '../helpers/types'
import { useFetch, useChangeDocumentTitle, useToastCallback } from '../helpers/hooks'
import { GroupAdd, PersonAddDisabled, PeopleAlt, Report, Healing } from '@material-ui/icons'
import { Grid, Select, MenuItem, FormControl, InputLabel, colors, Typography } from '@material-ui/core'


const Country = ({ location: { state } }: RouteComponentProps<{}, {}, CountryRouteProps>) => {
	const [error, loading, { data, deaths, cases, recovered, active, critical }] = useFetch<CountryModifiedResponse>(
		[TIME_SERIES_API, `${MAIN_API}/${state?.country || localStorage.getItem('_country')}`],
		modifyResponseCountryCB(state), { data: {} })
	const [chart, setChart] = useState<Chart>('bar')

	useChangeDocumentTitle()
	useToastCallback(error)

	const handleChartChange = (e: any): void => {
		setChart(e.target.value)
	}

	return (
		<PaperContainer>
			<Grid container justify="center">
				<Grid item md={4} style={{ textAlign: 'center', marginBottom: 25 }}>
					<Typography variant="h2" gutterBottom>
						{loading ? <Skeleton /> : state?.country || localStorage.getItem('_country')}
					</Typography>
					<ImageFlag code={state?.code || localStorage.getItem('_code') as string} loading={loading} withBorder />
				</Grid>
			</Grid>
			<Grid container justify="center" style={{ marginBottom: 50 }}>
				<LabelWithIcon label="Total Cases" loading={loading} value={cases} color={colors.yellow[700]} Icon={PeopleAlt} />
				<LabelWithIcon label="Total Deaths" loading={loading} value={deaths} color={colors.red[400]} Icon={PersonAddDisabled} />
				<LabelWithIcon label="Total Recovered" loading={loading} value={recovered} color={colors.green[500]} Icon={Healing} />
			</Grid>
			<Grid container justify="center" style={{ marginBottom: 50 }}>
				<LabelWithIcon label="Active Cases" loading={loading} value={active} color={colors.orange[500]} Icon={GroupAdd} />
				<LabelWithIcon label="Critical" loading={loading} value={critical} color={colors.red[500]} Icon={Report} />
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
					{renderChart(chart, loading, data)}
				</Grid>
			</Grid>
		</PaperContainer  >
	)
}
// For Covid picture
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
// 		href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

export default Country