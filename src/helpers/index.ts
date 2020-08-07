import countries from './countries'
import { Country, Regions, Data, ModifyResponseCB, RowData, SortOption } from './types'

const log = (...messages: any[]) => console.log(...messages)

const all = (data: any[]): Promise<any[]> => {
	return Promise.all(data)
}

const pick = <T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> => {
	const newObj: any = {}
	keys.forEach(k => {
		if (object[k] && typeof object === 'object') {
			newObj[k] = object[k]
		}
	})
	return newObj
}

const getCountryData = (countryitems: any[], keys: string[] = ['code', 'ourid', 'title']): any[] => {
	let result: any[] = []
	countryitems.forEach(o => {
		Object.keys(o).forEach(k => {
			const obj = pick(o[k], keys)
			Object.keys(obj).length > 1 && result.push(obj)
		})
	})
	return result
}

const groupByRegions = (countries: Country[], data: Data[]) => {
	const regions: Regions = {
		Asia: {
			codes: [],
			totalCases: 0
		},
		Africa: {
			codes: [],
			totalCases: 0
		},
		Americas: {
			codes: [],
			totalCases: 0
		},
		Europe: {
			codes: [],
			totalCases: 0
		},
		Oceania: {
			codes: [],
			totalCases: 0
		}
	}

	countries.forEach(d => {
		if (regions[d.region]) {
			regions[d.region].codes.push(d.alpha2Code)
		}
	})
	let total = 0
	data.forEach(d => {
		total += d.total_cases
		// for (const region in regions) {
		//   if (regions[region].codes.includes(d.code)) {
		//     regions[region].totalCases += d.total_cases
		//   }
		// }
	})

	// const total = Object.keys(regions).map(k => regions[k].totalCases).reduce((total, cur) => total + cur)
	log(total)
	return regions
}

const capitalize = (str: string): string => {
	return str[0].toUpperCase() + str.slice(1)
}
const ModifyResponseCallback: ModifyResponseCB = (responses) => {
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

const sortCallback = (oldData: RowData[], options: SortOption) => {
	const newData = oldData.slice().sort(sortComparison(options))
	return newData
}

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

export {
	all,
	log,
	pick,
	capitalize,
	formatNumber,
	sortCallback,
	filterCallback,
	groupByRegions,
	getCountryData,
	ModifyResponseCallback
}