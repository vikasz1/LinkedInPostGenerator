# LinkedIn Post Generator

## Overview

LinkedIn Post Generator is a modern web application that helps professionals create engaging LinkedIn posts using AI. The application allows users to input a topic and customize their posts with different themes (Professional, Thought Leadership, Conversational) and length preferences. Using Google's Gemini AI, it generates three unique variations of LinkedIn posts with strong hooks, engaging content, and compelling calls-to-action.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with LinkedIn-inspired color palette and theming
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with request/response validation using Zod schemas
- **Development**: Hot reload with Vite integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed session management
- **In-Memory Storage**: Fallback memory storage implementation for development

### AI Integration
- **AI Provider**: Google Gemini AI for natural language generation
- **Post Generation**: Structured prompts to generate LinkedIn posts with specific themes and lengths
- **Response Handling**: JSON-formatted responses with multiple post variations

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL storage backend
- **User Storage**: Basic user management with in-memory fallback for development
- **Security**: Standard Express security practices with session-based authentication

### Development and Build Pipeline
- **Bundling**: Vite for frontend, esbuild for backend production builds
- **Development**: Integrated development server with hot module replacement
- **TypeScript**: Strict type checking across frontend, backend, and shared schemas
- **Database Management**: Drizzle Kit for schema migrations and database operations

### Design System
- **Component Library**: Custom implementation using Radix UI primitives
- **Theme System**: CSS custom properties with LinkedIn-inspired professional color scheme
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: ARIA-compliant components from Radix UI foundation

## External Dependencies

### AI Services
- **Google Gemini AI**: Core AI service for generating LinkedIn post content with customizable parameters

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL operations

### UI and Design
- **Radix UI**: Headless component primitives for accessible UI components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking for enhanced developer experience
- **React Hook Form**: Form state management and validation
- **TanStack Query**: Server state management and caching

### Utilities
- **Zod**: Schema validation for API requests and responses
- **date-fns**: Date manipulation utilities
- **clsx**: Conditional CSS class utilities