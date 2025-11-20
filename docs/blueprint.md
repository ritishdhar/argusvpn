# **App Name**: Argus VPN Clone

## Core Features:

- Pixel-Perfect Replication: Create a React-based clone of the Argus VPN website (https://argus-vpn.com), matching its layout, content, and styling using Tailwind CSS.
- Animated Hero Section: Implement the hero section with staggered entrance animations for headline, subtext, and CTA buttons using GSAP, and a continuously moving element in the hero art.
- Dynamic Counters: Create numeric counters that animate from 0 to target values (e.g., 50 locations) when scrolled into view using GSAP TweenMax.
- FAQ Accordion: Implement a collapsible FAQ accordion with animated open/close transitions and fade/stagger entrance effects.
- Firebase Deployment: Configure Firebase Hosting with a build/deploy script for one-command deployment, including firebase.json and firebaserc.

## Style Guidelines:

- Primary color: Deep blue (#191970) to evoke trust and security.
- Background color: Very dark, desaturated blue (#0A0A36) to allow content to pop.
- Accent color: Electric purple (#8A2BE2) to provide highlights and calls to action.
- Font pairing: 'Space Grotesk' (sans-serif) for headlines and 'Inter' (sans-serif) for body text to convey a modern, tech-forward feel.
- Use SVGs for all icons to ensure scalability and crispness, using icons from the original website where available or from a royalty-free icon set.
- Implement a page load overlay with a fade-out effect, creating a smooth transition to the hero section.
- Use GSAP ScrollTrigger to animate feature cards with a subtle entrance animation on scroll, enhancing user engagement.