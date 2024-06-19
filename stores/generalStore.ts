import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

export interface GeneralState {
    isSignIn: boolean
}
export interface GeneralAction {
    setSignIn: (isSignIn: boolean) => void
}
export const userGeneralStore = create<GeneralState & GeneralAction>()(
    devtools(
        persist(
            (set) => ({
                isSignIn: false,
                setSignIn: (isSignIn: boolean) => set({ isSignIn })
            }),
            {
                name: 'general-storage'
            }
        )
    )
)