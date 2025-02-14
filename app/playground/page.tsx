'use client';

import { toast } from 'react-hot-toast';
import { Layout } from '@/components/Layout/Layout';
import { PlaygroundView } from '@/components/Playground/PlaygroundView';
import { PreFillFormWrapper } from '@/context/PreFillFormWrapper';
import { useUserContext } from '@/context/UserContext';

export default function Playground() {
  const { userContext } = useUserContext();

  const handleError = (message: string) => {
    toast.error(message);
  };

  const handleSuccess = (message: string) => {
    toast.success(message);
  };

  return (
    <PreFillFormWrapper>
      <Layout>
        <PlaygroundView 
          onError={handleError}
          onSuccess={handleSuccess}
          userContext={userContext!}
        />
      </Layout>
    </PreFillFormWrapper>
  );
}