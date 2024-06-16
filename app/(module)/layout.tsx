'use client'
import Logo from '@/components/commons/Logo'
import { NavigationMenuDemo } from '@/components/commons/MegaMenu'
import ThemeSwitcher from '@/components/commons/ThemeSwitcher'
import Profile from '@/components/profile'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { getUser } from '@/services/auth'
import { useUserStore } from '@/stores/userStore'
import Link from 'next/link'
import React, { ReactNode, useEffect } from 'react'

function layout({ children }: { children: ReactNode }) {
    const { setUser, fullname, image, id } = useUserStore((state) => state)
    const fetchUser = async () => {
        const user = await getUser()
        const userObject = JSON.parse(user)
        setUser({
            id: userObject.id,
            fullname: userObject.fullname,
            image: userObject.imageUrl,
        })
    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div>
            <nav className="w-full flex items-center justify-between p-4">
                <Logo />
                <NavigationMenuDemo />
                <div className="flex items-center gap-6">
                    <ThemeSwitcher />
                    {id && <Profile />}
                    {!id &&
                        <>
                            <Button asChild variant={'outline'}><Link href='/sign-in'>Sign in</Link></Button>
                            <Button asChild><Link href='/sign-up'>Sign-up</Link></Button>
                        </>
                    }
                </div>
            </nav>
            {children}
        </div>
    )
}

export default layout