import React, { MouseEventHandler } from 'react'
import { Align, RowData } from '../../helpers/types'
import { TableCell, IconButton, Typography } from '@material-ui/core'

const WorldHeadTableCell = (
  { align = "center", Icon, label = '', color = '', callback, sortBy, type = 'number' }:
    {
      align?: Align, Icon: React.ElementType, label: string, color?: string,
      callback: (sortOptions: any) => void, sortBy: keyof RowData, type?: 'string' | 'number'
    }) => {
  return (
    <TableCell align={align}>
      <IconButton onClick={() =>
        callback({
          sortBy,
          type
        })}>
        <Icon style={{ fontSize: 30, fill: color }} />
      </IconButton>
      <Typography children={label} variant="h6" style={{ display: 'inline-block', color }} />
    </TableCell>
  )
}

export default WorldHeadTableCell