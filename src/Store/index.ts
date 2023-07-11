import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contacts-slice";
export const store = configureStore({
  reducer: { contactReducer },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
