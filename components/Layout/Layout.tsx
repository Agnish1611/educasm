'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      <nav className="your-nav-classes">
        <Link 
          href="/" 
          className={`${pathname === '/' ? 'active-class' : ''}`}
        >
          Explore
        </Link>
        <Link 
          href="/playground" 
          className={`${pathname === '/playground' ? 'active-class' : ''}`}
        >
          Playground
        </Link>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}