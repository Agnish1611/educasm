'use client';

import { toast } from 'react-hot-toast';
import { Layout } from '@/components/Layout/Layout';
import { ExploreView } from '@/components/Explore/ExploreView';
import { PreFillFormWrapper } from '@/context/PreFillFormWrapper';
import { useUserContext } from '@/context/UserContext';

export default function Home() {
  const { userContext } = useUserContext();

  const handleError = (message: string) => {
    toast.error(message);
  };

  return (
    <PreFillFormWrapper>
      <Layout>
        <ExploreView 
          onError={handleError}
          userContext={userContext!}
        />
      </Layout>
    </PreFillFormWrapper>
  );
}