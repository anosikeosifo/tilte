export const API_BASE_URL                         = process.env.NODE_ENV === 'production' ? 'https://tilte-api.herokuapp.com/api': 'http://localhost:1601';

export const ASSETS_BASE_URL                      = (process.env.NODE_ENV === 'production' ? 'https://tilteui.herokuapp.com' : 'http://localhost:1600');

export const MOMENT_ACTIONS                       = {
                                                      fetchTopMomentsRequest: 'Fetching top moments.',
                                                      fetchTopMomentsSuccess: 'Top moments fetched successfully.',
                                                      fetchTopMomentsError: 'Top moments could not be fetched at this time.',
                                                    };
