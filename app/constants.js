
export const REQUEST_USER_FEED                    = 'Request user feed';
export const REQUEST_CURRENT_USER                 = 'Request current user';
export const RECEIVE_CURRENT_USER                 = 'Receive current user';
export const BANNER_TOGGLE_PREV                   = 'toggle previous banner';
export const BANNER_TOGGLE_NEXT                   = 'toggle next banner';
export const FETCH_CONFIG_DATA                    = 'Fetch config data';
export const FETCH_CONFIG_DATA_SUCCESS            = 'Config data received';
export const FETCH_CONFIG_DATA_ERROR              = 'Config data receipt failed';
export const FETCH_APP_DATA                       = 'Fetch app data';
export const REQUEST_SEARCH_SUGGESTIONS           = 'Fetch search suggestions';
export const FETCH_SEARCH_SUGGESTIONS_SUCCESS     = 'Fetch search suggestions';
export const FETCH_SEARCH_SUGGESTIONS_ERROR       = 'Receive search suggestions';
export const FETCH_USER_FEED                      = 'Fetch user feed';

export const FEED_ACTIONS                         = {
                                                      fetchFeedRequest: 'Fetch user feed',
                                                      fetchFeedSuccess: 'Fetch user feed successful',
                                                      fetchFeedError: 'Fetch user feed failed',
                                                    };

export const EVENT_ACTIONS                       = {
                                                      likeRequest: 'Event like action triggered',
                                                      likeSuccess: 'Event like action succeful',
                                                      likError: 'Event like action failed.',
                                                      fetchDetailsRequest: 'Event details requested',
                                                      fetchDetailsSuccess: 'Event details fetch successful',
                                                      fetchDetailsError: 'Event details failed to fetch',
                                                      fetchCommentsRequest: 'Event comments requested',
                                                      fetchCommentsSuccess: 'Event comments fetch successful',
                                                      fetchCommentsError: 'Event comments failed to fetch',
                                                      postCommentRequest: 'Comment is being posted',
                                                      postCommentSuccess: 'Comment posted successfully',
                                                      postCommentError: 'Comment could not be posted at this time. Please try again.',
                                                      loadMapRequest: 'Map view requested',
                                                      loadMapSuccess: 'Map view loaded successfully.',
                                                      loadMapError: 'Map view failed to load.',
                                                      eventRegistrationRequest: 'Event registration requested.',
                                                      eventRegistrationSuccess: 'Event registration sucessful.',
                                                      eventRegistrationError: 'Event registration failed.',
                                                      saveEventRequest: 'Save event requested',
                                                      saveEventSuccess: 'Event saved successfully',
                                                      saveEventError: 'Event failed to save.',
                                                      fetchFeaturedRequest: 'Featured events requested',
                                                      fetchFeaturedSuccess: 'Featured events fetched successfully.',
                                                      fetchFeaturedError: 'Featured events could not be loaded',
                                                      fetchTrendingRequest: 'Trending events requested',
                                                      fetchTrendingSuccess: 'Trending events fetched successfully.',
                                                      fetchTrendingError: 'Trending events could not be fetched.',
                                                    };

export const MOMENT_ACTIONS                       = {
                                                      fetchTopMomentsRequest: 'Fetching top moments.',
                                                      fetchTopMomentsSuccess: 'Top moments fetched successfully.',
                                                      fetchTopMomentsError: 'Top moments could not be fetched at this time.',
                                                    };

export const ASSETS_BASE_URL                      = (process.env.NODE_ENV === 'production' ? 'https://tilteui.herokuapp.com' : 'http://localhost:1600');

export const USER_AVATAR_PLACEHOLDER              = `${ ASSETS_BASE_URL }/images/hamburg.jpg`;

export const ORGANIZER_AVATAR_PLACEHOLDER         = `${ ASSETS_BASE_URL }/images/hamburg.jpg`;
export const FEED_IMAGE_PLACEHOLDERS              = [
                                                      `${ ASSETS_BASE_URL }/images/feed1.jpg`,
                                                      `${ ASSETS_BASE_URL }/images/feed2.jpg`,
                                                      `${ ASSETS_BASE_URL }/images/feed3.jpg`,
                                                      `${ ASSETS_BASE_URL }/images/feed4.jpg`,
                                                    ];

