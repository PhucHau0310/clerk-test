'use client';

import { sideBarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
    const pathname = usePathname();
    return (
        <div>
            {sideBarLinks.map((item) => {
                const isActive = pathname === item.route;

                return (
                    <Link
                        key={item.label}
                        href={item.route}
                        className={`flex flex-row items-center gap-4 px-6 py-2 mb-1.5 ${
                            isActive && 'bg-[#ffffff29] rounded-2xl'
                        }`}
                    >
                        <Image
                            src={item.icon}
                            alt={item.label}
                            width={30}
                            height={30}
                        />
                        <p>{item.label}</p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Menu;
