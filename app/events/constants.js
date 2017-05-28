export const API_BASE_URL                         = process.env.NODE_ENV === 'production' ? 'https://tilte-api.herokuapp.com/api': 'http://localhost:1601';

export const ASSETS_BASE_URL                      = (process.env.NODE_ENV === 'production' ? 'https://tilteui.herokuapp.com' : 'http://localhost:1600');

export const EVENT_ACTIONS                        = {
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
export const ICON_ADD_EVENT                       = ['M512 928c-229.76 0-416-186.24-416-416s186.24-416 416-416 416 186.24 416 416-186.24 416-416 416zM512 192c-176.704 0-320 143.264-320 320 0 176.704 143.296 320 320 320 176.736 0 320-143.296 320-320 0-176.736-143.264-320-320-320zM639.616 544h-96v96c0 17.696-14.336 32-32 32-17.696 0-32-14.304-32-32v-96h-96c-17.696 0-32-14.336-32-32s14.304-32 32-32h96v-96c0-17.696 14.304-32 32-32 17.664 0 32 14.304 32 32v96h96c17.664 0 32 14.336 32 32s-14.336 32-32 32z'];

export const ICON_ATTENDANCE_CONFIRMED            = ['M512 42.667q95.667 0 182.5 37.167t149.667 100 100 149.667 37.167 182.5-37.167 182.5-100 149.667-149.667 100-182.5 37.167-182.5-37.167-149.667-100-100-149.667-37.167-182.5 37.167-182.5 100-149.667 149.667-100 182.5-37.167zM512 128q-78 0-149.167 30.5t-122.5 81.833-81.833 122.5-30.5 149.167 30.5 149.167 81.833 122.5 122.5 81.833 149.167 30.5 149.167-30.5 122.5-81.833 81.833-122.5 30.5-149.167-30.5-149.167-81.833-122.5-122.5-81.833-149.167-30.5zM655.667 383.667q17.667 0 30.167 12.5t12.5 30.167-12.667 30.333l-181 181q-12.333 12.333-30 12.333-18 0-30.333-12.333l-90.667-90.333q-12.333-12.333-12.333-30.333 0-17.667 12.5-30.167t30.167-12.5 30.333 12.667l60.333 60.333 150.667-151q12.667-12.667 30.333-12.667z'];

export const ICON_HOSTED                          = ['M316 334l196 196 196-196 60 60-256 256-256-256z'];

export const ICON_TICKET                          = ['M8 74.9v16.9l3 .7c4 .9 7 4.2 7 7.8 0 4.4-1.6 6.5-6 7.8l-4 1.2V143h44v-2.5c0-1.4 1.1-3.7 2.5-5 4.6-4.7 11.9-2.4 13.1 4l.6 3.5H192v-33.8l-3-.7c-9.1-2-9.4-14.4-.5-16.1l3.5-.6V58H68.2l-.6 3.5c-1.7 8.7-13.5 8.7-15.2 0l-.6-3.5H8v16.9zm12 2.5v15.5l-4-2.6-4-2.7V62h8v15.4zm29.5-12c.9 1.8 3.2 4.2 5.1 5.2l3.4 1.9v56.1l-3.3 1.6c-2 1-4.1 3.1-5.1 5.2l-1.7 3.6H24V62h23.9l1.6 3.4zM188 75.5c0 11.3-.2 13.5-1.5 13.5-.8 0-2.9 1.3-4.6 2.8-2.6 2.3-3.3 3.8-3.7 8-.4 4.9-.2 5.4 3.1 8.7 1.9 1.9 4.2 3.5 5.1 3.5 1.4 0 1.6 1.8 1.6 13.5V139H72l-.9-2.3c-1-2.5-4.7-6.1-7.3-7-1.7-.6-1.8-2.9-1.8-28.9V72.5l3.4-1.9c1.9-1 4.2-3.4 5.1-5.2l1.6-3.4H188v13.5zm-168 48V139h-8v-13.5c0-10.9.3-13.5 1.4-13.5.8 0 2.4-.9 3.7-2 1.3-1 2.5-1.9 2.7-2 .1 0 .2 7 .2 15.5z', 'M82.5 74.4c-3.7 1.7-8 6.2-9.4 9.9-4.1 10.7 4.3 22.8 15.6 23 15.6.2 23.5-16.6 13.5-28.5-4.6-5.5-13-7.4-19.7-4.4zm15.6 6.2c5.6 5.3 6.1 12.6 1.3 18.4-10 11.8-29.1-1.3-21.6-14.9 4.1-7.4 14.3-9.2 20.3-3.5zM122 75c0 1.9.7 2 19.5 2s19.5-.1 19.5-2-.7-2-19.5-2-19.5.1-19.5 2zm0 10c0 1.9.7 2 19.5 2s19.5-.1 19.5-2-.7-2-19.5-2-19.5.1-19.5 2zm0 10c0 1.9.7 2 19.5 2s19.5-.1 19.5-2-.7-2-19.5-2-19.5.1-19.5 2z']

export const EVENT_IMAGE_PLACEHOLDERS              = [
                                                      `${ ASSETS_BASE_URL }/images/feed1.jpg`,
                                                      `${ ASSETS_BASE_URL }/images/feed2.jpg`,
                                                      `${ ASSETS_BASE_URL }/images/feed3.jpg`,
                                                      `${ ASSETS_BASE_URL }/images/feed4.jpg`,
                                                    ];
