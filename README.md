# Alpenrose Retreats

A modern React web application showcasing Alpenrose Retreats accommodation options, amenities, and booking information. The site dynamically fetches content from a Google Apps Script backend, providing a flexible and maintainable way to update content without redeploying.

**Live Demo:** [https://reallygoodgraphicdesign.github.io/alpenrose-retreats/](https://reallygoodgraphicdesign.github.io/alpenrose-retreats/)

## Features

- 🎨 **Responsive Design** — Beautiful responsive UI that works on desktop, tablet, and mobile
- 📱 **Dynamic Content** — Content fetched from Google Apps Script backend (no hardcoding needed)
- ⚡ **Fast Load Times** — Optimized performance with loading skeletons and error recovery
- ♿ **Accessible** — Built with ARIA labels, keyboard navigation, and screen reader support
- 🔒 **Secure** — Fetch timeout protection, error handling, and retry logic
- 🎯 **Modern Stack** — React 19, ES6+, Vite with ESLint + Prettier

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── CTAButton.jsx   # Call-to-action button component
│   ├── ErrorToast.jsx  # Accessible error notification
│   ├── LoadingSkeleton.jsx  # Loading placeholder UI
│   └── SectionBlock.jsx # Reusable section panel
├── hooks/              # Custom React hooks
│   └── useModal.js     # Modal state management
├── Modal.jsx           # Modal base component
├── YourJourneyModal.jsx   # YourJourney/availability modal
├── SectionModal.jsx    # Content section modal
├── Main.jsx            # Primary app container
├── App.jsx             # Root component
├── App.css             # Global styles
├── Main.css            # Main component styles
├── variables.css       # CSS custom properties (colors, fonts)
├── index.jsx           # Entry point
└── index.css           # Base styles
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm 8+
- macOS, Windows, or Linux

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/reallygoodgraphicdesign/alpenrose-retreats.git
   cd alpenrose-retreats
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app opens at [http://localhost:3000/alpenrose-retreats](http://localhost:3000/alpenrose-retreats)

## Available Scripts

### Development

**`npm run dev`**
- Runs the app in development mode with hot-reload
- Opens browser at http://localhost:3000/alpenrose-retreats
- ESLint errors/warnings appear in the console
- Lightning-fast (~100ms) reload on file changes

**`npm run preview`**
- Preview the production build locally
- Useful for testing before deployment

**`npm test`** (Not available)
- Testing infrastructure coming soon with Vitest
- See [#12 Roadmap](#roadmap) for planned test setup

### Linting & Formatting

**`npm run lint`**
- Checks code against ESLint rules
- Reports issues without modifying files

**`npm run lint:fix`**
- Auto-fixes ESLint violations
- Updates files in place

**`npm run format`**
- Formats all JS/JSX/CSS files with Prettier
- Ensures consistent code style

**`npm run format:check`**
- Checks if files match Prettier formatting standards
- Does not modify files

### Production

**`npm run build`**
- Creates an optimized production build in `dist/` folder
- Minifies code and optimizes assets
- Build is ready for deployment to GitHub Pages
- **~4s build time** (vs. 40-60s with Create React App)

## Configuration

### Vite

Configure build settings in [vite.config.js](vite.config.js):
- Base path: `/alpenrose-retreats/` (for GitHub Pages)
- Dev server port: 3000
- Output directory: `dist/` (instead of `build/`)
- Fast refresh: Enabled by default with @vitejs/plugin-react

Configure linting rules in [.eslintrc.json](.eslintrc.json):
- Extends React best practices
- Enforces React hooks rules
- Warns on unused variables and console output

### Prettier

Configure code formatting in [.prettierrc](.prettierrc):
- 80-character line width
- 2-space indentation
- Single quotes, trailing commas
- JSX double quotes for consistency

### CSS Variables

Define global colors, fonts, and spacing in [src/variables.css](src/variables.css):
```css
:root {
  --color-primary: #...;
  --color-text: #...;
  --font-sans: ...;
  /* Add more as needed */
}
```

## Key Components

### `SectionBlock`
Reusable component for displaying content sections with title, description, and optional CTA button.

```jsx
<SectionBlock
  sectionId="alpenrose"
  section={content.alpenrose}
  onCtaClick={setActiveModal}
  panelClassName="text-panel-alpenrose"
/>
```

### `useModal` Hook
Custom hook for managing modal state (open/close, active modal type).

```jsx
const { activeModal, closeModal, openSectionModal } = useModal(null);
```

### `ErrorToast`
Accessible error notification with Retry and Dismiss actions. Automatically dismisses after 5 seconds.

```jsx
<ErrorToast
  message={error}
  onRetry={() => setRetryCount((c) => c + 1)}
  onClose={() => setError(null)}
/>
```

### `LoadingSkeleton`
Shows placeholder UI with shimmer animation while fetching content from the backend.

```jsx
{loading && <LoadingSkeleton />}
```

## Data Fetching

Content is fetched from a Google Apps Script macro endpoint:

```javascript
fetch('https://script.google.com/macros/s/.../exec')
  .then(res => res.json())
  .then(rows => {
    // Normalize data by section_id
  })
  .catch(err => {
    // Handle errors with user-friendly messaging
  })
```

**Features:**
- 10-second timeout protection (AbortController)
- Automatic retry on user request
- Graceful error handling with user feedback
- Shimmer loading UI during fetch

## Deployment

### GitHub Pages

The app is deployed to GitHub Pages at the `/alpenrose-retreats/` path.

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy (via GitHub Actions or manual push):**
   ```bash
   git add build/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### Environment Variables

Create a `.env.local` file for local development (git-ignored):
```
REACT_APP_API_URL=https://script.google.com/macros/s/.../exec
```

Then in code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'https://...';
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Dev Server:** ~2.5s startup (vs. 5-10s with CRA)
- **Hot Reload:** ~100ms (vs. 1-2s with CRA)
- **Build Time:** ~4s (vs. 40-60s with CRA)
- **Loading Skeletons:** Improves perceived performance during data fetch
- **CSS Variables:** Efficient theming without CSS-in-JS overhead
- **Code Splitting:** Vite automatically optimizes code splitting

Target runtime metrics:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

Monitor with [Lighthouse](https://developers.google.com/web/tools/lighthouse) or [WebVitals](https://web.dev/vitals/).

## Accessibility

- ♿ ARIA labels on interactive elements
- ⌨️ Full keyboard navigation support
- 🎨 High contrast color scheme
- 🔊 Screen reader friendly
- 🎬 Respects `prefers-reduced-motion`

See [CONTRIBUTING.md](CONTRIBUTING.md#accessibility) for accessibility guidelines.

## Known Issues & Roadmap

### Recent Improvements (Feb 5, 2026)
- ✅ Migrated from Create React App to Vite
- ✅ Eliminated 9 webpack security vulnerabilities
- ✅ ~10x faster builds (4s vs. 40-60s)
- ✅ ~20x faster hot-reload (~100ms vs. 1-2s)

### Current Limitations
- No unit/integration tests yet — [planned for v0.2.0](#roadmap)

### Roadmap

**v0.2.0** (Planned)
- [ ] Add unit tests with Vitest + React Testing Library
- [ ] Add E2E tests with Playwright
- [ ] Implement content sanitization (DOMPurify)
- [ ] Improve accessibility (WCAG 2.1 AA compliance)

**v0.3.0** (Future)
- [ ] CSS Modules or Tailwind CSS for scoped styling
- [ ] Analytics integration (Google Analytics 4)
- [ ] Image optimization (WebP, AVIF, responsive images)
- [ ] Performance monitoring (Sentry)

## Troubleshooting

### Dev Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Port 3000 Already in Use
```bash
# Use a different port
PORT=3001 npm start
```

### Build Fails
```bash
# Check for ESLint errors
npm run lint

# Force rebuild (clears cache)
rm -rf build/
npm run build
```

### Images Not Loading in Production
- Check that relative paths in CSS use correct paths
- Verify `homepage` in package.json matches deployment URL
- See [Deployment section](#deployment)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on making contributions.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## Support

For issues, questions, or feature requests, please open an issue on [GitHub](https://github.com/reallygoodgraphicdesign/alpenrose-retreats/issues).

## Credits

- Built with [React](https://react.dev)
- Powered by [Vite](https://vitejs.dev)
- Maintained by [Really Good Graphic Design](https://reallygoodgraphicdesign.com)

---

**Last Updated:** February 5, 2026  
**Version:** 0.1.0
