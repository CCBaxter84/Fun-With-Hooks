interface IState {
  firstName: string,
  lastName: string,
  planet: string,
  affiliation: string,
  showData: boolean
}

interface IAction {
  type: string,
  value: string
}

interface IReducer {
  (state: IState, action: IAction): IState
}

export const initialState: IState = {
  firstName: '',
  lastName: '',
  planet: '',
  affiliation: '',
  showData: false
}

export const reducer: IReducer = (state, action) => {
  switch (action.type) {
    case 'firstName':
      return {...state, firstName: action.value};
    case 'lastName':
      return {...state, lastName: action.value};
    case 'planet':
      return {...state, planet: action.value};
    case 'affiliation':
      return {...state, affiliation: action.value};
    case 'showData':
      return {...state, showData: true};
    case 'hideData':
      return {...state, showData: false};
    default:
      return state;
  }
}