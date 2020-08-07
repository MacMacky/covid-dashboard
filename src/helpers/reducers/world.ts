import { State } from '../types'
import { filterCallback, sortCallback } from '..'

export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const SORT_CASES = 'SORT_CASES'
export const SET_CASES = 'SET_CASES'

export const initialState: State = {
	cases: [],
	filteredAndSortedCases: [],
	searchTerm: '',
	options: {
		orderBy: 'desc', sortBy: 'country'
	}
}

export default (state = initialState, { type, payload }: { type: string, payload?: any }): State => {
	switch (type) {
		case UPDATE_SEARCH:
			const filteredAndSortedCases = filterCallback(payload, state.cases)
			return { ...state, searchTerm: payload, filteredAndSortedCases }
		case SORT_CASES:
			const order = state.options.orderBy === 'asc' ? 'desc' : 'asc'
			return {
				...state, options: { orderBy: order, ...payload },
				filteredAndSortedCases: sortCallback(state.cases, { ...payload, orderBy: order })
			}
		case SET_CASES:
			return { ...state, cases: payload, filteredAndSortedCases: payload }
		default:
			return state
	}
}