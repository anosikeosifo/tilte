
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
                                                      followOrganizerRequest: 'Follow organizer triggered',
                                                      followOrganizerSuccess: 'Follow organizer successful',
                                                      followOrganizerError: 'Could not follow organizer, please retry',
                                                      unfollowOrganizerRequest: 'Unfollow organizer triggered',
                                                      unfollowOrganizerSuccess: 'Unfollow organizer successful',
                                                      unfollowOrganizerError: 'Could not unfollow organizer, please retry',
                                                    };

export const USER_ACTIONS                        = {
                                                      fetchUserStatsRequest: 'User stats requested.',
                                                      fetchUserStatsSuccess: 'User stats fethed sucessfully.',
                                                      fetchUserStatsError: 'User stats could not be fetched.',
                                                      followUserRequest: 'Follow user triggered',
                                                      followUserSuccess: 'Follow user successful',
                                                      followUserError: 'Could not follow user, please retry',
                                                      unfollowUserRequest: 'Unfollow user triggered',
                                                      unfollowUserSuccess: 'Unfollow user successful',
                                                      unfollowUserError: 'Could not unfollow user, please retry',
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

export const ICON_FAVORITE                        = ['M516 792c204-184 338-306 338-430 0-86-64-148-150-148-66 0-130 42-152 100h-80c-22-58-86-100-152-100-86 0-150 62-150 148 0 124 134 246 338 430l4 4zM704 128c132 0 234 102 234 234 0 162-144 292-364 492l-62 56-62-54c-220-200-364-332-364-494 0-132 102-234 234-234 74 0 146 36 192 90 46-54 118-90 192-90z'];

export const ICON_SEARCH                          = ['M621.668 653.668c-44.476 31.692-98.895 50.332-157.668 50.332-150.221 0-272-121.779-272-272s121.779-272 272-272c150.221 0 272 121.779 272 272 0 58.773-18.641 113.192-50.332 157.668l178.714 178.714c17.606 17.606 17.46 45.778-0.006 63.244l-0.75 0.75c-17.421 17.421-45.781 17.469-63.244 0.006l-178.714-178.714zM464 640c114.875 0 208-93.125 208-208s-93.125-208-208-208c-114.875 0-208 93.125-208 208s93.125 208 208 208v0z'];

export const ICON_LOCATION                        = ['M512 0c-212.062 0-384 171.938-384 384s384 640 384 640 384-427.938 384-640-171.938-384-384-384zM512 640c-141.376 0-256-114.624-256-256s114.624-256 256-256 256 114.624 256 256-114.624 256-256 256z'];
export const ICON_SCROLL_LEFT                     = ['M711.219 891.802c13.722 13.926 13.722 36.301 0 50.125s-35.891 13.875-49.613 0l-400.896-404.89c-13.722-13.824-13.722-36.198 0-50.125l400.896-404.89c13.722-13.824 35.891-13.824 49.613 0 13.722 13.875 13.722 36.301 0 50.125l-365.619 379.853 365.619 379.802z'];
export const ICON_SCROLL_RIGHT                    = ['M678.4 512l-365.619-379.904c-13.722-13.824-13.722-36.198 0-50.125 13.722-13.824 35.891-13.824 49.613 0l400.896 404.89c13.722 13.875 13.722 36.301 0 50.125l-400.896 404.89c-13.722 13.875-35.891 13.824-49.613 0-13.722-13.773-13.722-36.198 0-50.125l365.619-379.75z'];
export const ICON_FOLLOW_USER                     = ['M818.637 979.405c0.563-109.005-111.923-173.517-221.030-220.518-108.698-46.797-143.411-86.221-143.411-170.701 0-50.637 33.178-34.15 47.718-127.027 6.144-38.502 35.43-0.614 41.062-88.525 0-35.021-16.026-43.725-16.026-43.725s8.141-51.866 11.315-91.802c3.277-41.83-20.378-131.072-117.811-158.464-16.998-17.459-28.518-45.158 23.91-72.909-114.688-5.325-141.363 54.682-202.445 98.816-51.968 38.707-65.997 99.994-63.488 132.608 3.328 39.936 11.418 91.802 11.418 91.802s-16.077 8.704-16.077 43.725c5.632 87.962 35.021 50.022 41.114 88.525 14.541 92.877 47.77 76.39 47.77 127.027 0 84.48-10.854 113.152-119.603 159.949-109.107 46.95-143.053 122.214-142.49 231.219 0.154 32.614-0.563 44.595-0.563 44.595h819.2c0 0-0.717-11.981-0.563-44.595zM870.4 512v-153.6h-102.4v153.6h-153.6v102.4h153.6v153.6h102.4v-153.6h153.6v-102.4h-153.6z'];

export const ICON_ADD_EVENT                       = ['M512 928c-229.76 0-416-186.24-416-416s186.24-416 416-416 416 186.24 416 416-186.24 416-416 416zM512 192c-176.704 0-320 143.264-320 320 0 176.704 143.296 320 320 320 176.736 0 320-143.296 320-320 0-176.736-143.264-320-320-320zM639.616 544h-96v96c0 17.696-14.336 32-32 32-17.696 0-32-14.304-32-32v-96h-96c-17.696 0-32-14.336-32-32s14.304-32 32-32h96v-96c0-17.696 14.304-32 32-32 17.664 0 32 14.304 32 32v96h96c17.664 0 32 14.336 32 32s-14.336 32-32 32z'];

export const ICON_ATTENDANCE_CONFIRMED            = ['M512 42.667q95.667 0 182.5 37.167t149.667 100 100 149.667 37.167 182.5-37.167 182.5-100 149.667-149.667 100-182.5 37.167-182.5-37.167-149.667-100-100-149.667-37.167-182.5 37.167-182.5 100-149.667 149.667-100 182.5-37.167zM512 128q-78 0-149.167 30.5t-122.5 81.833-81.833 122.5-30.5 149.167 30.5 149.167 81.833 122.5 122.5 81.833 149.167 30.5 149.167-30.5 122.5-81.833 81.833-122.5 30.5-149.167-30.5-149.167-81.833-122.5-122.5-81.833-149.167-30.5zM655.667 383.667q17.667 0 30.167 12.5t12.5 30.167-12.667 30.333l-181 181q-12.333 12.333-30 12.333-18 0-30.333-12.333l-90.667-90.333q-12.333-12.333-12.333-30.333 0-17.667 12.5-30.167t30.167-12.5 30.333 12.667l60.333 60.333 150.667-151q12.667-12.667 30.333-12.667z'];

export const ICON_ARROW_DOWN                      = ['M316 334l196 196 196-196 60 60-256 256-256-256z'];

export const ICON_FOLLOWING                       = ['M86.4 56c-12.2 6.1-13.2 23.1-1.9 30.9C96 94.7 112 86.1 112 72.1c0-7.6-3.5-13-10.5-16.2-5.2-2.4-10-2.4-15.1.1zm15.2 5c2.1 1.4 3.9 3.6 5 6.5 1.6 4.2 1.6 4.8 0 9-4.4 11.5-20.5 11.3-24.6-.3-1.3-3.7-1.3-4.7 0-8.4 2.8-8 12.3-11.3 19.6-6.8zM83.7 96.1c-10.2 2.4-18.9 9.5-21.2 17.3-1.6 5.2-2 16.3-.7 18.2 1.8 2.7 5.6 3.4 18.5 3.4 10.6 0 13.7-.3 14.7-1.5 2.4-2.9 0-3.5-14.6-3.5H66v-6.8c0-4.4.7-8.1 1.9-10.9 3.5-7.6 13.7-12.3 26.6-12.3 10.2 0 16.8 2.4 22.9 8.2 4.4 4.2 5.2 4.6 6.5 3.4 1.2-1.3 1.1-1.9-1.3-5-6.8-9-24.8-13.8-38.9-10.5zM123.4 120.1c-.3.6 1.3 3.1 3.7 5.5l4.3 4.4h-14.6c-11.5 0-14.7.3-15.1 1.4-1.1 2.9 1.6 3.6 15.1 3.6h13.4l-3.6 4c-4 4.4-4.4 5.8-2 6.7 1.1.4 3.6-1.5 8-5.8 3.5-3.5 6.4-6.8 6.4-7.4 0-1.4-12.3-13.5-13.7-13.5-.7 0-1.5.5-1.9 1.1z'];

export const ICON_FOLLOWERS                      = ['M86.4 55.9C76 60.6 73.3 74.6 81.1 83.4c7.5 8.7 20.5 8.2 27.4-.9 4.9-6.4 4.6-16.1-.8-22.2-5.6-6.4-13.4-8-21.3-4.4zm14.7 4.7c4.5 2.3 7.3 9.1 6 14.2-3.3 11.9-20 13.8-24.7 2.7-.8-1.9-1.4-4.7-1.4-6.3 0-3.5 3.7-9.2 7-10.9 3.4-1.7 9.5-1.6 13.1.3zM85.3 96c-5.9 1.2-12.2 4.2-16.1 7.5-5.1 4.3-7.4 9.7-8 19.1-.4 7.4-.3 8.3 1.7 10.3s2.9 2.1 17.4 1.9c14.4-.3 15.2-.4 15.2-2.3s-.8-2-14.7-2.3l-14.8-.3v-6.5c0-8.1 1.6-12.1 6.9-16.6 9.7-8.3 30-9.1 41.2-1.5 4.7 3.2 7.8 8.1 8.5 13.8.5 3.9 1 4.9 2.5 4.9 1.6 0 1.9-.8 1.9-4.7 0-9.6-7.5-18.5-18.4-21.9-6.3-1.9-17.7-2.6-23.3-1.4z', 'M107.1 125.4c-7.2 7.5-7.2 7.2 1.2 15.5 3.7 3.6 6.1 5.2 7.1 4.8 2.4-.9 2-2.3-2-6.7l-3.6-4h14c11.9 0 14.1-.2 14.6-1.6.3-.9.4-2 0-2.5-.3-.5-6.8-.9-14.6-.9h-14l3.6-4.1c2.1-2.2 3.5-4.6 3.3-5.2-.9-2.8-3.7-1.4-9.6 4.7z'];

export const ICON_HOSTED                   = ['M316 334l196 196 196-196 60 60-256 256-256-256z'];

export const ICON_MOMENT                          = ['M70.8 36.4c-2.6.7-5.5 1.9-6.5 2.6-4.7 3.6-8.7 7.9-10.6 11.5-2.1 3.9-2.2 5.1-2.2 34.5 0 29.6.1 30.6 2.2 34.6 5.1 9.5 12.9 14.5 24 15.2l7.2.5 7.8 14.3c4.2 7.9 8 14.1 8.5 13.6.4-.4 4.1-6.8 8.1-14.2l7.2-13.5 7-.6c3.9-.3 8.6-1.3 10.6-2.1 5.6-2.4 11.4-8.2 14-14.1 2.3-5.1 2.4-5.9 2.4-33.8V56.4l-3-5.9c-3.6-7-9.3-11.8-16.7-14-6.7-2-52.7-2.1-60-.1zm61.2 4.7c5.3 2.4 9.6 6.5 11.9 11.2 2 4.1 2.1 6 2.1 32.5 0 30.8-.3 32.7-5.8 38.5-4.5 4.8-9.9 7-18.5 7.5l-7.7.5-6.3 11.8c-3.4 6.5-6.5 11.9-6.9 11.9-.4 0-3.5-5.4-7-11.9l-6.3-11.9-7.5-.4c-12.3-.6-20.1-5.7-23.6-15.5-1.7-5-2-53.7-.2-59.4 1.4-4.7 6.8-11.3 11.2-13.6 5.3-2.8 9.3-3.2 35.6-2.9 20.7.1 26.2.5 29 1.7z', 'M83.3 59c-1.6.7-2.4 2.1-2.9 5-.4 2.4-1.2 4-2 4s-2.3.9-3.4 2c-1.8 1.8-2 3.3-2 18s.2 16.2 2 18c1.9 1.9 3.3 2 25.9 2h24l2-2.6c1.9-2.4 2.1-4 2.1-17.4 0-13.4-.2-15-2.1-17.4-2-2.5-2.3-2.6-14-2.6H101v-3c0-4.9-3-7-9.7-6.9-3.2 0-6.8.4-8 .9zM97 67.5V72h12.8c8.6 0 13.2.4 14 1.2 1.4 1.4 1.7 27.5.4 29.6-.7.9-6.1 1.2-23.8 1l-22.9-.3v-31l3.8-.3c3.7-.3 3.7-.4 3.7-4.8V63h12v4.5z', 'M93.9 80.9c-6.8 6.9-.5 18.7 8.9 16.6 4.6-1 7.7-4.9 7.7-9.7 0-3.3-.6-4.5-3.3-6.9-4.4-4-9.3-4-13.3 0z'];

export const ICON_TICKET                          = ['M8 74.9v16.9l3 .7c4 .9 7 4.2 7 7.8 0 4.4-1.6 6.5-6 7.8l-4 1.2V143h44v-2.5c0-1.4 1.1-3.7 2.5-5 4.6-4.7 11.9-2.4 13.1 4l.6 3.5H192v-33.8l-3-.7c-9.1-2-9.4-14.4-.5-16.1l3.5-.6V58H68.2l-.6 3.5c-1.7 8.7-13.5 8.7-15.2 0l-.6-3.5H8v16.9zm12 2.5v15.5l-4-2.6-4-2.7V62h8v15.4zm29.5-12c.9 1.8 3.2 4.2 5.1 5.2l3.4 1.9v56.1l-3.3 1.6c-2 1-4.1 3.1-5.1 5.2l-1.7 3.6H24V62h23.9l1.6 3.4zM188 75.5c0 11.3-.2 13.5-1.5 13.5-.8 0-2.9 1.3-4.6 2.8-2.6 2.3-3.3 3.8-3.7 8-.4 4.9-.2 5.4 3.1 8.7 1.9 1.9 4.2 3.5 5.1 3.5 1.4 0 1.6 1.8 1.6 13.5V139H72l-.9-2.3c-1-2.5-4.7-6.1-7.3-7-1.7-.6-1.8-2.9-1.8-28.9V72.5l3.4-1.9c1.9-1 4.2-3.4 5.1-5.2l1.6-3.4H188v13.5zm-168 48V139h-8v-13.5c0-10.9.3-13.5 1.4-13.5.8 0 2.4-.9 3.7-2 1.3-1 2.5-1.9 2.7-2 .1 0 .2 7 .2 15.5z', 'M82.5 74.4c-3.7 1.7-8 6.2-9.4 9.9-4.1 10.7 4.3 22.8 15.6 23 15.6.2 23.5-16.6 13.5-28.5-4.6-5.5-13-7.4-19.7-4.4zm15.6 6.2c5.6 5.3 6.1 12.6 1.3 18.4-10 11.8-29.1-1.3-21.6-14.9 4.1-7.4 14.3-9.2 20.3-3.5zM122 75c0 1.9.7 2 19.5 2s19.5-.1 19.5-2-.7-2-19.5-2-19.5.1-19.5 2zm0 10c0 1.9.7 2 19.5 2s19.5-.1 19.5-2-.7-2-19.5-2-19.5.1-19.5 2zm0 10c0 1.9.7 2 19.5 2s19.5-.1 19.5-2-.7-2-19.5-2-19.5.1-19.5 2z']

export const DATA_GROUPS                          = {
                                                      FEATURED_EVENTS: 'Featured events',
                                                      TRENDING_MOMENTS: 'Trending moments'
                                                    };

export const CURRENCY_SYMBOLS                     = {
                                                      nigeria: '\u20a6',
                                                    };
