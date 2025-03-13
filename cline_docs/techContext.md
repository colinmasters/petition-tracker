# Technical Context

## Technologies Used

### Frontend

- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **SWR/React Query**: Data fetching and caching libraries

### Backend

- **Next.js API Routes**: Serverless functions for backend operations
- **Node.js**: JavaScript runtime for server-side code
- **Axios/Fetch**: HTTP client for making requests

### Deployment & Infrastructure

- **GitHub**: Version control and source code management
- **Vercel**: Deployment platform optimized for Next.js
- **Environment Variables**: For configuration management

### Development Tools

- **ESLint**: JavaScript linting utility
- **Prettier**: Code formatter
- **Jest/React Testing Library**: Testing frameworks
- **Husky/lint-staged**: Git hooks for code quality

## Development Setup

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn package manager
- Git for version control

### Local Development

1. Clone the repository
2. Install dependencies with `npm install` or `yarn`
3. Create a `.env.local` file with required environment variables
4. Run the development server with `npm run dev` or `yarn dev`
5. Access the application at `http://localhost:3000`

### Environment Variables

- `NEXT_PUBLIC_POPULATION`: Port Moody population figure
- `PETITION_URL`: URL of the Change.org petition
- `CACHE_TTL`: Time-to-live for cached data (in seconds)

## Technical Constraints

### Change.org Data Access

- No official API for Change.org petition data
- Need to implement web scraping or use unofficial methods
- Potential rate limiting or CORS issues
- Terms of Service considerations

### Performance Considerations

- Minimize requests to Change.org to avoid rate limiting
- Implement caching to reduce load times
- Optimize bundle size for faster initial load

### Browser Compatibility

- Support modern browsers (Chrome, Firefox, Safari, Edge)
- Ensure responsive design for mobile devices
- Maintain accessibility standards (WCAG 2.1)

### Security Considerations

- Implement proper CORS policies
- Sanitize any user inputs
- Protect against common web vulnerabilities
- Use environment variables for sensitive configuration

### Deployment Constraints

- Vercel serverless function execution time limits
- Vercel edge function size limits
- GitHub repository size limits
