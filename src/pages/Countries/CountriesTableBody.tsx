import React from 'react'
import CountriesTableRow from './CountriesTableRow'
import { TableBody } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { Align, RowData } from '../../helpers/types'

const CountriesTableBody = ({ data, align = "center" }: { data: RowData[], align?: Align }) => {
  const history = useHistory()

  return (
    <TableBody>
      {data.map(d =>
        <CountriesTableRow key={d.country} {...d} align={align} history={history} />
      )}
    </TableBody>
  )

}

export default CountriesTableBody