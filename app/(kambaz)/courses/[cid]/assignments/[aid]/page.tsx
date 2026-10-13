import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-4 grid grid-cols-1 items-center gap-2 sm:grid-cols-[180px_1fr] sm:gap-4">
        <label htmlFor="wd-points" className="text-sm font-medium sm:text-right">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 items-center gap-2 sm:grid-cols-[180px_1fr] sm:gap-4">
        <label htmlFor="wd-group" className="text-sm font-medium sm:text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4 grid grid-cols-1 items-center gap-2 sm:grid-cols-[180px_1fr] sm:gap-4">
        <label htmlFor="wd-display-grade-as" className="text-sm font-medium sm:text-right">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>
      </div>

      <div className="mb-4 grid grid-cols-1 items-start gap-2 sm:grid-cols-[180px_1fr] sm:gap-4">
        <label htmlFor="wd-submission-type" className="pt-2 text-sm font-medium sm:text-right">
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-4 w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="EXTERNAL">External Tool</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" className="h-4 w-4" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" defaultChecked className="h-4 w-4" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" className="h-4 w-4" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" className="h-4 w-4" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" className="h-4 w-4" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 items-start gap-2 sm:grid-cols-[180px_1fr] sm:gap-4">
        <div className="pt-4 text-sm font-medium sm:text-right">Assign</div>
        <div className="rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label htmlFor="wd-due-date" className="mb-1 block text-sm font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue="2026-10-13"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block text-sm font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2026-10-06"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2026-10-20"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm font-medium">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={5}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
