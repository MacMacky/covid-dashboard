type Partial<T> = {
  [P in keyof T]?: T[P]
}

export interface Country {
  alpha2Code: string
  alpha3Code: string
  altSpellings: string[]
  area: number
  borders: string[]
  callingCodes: string[]
  capital: string
  cioc: string
  currencies: Currency[]
  demonym: string
  flag: string
  gini: number
  languages: Language[]
  latlng: number[]
  name: string
  nativeName: string
  numericCode: string
  population: number
  region: string
  regionalBlocs: RegionalBloc[]
  subregion: string
  timezones: string[]
  topLevelDomain: string[]
  translations: Translation
}

export interface RegionalBloc {
  acronym: string
  name: string
}

export interface Currency {
  code: string
  name: string
  symbol: string
}

export interface Language {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

export interface Translation {
  [key: string]: string
}

export interface Regions {
  [key: string]: {
    codes: string[],
    totalCases: number
  }
}

export interface Data {
  ourid: string
  title: string
  code: string
  total_cases: number
}

export interface Country2 {
  name?: string
  abbr?: string
  code?: string
  suggested?: boolean
}

export type Align = "center" | "left" | "right" | "justify" | "inherit" | undefined

export interface RowData {
  country: string
  cases: number
  todayCases: number
  deaths: number
  recovered: number
  active: number
  critical: number
  code?: string | null
}

export interface SortOption {
  sortBy: keyof RowData
  orderBy?: 'asc' | 'desc'
  type?: 'string' | 'number'
}

export interface State {
  cases: RowData[]
  filteredAndSortedCases: RowData[]
  searchTerm: string
  options: SortOption
}

export type ModifyResponseCB<T = any> = (responses: any[][] | any) => T


export interface CountryBase {
  date: string
}

export interface CountryDeath extends CountryBase {
  deaths: number
}
export interface CountryConfirmed extends CountryBase {
  confirmed: number
}
export interface CountryRecovered extends CountryBase {
  recovered: number
}

export interface CountryAll extends CountryDeath, CountryConfirmed, CountryRecovered {

}

export type S = Partial<CountryRecovered>[] | Partial<CountryConfirmed>[] | Partial<CountryDeath>[]

export interface CountryData {
  deaths?: Partial<CountryDeath>[]
  confirmed?: Partial<CountryConfirmed>[]
  recovered?: Partial<CountryRecovered>[]
  all?: Partial<CountryAll>[]
}

export interface ChartProps {
  loading?: boolean
  data: any[] | undefined
  color?: string
  dataKey: string
  dataKeys?: string[]
  isMultipleBars?: boolean
}

export type Chart = 'bar' | 'line' | 'area'

export interface CountryRouteProps {
  country: string
  code: string
}


export interface CountryModifiedResponse {
  data: CountryData
  cases: number
  deaths: number
  recovered: number
  active: number
  critical: number
}