'use client';

import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to avoid hydration issues with the timestamp
const PetitionStats = dynamic(() => import('@/components/PetitionStats'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md animate-pulse">
      <div className="w-full h-4 bg-gray-200 rounded-full"></div>
      <div className="mt-4 w-3/4 h-4 bg-gray-200 rounded"></div>
    </div>
  ),
});

export default function PetitionStatsClient() {
  return <PetitionStats />;
}
