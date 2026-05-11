# Frontend Modular Platform

Frontend monorepo focused on modular architecture, feature isolation, shared contracts, and scalable development workflows using React and TypeScript.

The project explores how medium-to-large frontend applications can be structured in a maintainable way without relying on tightly coupled application code.

---

# Project Goals

This repository focuses on a few core architectural objectives:

- Isolate features as independent development units
- Share common infrastructure through centralized contracts
- Maintain strict TypeScript boundaries across packages
- Support isolated development and testing workflows
- Keep application composition predictable and explicit

The goal is not to showcase UI complexity, but to explore frontend architecture and engineering practices commonly required in larger codebases.

---

# Repository Structure

The repository is organized as a multi-package monorepo managed with Rush.

Example structure:

```txt
apps/
  webapp/

features/
  accounts/
  auth/
  shared/

tools/
  eslint-scripts/
  jest-scripts/
  rollup-scripts/

configs/
  eslint/
  jest/
  rollup/
  typescript/
```

The monorepo structure allows:

- Shared tooling and configuration
- Reusable internal libraries
- Consistent dependency management
- Clear package ownership boundaries

Each package is treated as an independent library, even when consumed internally by other packages.

---

# Feature-Based Architecture

The application is organized around isolated feature modules instead of a single centralized frontend.

Each feature is designed to:

- Be developed independently
- Expose explicit integration contracts
- Support isolated testing and Storybook rendering

Features are generally isolated and communicate through shared contracts.

Some foundational features, such as `auth`, expose shared infrastructure consumed across the platform. This includes authentication fixtures, MSW handlers, and standardized state contracts used by other features during development and testing.

This approach helps maintain consistency across features while reducing duplicated integration logic.

---

# Shared Package (`shared`)

The `shared` package acts as a central integration layer for common platform infrastructure.

It contains resources such as:

- Application providers
- Shared UI components
- Theme configuration
- Routing contracts
- HTTP abstractions
- Testing utilities
- Storybook decorators
- Shared TypeScript types
- Common utilities and constants

Most features consume `shared` as their primary shared dependency.

This helps reduce implicit coupling and keeps integration boundaries predictable.

---

# Shared Tooling Infrastructure

The repository centralizes build and development tooling through dedicated internal packages.

`configs/` contains the shared configuration and base dependencies for each tool.

`tools/` consumes those configurations and exposes reusable command-line wrappers used by features and applications.

This approach helps:

- Avoid duplicated tooling configuration
- Keep dependency versions consistent
- Standardize development workflows across packages
- Simplify package setup for new features

Examples include:

- Shared ESLint configuration
- Shared Jest configuration
- Shared Rollup configuration
- Shared TypeScript configuration
- Reusable CLI wrappers for linting, testing, and bundling

---

# Isolated Development Workflow

Features can be executed and validated independently from the full application.

This allows teams to:

- Develop features in isolation
- Reduce local setup complexity
- Validate UI behavior without running the entire platform
- Shorten testing feedback loops

The final application composes the build output of each feature package.

---

# Storybook Integration

Storybook is used as an isolated rendering and validation environment.

Stories are used for:

- Component development
- Page-level rendering
- Feature flow validation
- UI testing targets

The project integrates Storybook with:

- Cypress
- Mock Service Worker (MSW)

This enables tests to run against realistic UI states using mocked network behavior.

---

# Testing Strategy

The repository includes multiple testing layers:

- Jest for unit testing
- React Testing Library for component and integration testing
- Cypress for end-to-end validation
- Mock Service Worker (MSW) for API simulation

Testing is designed to validate features both in isolation and during integration.

---

# Tooling

Main technologies used in the repository:

- React
- TypeScript
- Redux Toolkit
- Webpack
- Rollup
- Rush

The repository also includes:

- Dual ESM/CJS package outputs
- Shared linting and formatting rules
- Centralized TypeScript configuration
- Storybook-based development environments

---

# Architectural Notes

A few architectural constraints intentionally shape the repository design:

- Features should remain as isolated as reasonably possible
- Shared contracts are preferred over implicit integration
- Type safety is enforced across package boundaries
- Libraries and applications have separate responsibilities
- The final application should remain lightweight and compositional

The architecture evolved iteratively as new integration and testing requirements appeared during development.
