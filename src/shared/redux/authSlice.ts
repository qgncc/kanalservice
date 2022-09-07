import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: !!localStorage.getItem("login"),
        login: localStorage.getItem("login")
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem("login", action.payload)
            state.isLoggedIn = true
        },
        logout: state => {
            localStorage.removeItem("login")
            state.isLoggedIn = false
        },
    }
    
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer