import categorySlice from "./categorySlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
	reducer: categorySlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
