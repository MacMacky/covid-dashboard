import React, { useEffect, useReducer, useCallback } from 'react'
import WorldTableHead from './WorldTableHead'
import WorldTableBody from './WorldTableBody'
import TableLoadingRow from '../../components/TableLoadingRow'
import { MAIN_API } from '../../helpers/config'
import { SortContext } from '../../helpers/contexts'
import { SortOption } from '../../helpers/types'
import { PaperContainer } from '../../containers/PaperContainer'
import { ModifyResponseCallback } from '../../helpers'
import { useFetch, useChangeDocumentTitle } from '../../helpers/hooks'
import { TableContainer, Paper, Table, TextField } from '@material-ui/core'
import reducer, { SET_CASES, SORT_CASES, UPDATE_SEARCH, initialState } from '../../helpers/reducers/world'

const World = () => {
  const [error, loading, response] = useFetch(MAIN_API, ModifyResponseCallback)
  const [{ filteredAndSortedCases, options, searchTerm }, dispatch] = useReducer(reducer, initialState)

  useChangeDocumentTitle()

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: UPDATE_SEARCH, payload: searchTerm })
    }, 300)
    return () => clearTimeout(timeout)
  }, [searchTerm])

  useEffect(() => {
    dispatch({ type: SET_CASES, payload: response })
  }, [loading, response])

  const sortData = useCallback(({ sortBy, type }: SortOption) => {
    dispatch({
      type: SORT_CASES,
      payload: {
        sortBy, type
      }
    })
  }, [dispatch])

  const handleSearchChange = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: UPDATE_SEARCH, payload: value })
  }, [dispatch])



  return <SortContext.Provider value={{ data: filteredAndSortedCases, sortData }}>
    <PaperContainer justify="center">
      <TextField
        variant="outlined"
        label="Search..."
        value={searchTerm}
        style={{
          marginBottom: 15
        }}
        onChange={handleSearchChange} />

      <TableContainer component={Paper}>
        <Table>
          <WorldTableHead opts={options} />
          {
            loading ?
              <TableLoadingRow />
              : <WorldTableBody data={filteredAndSortedCases} />
          }
        </Table>
      </TableContainer>
    </PaperContainer>
  </SortContext.Provider>
}


export default World