import type { PageServerLoad } from "../../$types";
import { error } from "@sveltejs/kit";
import { HASHNODE_DOMAIN } from "../../../consts";

export const load: PageServerLoad = async (data) => {
  if (!("slug" in data.params)) throw new Error("Missing slug parameter.");
  let slug = data.params.slug;

  const query = `
    query Publication {
      publication(host: "${HASHNODE_DOMAIN}") {
        post(slug: "${slug}") {
          title
          brief
          url
          publishedAt
          readTimeInMinutes
          content {
            markdown
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

  let post = response.data.publication.post;
  if (post === null) error(404, `The blog page "${slug}" was not found.`);

  return {
    title: post.title,
    brief: post.brief,
    url: post.url,
    published: post.publishedAt,
    readTimeInMinutes: post.readTimeInMinutes,
    markdown: post.content.markdown,
  };
};
