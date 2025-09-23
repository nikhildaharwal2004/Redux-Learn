import { createStore } from 'redux';

const initialState = {
    user : {
    username : "Nikhil",
    balance: 25000
    }
}

export const addMoney = (amount) => ({
  type: 'addMoney',
  payload: amount
})

export const removeMoney = (amount) => ({
  type: 'removeMoney',
  payload: amount
})

function reducer(state = initialState, action){
    switch(action.type) {
        case 'addMoney':
            return {
                user : {
                    username: state.user.username,
                    balance: state.user.balance + action.payload
            }
        }
        case 'removeMoney':
            return {
                user : {
                    username: state.user.username,
                    balance: state.user.balance - action.payload
            }
        }
        default: 
        return state
    }
}

const store = createStore(reducer);

export default store;