import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { TableRow, TableCell, TableBody } from '@material-ui/core'

const TableSkeletonCell = () => {
  return (
    <TableCell>
      <Skeleton height={30} />
    </TableCell>
  )
}

const TableLoadingRow = ({ rows = 10 }) => {
  return (
    <TableBody>
      {Array(rows).fill(null).map((_, i) =>
        <TableRow key={i}>
          <TableSkeletonCell />
          <TableSkeletonCell />
          <TableSkeletonCell />
          <TableSkeletonCell />
          <TableSkeletonCell />
          <TableSkeletonCell />
          <TableSkeletonCell />
        </TableRow>)}
    </TableBody>
  )
}

export default TableLoadingRow


