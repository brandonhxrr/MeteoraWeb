import React from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type NavigationItem = {
    name: string;
    href: string;
};

type HeaderProps = {
    navigation: NavigationItem[];
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ navigation, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          <a href="#" className="flex items-center">
            <img className="h-8 w-auto" src="only_logo.svg" alt="Logo" />
            <p className="text-lg font-bold tracking-tight text-gray-900 pl-3 font-logo">Meteora</p>
          </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item:any) => (
              <a key={item.name} href={item.href} className="text-base font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="mailto:brandondh769@gmail.com?subject=Portfolio Contact" className="text-sm font-semibold leading-6 text-white rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 p-2">
              Download
            </a>
          </div>
        </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
            <img className="h-8 w-auto" src="logo.svg" alt="Logo" />
          </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item:any) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="mailto:brandondh769@gmail.com?subject=Portfolio Contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
