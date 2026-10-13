"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const LINKS = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People",
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map((label) => {
        let slug = label.toLowerCase();
        if (slug === "people") {
            slug = "people/table";
        }
        const href = `/courses/${cid}/${slug}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={slug}
            href={href}
            id={`wd-course-${slug}-link`}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
