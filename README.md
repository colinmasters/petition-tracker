# Port Moody Petition Data Visualization

This Next.js application provides neutral data visualization showing the current number of signatures on a Change.org petition as a percentage of Port Moody's total population. The project is designed to be transparent, factual, and informational.

## Live Demo

[View the live application](https://petition-tracker.vercel.app/) (Once deployed)

## Project Overview

This application:

- Fetches the current signature count from a Change.org petition
- Calculates the percentage relative to Port Moody's population (33,535)
- Presents this data with clear visualization (progress bar)
- Includes a timestamp of when the data was last updated
- Provides factual context without encouraging any particular action

## Technical Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Serverless functions
- **Data Fetching**: Axios, Cheerio for HTML parsing, SWR for client-side data fetching
- **Deployment**: Vercel

## Data Methodology

### Data Sources

- Petition URL: [Change.org Petition](https://www.change.org/p/stop-conflict-of-interest-on-port-moody-city-council)
- Port Moody Population: 33,535 (used as denominator for percentage calculation)

### Data Retrieval Process

1. The application fetches the HTML content from the Change.org petition page
2. It extracts the signature count using HTML parsing (Cheerio)
3. The count is cached to minimize requests to Change.org
4. The percentage is calculated as: (signature count / population) \* 100
5. Data is refreshed periodically to ensure accuracy

### Caching Strategy

- Server-side caching with a 1-hour TTL (Time-To-Live)
- Client-side caching using SWR with a 1-minute revalidation interval
- Cache headers are set on API responses

## Local Development Setup

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/colinmasters/petition-tracker.git
   cd petition-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

### Vercel Deployment

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the project settings in Vercel
4. Deploy the application

### Environment Variables

No environment variables are required for basic functionality.

## Project Structure

```
petition-tracker/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── petition/
│   │   │       └── route.ts    # API route for fetching petition data
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Main page component
│   └── components/
│       └── PetitionStats.tsx   # Component for displaying petition stats
├── public/                     # Static assets
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Update Procedures

To update the application:

1. Make changes to the codebase
2. Test locally to ensure functionality
3. Push changes to the GitHub repository
4. Vercel will automatically deploy the updated application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
