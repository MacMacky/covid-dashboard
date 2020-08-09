import { useLocation } from 'react-router'
import { capitalize, all } from '.'
import { ModifyResponseCB } from './types'
import { useEffect, useState } from 'react'

const useChangeDocumentTitle = () => {
	const location = useLocation()
	useEffect(() => {
		if (location.pathname === '/') {
			document.title = 'Main'
		} else {
			document.title = capitalize(location.pathname.slice(1))
		}
	}, [])
}

const useFetch = <T = any>(urls: string | string[], modifyResponseCallback?: ModifyResponseCB, defaultResponseValue: any[] | any = []): [string | null, boolean, T] => {
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState<any>(defaultResponseValue)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		setLoading(true)
		const requests = typeof urls === 'string' ? [fetch(urls)] : urls.map(url => fetch(url))
		all(requests)
			.then(result => all(result.map(res => res.json())))
			.then(responses =>
				modifyResponseCallback && typeof modifyResponseCallback === 'function'
					? modifyResponseCallback(responses)
					: setResponse(responses)
			)
			.then(results => results && setResponse(results))
			.catch(e => setError(e.message))
			.finally(() => setLoading(false))
	}, [])
	return [error, loading, response]
}



export {
	useFetch,
	useChangeDocumentTitle
}