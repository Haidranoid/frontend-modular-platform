export const authSlice = 'authSlice'

/*
import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice, SliceNames } from '@webapp/shared'
import { initialState } from '../initial-state'
import { authSliceTools } from '../slice-tools'

export const authSlice = createSlice({
  sliceName: SliceNames.AUTH,
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    update: (state, action: PayloadAction<{ bar: number }>) => {
      state.value = action.payload.bar
    },
  },
  extraReducers: (builder) => {
    authSliceTools.extraReducers(builder)
  },
})
interface CounterState {
  value: number
}

const initialState = { value: 0 } satisfies CounterState as CounterState

const counterSlice = cSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<{foo: number}>) {
      state.value += action.payload.foo
    },
  },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
incrementByAmount({foo: 10})
 */
