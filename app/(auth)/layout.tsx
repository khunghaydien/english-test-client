'use client'
import React, { ReactNode } from 'react'
function layout({ children }: { children: ReactNode }) {
    return (
        <div
            id="AuthOverlay"
            className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-opacity-50"
        >
            <div className="relative w-full max-w-[470px] h-[70%] p-4 rounded-lg">
                {children}
            </div>
        </div>
    )
}

export default layout