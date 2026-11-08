"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = String(params.cid);
  const aid = String(params.aid);
  const isNew = aid === "new";
  const router = useRouter();
  const findAssignment = useAssignmentsStore((state) => state.findAssignment);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);

  const existing = isNew ? undefined : findAssignment(aid);
  const found = existing && existing.course === cid ? existing : undefined;

  const [assignment, setAssignment] = useState<Assignment>(
    () =>
      found ?? {
        _id: "",
        title: "New Assignment",
        course: cid,
        description: "",
        points: 100,
        due: "",
        available: "",
        until: "",
      },
  );

  const listUrl = `/courses/${cid}/assignments`;

  const save = () => {
    if (isNew) {
      const { _id, ...fields } = assignment;
      void _id;
      addAssignment({ ...fields, course: cid });
    } else {
      updateAssignment({ ...assignment, course: cid });
    }
    router.push(listUrl);
  };

  if (!isNew && !found) {
    return (
      <div id="wd-assignments-editor">
        <p>Assignment not found in this course.</p>
        <Link href={listUrl}>Back to Assignments</Link>
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="w-full rounded border border-neutral-300 px-3 py-2"
      /> <br />
      <span id="wd-assignment-id" className="text-sm text-neutral-600">
        Assignment id: {isNew ? "new" : aid}
      </span> <br /><br />
      <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
        Description
      </label>
      <textarea
        id="wd-description"
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        rows={8}
        className="w-full rounded border border-neutral-300 px-3 py-2"
      /> <br />
      <table className="w-full">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points" className="text-sm font-medium">
                Points
              </label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={assignment.points}
                onChange={(e) =>
                  setAssignment({ ...assignment, points: Number(e.target.value) })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group" className="text-sm font-medium">
                Assignment Group
              </label>
            </td>
            <td>
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
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as" className="text-sm font-medium">
                Display Grade as
              </label>
            </td>
            <td>
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
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type" className="text-sm font-medium">
                Submission Type
              </label>
            </td>
            <td>
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
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to" className="text-sm font-semibold">
                Assign to
              </label>
            </td>
            <td>
              <input
                id="wd-assign-to"
                defaultValue="Everyone"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date" className="text-sm font-semibold">
                Due
              </label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                value={assignment.due}
                onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from" className="text-sm font-semibold">
                Available from
              </label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until" className="text-sm font-semibold">
                Until
              </label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-ai-editor-notes" className="text-sm font-medium">
                Sample notes
              </label>
            </td>
            <td>
              <textarea
                id="wd-ai-editor-notes"
                rows={5}
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="flex justify-end gap-2 border-t border-neutral-300 pt-4">
        <Link
          href={listUrl}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>{" "}
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
