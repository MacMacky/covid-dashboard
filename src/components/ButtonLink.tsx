import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const ButtonLink = ({ label, to = "/" }: { label: string, to: string }) => {
  return (
    <Button color="inherit" component={Link} to={to}>
      {label}
    </Button>
  )
}

export default ButtonLink