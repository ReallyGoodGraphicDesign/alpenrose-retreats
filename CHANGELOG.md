# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Add comprehensive test suite (Vitest + React Testing Library)
- Implement content sanitization with DOMPurify
- Full accessibility audit and WCAG 2.1 AA compliance
- CSS Modules or Tailwind CSS integration

---

## [0.1.1] - 2026-02-05 (Vite Migration)

### Changed
- ✅ Migrated from Create React App to Vite
- ✅ Updated build toolchain for 10x faster builds (4s vs. 40-60s)
- ✅ Improved dev server startup: ~2.5s (vs. 5-10s)
- ✅ Lightning-fast hot-reload: ~100ms (vs. 1-2s)
- ✅ Renamed JSX files from `.js` to `.jsx` for proper Vite handling
- ✅ Eliminated 9 webpack security vulnerabilities

### Added
- ✅ `vite.config.js` for optimized build configuration
- ✅ Root `index.html` as Vite entry point
- ✅ New npm scripts: `npm run dev`, `npm run preview`

### Removed
- ✅ Dependency on Create React App and react-scripts
- ✅ Testing Library packages (replaced with Vitest in future)
- ✅ @babel/runtime (handled by Vite natively)

### Fixed
- ✅ Build toolchain security issues (eliminated all CRA webpack vulnerabilities)

---

## [0.1.0] - 2026-02-05

### Added
- ✅ Initial release of Alpenrose Retreats website
- ✅ Dynamic content fetching from Google Apps Script backend
- ✅ Responsive design for desktop, tablet, and mobile devices
- ✅ Loading skeleton with shimmer animation during data fetch
- ✅ Error toast notification with retry functionality
- ✅ Reusable components: `SectionBlock`, `CTAButton`, `LoadingSkeleton`, `ErrorToast`
- ✅ Custom `useModal` hook for modal state management
- ✅ Fetch timeout protection (10-second AbortController)
- ✅ ESLint configuration for code quality
- ✅ Prettier configuration for consistent code formatting
- ✅ Comprehensive README with setup and deployment instructions
- ✅ Contributing guidelines (CONTRIBUTING.md)
- ✅ MIT License
- ✅ Changelog (this file)
- ✅ npm scripts:
  - `npm start` — Development server with hot-reload
  - `npm run build` — Production build
  - `npm run lint` — Check code with ESLint
  - `npm run lint:fix` — Auto-fix ESLint issues
  - `npm run format` — Format code with Prettier
  - `npm run format:check` — Check Prettier formatting
  - `npm test` — Run test suite
- ✅ GitHub Pages deployment at `/alpenrose-retreats/` path

### Dependencies
- React 19.2.3
- React DOM 19.2.3
- React Scripts 5.0.1
- Testing Library packages for testing
- Web Vitals for performance monitoring

### Dev Dependencies
- ESLint 8.57.1
- Prettier 3.8.1
- ESLint plugins for React and React Hooks

### Known Issues
- 9 security vulnerabilities in React Scripts toolchain (webpack-related)
  - These will be resolved in v0.2.0 with Vite migration
- No comprehensive test coverage yet (planned for v0.2.0)
- No content sanitization (DOMPurify integration planned for v0.2.0)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Baseline
- LCP (Largest Contentful Paint): ~2.0s
- FID (First Input Delay): ~50ms
- CLS (Cumulative Layout Shift): ~0.05

---

## Version History

### v0.1.0 (Current)
- Initial public release
- Core feature set complete
- Deployed to GitHub Pages

### Future Versions

#### v0.2.0 (Planned)
- [ ] Vite migration (replaces Create React App)
- [ ] Unit tests with Jest + React Testing Library
- [ ] E2E tests with Playwright
- [ ] DOMPurify content sanitization
- [ ] WCAG 2.1 AA accessibility compliance
- [ ] Performance optimizations
- [ ] GitHub Actions CI/CD pipeline

#### v0.3.0 (Future)
- [ ] CSS Modules or Tailwind CSS
- [ ] Analytics integration (Google Analytics 4)
- [ ] Image optimization (WebP, AVIF, responsive images)
- [ ] Error tracking (Sentry)
- [ ] Dark mode support

---

## How to Use This Changelog

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes

---

**Maintained by:** Really Good Graphic Design  
**Repository:** [https://github.com/reallygoodgraphicdesign/alpenrose-retreats](https://github.com/reallygoodgraphicdesign/alpenrose-retreats)  
**Live Site:** [https://reallygoodgraphicdesign.github.io/alpenrose-retreats/](https://reallygoodgraphicdesign.github.io/alpenrose-retreats/)
