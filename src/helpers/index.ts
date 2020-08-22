import countries from './countries'
import { ModifyResponseCB, RowData, SortOption, CountryData, CountryModifiedResponse, CountryRouteProps } from './types'

const log = (...messages: any[]) => console.log(...messages)

const all = (data: any[]): Promise<any[]> => {
  return Promise.all(data)
}

const capitalize = (str: string): string => {
  if (!str) return ''
  return str[0].toUpperCase() + str.slice(1)
}
const ModifyResponseCallback: ModifyResponseCB = (responses: any[][]) => {
  const result = responses[0].slice(1).reduce((acc: RowData[], current) => {
    const country = countries.find(o => o.name === current.country)
    if (country) {
      return [...acc, { ...current, code: country.abbr }]
    } else {
      return [...acc, { ...current, code: null }]
    }
  }, [])
  return result
}

const formatNumber = (x: null | number): string => {
  if (!x) return ''
  return x.toLocaleString()
}


const sortComparison = ({ type, sortBy, orderBy }: SortOption) => (a: any, b: any) => {
  if (type === 'string') {
    if (orderBy === 'asc') {
      return a[sortBy].localeCompare(b[sortBy])
    } else {
      return b[sortBy].localeCompare(a[sortBy])
    }
  } else {
    if (orderBy === 'asc') {
      return a[sortBy] - b[sortBy]
    } else {
      return b[sortBy] - a[sortBy]
    }
  }
}

const sortCallback = (oldData: RowData[], options: SortOption) =>
  oldData.slice().sort(sortComparison(options))


const filterCallback = (searchTerm: string | number | null, data: RowData[] | null) => {
  if (!data) return []
  return data.filter(d => {
    if (Number.isNaN(Number(searchTerm))) {
      return d.country.toLowerCase().includes((searchTerm as string).toLowerCase())
    } else {
      return Object.keys(d).some((key: any) => d[key as keyof RowData]?.toString().includes(searchTerm as string))
    }
  })
}


const getDifferences = (countryData: any[], rest?: {}): CountryData => {
  const result: CountryData = {
    all: [],
    confirmed: [],
    deaths: [],
    recovered: []
  }

  for (let i = 1, len = countryData.length, [d, k1, k2, k3] = Object.keys(countryData[i]); i < len; i++) {
    const cur = countryData[i]
    const prev = countryData[i - 1]
    const date = new Date(cur.date).toLocaleString().split(',')[0]

    const diff_confirmed = cur[k1] - prev[k1]
    const diff_deaths = cur[k2] - prev[k2]
    const diff_recovered = cur[k3] - prev[k3]

    result.confirmed!.push({ [k1]: diff_confirmed, date, ...rest })

    result.deaths!.push({ [k2]: diff_deaths, date, ...rest })

    result.recovered!.push({ [k3]: diff_recovered, date, ...rest })

    result.all!.push({
      date,
      [k1]: diff_confirmed,
      [k2]: diff_deaths,
      [k3]: diff_recovered,
      ...rest
    })
  }

  return result
}

const modifyResponseCountryCB = (state: CountryRouteProps) => {
  return (response: any[]): CountryModifiedResponse => {
    const { country } = state
    const { cases, deaths, recovered, critical, active } = response[1] || {}
    const _country = country === 'USA' ? 'US' : country === 'UK' ? 'United Kingdom' : country;
    let countryData = response[0][_country] || []
    countryData = countryData.slice(countryData.length - 11, countryData.length)
    return {
      data: getDifferences(countryData, state),
      cases,
      deaths,
      recovered,
      critical,
      active
    }
  }
}




export {
  all,
  log,
  capitalize,
  getDifferences,
  formatNumber,
  sortCallback,
  filterCallback,
  ModifyResponseCallback,
  modifyResponseCountryCB
}