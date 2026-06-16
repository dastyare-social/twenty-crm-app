import { defineLogicFunction } from 'twenty-sdk/define';
import { CoreApiClient } from 'twenty-client-sdk/core';
import { PUBLISH_CONTENT_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER } from '../constants/universal-identifiers';

const handler = async () => {
  const client = new CoreApiClient();

  // Get current time
  const now = new Date();
  const nowISO = now.toISOString();

  console.log('Checking for content to publish at:', nowISO);

  // Step 1: Find content in "Publishing Prep" that is due now
  const { contents: prepContents } = await client.query({
    contents: {
      __args: {
        filter: {
          status: { eq: 'OPT06_PUBLISHING_PREP' },
          publishAt: { lte: nowISO },
        },
      },
      edges: {
        node: {
          id: true,
          name: true,
          status: true,
          publishAt: true,
        },
      },
    },
  });

  // Update those to "Publishing"
  for (const contentEdge of prepContents?.edges || []) {
    const content = contentEdge?.node;
    if (!content) continue;

    console.log('Updating content to publishing:', content.name, content.id);
    await client.mutation({
      updateContent: {
        __args: {
          id: content.id,
          data: {
            status: 'OPT07_PUBLISHING',
          },
        },
        id: true,
      },
    });
  }

  // Step 2: Find content in "Publishing" that is due now (or just past) to mark as Published
  const { contents: publishingContents } = await client.query({
    contents: {
      __args: {
        filter: {
          status: { eq: 'OPT07_PUBLISHING' },
          publishAt: { lte: nowISO },
        },
      },
      edges: {
        node: {
          id: true,
          name: true,
          status: true,
          publishAt: true,
        },
      },
    },
  });

  // Update those to "Published" and call random URL
  for (const contentEdge of publishingContents?.edges || []) {
    const content = contentEdge?.node;
    if (!content) continue;

    console.log('Publishing content:', content.name, content.id);
    
    // Update status to published
    await client.mutation({
      updateContent: {
        __args: {
          id: content.id,
          data: {
            status: 'OPT08_PUBLISHED',
          },
        },
        id: true,
      },
    });

    // Call random URL (placeholder)
    try {
      const randomUrl = 'https://httpbin.org/get';
      console.log('Calling random URL for', content.name, ':', randomUrl);
      await fetch(randomUrl);
    } catch (error) {
      console.error('Error calling random URL:', error);
    }
  }

  return {
    processedPrep: prepContents?.edges?.length || 0,
    processedPublishing: publishingContents?.edges?.length || 0,
  };
};

export default defineLogicFunction({
  universalIdentifier: PUBLISH_CONTENT_LOGIC_FUNCTION_UNIVERSAL_IDENTIFIER,
  name: 'publish-content',
  description: 'Handles content publishing workflow: prep → publishing → published',
  timeoutSeconds: 30,
  handler,
  cronTriggerSettings: {
    pattern: '* * * * *', // Run every minute to check for due content
  },
});
