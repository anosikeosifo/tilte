
export const REQUEST_USER_FEED = 'Request user feed';
export const REQUEST_CURRENT_USER = 'Request current user';
export const RECEIVE_CURRENT_USER = 'Receive current user';
export const BANNER_TOGGLE_PREV = 'toggle previous banner';
export const BANNER_TOGGLE_NEXT = 'toggle next banner';
export const FETCH_CONFIG_DATA = 'Fetch config data';
export const FETCH_CONFIG_DATA_SUCCESS = 'Config data received';
export const FETCH_CONFIG_DATA_ERROR = 'Config data receipt failed';
export const FETCH_APP_DATA = 'Fetch app data';
export const FETCH_SEARCH_SUGGESTIONS = 'Fetch search suggestions';
export const RECEIVE_SEARCH_SUGGESTIONS = 'Receive search suggestions';
export const FETCH_USER_FEED = 'Fetch user feed';

export const FEED_ACTIONS = {
  fetchRequest: 'Fetch user feed',
  fetchSuccess: 'Fetch user feed succeful',
  fetchError: 'Fetch user feed failed',
};

export const USER_AVATAR_PLACEHOLDER = 'http://localhost:8080/images/avatar_small.png';
export const FEED_IMAGE_PLACEHOLDERS = [
  'http://localhost:8080/images/feed1.jpg',
  'http://localhost:8080/images/feed2.jpg',
  'http://localhost:8080/images/feed3.jpg',
  'http://localhost:8080/images/feed4.jpg',
];

export const LIKE_DEFAULT_IMG_URL = 'http://localhost:8080/images/avatar_small.png';
// API_BASE_URL = 'http://tilte-api.herokuapp.com/api';
export const API_BASE_URL = 'http://tilte-api.herokuapp.com/api';

export const ICON_FAVORITE = 'M864 0c-79.232 0-155.392 29.472-214.528 83.040-22.464 20.32-41.696 43.424-57.472 68.928-15.776-25.504-35.008-48.608-57.472-68.96-59.136-53.536-135.296-83.008-214.528-83.008-176.448 0-320 143.552-320 320 0 119.104 37.056 213.12 123.872 314.4 126.144 147.2 445.408 371.84 458.944 381.344 2.752 1.952 5.984 2.912 9.184 2.912s6.432-0.96 9.184-2.912c13.536-9.504 332.8-234.144 458.976-381.344 86.784-101.28 123.84-195.296 123.84-314.4 0-176.448-143.552-320-320-320zM1035.872 613.6c-111.84 130.432-389.76 330.912-443.872 369.44-54.112-38.528-332.032-239.008-443.84-369.44-81.44-95.008-116.16-182.816-116.16-293.6 0-158.816 129.216-288 288-288 71.264 0 139.84 26.528 193.024 74.72 26.816 24.32 48.576 52.992 64.64 85.248 5.44 10.88 23.232 10.88 28.672 0 16.064-32.256 37.824-60.928 64.64-85.216 53.184-48.224 121.76-74.752 193.024-74.752 158.784 0 288 129.184 288 288 0 110.784-34.72 198.592-116.128 293.6z';

export const ICON_FAVORITE_2 = 'M516 792c204-184 338-306 338-430 0-86-64-148-150-148-66 0-130 42-152 100h-80c-22-58-86-100-152-100-86 0-150 62-150 148 0 124 134 246 338 430l4 4zM704 128c132 0 234 102 234 234 0 162-144 292-364 492l-62 56-62-54c-220-200-364-332-364-494 0-132 102-234 234-234 74 0 146 36 192 90 46-54 118-90 192-90z'
