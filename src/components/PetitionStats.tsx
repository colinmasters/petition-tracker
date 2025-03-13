'use client';

// No need for useState and useEffect as we're using SWR for state management
import useSWR from 'swr';

// Define the petition data interface
interface PetitionData {
  count: number;
  percentage: number;
  population: number;
  timestamp: string;
  cached: boolean;
  error?: string;
}

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch petition data');
  }
  return res.json();
};

export default function PetitionStats() {
  // Use SWR for data fetching with automatic revalidation
  const { data, error, isLoading } = useSWR<PetitionData>('/api/petition', fetcher, {
    refreshInterval: 60000, // Refresh every minute
    revalidateOnFocus: false,
  });

  // Format the timestamp to a readable format
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });
  };

  // Format the percentage to 2 decimal places
  const formatPercentage = (percentage: number) => {
    return percentage.toFixed(2);
  };

  // Format the count with commas
  const formatCount = (count: number) => {
    return count.toLocaleString('en-US');
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gray-400 animate-pulse"></div>
        </div>
        <p className="mt-4 text-gray-500">Loading petition data...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
        <p className="text-gray-700">
          Unable to load petition data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Port Moody Petition Statistics
      </h2>
      
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">
            {formatPercentage(data.percentage)}% of Port Moody population
          </span>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-in-out" 
            style={{ width: `${Math.min(data.percentage, 100)}%` }}
          ></div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Current Signatures</p>
          <p className="text-2xl font-bold text-gray-800">{formatCount(data.count)}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Port Moody Population</p>
          <p className="text-2xl font-bold text-gray-800">{formatCount(data.population)}</p>
        </div>
      </div>
      
      {/* Source information */}
      <div className="text-sm text-gray-500">
        <p className="mb-1">
          <span className="font-medium">Source:</span>{' '}
          <a 
            href="https://www.change.org/p/stop-conflict-of-interest-on-port-moody-city-council"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Change.org Petition
          </a>
        </p>
        <p className="mb-1">
          <span className="font-medium">Population Source:</span> Statistics Canada
        </p>
        <p>
          <span className="font-medium">Last Updated:</span>{' '}
          {formatTimestamp(data.timestamp)}
        </p>
      </div>
    </div>
  );
}
