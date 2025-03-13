import PetitionStatsClient from '@/components/PetitionStatsClient';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Port Moody Petition Data
          </h1>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-gray-700 mb-4">
            This page displays neutral data showing the current number of signatures on a 
            Change.org petition as a percentage of Port Moody's total population.
          </p>
          <p className="text-gray-700">
            The data is presented for informational purposes only and is updated regularly.
          </p>
        </div>
        
        <PetitionStatsClient />
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About This Project</h2>
          <p className="text-gray-700 mb-4">
            This is an open-source project that provides transparent access to petition data.
            The code is publicly available on GitHub for complete transparency.
          </p>
          <p className="text-gray-700">
            <strong>Methodology:</strong> The signature count is retrieved from the Change.org petition page.
            The percentage is calculated using Port Moody's population of 33,535 as the denominator.
          </p>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Port Moody Petition Data | 
            <a 
              href="https://github.com/colinmasters/petition-tracker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              View Source Code
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
