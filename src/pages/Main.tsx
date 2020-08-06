import React from 'react';
import theme from '../theme';
import { Skeleton } from '@material-ui/lab'
import { Autocomplete } from '@material-ui/lab'
import { PaperContainer } from '../containers/PaperContainer';
import { useFetch, useChangeDocumentTitle } from '../helpers/hooks';
import { pick, log, getCountryData, groupByRegions } from '../helpers'
import { ThemeProvider, Paper, Typography, makeStyles } from '@material-ui/core'
import { PieChart, Cell, Pie, Tooltip, ResponsiveContainer } from 'recharts'



const data = [
  {
    "name": "Group A",
    "value": 2400,
    another_one: 1
  },
  {
    "name": "Group B",
    "value": 4567,
    another_one: 1
  },
  {
    "name": "Group C",
    "value": 1398,
    another_one: 1
  },
  {
    "name": "Group D",
    "value": 9800,
    another_one: 1
  },
  {
    "name": "Group E",
    "value": 3908,
    another_one: 1
  },
  {
    "name": "Group F",
    "value": 4800,
    another_one: 1
  }
];

const toolTipStyles = makeStyles({
  root: {
    padding: 40
  }
})

const CustomTooltip = (props: any) => {
  if (props.active) {
    const { name } = props.payload[0].payload.payload
    return (
      <Paper style={{ padding: '15px 25px', cursor: 'pointer' }}>
        <Typography children={name} />
      </Paper>
    )
  }
}

function Main() {
  const [error, loading, response] = useFetch(['https://restcountries.eu/rest/v2/all',
    'https://api.thevirustracker.com/free-api?countryTotals=ALL'])
  const [pieChartData, setPieChartData] = React.useState<any[]>([])
  useChangeDocumentTitle()
  // React.useEffect(() => {
  //   if (!loading && response) {
  //     let data = getCountryData(response[1].countryitems, ['ourid', 'title', 'code', 'total_cases'])
  //     log(data.reduce((acc, o) => o.total_cases ? acc + o.total_cases : acc, 0))
  //     data = data.map(o => {
  //       if (o.total_cases) {
  //         return { ...o, value: o.total_cases, name: o.title }
  //       }
  //     }).filter(o => o)


  //     const dataByRegions = groupByRegions(response[0], data)
  //     // log(dataByRegions)
  //     setPieChartData(data)
  //   }
  // }, [loading])
  return (
    <PaperContainer>

    </PaperContainer>
  );
}



// <PaperContainer>
// {/* {
//   !loading ? <ResponsiveContainer width="100%" height={3000}>
//     <PieChart >
//       <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#82ca9d" label />

//       <Tooltip content={CustomTooltip} />
//     </PieChart>
//   </ResponsiveContainer> : <Skeleton variant="circle" height={500} width={500} />

// } */}
// </PaperContainer>

// <Autocomplete
// id="combo-box-demo"
// options={countries}
// freeSolo
// disableClearable
// style={{ width: 350 }}
// getOptionLabel={option => option.title}
// renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
// />

export default Main;
