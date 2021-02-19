import { 
    MENU_COLLAPSED
  } from '../actions/componentActions'
  
  // Define your state here
  const initialState = {
      drawer_menu : true
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
        // Component Collapsed
      case MENU_COLLAPSED:
        return {
            ...state,
            drawer_menu: !state.drawer_menu
        }
      // Return default state if you didn't match any case
      default:
        return state
    }
  }