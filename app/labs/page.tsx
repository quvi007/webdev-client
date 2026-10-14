import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2 id="wd-full-name">Mehbubul Hasan Al-Quvi</h2>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4: React Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5: Next.js Fundamentals</Link>
        </li>
        <li>
          <Link href="/">Kambaz</Link>
        </li>
        <li>
          <a
            href="https://github.com/quvi007/webdev-client"
            id="wd-github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>
        </li>
      </ul>
    </div>
  );
}