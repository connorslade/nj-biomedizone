import { HASHNODE_DOMAIN } from "../consts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const query = `
    query Publication {
      publication(host: "${HASHNODE_DOMAIN}") {
        posts(first: 50) {
          edges {
            node {
              title
              brief
              slug
              publishedAt
            }
          }
        }
      }
    }
  `;

  let response = await (
    await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
  ).json();

  let raw_posts = response.data.publication.posts.edges;
  let posts = raw_posts.map((edge: any) => {
    let post = edge.node;

    return {
      title: post.title,
      brief: process_brief(post.brief),
      slug: post.slug,
      published: new Date(post.publishedAt).toLocaleDateString(),
    };
  });

  return { title: "NJ BioMedizone", posts };
};

function process_brief(str: string): string {
  str = str.slice(0, -3);

  while (str.length > 0 && [",", ".", "!", "?"].includes(str[str.length - 1]))
    str = str.slice(0, -1);

  return `${str}...`;
}
