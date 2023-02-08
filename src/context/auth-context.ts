import React from "react"
import { useState } from "react"

import * as auth from '../auth-provider'
import { User } from "../screens/project-list/search-panel";


interface AuthForm {
    username: string;
    password: string;
}


const AuthContext = React.createContext(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = () => {
    const [user, setUser] = useState<User | null>(null)

    // 这里有个挺有意思的东西。这个then函数里返回的user，成功和失败都要考虑
    const login = (form : AuthForm) => auth.login(form).then(user => setUser(user))
    const register = (form : AuthForm) => auth.login(form).then(user => setUser(user))
}