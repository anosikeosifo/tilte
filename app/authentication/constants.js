export const API_BASE_URL                         = process.env.NODE_ENV === 'production' ? 'https://tilte-api.herokuapp.com/api': 'http://localhost:1601';

export const ASSETS_BASE_URL                      = (process.env.NODE_ENV === 'production' ? 'https://tilteui.herokuapp.com' : 'http://localhost:1600');

export const AUTH_REDIRECT_URL                    = process.env.NODE_ENV === 'production' ? 'https://tilteui.herokuapp.com/oauth': 'http://localhost:1600/oauth';

export const LINKEDIN_AUTHTOKEN_URL               = 'https://www.linkedin.com/oauth/v2/accessToken';

export const TWITTER_AUTHTOKEN_URL                = 'https://api.twitter.com/oauth/request_token';

export const OAUTH_ACTIONS                        = {
                                                      setGuestUser: 'Setting guest user',
                                                      facebookAuthRequest: 'Login via facebook requested',
                                                      twitterAuthRequest: 'Login via twitter requested',
                                                      linkedinAuthRequest: 'Login via linkedin requested',
                                                      facebookAuthSuccess: 'Login via facebook successful',
                                                      twitterAuthSuccess: 'Login via twitter successful',
                                                      linkedinAuthSuccess: 'Login via linkedin successful',
                                                      facebookAuthError: 'Login via facebook failed',
                                                      twitterAuthError: 'Login via twitter failed',
                                                      linkedinAuthError: 'Login via linkedin failed',
                                                      facebookAuthVerifyRequest: 'Verify facebook user requested',
                                                      linkedinAuthVerifyRequest: 'Verify linkedin user requested',
                                                      twitterAuthVerifyRequest: 'Verify twitter user requested',
                                                      facebookAuthVerifySuccess: 'Verify facebook user successful',
                                                      linkedinAuthVerifySuccess: 'Verify linkedin user successful',
                                                      twitterAuthVerifySuccess: 'Verify twitter user successful',
                                                      facebookAuthVerifyError: 'Verify facebook user failed',
                                                      linkedinAuthVerifyError: 'Verify linkedin user failed',
                                                      twitterAuthVerifyError: 'Verify twitter user failed',
                                                    };

export const ICON_PASSWORD                        = ['M409.6 197.3h-18v-50.6C391.6 71.9 330.8 11 256 11S120.4 71.9 120.4 146.6v50.6h-17.9c-17.7 0-32.1 14.4-32.1 32.1v239.6c0 17.7 14.4 32.1 32.1 32.1h307.2c17.7 0 32.1-14.4 32.1-32.1V229.3c-.1-17.6-14.5-32-32.2-32zm-248.4-50.7c0-52.3 42.5-94.8 94.8-94.8s94.8 42.5 94.8 94.8v50.5H161.2v-50.5zm239.6 313.6H111.2V238.1h289.7v222.1z', 'M256 429.7c11.3 0 20.4-9.1 20.4-20.4v-52.6c0-11.3-9.1-20.4-20.4-20.4s-20.4 9.1-20.4 20.4v52.6c0 11.2 9.1 20.4 20.4 20.4z'];

export const ICON_FACEBOOK                        = ['M256 0C114.609 0 0 114.609 0 256c0 141.391 114.609 256 256 256 141.391 0 256-114.609 256-256C512 114.609 397.391 0 256 0zm0 472c-119.297 0-216-96.703-216-216S136.703 40 256 40s216 96.703 216 216-96.703 216-216 216z', 'M316.75 216.812h-44.531v-32.5c0-9.969 10.312-12.281 15.125-12.281h28.767v-43.859l-32.97-.172c-44.983 0-55.25 32.703-55.25 53.672v35.141H195.25V262h32.641v122h44.328V262h37.656l6.875-45.188z'];

