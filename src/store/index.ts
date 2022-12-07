import categorySlice from "./categorySlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
	reducer: categorySlice.reducer,
});

export default store;
