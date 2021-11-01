import { UPDATE_USERNAME } from '../constants/actionTypes';
import { DispatchLogin } from '../../Types/interfaces';

const initialState = {
  username: 'test',
};

const userReducer = (state = initialState, action: DispatchLogin) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.payload };

    default: {
      return state;
    }
  }
};

export default userReducer;
