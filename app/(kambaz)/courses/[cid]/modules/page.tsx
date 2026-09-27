import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <button>Collapse All</button> <button>View Progress</button>{" "}
      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}
      <button>+ Module</button>
      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2, Lecture 2 - HTML Documents and Forms">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Structure a page with headings, paragraphs, lists, and tables
            </li>
            <li className="wd-content-item">
              Link pages together with anchors and embed images
            </li>
            <li className="wd-content-item">
              Collect user input with forms, inputs, selects, and buttons
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 3 - HTML
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to HTML</li>
            <li className="wd-content-item">HTML Forms and Input Types</li>
            <li className="wd-content-item">
              Building Pages with Next.js Routing
            </li>
          </Lesson>
        </Module>
        <Module title="Week 3, Lecture 3 - Styling with CSS and Bootstrap">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Apply styles with selectors, colors, and the box model
            </li>
            <li className="wd-content-item">
              Lay out pages with flexbox, grid, and positioning
            </li>
            <li className="wd-content-item">
              Build responsive layouts with Bootstrap
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 4 - CSS
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to CSS</li>
            <li className="wd-content-item">
              The Box Model, Flexbox, and Grid
            </li>
            <li className="wd-content-item">
              Responsive Design with Bootstrap
            </li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}