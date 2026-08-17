<p align="center">
  <img src="public/logo.svg" width="80" alt="Dastyare Social logo" />
</p>

<h1 align="center">Dastyare Social — Twenty CRM App</h1>

<p align="center">
  A content management and publishing workflow app built on
  <a href="https://twenty.com">Twenty CRM</a>.
</p>

<p align="center">
  <a href="https://github.com/dastyare-social/twenty-crm-app/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/dastyare-social-twenty-crm-app">
    <img src="https://img.shields.io/npm/v/dastyare-social-twenty-crm-app.svg" alt="npm version" />
  </a>
  <a href="https://github.com/dastyare-social/twenty-crm-app/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/dastyare-social/twenty-crm-app/ci.yml?branch=main" alt="CI" />
  </a>
</p>

---

## Screenshots

> Add screenshots of the app UI here.

<!-- Replace the placeholders below with actual screenshots -->

| Status View (Kanban) | Table View | Record Page |
|:---:|:---:|:---:|
| ![Status View](screenshots/status-view.png) | ![Table View](screenshots/table-view.png) | ![Record Page](screenshots/record-page.png) |

---

## Features

- **Content Object** — manage content pieces with topic, type, status, media, description, and publish date
- **Status Kanban** — visual pipeline from Idea to Published with 10 workflow stages
- **Table View** — sortable list of all content records
- **Record Page** — detailed view with Home, Timeline, Tasks, and Notes tabs
- **Publishing Workflow** — track content through: Idea &rarr; Approved &rarr; Scripting &rarr; Filming &rarr; On Review &rarr; Publishing Prep &rarr; Ready to Publish &rarr; Publishing &rarr; Published &rarr; Archived
- **Seed Data** — automatically populates example content on install
- **CI/CD** — GitHub Actions for testing and deployment

## Content Types

| Type | Description |
|------|-------------|
| Short-Form | Quick social media posts, reels, stories |
| Long-Form | Blog posts, scripts, in-depth articles |

## Prerequisites

- [Node.js](https://nodejs.org/) `^24.5.0`
- [Yarn](https://yarnpkg.com/) `>=4.0.2`
- [Twenty CRM](https://github.com/twentyhq/twenty) `>=2.31.0` (self-hosted or cloud)

## Installation

```bash
# Clone the repository
git clone https://github.com/dastyare-social/twenty-crm-app.git
cd twenty-crm-app

# Install dependencies
yarn install
```

## Usage

### Connect to a Twenty instance

```bash
yarn twenty auth
```

### Start development

```bash
yarn twenty dev
```

This registers the app with your Twenty instance and syncs all objects, views, and logic functions.

### One-time sync (no watch mode)

```bash
yarn twenty dev --once
```

### Build for production

```bash
yarn twenty dev:build
```

### Publish to npm

```bash
yarn twenty app:publish
```

## Project Structure

```
src/
  application.config.ts          # App definition (name, description, logo)
  constants/
    universal-identifiers.ts     # All UUIDs used across the app
  objects/
    content.object.ts            # Content data model
  views/
    status-view.ts               # Kanban view grouped by status
    table-view.ts                # Table view of all content
  navigation-menu-items/
    contents.ts                  # Contents folder in sidebar
    status-view.ts               # Status View nav item
    table-view.ts                # Table View nav item
  page-layouts/
    content-layout.ts            # Record page layout with tabs
  front-components/
    main-page.tsx                # App main page component
  logic-functions/
    publish-content.ts           # Publish content logic
    seed-example-contents.ts     # Post-install seed data
  roles/
    default-function.role.ts     # Default app role
```

## Development

### Add new entities

```bash
yarn twenty dev:add object        # New data object
yarn twenty dev:add field         # New field
yarn twenty dev:add view          # New view
yarn twenty dev:add logicFunction # New logic function
yarn twenty dev:add pageLayout    # New page layout
yarn twenty dev:add frontComponent # New React component
```

See the [Twenty Apps documentation](https://docs.twenty.com/developers/extend/apps/getting-started/quick-start) for details.

### Lint

```bash
yarn lint
yarn lint:fix
```

### Test

```bash
yarn test
yarn test:watch
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/my-feature`)
3. **Commit** your changes (`git commit -m 'Add my feature'`)
4. **Push** to the branch (`git push origin feature/my-feature`)
5. **Open** a Pull Request

Please ensure:

- All tests pass (`yarn test`)
- Lint passes (`yarn lint`)
- Commit messages are clear and descriptive
- New app entities are created with `yarn twenty dev:add`

## Documentation

- [Twenty Apps Guide](https://docs.twenty.com/developers/extend/apps/getting-started/quick-start)
- [Twenty Apps Concepts](https://docs.twenty.com/developers/extend/apps/getting-started/concepts)
- [Twenty Apps Data Models](https://docs.twenty.com/developers/extend/apps/data/overview)
- [Twenty Apps Logic Functions](https://docs.twenty.com/developers/extend/apps/logic/overview)
- [Twenty Apps Layout](https://docs.twenty.com/developers/extend/apps/layout/overview)
- [Rich App Example (Postcard)](https://github.com/twentyhq/twenty/tree/main/packages/twenty-apps/examples/postcard)

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built with <a href="https://twenty.com">Twenty CRM</a> by <a href="https://github.com/dastyare-social">Dastyare Social</a>
</p>
