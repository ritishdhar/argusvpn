# Truthlens AI - Complete Project Documentation

## Project Overview

**Truthlens AI** is an explainable deepfake-detection web app that lets users upload a video, image, or audio file and instantly check whether it's real, fake, or uncertain. It uses a multimodal AI pipeline to detect manipulations and generate transparent, visual results.

## Technology Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Deployment**: Firebase Hosting

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx             # Main page with GSAP animations
│   ├── globals.css          # Global styles and animations
│   └── favicon.ico
├── components/
│   ├── sections/
│   │   ├── Header.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero section with eye animation
│   │   ├── UploadAnalyze.tsx # File upload and analysis section
│   │   ├── Marquee.tsx      # Scrolling marquee banner
│   │   ├── Features.tsx     # How It Works section (4 cards)
│   │   ├── Counters.tsx     # Statistics section
│   │   ├── Faq.tsx          # FAQ accordion
│   │   ├── Cta.tsx          # Call-to-action section
│   │   ├── Results.tsx      # Analysis results dashboard
│   │   ├── Footer.tsx        # Footer with links
│   │   └── HeroIllustration.tsx # Eye animation component
│   ├── icons/
│   │   ├── Logo.tsx         # Main logo
│   │   └── Feature icons    # Feature section icons
│   ├── ui/                  # shadcn/ui components
│   └── Preloader.tsx        # Loading screen
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notifications
└── lib/
    └── utils.ts             # Utility functions

```

## Key Features Implemented

### 1. Hero Section
- **Title**: "TRUTHLENS" (Inter font, large, bold)
- **Tagline**: "Explainable Deepfake Detection"
- **CTA Button**: "Analyze Media" (scrolls to upload section)
- **Downward Arrow**: Animated bounce arrow at bottom
- **Background**: Animated eye illustration with:
  - Moving blurry orbs (8 orbs orbiting around eye)
  - Dust particles (30 floating particles)
  - Eye blink animation on load
  - Mouse interaction (eye follows cursor)

### 2. Upload & Analyze Section (`#upload-analyze`)
- **Title**: "Analyze Your Media"
- **Description**: Explains the multimodal detection pipeline
- **File Upload**:
  - Drag & drop support
  - File browser option
  - Accepts: MP4, MOV, WebM, PNG, JPG, WAV
  - File preview with thumbnail
  - Analysis mode labels (Fast/Full Analysis)
- **Progress States** (8 steps):
  1. Uploading file…
  2. Extracting frames…
  3. Processing appearance features (CLIP)…
  4. Detecting frequency artifacts (DCT)…
  5. Checking audio–visual sync (SyncNet)… (video with audio only)
  6. Analyzing speech signals… (audio present only)
  7. Combining model outputs…
  8. Finalizing result…
- **Progress UI**: Checklist with checkmarks, progress bar, loading animation

### 3. Marquee Section
- **Content**: "Deepfake Detection • AI-Powered Analysis • Real-Time Results • Trusted Technology • Advanced Algorithms • Secure Processing"
- **Font**: Anton (bold, large text)
- **Animation**: Infinite horizontal scroll
- **Purpose**: Visual separator between sections

### 4. Features Section (`#features`)
- **Title**: "How Truthlens AI Works?"
- **4 Feature Cards**:
  1. **Appearance Analysis (CLIP / LN-Tuned)**
     - Identifies semantic inconsistencies in facial features and textures
  2. **Frequency Artifact Detection (GANDCTAnalysis)**
     - Analyzes DCT coefficients to spot GAN-generated artifacts
  3. **Audio-Visual Sync Verification (SyncNet)**
     - Measures alignment between mouth movements and speech
  4. **Audio Authenticity Check**
     - Evaluates speech track using mel-spectrogram analysis
- **Styling**: Rounded corners (rounded-xl), hover effects

### 5. Counters Section (`#counters`)
- **3 Statistics**:
  - 10,000+ Videos Trained On (Video icon)
  - 95+ Detection Accuracy % (Globe icon)
  - 20+ Frames Per Second (Server icon)
- **Animation**: Numbers count up on scroll

### 6. FAQ Section (`#faq`)
- **5 Questions** about deepfake detection
- **Accordion UI**: Collapsible with animations
- **Topics**: How it works, file formats, accuracy, results dashboard, privacy

