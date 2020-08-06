import countries from './countries'
import { Country, Regions, Data, ModifyResponseCB, RowData } from './types'

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

const formatNumber = (x: string | number): string => {
	if (!x) return ''
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export {
	all,
	log,
	pick,
	capitalize,
	formatNumber,
	groupByRegions,
	getCountryData,
	ModifyResponseCallback
}