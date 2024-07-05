import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"
type User = {
    id?: string
    fullname: string
    email?: string
    bio?: string
    image?: string
}
type UserAction = {
    setUser: (user: User) => void
    logout: () => void
}
export const useUserStore = create<User & UserAction>()(
    devtools(
        persist(
            (set) => ({
                id: "",
                fullname: "",
                email: "",
                bio: "",
                image: "",
                setUser: (user) => set(user),
                logout: () => {
                    set({ id: "", fullname: "", email: "", bio: "", image: "" })
                },
            }),
            { name: 'user-storage' }
        )
    )
)