### 7. CTA Section (`#cta`)
- **Title**: "Ready to detect deepfakes?"
- **Description**: Encourages users to try the service
- **Button**: "Analyze Media" (scrolls to upload section)

### 8. Results Section (`#results`)
- **Only appears after analysis completes**
- **Verdict Card**: REAL/FAKE/UNCERTAIN with confidence score
- **Model Breakdown**: 4 score bars (color-coded: red/yellow/green)
- **Explanation Section**: Why this verdict
- **Evidence Gallery**: Heatmap placeholders
- **Frame Timeline**: Scrollable frame-by-frame analysis
- **Metadata Table**: Video/audio information
- **Export Report**: PDF download button
- **Animation**: Fade-in on reveal, auto-scrolls when complete

### 9. Header/Navigation
- **Brand**: "Truthlens AI" (no logo icon)
- **Navigation Links** (scroll to sections):
  - Analyze Media → `#upload-analyze`
  - How It Works → `#features`
  - Statistics → `#counters`
  - FAQ → `#faq`
- **Language Selector**: EN dropdown
- **CTA Button**: "Analyze Media" (scrolls to upload section)
- **Removed**: Log in button
- **Styling**: Rounded navbar, glassmorphism effect, floating animation

### 10. Footer
- **4 Columns**:
  1. Company Info (Truthlens AI description)
  2. Quick Links (scroll to sections)
  3. Resources (Documentation, API, Privacy, Terms)
  4. Contact (Email, Help Center, Report Issue)
- **Bottom Bar**: Copyright, social links (Twitter, LinkedIn, GitHub)

## Design Specifications

### Colors
- **Background**: Dark blue/purple (`bg-background`)
- **Card Background**: Dark card (`bg-card`)
- **Primary**: Purple (`--primary: 271 76% 53%`)
- **Text**: White/light gray (`text-foreground`, `text-muted-foreground`)

### Typography
- **Headlines**: Inter (bold, large)
- **Body**: Inter (regular)
- **Marquee**: Anton (bold, large, letter-spaced)
- **Hero Title**: Inter (6xl/8xl, bold)

### Animations
- **GSAP Animations**:
  - Hero section staggered entrance
  - Eye blink animation
  - Section reveal on scroll
  - Feature cards stagger
  - FAQ items stagger
  - Floating eye movement
  - Mouse interaction with eye
- **CSS Animations**:
  - Marquee infinite scroll
  - Orbiting orbs
  - Floating dust particles
  - Bouncing arrow
  - Results fade-in

### Button Styling
- **All buttons**: Fully rounded (`rounded-full`)
- **Primary CTA**: Purple background, white text
- **Secondary**: Outline style

## Section IDs for Navigation

- `#upload-analyze` - Upload & Analyze section
- `#features` - How It Works section
- `#counters` - Statistics section
- `#faq` - FAQ section
- `#cta` - Call-to-action section
- `#results` - Results section (appears after analysis)

## Backend Integration Points

### 1. File Upload Endpoint
**Location**: `src/components/sections/UploadAnalyze.tsx`
- **Current**: Mock file handling
- **Needs**: Backend API endpoint for file upload
- **Expected Request**: Multipart form data with file
- **Expected Response**: Upload confirmation with file ID

### 2. Analysis API
**Location**: `src/components/sections/UploadAnalyze.tsx` - `handleAnalyze` function
- **Current**: Simulated progress with timeouts
- **Needs**: Real-time WebSocket or polling endpoint
- **Expected Flow**:
  1. POST `/api/analyze` with file ID
  2. Receive analysis job ID
  3. Poll `/api/analysis/{jobId}/status` for progress
  4. Receive final results when complete

### 3. Results Data Structure
**Location**: `src/components/sections/Results.tsx`
- **Interface**: `AnalysisResult`
- **Expected Backend Response**:
```typescript
{
  verdict: 'REAL' | 'FAKE' | 'UNCERTAIN',
  confidence: number, // 0-100
  scores: {
    appearance: number, // 0-100
    frequency: number, // 0-100
    sync?: number, // 0-100 (if video with audio)
    audio?: number // 0-100 (if audio present)
  },
  metadata: {
    resolution: string,
    duration: string,
    fps: number,
    codec: string,
    audioPresent: boolean,
    compressionLevel: string,
    framesAnalyzed: number,
    audioSamplingRate?: number
  },
  warnings: string[]
}
```

