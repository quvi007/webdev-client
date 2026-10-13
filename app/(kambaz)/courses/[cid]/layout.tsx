import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
    children,
    params,
}: Readonly<{
    children: ReactNode;
    params: Promise<{ cid: string }>;
}>) {
    const { cid } = await params;
    return (
        <div id="wd-courses">
            <h2>Courses {cid}</h2>
            <hr />
            {/* <table>
        <tbody>
          <tr>
            <td valign="top" width="140">
              <CourseNavigation cid={cid} />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table> */}
            <div className="flex gap-4">
                <div className="hidden w-[140px] shrink-0 md:block">
                    <CourseNavigation cid={cid} />
                </div>
                <div className="min-w-0 flex-1">{children}</div>
            </div>
        </div>
    );
}