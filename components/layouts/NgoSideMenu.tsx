"use client"
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { MdAnalytics, MdStickyNote2 } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";
import { BsFillCartDashFill } from "react-icons/bs";
import { LogOut, Settings, User } from 'lucide-react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { LucideIcon } from 'lucide-react';
import { toast } from 'react-toastify';

interface MenuItem {
  href: string;
  icon: IconType | LucideIcon;
  label: string;
  onClick?: () => void;
}

const menuItems: MenuItem[] = [
  { href: '/dashboard', icon: MdAnalytics, label: 'Dashboard' },
  { href: '/financial-tracking', icon: BsFillCartDashFill, label: 'Financial Tracking' },
  { href: '/project-management', icon: MdStickyNote2, label: 'Project Management' },
  // { href: '/task-calendar', icon: IoCalendar, label: 'Task/Calendar' },
];

const NgoSideMenu: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const IS_PROJECT_OVERVIEW = pathname.includes('/project-management/project-review');

  const handleLogout = () => {
    localStorage.removeItem('user');
    
    // Clear session storage
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    
    toast.success('Logout successful');
    router.push('/');
  };

  const bottomMenuItems: MenuItem[] = [
    { href: '/settings', icon: RiSettings3Fill, label: 'Settings' },
    { href: '#', icon: LogOut, label: 'Logout', onClick: handleLogout },
  ];

  interface MenuItemProps extends MenuItem {
    isActive: boolean;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ href, icon: Icon, label, isActive, onClick }) => {
    if (onClick) {
      return (
        <button 
          onClick={onClick} 
          className={`block w-full text-left py-4 px-4 font-medium ${isActive ? 'bg-[#707fdd] bg-opacity-20 text-secondary rounded-lg' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
        >
          <Icon className={`inline-block mr-2 ${isActive ? 'text-secondary' : 'text-[#787f89]'}`} size={20} />
          {label}
        </button>
      );
    }
    
    return (
      <Link href={href} className={`block py-4 px-4 font-medium ${isActive ? 'bg-[#707fdd] bg-opacity-20 text-secondary rounded-lg' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
        <Icon className={`inline-block mr-2 ${isActive ? 'text-secondary' : 'text-[#787f89]'}`} size={20} />
        {label}
      </Link>
    );
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-72 bg-[#F1F2F7] shadow-md px-6 overflow-y-auto">
      <div className="p-6">
        <Image
          src="/images/logo2.png"
          alt=""
          width={100}
          height={42}
        />
      </div>
      <nav className="mt-6">
        <p className="px-4 mb-3 text-sm text-[#787f89]">MENU</p>
        {menuItems.map((item) => (
          <MenuItem
            key={item.href}
            {...item}
            isActive={(pathname === item.href || IS_PROJECT_OVERVIEW && item.href === '/project-management')}
          />
        ))}
      </nav>
      <nav className="mt-6">
        <p className="px-4 mb-3 text-sm text-[#787f89]">OTHERS</p>
        {bottomMenuItems.map((item) => (
          <MenuItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
};

export default NgoSideMenu;
