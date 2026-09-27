export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input
        id="wd-your-first-name"
        placeholder="First name"
        defaultValue="Mehbubul Hasan"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input
        id="wd-your-last-name"
        placeholder="Last name"
        defaultValue="Al-Quvi"
      />
      <br />
      <label htmlFor="wd-your-password">Password: </label>
      <input type="password" id="wd-your-password" placeholder="password" />
      <br />
      <br />
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I want to become proficient in full stack web development and apply it to real-world projects alongside my systems research."
      />
      <br />
      <br />
      <label>Class standing:</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="radio-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <br />
      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="radio-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="radio-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />
      <br />
      <label>Interests:</label>
      <br />
      <input type="checkbox" name="check-interest" id="wd-your-systems" defaultChecked />
      <label htmlFor="wd-your-systems">Operating systems</label>
      <br />
      <input type="checkbox" name="check-interest" id="wd-your-networking" defaultChecked />
      <label htmlFor="wd-your-networking">Networking</label>
      <br />
      <input type="checkbox" name="check-interest" id="wd-your-distributed" defaultChecked />
      <label htmlFor="wd-your-distributed">Distributed systems</label>
      <br />
      <input type="checkbox" name="check-interest" id="wd-your-full-stack" />
      <label htmlFor="wd-your-full-stack">Full stack web development</label>
      <br />
      <br />
      <label htmlFor="wd-your-major">Major: </label>
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="CE">Computer Engineering</option>
        <option value="DS">Data Science</option>
        <option value="CY">Cybersecurity</option>
      </select>
      <br />
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select id="wd-your-topics" multiple defaultValue={["REACT", "NODE"]}>
        <option value="REACT">React</option>
        <option value="NEXT">Next.js</option>
        <option value="NODE">Node.js</option>
        <option value="MONGO">MongoDB</option>
        <option value="REST">REST APIs</option>
      </select>
      <br />
      <br />
      <label htmlFor="wd-your-email">School email: </label>
      <input
        type="email"
        id="wd-your-email"
        placeholder="lastname.f@northeastern.edu"
        defaultValue="alquvi.m@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue="2030"
        min={2026}
        max={2035}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        type="date"
        id="wd-your-start-date"
        defaultValue="2025-09-01"
        min="2020-01-01"
        max="2026-12-31"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited am I about this course (0-10):{" "}
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        defaultValue="10"
        min="0"
        max="10"
      />
      <br />
      <br />
      <button id="wd-your-button-save" type="submit">
        Save
      </button>
      <button id="wd-your-button-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
