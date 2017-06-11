export const API_BASE_URL                         = process.env.NODE_ENV === 'production' ? 'https://tilte-api.herokuapp.com/api': 'http://localhost:1601';

export const ASSETS_BASE_URL                      = (process.env.NODE_ENV === 'production' ? 'https://tilteui.herokuapp.com' : 'http://localhost:1600');

export const USER_AVATAR_PLACEHOLDER              = `${ ASSETS_BASE_URL }/images/hamburg.jpg`;

export const CORE_ACTIONS                         = {
                                                      fetchConfigRequest: 'Fetch config requested',
                                                      fetchConfigSuccess: 'fetch config successful',
                                                      fetchConfigError: 'fetch config failed',
                                                      updateCurrentModal: 'Update current modal',
                                                    };
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

export const ICON_FAVORITE                        = ['M516 792c204-184 338-306 338-430 0-86-64-148-150-148-66 0-130 42-152 100h-80c-22-58-86-100-152-100-86 0-150 62-150 148 0 124 134 246 338 430l4 4zM704 128c132 0 234 102 234 234 0 162-144 292-364 492l-62 56-62-54c-220-200-364-332-364-494 0-132 102-234 234-234 74 0 146 36 192 90 46-54 118-90 192-90z'];

export const ICON_SCROLL_LEFT                     = ['M711.219 891.802c13.722 13.926 13.722 36.301 0 50.125s-35.891 13.875-49.613 0l-400.896-404.89c-13.722-13.824-13.722-36.198 0-50.125l400.896-404.89c13.722-13.824 35.891-13.824 49.613 0 13.722 13.875 13.722 36.301 0 50.125l-365.619 379.853 365.619 379.802z'];
export const ICON_SCROLL_RIGHT                    = ['M678.4 512l-365.619-379.904c-13.722-13.824-13.722-36.198 0-50.125 13.722-13.824 35.891-13.824 49.613 0l400.896 404.89c13.722 13.875 13.722 36.301 0 50.125l-400.896 404.89c-13.722 13.875-35.891 13.824-49.613 0-13.722-13.773-13.722-36.198 0-50.125l365.619-379.75z'];

export const ICON_ARROW_UP_CIRCLE                 = ['M47.6792 11c-21.5153 0-39 17.4846-39 39.00002 0 21.5154 17.4847 39 39 39s39-17.4846 39-39C86.6792 28.4846 69.1945 11 47.6792 11zm0 4c19.3535 0 35 15.6464 35 35.00002 0 19.3536-15.6465 35-35 35s-35-15.6464-35-35C12.6792 30.6464 28.3257 15 47.6792 15zm0 9c-.4628 0-1.0768.2785-1.375.5625l-17 16c-.7723.747-.8463 1.9729-.062 2.8438.7007.7786 2.0516.7825 2.8125.062l13.625-12.8438v43.37502c0 1.1046.8954 2 2 2s2-.8954 2-2V30.6245l13.625 12.8438c.7608.7199 2.1094.6843 2.8438-.062.7752-.7885.6904-2.1082-.094-2.8438l-17-16c-.4611-.4701-.9054-.5546-1.375-.5625z'];

export const ICON_ARROW_DOWN_CIRCLE               = ['M47.6792 89.00002c21.5153 0 39-17.4846 39-39s-17.4847-39-39-39-39 17.4846-39 39 17.4847 39 39 39zm0-4c-19.3535 0-35-15.6464-35-35s15.6465-35 35-35 35 15.6464 35 35-15.6465 35-35 35zm0-9c.4628 0 1.0768-.2785 1.375-.5625l17-16c.7723-.747.8463-1.9729.062-2.8438-.7007-.7786-2.0516-.7825-2.8125-.062l-13.625 12.8438v-43.375c0-1.1046-.8954-2-2-2s-2 .8954-2 2v43.375l-13.625-12.8438c-.7608-.7199-2.1094-.6843-2.8438.062-.7752.7885-.6904 2.1082.094 2.8438l17 16c.4611.4701.9054.5546 1.375.5625z'];

export const ICON_SHARE                           = ['M30.5 56.5c-4.5 4.2-10.1 2.9-12.8-.2-3-3.4-3-8.5.2-11.8 2.8-3 8.3-4.1 12.6 0 .2-.1.5-.2.8-.4 12.1-6.7 24.1-13.4 36.2-20 .7-.4.9-.7.8-1.5-.8-4.5 2.5-9 7-9.8 4.7-.8 9.3 2.3 10.1 6.9.6 3.8-1 7.4-4.3 9.2-3.2 1.8-7.1 1.4-10-1.1-.2-.2-.4-.3-.6-.5-4.3 2.4-8.6 4.7-12.8 7.1-8.1 4.5-16.1 8.9-24.2 13.4-.7.4-.9.7-.7 1.5.1.9 0 1.8 0 2.6 0 .4.2.9.4 1 12.4 7 24.8 13.9 37.3 20.8 1.8-1.8 4-2.8 6.6-2.7 4.8.1 8.6 4.2 8.4 9-.2 4.9-4.4 8.6-9.2 8.3-5.2-.3-8.9-5-8-10.1.1-.5.1-.9-.5-1.2-12.3-6.8-24.7-13.6-37-20.4-.1 0-.2 0-.3-.1z'];

export const ICON_CANCEL                          = ['M69.7 68.3c.925.927-.458 2.343-1.4 1.4L50 51.4 31.7 69.7c-.938.938-2.326-.474-1.4-1.4L48.6 50 30.3 31.7c-.932-.933.468-2.332 1.4-1.4L50 48.6l18.3-18.3c.933-.932 2.331.467 1.4 1.4L51.4 50l18.3 18.3z'];

export const CURRENCY_SYMBOLS                     = {
                                                      nigeria: '\u20a6',
                                                    };

export const ICON_ARROW_DOWN                      = ['M316 334l196 196 196-196 60 60-256 256-256-256z'];
