const FETCH_START = 'start'
const FETCH_SUCESS = 'success'
const FETCH_ERROR = 'error'

const fetchStart = () => ({type: FETCH_START})
const fetchSuccess = payload => ({type: FETCH_SUCESS, payload})
const fetchError = error => ({type: FETCH_ERROR, error})


const url = `https://jsonplaceholder.typicode.com/users`
const initialState = {
    data: [],
    fetching: false,
    error: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:

            return (...state, fetching : true)

        case FETCH_SUCCESS:

            return (...state, data : action.payload)

        case FETCH_ERROR:

            return (...state, error : action.error)

        default:
            return state

    }
}

export default payload => async(dispatch, getState) => {
    dispatch(fetchStart())
    try {
        const result = await fetch(url)
        const json = await result.json()
        dispatch(fetchSuccess(json))
        console.log(json)
    } catch (error) {
        dispatch(fetchError(error))
    }
}