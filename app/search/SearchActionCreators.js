import { REQUEST_SEARCH_SUGGESTIONS, FETCH_SEARCH_SUGGESTIONS_SUCCESS, FETCH_SEARCH_SUGGESTIONS_ERROR } from './constants';
import { fetchSuggestions } from './SearchAPI';

const requestSuggestions = () => ({
  type: REQUEST_SEARCH_SUGGESTIONS,
});

const loadSuggestionsSuccess = (payload) => ({
   type: FETCH_SEARCH_SUGGESTIONS_SUCCESS, success: true, payload,
});

const loadSuggestionsError = (error) => ({
  type: FETCH_SEARCH_SUGGESTIONS_SUCCESS, success: false, error,
});

export const loadSuggestions = (text) => {
  return (dispatch) => {
    requestSuggestions();

    fetchSuggestions(text)
      .then(dispatch(loadSuggestionsSuccess))
      .catch(dispatch(loadSuggestionsError));
  }
};
