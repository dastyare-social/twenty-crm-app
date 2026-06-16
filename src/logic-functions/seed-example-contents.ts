import { CoreApiClient } from 'twenty-client-sdk/core';
import { definePostInstallLogicFunction } from 'twenty-sdk/define';
import { SEED_EXAMPLE_CONTENTS_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER } from 'src/constants/universal-identifiers';

const EXAMPLE_CONTENTS = [
  {
    topic: 'Getting Started with Content Creation',
    typeCustom: 'SHORT_FORM',
    description:
      'Learn the basics of creating engaging content for your audience. This beginner-friendly guide covers essential tips and best practices.',
    status: 'OPT01_IDEA_BACKLOG',
  },
  {
    topic: 'Advanced Video Production Techniques',
    typeCustom: 'LONG_FORM',
    description:
      'Master advanced filming, editing, and production techniques to take your video content to the next level. Explore professional workflows and tools.',
    status: 'OPT02_APPROVED',
  },
  {
    topic: 'Social Media Trends Q1 2026',
    typeCustom: 'SHORT_FORM',
    description:
      'Stay ahead of the curve with the latest social media trends and strategies for Q1 2026. Includes platform-specific insights and content ideas.',
    status: 'OPT03_SCRIPTING',
  },
  {
    topic: 'Building Your Personal Brand Online',
    typeCustom: 'LONG_FORM',
    description:
      'Comprehensive guide to establishing and growing your personal brand across digital platforms. Learn positioning, consistency, and audience engagement strategies.',
    status: 'OPT04_FILMING',
  },
  {
    topic: 'Content Calendar Planning for Teams',
    typeCustom: 'SHORT_FORM',
    description:
      'Streamline your content workflow with effective calendar planning. Discover tools, templates, and collaboration techniques for teams.',
    status: 'OPT05_ON_REVIEW',
  },
] as const;

const handler = async (payload: {
  previousVersion?: string;
  newVersion?: string;
}) => {
  console.log(
    `Seeding example contents for app version ${payload.newVersion ?? 'manual run'}`
  );

  const client = new CoreApiClient();

  const existing = await client.query({
    contents: {
      __args: { first: 100 },
      edges: {
        node: {
          topic: true,
        },
      },
    },
  });

  const existingTopics = new Set(
    existing.contents?.edges?.map((edge) => edge.node.topic) ?? []
  );

  const toCreate = EXAMPLE_CONTENTS.filter(
    (content) => !existingTopics.has(content.topic)
  );

  if (toCreate.length === 0) {
    console.log('Example contents already seeded, skipping.');

    return {
      success: true,
      message: 'Example contents already exist',
      contentCount: 0,
    };
  }

  const result = await client.mutation({
    createContents: {
      __args: {
        data: toCreate.map((content) => ({
          topic: content.topic,
          typeCustom: content.typeCustom,
          status: content.status,
          description: { markdown: content.description },
        })),
      },
      id: true,
      topic: true,
      status: true,
    },
  });

  const createdCount = result.createContents?.length ?? 0;

  console.log(`Created ${createdCount} example content records`);

  return {
    success: true,
    message: `Successfully seeded ${createdCount} example content records`,
    contentCount: createdCount,
  };
};

export default definePostInstallLogicFunction({
  universalIdentifier: SEED_EXAMPLE_CONTENTS_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'seed-example-contents',
  description: 'Seeds the app with example content pieces on installation',
  timeoutSeconds: 30,
  handler,
  shouldRunSynchronously: false,
});
