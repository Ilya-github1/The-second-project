import { createSlice } from "@reduxjs/toolkit"
const Calc = createSlice({
    name: 'Calc',
    initialState: {
        counter: '0',
        button: [{ val: '1' }, { val: '2' }, { val: '3' }, { val: '4' }, { val: '5' },
        { val: '6' }, { val: '7' }, { val: '8' }, { val: '9' }, { val: '0' }, { val: '/' },
        { val: '*' }, { val: '-' }, { val: '+' },],

        operations: [
            { val: 'CE' }, { val: 'C' }, { val: '=' }],
    },
    reducers: {
        calcOperation: (state, action) => {
            if (action.payload === "CE") {
                if (state.counter.length === 1) { state.counter = '0' }
                else { state.counter = state.counter.substring(0, state.counter.length - 1) }
            }
            if (action.payload === 'C') { state.counter = '0' }
            if (action.payload === '=') { state.counter = eval(state.counter) }
            if (state.counter === 0) {
                state.counter = 'eror'
            }
        },
        calcFn: (state, action) => {
            if (state.counter === '0') {
                state.counter = ''
            }
            state.counter += action.payload
        }
    },
})
export default Calc.reducer
export const { calcFn, calcOperation } = Calc.actions