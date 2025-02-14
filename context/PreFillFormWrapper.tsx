'use client';

import { PreFillForm } from '@/components/shared/PreFillForm';
import { useUserContext } from './UserContext';

export function PreFillFormWrapper({ children }: { children: React.ReactNode }) {
  const { userContext, setUserContext } = useUserContext();

  if (!userContext) {
    return (
      <div className="min-h-screen bg-background text-white p-4">
        <PreFillForm onSubmit={(context) => setUserContext(context)} />
      </div>
    );
  }

  return children;
}