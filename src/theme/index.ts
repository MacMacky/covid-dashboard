import { createMuiTheme, colors } from '@material-ui/core'

export const createTheme = (type: 'dark' | 'light' = 'light') => {
  return createMuiTheme({
    palette: {
      primary: {
        main: colors.blue[600],
        dark: colors.blue[700]
      },
      error: {
        main: colors.red[600],
        dark: colors.red[500]
      },
      secondary: {
        main: colors.grey[700],
        dark: colors.grey[300]
      },
      type
    }
  })
}

const theme = createTheme()

export default theme