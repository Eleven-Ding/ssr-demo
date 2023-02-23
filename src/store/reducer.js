import { GET_POSITION } from "./actions";
const defaultState = {
  position: {},
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_POSITION:
      return { ...state, position: action.data };
  }
}
