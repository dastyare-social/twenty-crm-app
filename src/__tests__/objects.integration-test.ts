import { CoreApiClient } from 'twenty-client-sdk/core';
import {
  CONTENT_OBJECT_UNIVERSAL_IDENTIFIER,
  PROJECT_OBJECT_UNIVERSAL_IDENTIFIER,
  CAMPAIGN_OBJECT_UNIVERSAL_IDENTIFIER,
  FUNNEL_LEAD_OBJECT_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';
import { describe, expect, it } from 'vitest';

describe('Content Pieces', () => {
  it('should create, read, and delete', async () => {
    const client = new CoreApiClient();

    const created = await client.mutation({
      createContent: {
        __args: {
          data: {
            topic: 'Test Content Piece',
            status: 'OPT01_IDEA_BACKLOG',
            typeCustom: 'SHORT_FORM',
          },
        },
        id: true,
      },
    });
    expect(created.createContent.id).toBeDefined();

    const read = await client.query({
      contents: {
        __args: {
          filter: { id: { eq: created.createContent.id } },
        },
        edges: {
          node: { id: true },
        },
      },
    });
    expect(read.contents.edges.length).toBe(1);

    await client.mutation({
      destroyContent: {
        __args: { id: created.createContent.id },
        id: true,
      },
    });
  });
});

describe('Projects', () => {
  it('should create, read, and delete', async () => {
    const client = new CoreApiClient();

    const created = await client.mutation({
      createProject: {
        __args: {
          data: {
            name: 'Test Project',
            projectType: 'CLIENT_DELIVERY',
            status: 'ACTIVE',
          },
        },
        id: true,
      },
    });
    expect(created.createProject.id).toBeDefined();

    const read = await client.query({
      projects: {
        __args: {
          filter: { id: { eq: created.createProject.id } },
        },
        edges: {
          node: { id: true },
        },
      },
    });
    expect(read.projects.edges.length).toBe(1);

    await client.mutation({
      destroyProject: {
        __args: { id: created.createProject.id },
        id: true,
      },
    });
  });
});

describe('Campaigns', () => {
  it('should create, read, and delete', async () => {
    const client = new CoreApiClient();

    const created = await client.mutation({
      createCampaign: {
        __args: {
          data: {
            name: 'Test Campaign',
            campaignType: 'WEEKLY_CADENCE',
            status: 'DRAFT',
          },
        },
        id: true,
      },
    });
    expect(created.createCampaign.id).toBeDefined();

    const read = await client.query({
      campaigns: {
        __args: {
          filter: { id: { eq: created.createCampaign.id } },
        },
        edges: {
          node: { id: true },
        },
      },
    });
    expect(read.campaigns.edges.length).toBe(1);

    await client.mutation({
      destroyCampaign: {
        __args: { id: created.createCampaign.id },
        id: true,
      },
    });
  });
});

describe('Funnel Leads', () => {
  it('should create, read, and delete', async () => {
    const client = new CoreApiClient();

    const created = await client.mutation({
      createFunnelLead: {
        __args: {
          data: {
            name: 'Test Funnel Lead',
            source: 'WEBSITE',
            status: 'NEW',
          },
        },
        id: true,
      },
    });
    expect(created.createFunnelLead.id).toBeDefined();

    const read = await client.query({
      funnelLeads: {
        __args: {
          filter: { id: { eq: created.createFunnelLead.id } },
        },
        edges: {
          node: { id: true },
        },
      },
    });
    expect(read.funnelLeads.edges.length).toBe(1);

    await client.mutation({
      destroyFunnelLead: {
        __args: { id: created.createFunnelLead.id },
        id: true,
      },
    });
  });
});
