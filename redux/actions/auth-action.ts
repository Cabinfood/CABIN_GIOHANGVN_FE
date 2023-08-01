import { createAction } from "@reduxjs/toolkit";

export const setAuthState = createAction<boolean>("auth/setAuthState");