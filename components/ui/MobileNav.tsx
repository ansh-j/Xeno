"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sideBarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = () => {

    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image src="icons/hamburger.svg" alt='hamburger-icon' width={36} height={36} className='cursor-pointer sm:hidden' />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-dark-1 text-white'>
                    <Link href="/" className='flex items-center gap-1'>
                        <Image src="/icons/logo.svg" alt='logo-img' width={32} height={32} className='max-sm:size-10' />
                        <p className='text-[24px] font-extrabold text-white'>Xeno</p>
                    </Link>
                    <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>

                        <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sideBarLinks.map((link) => {
                                const isActive = pathname === link.route;

                                return (
                                    <SheetClose asChild key={link.label}>

                                        <Link href={link.route} className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", {
                                            "bg-blue-1": isActive,
                                        })}>
                                            <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
                                            <p className='font-semibold'>{link.label}</p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                        </section>

                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav