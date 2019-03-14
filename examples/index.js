
import withLoadData from '../src';

// constants
const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';

//reducers
const data = (state, { type, payload }) => {};
const dataLoaded = (state = false, { type, payload }) => {
  switch(type) {
    case LOAD_DATA_SUCCESS:
      return true;
    default:
      return state;
  }
};

// actions
const loadData = () => dispatch => {
  dispatch({ type: LOAD_DATA_REQUEST });

  fetch('/data-url')
    .then(data => dispatch({ type: LOAD_DATA_SUCCESS, payload: data });)
};

export default withLoadData({
  actionLoadData: loadData,
  checkIsDataLoaded: state => state.dataLoaded,
})(
  Component
)