import React, { useContext } from 'react'
import { SortContext } from '../../helpers/contexts'
import WorldTableHeadCell from './WorldTableHeadCell'
import { TableHead, TableRow, colors } from '@material-ui/core'
import { GroupAdd, PersonAddDisabled, PeopleAlt, Language } from '@material-ui/icons'


const WorldTableHead = ({ opts }: { opts: any }) => {
  const { sortData } = useContext(SortContext)
  return (<TableHead>
    <TableRow>
      <WorldTableHeadCell
        type="string"
        sortBy="country" callback={sortData} Icon={Language} label="Country" color={colors.brown[500]} />
      <WorldTableHeadCell sortBy="cases" callback={sortData} Icon={PeopleAlt} label="Total Cases" color={colors.red[600]} />
      <WorldTableHeadCell sortBy="todayCases" callback={sortData} Icon={GroupAdd} label="New Cases" color={colors.red[500]} />
      <WorldTableHeadCell sortBy="deaths" callback={sortData} Icon={PersonAddDisabled} label="Total Deaths" color={colors.red[400]} />
      <WorldTableHeadCell sortBy="recovered" callback={sortData} Icon={PeopleAlt} label="Total Recovered" color={colors.green[500]} />
      <WorldTableHeadCell sortBy="active" callback={sortData} Icon={PeopleAlt} label="Active Cases" color={colors.green[500]} />
      <WorldTableHeadCell sortBy="critical" callback={sortData} Icon={PeopleAlt} label="Critical" color={colors.green[500]} />
    </TableRow>
  </TableHead>)
}


export default WorldTableHead