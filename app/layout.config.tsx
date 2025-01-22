import { assets } from '@/assets/assets';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center space-x-2 ml-2">
        <Image
          src={assets.oktoicon} 
          alt="Okto Logo"
          width={36}  
          height={36}
        />
        <span className="text-black dark:text-white font-bold text-2xl">okto</span>
        <span className="bg-gray-700 text-[#A3BFFA] px-2 py-1 rounded-md text-sm font-medium">
          Docs
        </span>
      </div>
    ),
  },
  links: [
    {
      text: 'Blogs',  
      url: 'https://docs.okto.tech/blogs',  
      active: 'nested-url',
    },
   
  ],
};
