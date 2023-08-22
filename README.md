# DataGuard Coding challenge

[notes](./PLANNING.md)

## Task

- Create User Interface as per the Design on next slides
- Create a Mock JSON API server for handling GET and POST requests
- Retrieve data from that mock server, use it in your components
- Make sure the Toggle Switches are working with the API
- Ensure the overall Power Switch disables all the plugins in all the tabs as per the Design
- Switching between tabs, should change the URL

## We evaluate you based on

- Components
- Two-way data binding
- Data structures
- API Communication
- User-Interface

## Deliverable

- Deploy you submission on **Heroku**/netlify. I used [vercel](https://vercel.com/dashboard). I already have an account and they dont request payment method to deploy.
- Chare a link to your code from **github**/bitbucket whichever works fine for you

### Pages

https://dg-coding-challenge.vercel.app/dashboard
https://dg-coding-challenge.vercel.app/dashboard/tab1
https://dg-coding-challenge.vercel.app/dashboard/tab2
https://dg-coding-challenge.vercel.app/dashboard/tab3

https://dg-coding-challenge.vercel.app/visual-guide

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3010`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

## Tokens

[DG Figma file](https://www.figma.com/file/fjO8pNw4YkZ2bZr4RQ1SMN/DataGuard-DS?type=design&node-id=14%3A36&mode=design&t=lI75MHet3QllzvH7-1)

## Stack

- NuxtJS - VueJS
- NitroJS
- TailwindCSS
