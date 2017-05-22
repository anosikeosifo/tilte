export const authData = (state = getInitialState, action) => {
  let { currentSlideIndex } = state.carouselConfig;

  switch (action.type) {
    case OAUTH_ACTIONS.setGuestUser:
      console.log('setguest user triggered')
      return update(state, {
        currentUser: { $set: null }
      });
    case OAUTH_ACTIONS.facebookAuthVerifyRequest:
      console.log('setguest user triggered')
      return update(state, {
        currentUser: { $set: null }
      });

    default:
      return state;
  }
}
