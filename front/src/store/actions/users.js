import {SET_USER} from '../constants'
import axios from 'axios';

const setUser = (user) => ({
        type: SET_USER,
        user
})

export const createUser = (user) => dispatch =>
        axios.post(`/api/users/register`, user)
        .then(data => data.data)
        .then(user => dispatch(setUser(user)))