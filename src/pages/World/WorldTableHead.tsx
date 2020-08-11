import React, { useContext } from 'react'
import WorldTableHeadCell from './WorldTableHeadCell'
import { SortContext } from '../../helpers/contexts'
import { TableHead, TableRow, colors } from '@material-ui/core'
import { GroupAdd, PersonAddDisabled, PeopleAlt, Language, Report, Healing } from '@material-ui/icons'


const WorldTableHead = ({ opts }: { opts: any }) => {
  const { sortData } = useContext(SortContext)
  return (<TableHead>
    <TableRow>
      <WorldTableHeadCell
        type="string"
        sortBy="country" callback={sortData} Icon={Language} label="Country" color={colors.brown[500]} />
      <WorldTableHeadCell sortBy="cases" callback={sortData} Icon={PeopleAlt} label="Total Cases" color={colors.yellow[700]} />
      <WorldTableHeadCell sortBy="todayCases" callback={sortData} Icon={GroupAdd} label="New Cases" color={colors.red[500]} />
      <WorldTableHeadCell sortBy="deaths" callback={sortData} Icon={PersonAddDisabled} label="Total Deaths" color={colors.red[400]} />
      <WorldTableHeadCell sortBy="recovered" callback={sortData} Icon={Healing} label="Total Recovered" color={colors.green[500]} />
      <WorldTableHeadCell sortBy="active" callback={sortData} Icon={GroupAdd} label="Active Cases" color={colors.orange[500]} />
      <WorldTableHeadCell sortBy="critical" callback={sortData} Icon={Report} label="Critical" color={colors.red[500]} />
    </TableRow>
  </TableHead>)
}


export default WorldTableHead