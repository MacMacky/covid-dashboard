import React from 'react'
import { Skeleton } from '@material-ui/lab'

const ImageFlag = ({ loading, code, width = 320, height = 168, withBorder = false }:
  { loading?: boolean, code?: string, width?: number, height?: number, withBorder?: boolean }) => {
  if (!code && !loading) {
    return <img src='/white-flag.gif' style={{ borderRadius: 3, width }} alt="No Flag" />
  }

  return (
    loading ? <Skeleton width={width} height={height} variant="rect" style={{ display: 'inline-block' }} />
      : <img src={`https://flagcdn.com/w${width}/${(code as string).toLowerCase()}.png`}
        alt={`Country Flag - ${code}`}
        style={{ borderRadius: 3, border: withBorder ? '.5px solid grey' : '' }} />
  )
}

export default ImageFlag