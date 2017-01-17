
export const REQUEST_USER_FEED                    = 'Request user feed';
export const REQUEST_CURRENT_USER                 = 'Request current user';
export const RECEIVE_CURRENT_USER                 = 'Receive current user';
export const BANNER_TOGGLE_PREV                   = 'toggle previous banner';
export const BANNER_TOGGLE_NEXT                   = 'toggle next banner';
export const FETCH_CONFIG_DATA                    = 'Fetch config data';
export const FETCH_CONFIG_DATA_SUCCESS            = 'Config data received';
export const FETCH_CONFIG_DATA_ERROR              = 'Config data receipt failed';
export const FETCH_APP_DATA                       = 'Fetch app data';
export const FETCH_SEARCH_SUGGESTIONS             = 'Fetch search suggestions';
export const RECEIVE_SEARCH_SUGGESTIONS           = 'Receive search suggestions';
export const FETCH_USER_FEED                      = 'Fetch user feed';

export const FEED_ACTIONS                         = {
                                                    fetchFeedRequest: 'Fetch user feed',
                                                    fetchFeedSuccess: 'Fetch user feed succeful',
                                                    fetchFeedError: 'Fetch user feed failed',
                                                  };

export const MOMENT_ACTIONS                       = {
                                                    likeRequest: 'Moment like action triggered',
                                                    likeSuccess: 'Moment like action succeful',
                                                    likError: 'Moment like action failed.',
                                                  };
export const ASSETS_BASE_URL                      = 'http://localhost:4200'

export const USER_AVATAR_PLACEHOLDER              = `${ ASSETS_BASE_URL }/images/avatar_small.png`;
export const FEED_IMAGE_PLACEHOLDERS              = [
                                                    `${ ASSETS_BASE_URL }/images/feed1.jpg`,
                                                    `${ ASSETS_BASE_URL }/images/feed2.jpg`,
                                                    `${ ASSETS_BASE_URL }/images/feed3.jpg`,
                                                    `${ ASSETS_BASE_URL }/images/feed4.jpg`,
                                                  ];

export const API_BASE_URL                         = 'https://tilte-api.herokuapp.com/api';
export const ICON_FAVORITE                        = 'M516 792c204-184 338-306 338-430 0-86-64-148-150-148-66 0-130 42-152 100h-80c-22-58-86-100-152-100-86 0-150 62-150 148 0 124 134 246 338 430l4 4zM704 128c132 0 234 102 234 234 0 162-144 292-364 492l-62 56-62-54c-220-200-364-332-364-494 0-132 102-234 234-234 74 0 146 36 192 90 46-54 118-90 192-90z';

