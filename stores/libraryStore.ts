import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

export interface LibraryState {
    breadcrumb: string[]
}
export interface LibraryAction {
    setBreadcrumb: (breadcrumb: string[]) => void
}
export const useLibraryStore = create<LibraryState & LibraryAction>()(
    devtools(
        persist(
            (set) => ({
                breadcrumb: [],
                setBreadcrumb: (breadcrumb: string[]) =>
                    set(() => ({ breadcrumb })),
            }),
            { name: 'library-storage' }
        )
    )
)