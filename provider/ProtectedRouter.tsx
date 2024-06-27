'use client'
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react'

function ProtectRouter({ children }: { children: ReactNode }) {
    const user = useUserStore(state => state)
    const [mouted, setMounted] = useState(false)
    const router = useRouter();

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!user.id) {
            router.push('/login')
        }
    }, [user])

    if (!user.id || !mouted) return null

    return (
        <div>{children}</div>
    )
}

export default ProtectRouter