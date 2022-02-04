import { atom } from 'recoil'

export const monthState = atom({
	key: 'selectedMonth', // unique ID (with respect to other atoms/selectors)
	default: 1, // default value Jan
})
