import type { APIRoute } from "astro";
import { navigation, siteMeta } from "../content/site";

export const GET: APIRoute = () => {
  const body = [
    `# ${siteMeta.title}`,
    "",
    `Course code: ${siteMeta.code}`,
    `Semester: ${siteMeta.semester}`,
    `Institution: ${siteMeta.institution}`,
    "",
    "This is a public overview site for the course. It includes public-safe summaries of curriculum, projects, guest lectures, assessment, team information, and FAQ. It does not publish internal slides, assignments, or Moodle files.",
    "",
    "## Primary pages",
    ...navigation.map((item) => `- ${item.label}: ${item.href}`),
    "",
    "## Official sources",
    `- TUM course page: ${siteMeta.officialUrl}`,
    `- Moodle page: ${siteMeta.moodleUrl}`
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
