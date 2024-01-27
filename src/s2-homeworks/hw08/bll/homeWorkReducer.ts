import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

// export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // + need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // return state // need to fix
            let stateCopy=[...state]
            if (action.payload === "up") {
                return stateCopy.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1
                        }
                        if (a.name > b.name) {
                            return 1
                        }
                        return 0
                    }
                )
            } else {
                return stateCopy.sort((a, b) => {
                        if (a.name < b.name) {
                            return 1
                        }
                        if (a.name > b.name) {
                            return -1
                        }
                        return 0
                    }
                )
            }
        }
        case 'check': {
            // return state // + need to fix
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
