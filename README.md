# Argus VPN Clone

This is a Next.js project that clones the Argus VPN website, built with React, Tailwind CSS, and GSAP for animations.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Deployment to Firebase Hosting

This project is configured for easy deployment to Firebase Hosting.

### Prerequisites

1.  You must have a Firebase project. Create one at the [Firebase Console](https://console.firebase.google.com/).
2.  Install the Firebase CLI globally if you haven't already: `npm install -g firebase-tools`.
3.  Log in to Firebase: `firebase login`.
4.  Update the `.firebaserc` file with your Firebase project ID.

### Deploy Command

Once set up, you can deploy the website with a single command:

```bash
npm run deploy
```

This command will build the Next.js application and deploy it to your configured Firebase Hosting site.
