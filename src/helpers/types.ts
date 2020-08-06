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


export type ModifyResponseCB = (responses: any[][]) => any