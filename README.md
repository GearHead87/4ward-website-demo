# Next.js 15 Template

A modern, feature-rich starter template for building web applications with Next.js 15, Auth.js v5, and Shadcn UI.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Authentication**: [Auth.js v5](https://authjs.dev/) (formerly NextAuth.js)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Features

- Modern React with App Router architecture
- Built-in authentication system using Auth.js v5
- Beautifully designed UI components with Shadcn UI
- Dark/Light mode support
- Fully typed with TypeScript
- ESLint and Prettier setup for code quality

## Getting Started

### Clone the Repository

```bash
# Clone without the .git folder
git clone --depth 1 --no-checkout https://github.com/GearHead87/Next.js15-Templete.git my-project
cd my-project
git checkout main
rm -rf .git
git init
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/
├── app/              # App router routes and layouts
├── components/       # UI components (including Shadcn UI)
├── lib/              # Utility functions and shared logic
├── public/           # Static assets
└── styles/           # Global styles
```

## Authentication

This template comes with Auth.js v5 preconfigured. To set up authentication:

1. Configure your authentication providers in `app/api/auth/[...nextauth]/route.ts`
2. Add your environment variables as specified in `.env.example`

## Customization

### Shadcn UI Components

Add new components using the Shadcn UI CLI:

```bash
npx shadcn-ui add button
npx shadcn-ui add card
# etc.
```

### Styling

This project uses Tailwind CSS. Customize your design system in the `tailwind.config.js` file.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth.js Documentation](https://authjs.dev/)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
