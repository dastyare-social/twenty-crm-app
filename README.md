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

| Status View (Kanban) | Content Calendar | Content Dashboard |
|:---:|:---:|:---:|
| ![Status View](screenshots/status-view.png) | ![Content Calendar](screenshots/content-calendar.png) | ![Content Dashboard](screenshots/content-dashboard.png) |

| Project by Type | Funnel Leads | Campaign by Type |
|:---:|:---:|:---:|
| ![Project by Type](screenshots/project-by-type.png) | ![Funnel Leads](screenshots/funnel-leads.png) | ![Campaign by Type](screenshots/campaign-by-type.png) |

---

## Features

- **Content Pieces** — manage content with topic, type, status, media, description, publish date, pillar, platform, campaign link, and metrics (views/likes)
- **Projects** — track client deliveries, product builds, marketing campaigns, and personal brand work
- **Campaigns** — weekly cadence, workshops, product launches, and funnel pushes
- **Funnel Leads** — capture leads from magnets, quizzes, workshops, and waitlists with scorecard tier tracking
- **Status Kanban** — visual pipeline from Idea to Published with 10 workflow stages
- **Content Calendar** — calendar view of content by publish date
- **Content Dashboard** — metrics on published content, pillar breakdown, and upcoming queue
- **Record Page** — detailed view with Home, Timeline, Tasks, and Notes tabs
- **Seed Data** — automatically populates example content on install
- **CI/CD** — GitHub Actions for testing and deployment

## Objects

| Object | Description |
|--------|-------------|
| **Content Pieces** | Every post across every platform — topic, type, status, pillar, platform, campaign, metrics |
| **Projects** | Client deliveries, DS product builds, marketing, personal brand, internal ops |
| **Campaigns** | Weekly cadence, workshops, product launches, funnel pushes |
| **Funnel Leads** | Magnet/quiz/workshop/waitlist captures with scorecard tier scoring |

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
    content.object.ts            # Content data model (topic, type, status, pillar, platform, metrics)
    project.object.ts            # Projects (client delivery, product builds, marketing, personal brand)
    campaign.object.ts           # Campaigns (weekly cadence, workshops, launches, funnels)
    funnel-lead.object.ts        # Funnel leads (magnet, quiz, workshop, waitlist captures)
  views/
    status-view.ts               # Kanban view grouped by status (Content)
    table-view.ts                # Table view of all content
    content-calendar-view.ts     # Calendar view by publish date
    project-by-type-view.ts      # Kanban view grouped by project type
    project-active-view.ts       # Active projects table
    project-personal-brand-view.ts # Personal brand projects
    campaign-active-view.ts      # Active campaigns table
    campaign-by-type-view.ts     # Kanban view grouped by campaign type
    funnel-lead-by-source-view.ts # Kanban view grouped by source
    funnel-lead-scorecard-view.ts # Scorecard tier breakdown
    funnel-lead-uncontacted-view.ts # Uncontacted leads
  navigation-menu-items/
    contents.ts                  # Contents folder in sidebar
    status-view.ts               # Status View nav item
    table-view.ts                # Table View nav item
    content-calendar.ts          # Content Calendar nav item
    projects.ts                  # Projects folder in sidebar
    campaigns.ts                 # Campaigns folder in sidebar
    funnel-leads.ts              # Funnel Leads folder in sidebar
  page-layouts/
    content-layout.ts            # Record page layout with tabs
  front-components/
    main-page.tsx                # App main page component
    content-metrics-dashboard.tsx # Content metrics dashboard
  logic-functions/
    publish-content.ts           # Publish content logic
    seed-example-contents.ts     # Post-install seed data
  roles/
    default-function.role.ts     # Default app role
  __tests__/
    schema.integration-test.ts   # App installation and standard object tests
    objects.integration-test.ts  # CRUD tests for all custom objects
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
