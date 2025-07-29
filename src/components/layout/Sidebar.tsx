import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  PhotoIcon,
  DocumentTextIcon,
  DocumentCheckIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Tableau de bord', href: '/', icon: HomeIcon },
  { name: 'Clients', href: '/clients', icon: UsersIcon },
  { name: 'Calendrier', href: '/calendar', icon: CalendarIcon },
  { name: 'Forfaits', href: '/packages', icon: PhotoIcon },
  { name: 'Factures', href: '/invoices', icon: DocumentTextIcon },
  { name: 'Contrats', href: '/contracts', icon: DocumentCheckIcon },
  { name: 'Tâches', href: '/tasks', icon: ClipboardDocumentListIcon },
  { name: 'Paramètres', href: '/settings', icon: Cog6ToothIcon },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const location = useLocation();
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 h-full">
      <div className="flex h-16 shrink-0 items-center justify-between">
        <div className="flex items-center">
          <PhotoIcon className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">PhotoStudio CRM</span>
        </div>
        {isMobile && (
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Fermer le menu</span>
            <XMarkIcon
              className="h-6 w-6 text-gray-700"
              aria-hidden="true"
            />
          </button>
        )}
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                      location.pathname === item.href
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                    }`}
                    onClick={() => isMobile && setOpen(false)}
                  >
                    <item.icon
                      className={`h-6 w-6 shrink-0 ${
                        location.pathname === item.href
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <div className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white bg-indigo-600 rounded-lg">
              <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
              <span>Jean Dupont</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
