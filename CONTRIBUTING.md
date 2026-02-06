# Contributing to Alpenrose Retreats

Thank you for considering contributing to the Alpenrose Retreats project! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional. We're committed to providing a welcoming environment for all contributors.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. **Check existing issues** to avoid duplicates: [GitHub Issues](https://github.com/reallygoodgraphicdesign/alpenrose-retreats/issues)
2. **Open a new issue** with:
   - **Title:** Clear, concise description of the problem/feature
   - **Description:** Context, steps to reproduce (for bugs), or use case (for features)
   - **Environment:** Node version, OS, browser (if relevant)
   - **Screenshots/Logs:** Attach error messages or visual examples

### Submitting Pull Requests

1. **Fork the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/alpenrose-retreats.git
   cd alpenrose-retreats
   git checkout -b feature/your-feature-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Make your changes:**
   - Create or modify files as needed
   - Follow the [code style guidelines](#code-style)
   - Add comments for complex logic
   - Keep commits focused and atomic

4. **Run linting and formatting:**
   ```bash
   npm run lint:fix      # Fix ESLint issues
   npm run format        # Format with Prettier
   ```

5. **Test your changes:**
   ```bash
   npm start             # Run dev server
   npm run build         # Verify production build
   ```

6. **Commit with clear messages:**
   ```bash
   git add .
   git commit -m "feat: add loading skeleton component"
   ```

7. **Push and create a Pull Request:**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Provide a clear PR title and description
   - Reference related issues with "Closes #123"
   - Link to any relevant documentation

## Code Style

### JavaScript/React

- **Formatting:** Prettier (2-space indent, single quotes)
- **Linting:** ESLint (uses Create React App config + React hooks rules)
- **Naming:**
  - Components: PascalCase (`CTAButton.js`)
  - Files: Match component name or lowercase with hyphens (`use-modal.js` for hooks)
  - Functions/variables: camelCase
  - Constants: UPPER_SNAKE_CASE
- **Structure:**
  - Imports at top
  - Component/function definition
  - Inline utilities/helpers at bottom
  - Default export at end

### React Components

- Use **functional components** with hooks
- Keep components **focused** — single responsibility
- Use **custom hooks** to share state logic
- Prefer **composition** over prop drilling
- Add **JSDoc comments** for complex props

Example:
```javascript
/**
 * CTA Button component
 * @param {string} text - Button text
 * @param {function} onClick - Click handler
 * @param {string} [className] - Additional CSS class
 */
function CTAButton({ text, onClick, className = '' }) {
  // ...
}
```

### CSS

- Use **CSS variables** from `variables.css` for colors/fonts
- Keep styles in corresponding `.css` files
- Use semantic class names (lowercase with hyphens)
- Prefer **Flexbox** for layouts
- Keep specificity low
- Add comments for non-obvious styles

Example:
```css
.section-block {
  padding: var(--spacing-md);
  color: var(--color-text);
  border-radius: var(--radius-sm);
}
```

## Accessibility Guidelines

Ensure all changes maintain accessibility standards:

- ✅ Use semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- ✅ Add ARIA labels/descriptions for non-obvious elements
- ✅ Ensure keyboard navigation (Tab, Enter, Escape)
- ✅ Test with screen readers (VoiceOver on macOS, NVDA on Windows)
- ✅ Maintain sufficient color contrast (WCAG AA at minimum)
- ✅ Respect `prefers-reduced-motion` for animations
- ✅ Use `role`, `aria-label`, `aria-live` appropriately

Accessibility checklist:
```javascript
// ✅ Good
<button
  aria-label="Close modal"
  onClick={handleClose}
  className="close-btn"
>
  ×
</button>

// ❌ Bad
<div onClick={handleClose}>
  Close
</div>
```

## Testing

While comprehensive testing is still in progress, please:

- ✅ Manually test in multiple browsers (Chrome, Firefox, Safari, Edge)
- ✅ Test responsive behavior (desktop, tablet, mobile)
- ✅ Test with screen reader enabled
- ✅ Test keyboard navigation
- ✅ Check console for warnings/errors

## Documentation

- Update `README.md` if adding new features/scripts
- Add inline comments for non-obvious logic
- Update `CHANGELOG.md` with user-facing changes
- Document breaking changes prominently

## Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat: add loading skeleton component
fix: resolve modal focus management
docs: update deployment instructions
style: format with prettier
refactor: extract modal logic to custom hook
test: add component tests
chore: update dependencies
```

**Format:** `<type>: <subject>`

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style/formatting (no functional change)
- `refactor:` Code refactoring (no feature/fix)
- `test:` Adding/updating tests
- `chore:` Build, dependencies, etc.

## Performance Considerations

When making changes, consider:

- **Bundle size:** Are you adding large dependencies?
- **Render performance:** Avoid unnecessary re-renders with proper memoization
- **Network:** Are you making extra API calls?
- **Accessibility:** Does this impact screen reader performance?

## Security

- ✅ Validate all user input
- ✅ Sanitize content from external sources (use DOMPurify)
- ✅ Don't commit credentials or API keys
- ✅ Keep dependencies up to date
- ✅ Follow OWASP guidelines

Report security issues privately to the maintainers (do not open public issues).

## Review Process

1. A maintainer will review your PR
2. You may be asked to make changes
3. Once approved, your PR will be merged
4. Your contribution will be credited in `CHANGELOG.md`

## Development Workflow

### Setting Up

```bash
git clone <repository>
cd alpenrose-retreats
npm install
npm start
```

### Making Changes

```bash
# Create a feature branch
git checkout -b feature/my-feature

# Make changes, test locally
npm start

# Lint and format
npm run lint:fix && npm run format

# Commit
git commit -m "feat: add my feature"

# Push
git push origin feature/my-feature
```

### Testing Locally

```bash
# Development server with hot-reload
npm start

# Production build preview
npm run build

# Linting
npm run lint

# Formatting check
npm run format:check
```

## Useful Resources

- [React Documentation](https://react.dev)
- [Create React App Docs](https://create-react-app.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web Accessibility (WCAG 2.1)](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## Questions?

- Open a [GitHub Discussion](https://github.com/reallygoodgraphicdesign/alpenrose-retreats/discussions)
- Check existing documentation
- Reach out to maintainers

---

**Thank you for contributing!** 🙏