### 4. PDF Report Generation
**Location**: `src/components/sections/Results.tsx` - Download button
- **Current**: Alert placeholder
- **Needs**: Backend endpoint `/api/report/{analysisId}`
- **Expected**: PDF file download

## Environment Variables Needed

Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
# Or your production API URL
```

## API Endpoints to Implement

1. **POST `/api/upload`**
   - Upload file
   - Returns: `{ fileId: string, fileName: string, fileSize: number }`

2. **POST `/api/analyze`**
   - Start analysis
   - Body: `{ fileId: string }`
   - Returns: `{ jobId: string }`

3. **GET `/api/analysis/{jobId}/status`**
   - Get analysis progress
   - Returns: `{ status: string, progress: number, currentStep: string }`

4. **GET `/api/analysis/{jobId}/results`**
   - Get final results
   - Returns: `AnalysisResult` object

5. **GET `/api/report/{jobId}`**
   - Download PDF report
   - Returns: PDF file

## Files Removed (Cleaned Up)

- `Partners.tsx` - Unused streaming service logos section
- `AppStoreBadge.tsx` - Unused app store badge
- `GooglePlayBadge.tsx` - Unused Google Play badge
- `HboLogo.tsx`, `HuluLogo.tsx`, `NetflixLogo.tsx`, `PrimeVideoLogo.tsx`, `YoutubeLogo.tsx` - Unused streaming logos
- `placeholder-images.json` and `placeholder-images.ts` - Unused placeholder images
- `docs/blueprint.md` - Old documentation
- `GITHUB_PUSH_GUIDE.md` - Merged into this documentation

## Important Notes

### Folder Name
The project folder is currently named `argusvpn`. To rename it:
```bash
# In parent directory (Windows PowerShell)
Rename-Item -Path "argusvpn" -NewName "truthlens-ai"
cd truthlens-ai

# Or in Command Prompt
ren argusvpn truthlens-ai
cd truthlens-ai

# Or in Git Bash/Linux/Mac
mv argusvpn truthlens-ai
cd truthlens-ai
```

**Note**: After renaming, you may need to:
- Update your IDE workspace
- Restart your development server
- Update any absolute paths in your configuration

### Font Loading
Fonts loaded in `src/app/layout.tsx`:
- Inter (body text)
- Audiowide (unused, can be removed)
- Anton (marquee text)

### GSAP Animations
All animations are in `src/app/page.tsx` using GSAP context. The animations include:
- Preloader fade-out
- Hero section staggered entrance
- Eye blink animation
- Section reveal on scroll
- Feature cards stagger
- FAQ items stagger

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Firebase
npm run deploy
```

## Next Steps for Backend Integration

1. **Replace mock analysis** in `UploadAnalyze.tsx` with real API calls
2. **Implement WebSocket or polling** for real-time progress updates
3. **Add error handling** for failed uploads/analyses
4. **Implement file validation** on backend
5. **Add authentication** if needed (currently no auth)
6. **Implement rate limiting** for API endpoints
7. **Add file storage** (S3, Firebase Storage, etc.)
8. **Implement PDF generation** for reports
9. **Add analytics tracking** for analysis usage
10. **Set up environment variables** for API URLs

## Testing Checklist

- [ ] File upload works (drag & drop and browse)
- [ ] File validation (type and size)
- [ ] Progress states display correctly
- [ ] Results section appears after analysis
- [ ] Navigation links scroll to correct sections
- [ ] All buttons are rounded
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Animations work smoothly
- [ ] Footer links work
- [ ] PDF download works (when backend ready)

## Deployment

The project is configured for Firebase Hosting. To deploy:

1. Set up Firebase project
2. Update `.firebaserc` with your project ID
3. Run `npm run deploy`

Or deploy to any other platform (Vercel, Netlify, etc.) - it's a standard Next.js app.

---

**Last Updated**: All changes completed for Truthlens AI conversion from Argus VPN