export const ICON_TWITTER                         = ['M256 0C114.609 0 0 114.609 0 256c0 141.392 114.609 256 256 256 141.392 0 256-114.608 256-256C512 114.609 397.392 0 256 0zm0 472c-119.297 0-216-96.702-216-216 0-119.297 96.703-216 216-216 119.298 0 216 96.703 216 216 0 119.298-96.702 216-216 216z', 'M384 170.922c-4.312 2.562-17.248 7.671-29.312 8.953 7.735-4.491 19.188-19.203 22.016-30.89-7.436 5.109-24.516 12.562-32.95 12.562 0 0 0 .023.016.039C334.141 150.75 320.608 144 305.577 144c-29.154 0-52.81 25.461-52.81 56.875 0 4.36.481 8.595 1.357 12.672h-.017c-39.562-1.094-85.811-22.446-111.874-59-16 29.852-2.156 63.046 16.015 75.141-6.203.516-17.671-.766-23.061-6.407-.375 19.797 8.484 46.048 40.735 55.562-6.221 3.61-17.19 2.579-21.984 1.781 1.687 16.75 23.437 38.623 47.202 38.623-8.47 10.534-37.373 29.706-73.141 23.596C152.298 358.782 180.625 368 210.608 368c85.205 0 151.376-74.359 147.814-166.093 0-.11-.031-.219-.031-.313 0-.25.031-.5.031-.719 0-.281-.031-.562-.031-.859 7.75-5.688 18.155-15.782 25.609-29.094z'];

export const ICON_LINKEDIN                        = ['M256 0C114.609 0 0 114.609 0 256c0 141.391 114.609 256 256 256 141.391 0 256-114.609 256-256C512 114.609 397.391 0 256 0zm0 472c-119.297 0-216-96.703-216-216S136.703 40 256 40s216 96.703 216 216-96.703 216-216 216z', 'M128.094 383.891h48v-192h-48v192zm192-192c-41.094.688-61.312 30.641-64 32v-32h-48v192h48v-112c0-4.108 10.125-37 48-32 20.344 1.328 31.312 28.234 32 32v112l47.812.219V251.188c-1.687-19.188-11.281-58.61-63.812-59.297zm-168-64c-13.25 0-24 10.734-24 24s10.75 24 24 24 24-10.734 24-24-10.75-24-24-24z'];

export const ICON_EMAIL                           = ['M612 156.232c0-13.065-5.16-24.885-13.393-33.897-.137-.179-.168-.39-.316-.57-.137-.158-.327-.222-.475-.369-9.361-9.794-22.553-15.988-37.243-15.988H51.437c-14.69 0-27.882 6.194-37.264 15.988-.137.147-.338.211-.475.38-.148.169-.179.39-.316.57C5.161 131.358 0 143.167 0 156.232v299.546c0 13.382 5.372 25.486 13.962 34.573.169.189.222.422.412.602.063.063.137.073.201.137 9.361 9.541 22.394 15.514 36.863 15.514h509.136c14.469 0 27.513-5.983 36.863-15.523.063-.054.137-.074.2-.127.18-.169.232-.401.401-.581 8.601-9.086 13.973-21.201 13.973-34.594V156.232H612zM411.687 290.175l176.368-146.238c1.73 3.757 2.754 7.904 2.754 12.294v299.546c0 3.969-.823 7.736-2.248 11.208l-176.874-176.81zm148.886-163.82c4.443 0 8.633 1.013 12.442 2.723l-267.01 221.378-267.01-221.378c3.81-1.709 8-2.723 12.442-2.723h509.136zM23.45 466.976c-1.425-3.461-2.248-7.239-2.248-11.208V156.232c0-4.39 1.024-8.538 2.754-12.294l176.368 146.238-176.874 176.8zm27.987 18.669c-4.896 0-9.456-1.267-13.55-3.313l178.731-178.658 82.58 68.471c1.963 1.636 4.39 2.459 6.807 2.459 2.417 0 4.844-.823 6.807-2.459l82.58-68.471 178.731 178.658c-4.095 2.047-8.653 3.313-13.551 3.313H51.437z'];

export const LINKEDIN_AUTH_URL                    = 'https://www.linkedin.com/oauth/v2/authorization'
