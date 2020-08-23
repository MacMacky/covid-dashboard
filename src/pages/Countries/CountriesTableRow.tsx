import React, { memo } from 'react'
import ImageFlag from '../../components/ImageFlag'
import { History } from 'history'
import { formatNumber } from '../../helpers'
import { Align, RowData } from '../../helpers/types'
import { TableCell, TableRow } from '@material-ui/core'

interface WorldTableRowData extends RowData {
  align?: Align,
  history: History
}

const CountriesTableRow = memo(({ active, align, cases, todayCases, deaths, recovered, critical, code, country, history }: WorldTableRowData) => {
  return (
    <TableRow hover
      className="hover"
      onClick={() => {
        const _country = (country.includes(' ') ? country.split(' ').join('-') : country).toLowerCase()
        history.push(`${process.env.PUBLIC_URL}/countries/${_country}`, { country, code: code?.toLowerCase() })
      }}>
      <TableCell align={align}>
        <ImageFlag width={40} code={code as string} />
        <br />
        {country}
      </TableCell>
      <TableCell align={align}>{formatNumber(cases)}</TableCell>
      <TableCell align={align}>{formatNumber(todayCases)}</TableCell>
      <TableCell align={align}>{formatNumber(deaths)}</TableCell>
      <TableCell align={align}>{formatNumber(recovered)}</TableCell>
      <TableCell align={align}>{formatNumber(active)}</TableCell>
      <TableCell align={align}>{formatNumber(critical)}</TableCell>
    </TableRow>
  )
})


export default CountriesTableRow