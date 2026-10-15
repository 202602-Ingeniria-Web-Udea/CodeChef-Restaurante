# Antorcha

> A restaurant management web application for managing inventory, products, transactions, and user access through a responsive administrative dashboard.

## Project Information

| Field | Value |
| --- | --- |
| Status | Completed |
| Platform | Responsive web application |
| Language | TypeScript |
| UI | Next.js, React, Tailwind CSS, shadcn/ui |
| Repository | [GitHub](<repository-url>) |

## Overview

Antorcha is a restaurant management application designed to centralize administrative operations in a single, responsive interface. It supports the management of restaurant products, categories, ingredients, inventory, orders, payments, transactions, reports, and user accounts.

The application is tailored to a restaurant-bar focused on grilled dishes, hamburgers, fries, skewers, meat, and cheese-based meals. Its interface combines a consistent visual identity with reusable components and responsive layouts.

Antorcha includes authentication and role-based access control for `ADMIN` and `USER` accounts. Users can access the management features permitted by their roles, while administrative functions remain restricted to authorized personnel.

The project was developed as part of the Web Engineering course at Universidad de Antioquia.

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Language | TypeScript | Type-safe application development |
| UI | Next.js, React | Application pages and interactive user interfaces |
| Styling | Tailwind CSS | Responsive styling and design utilities |
| Components | shadcn/ui, Base UI, Mira preset | Reusable UI components and dashboard interface |
| Backend | Next.js App Router, Route Handlers | Server-side operations and API endpoints |
| Database | Supabase PostgreSQL | Persistent application data |
| ORM | Prisma | Database access and schema management |
| Authentication | Auth.js | Authentication and session management |
| Password Security | bcryptjs | Password hashing and verification |
| Build / Tooling | pnpm, ESLint, TypeScript | Dependency management, linting, and type checking |
| Testing | ESLint, production build, manual verification | Code quality and application validation |
| Deployment | Vercel | Web application hosting |

## Features

### Authentication and Access Control

- User sign-in and session management.
- Role-based access control for `ADMIN` and `USER` accounts.
- Protected pages and server-side authorization checks.
- Restricted administrative operations.

### Dashboard and Navigation

- Responsive administrative dashboard.
- Persistent sidebar navigation on desktop layouts.
- Navigation links based on user permissions.
- Consistent visual styling and reusable interface components.

### Product and Catalog Management

- Product catalog management.
- Category management.
- Ingredient management.
- Data tables and forms for managing registered records.
- Administrative restrictions for protected catalog operations.

### Inventory Management

- Inventory overview and stock tracking.
- Inventory movement registration and history.
- Incoming and outgoing stock movements.
- Validation of quantities and movement data.

### Orders and Payments

- Order registration and consultation.
- Order information and status management.
- Payment records associated with restaurant operations.
- Validation and feedback for data operations.

### Transactions and Reports

- Transaction and inventory movement tables.
- Selection of the relevant inventory item.
- Daily balance history and graphical visualization.
- Reports based on recorded operational data.

### User Management

- User listing and account information.
- Role assignment for `ADMIN` and `USER` accounts.
- Administrative access restrictions.
- Feedback for successful and unsuccessful operations.

## Project Structure

```text
antorcha/
├── docs/
│   ├── screenshots/
│   │   ├── mobile.png
│   │   └── desktop.png
│   ├── API.md
│   ├── DEPLOY.md
│   ├── DESIGNSYSTEM.md
│   ├── REQUIREMENTS.md
│   ├── SECURITY.md
│   └── SPEC.md
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (dashboard)/
│   │   ├── (public)/
│   │   ├── api/
│   │   ├── error.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── features/
│   │   ├── layout/
│   │   ├── shared/
│   │   └── ui/
│   ├── generated/
│   ├── hooks/
│   ├── lib/
│   │   ├── constants/
│   │   ├── db/
│   │   ├── formatters/
│   │   ├── permissions/
│   │   ├── validations/
│   │   ├── auth.ts
│   │   ├── prisma.ts
│   │   └── utils.ts
│   ├── services/
│   ├── types/
│   └── proxy.ts
├── .env.example
├── components.json
├── package.json
├── pnpm-lock.yaml
├── prisma7.config.ts
├── README.md
└── tsconfig.json
```

### Important Directories