export const API_BASE_URL                         = process.env.NODE_ENV === 'production' ? 'https://tilte-api.herokuapp.com/api': 'http://localhost:1601';

export const ICON_FAVORITE                        = 'M516 792c204-184 338-306 338-430 0-86-64-148-150-148-66 0-130 42-152 100h-80c-22-58-86-100-152-100-86 0-150 62-150 148 0 124 134 246 338 430l4 4zM704 128c132 0 234 102 234 234 0 162-144 292-364 492l-62 56-62-54c-220-200-364-332-364-494 0-132 102-234 234-234 74 0 146 36 192 90 46-54 118-90 192-90z';

export const ICON_SEARCH                          = 'M621.668 653.668c-44.476 31.692-98.895 50.332-157.668 50.332-150.221 0-272-121.779-272-272s121.779-272 272-272c150.221 0 272 121.779 272 272 0 58.773-18.641 113.192-50.332 157.668l178.714 178.714c17.606 17.606 17.46 45.778-0.006 63.244l-0.75 0.75c-17.421 17.421-45.781 17.469-63.244 0.006l-178.714-178.714zM464 640c114.875 0 208-93.125 208-208s-93.125-208-208-208c-114.875 0-208 93.125-208 208s93.125 208 208 208v0z';

export const ICON_LOCATION                        = 'M512 0c-212.062 0-384 171.938-384 384s384 640 384 640 384-427.938 384-640-171.938-384-384-384zM512 640c-141.376 0-256-114.624-256-256s114.624-256 256-256 256 114.624 256 256-114.624 256-256 256z';
export const ICON_SCROLL_LEFT                     = 'M711.219 891.802c13.722 13.926 13.722 36.301 0 50.125s-35.891 13.875-49.613 0l-400.896-404.89c-13.722-13.824-13.722-36.198 0-50.125l400.896-404.89c13.722-13.824 35.891-13.824 49.613 0 13.722 13.875 13.722 36.301 0 50.125l-365.619 379.853 365.619 379.802z';
export const ICON_SCROLL_RIGHT                    = 'M678.4 512l-365.619-379.904c-13.722-13.824-13.722-36.198 0-50.125 13.722-13.824 35.891-13.824 49.613 0l400.896 404.89c13.722 13.875 13.722 36.301 0 50.125l-400.896 404.89c-13.722 13.875-35.891 13.824-49.613 0-13.722-13.773-13.722-36.198 0-50.125l365.619-379.75z';
export const ICON_FOLLOW_USER                     = 'M818.637 979.405c0.563-109.005-111.923-173.517-221.030-220.518-108.698-46.797-143.411-86.221-143.411-170.701 0-50.637 33.178-34.15 47.718-127.027 6.144-38.502 35.43-0.614 41.062-88.525 0-35.021-16.026-43.725-16.026-43.725s8.141-51.866 11.315-91.802c3.277-41.83-20.378-131.072-117.811-158.464-16.998-17.459-28.518-45.158 23.91-72.909-114.688-5.325-141.363 54.682-202.445 98.816-51.968 38.707-65.997 99.994-63.488 132.608 3.328 39.936 11.418 91.802 11.418 91.802s-16.077 8.704-16.077 43.725c5.632 87.962 35.021 50.022 41.114 88.525 14.541 92.877 47.77 76.39 47.77 127.027 0 84.48-10.854 113.152-119.603 159.949-109.107 46.95-143.053 122.214-142.49 231.219 0.154 32.614-0.563 44.595-0.563 44.595h819.2c0 0-0.717-11.981-0.563-44.595zM870.4 512v-153.6h-102.4v153.6h-153.6v102.4h153.6v153.6h102.4v-153.6h153.6v-102.4h-153.6z';

export const DATA_GROUPS                          = {
                                                      FEATURED_EVENTS: 'Featured events',
                                                      TRENDING_MOMENTS: 'Trending moments'
                                                    };

export const CURRENCY_SYMBOLS                     = {
                                                      nigeria: '\u20a6',
                                                    };
