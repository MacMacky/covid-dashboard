import React, { useEffect, useState } from 'react'
import '../App.css'
import countries from '../helpers/countries'
import { Country2 } from '../helpers/types'
import { PaperContainer } from '../containers/PaperContainer'
import { RouteComponentProps } from 'react-router-dom'
import { TextField, Paper, Grid } from '@material-ui/core'
import { useChangeDocumentTitle } from '../helpers/hooks';
import { Autocomplete, Skeleton } from '@material-ui/lab'




const Country = (props: RouteComponentProps) => {
  const [country, setCountry] = useState<Country2>({})
  const [resp, setResp] = useState<any>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const abort = new AbortController()
    const getCountryData = async () => {
      try {
        if (country && country.abbr) {

          //https://flagcdn.com/w320/za.png
          //const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${country.abbr}`, { signal: abort.signal })
          // const response = await fetch(`https://flagcdn.com/w320/${country.abbr}.png`, { signal: abort.signal, mode: 'no-cors' })
          // const result = await response.json()
          //sconsole.log(result)
          setResp(`https://flagcdn.com/w320/${country.abbr.toLowerCase()}.png`)
        }
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    getCountryData()
    return () => abort.abort()
  }, [country.name])

  useChangeDocumentTitle()
  return (
    <PaperContainer>
      <Grid item>
        <Autocomplete
          id="countries"
          options={countries}
          freeSolo
          disableClearable
          onChange={(e, newValue) => {
            setCountry(newValue as Country2)
          }}
          style={{ width: 350 }}
          getOptionLabel={option => option.name}
          renderInput={(params) => <TextField {...params} label="Countries" variant="outlined" />}
        />
      </Grid>
      <Grid item>
        {
          loading ?
            <Skeleton variant="rect" width={500} height={300} />
            : <div style={{
              backgroundImage: `url(${resp})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              width: 400,
              height: 300,
              marginTop: -15
            }}></div>
        }
      </Grid>
    </PaperContainer  >
  )
}




export default Country