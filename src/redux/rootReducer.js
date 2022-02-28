import { combineReducers } from "redux";
import blushReducer from "./blush/blushReducer";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";
import bronzerReducer from "./bronzer/bronzerReducer";
import eyebrowReducer from "./eyebrow/eyebrowReducer";
import eyelinerReducer from "./eyeliner/eyelinerReducer";
import eyeshadowReducer from "./eyeshadow/eyeshadowReducer";
import foundationReducer from "./foundation/foundationReducer";
import liplinerReducer from "./lipliner/liplinerReducer";
import lipstickReducer from "./lipstick/lipstickReducer";
import mascaraReducer from "./mascara/mascaraReducer";
import nailpolishReducer from "./nailpolish/nailpolishReducer";


const rootReducer = combineReducers({
  productsState: productsReducer,
  cartState: cartReducer,
  blushState: blushReducer,
  bronzerState: bronzerReducer,
  eyebrowState: eyebrowReducer,
  eyelinerState: eyelinerReducer,
  eyeshadowState: eyeshadowReducer,
  foundationState: foundationReducer,
  liplinerState: liplinerReducer,
  lipstickState: lipstickReducer,
  mascaraState: mascaraReducer,
  nailpolishState: nailpolishReducer,
});

export default rootReducer;