| Directory | Purpose |
| --- | --- |
| `src/app/` | Application pages, layouts, route groups, and error handling |
| `src/app/(auth)/` | Authentication pages |
| `src/app/(dashboard)/` | Authenticated dashboard pages |
| `src/app/(public)/` | Public-facing pages |
| `src/app/api/` | API endpoints for application resources |
| `src/components/features/` | Feature-specific UI components |
| `src/components/layout/` | Shared layout components and navigation |
| `src/components/shared/` | Reusable components shared across features |
| `src/components/ui/` | Reusable shadcn/ui components |
| `src/hooks/` | Reusable React hooks |
| `src/lib/` | Authentication, database access, permissions, validation, formatting, and shared utilities |
| `src/services/` | Application service functions |
| `src/types/` | Shared TypeScript types |
| `prisma/` | Database schema, migrations, and seed script |
| `public/assets/` | Static application assets |
| `docs/` | Project specifications, API documentation, security guidance, design system, deployment guide, and screenshots |

## Getting Started

### Prerequisites

- Node.js compatible with the project's Next.js version.
- pnpm package manager.
- Git.
- A Supabase project with a PostgreSQL database.

### Clone the Repository

```bash
git clone <repository-url>
cd antorcha
```

### Open the Project

Open the project in Visual Studio Code or another compatible editor.

```bash
code .
```

Install the dependencies:

```bash
pnpm install
```

### Configure Services

Configure the Supabase database and application authentication settings before starting the application.

- [API](docs/API.md)
- [Security](docs/SECURITY.md)
- [Deployment](docs/DEPLOY.md)

### Configure Environment Variables

Create a `.env` file in the project root using `.env.example` as a reference.

```dotenv
# Supabase PostgreSQL connection string.
DATABASE_URL="your-database-connection-string"

# Authentication secret.
AUTH_SECRET="your-auth-secret"
```

Replace the example values with the credentials for your environment. Keep secrets out of source control and never expose server-side credentials in client-side code.

### Run the Application

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Tests

Run ESLint:

```bash
pnpm lint
```

Verify the production build:

```bash
pnpm build
```

## Documentation

| Document | Description |
| --- | --- |
| [SPEC.md](docs/SPEC.md) | Product scope and feature specification. |
| [REQUIREMENTS.md](docs/REQUIREMENTS.md) | Functional and non-functional requirements. |
| [DESIGNSYSTEM.md](docs/DESIGNSYSTEM.md) | Visual design system and reusable UI components. |
| [SECURITY.md](docs/SECURITY.md) | Authentication, authorization, and security guidelines. |
| [API.md](docs/API.md) | API endpoints, request and response contracts, and service communication. |
| [DEPLOY.md](docs/DEPLOY.md) | Build, deployment, release, and recovery procedures. |

## Screenshots

### Mobile

![Antorcha mobile interface](docs/screenshots/mobile.png)

### Desktop

![Antorcha desktop dashboard](docs/screenshots/desktop.png)

## Demo

[Watch the demo video](docs/demo/demo.mp4)

## Development

Use pnpm to manage dependencies and run project scripts. Keep the lockfile synchronized with dependency changes.

Follow the project's TypeScript conventions and reusable component patterns. Keep input validation, authorization, and error handling consistent across application pages and API endpoints.

Update the relevant documentation whenever application behavior, API contracts, security requirements, or the visual design system changes.

## Testing

The application is verified through code quality checks, production builds, and functional testing.

- **Code quality:** run ESLint and resolve relevant issues.
- **Production build:** confirm that the application compiles successfully.
- **Authentication:** verify sign-in, sign-out, and protected page access.
- **Authorization:** verify the permissions associated with `ADMIN` and `USER`.
- **Data operations:** verify the relevant forms, tables, and record management actions.
- **Inventory:** verify incoming and outgoing movements and balance updates.
- **Responsive design:** verify the interface on mobile and desktop screen sizes.

```bash
pnpm lint
pnpm build
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contributors

- **Jesus Torres: [jesus.torresq@udea.edu.co](jesus.torresq@udea.edu.co)** — Developer
- **Daniela Vela: [daniela.vela@udea.edu.co](daniela.vela@udea.edu.co)** — Developer
- **Isabela Bedoya: [isabela.bedoya@udea.edu.co](isabela.bedoya@udea.edu.co)** — Developer
