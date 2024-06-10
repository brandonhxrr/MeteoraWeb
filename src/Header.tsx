import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full fixed top-0 z-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center">
            <img className="h-8 w-auto" src="logo.svg" alt="Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://tusitio.com/descargar" className="text-sm font-semibold text-gray-900">
            Descargar &rarr;
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40 bg-black bg-opacity-25" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-white p-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img className="h-8 w-auto" src="logo.svg" alt="Logo" />
            </a>
            <button
              type="button"
              className="p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            <div className="flex flex-col gap-4">
              <a href="https://github.com/tu-repositorio" className="text-base font-semibold text-gray-900 flex items-center gap-1">
                Código fuente <FaGithub className="h-5 w-5 text-gray-400" />
              </a>
              <a href="https://tusitio.com/descargar" className="text-base font-semibold text-gray-900 mt-4">
                Descargar &rarr;
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
