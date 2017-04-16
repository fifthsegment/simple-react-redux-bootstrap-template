export default function reducer(state={
    data: "",
    error: null,
  }, action) {

    switch (action.type) {
      case "DO_SOMETHING": {
        return {...state, data: action.payload.data,error:false }
      }
    }
    return state
}
