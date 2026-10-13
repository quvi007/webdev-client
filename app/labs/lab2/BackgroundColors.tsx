export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <div id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        This sample block combines a yellow background class with a black
        foreground class
      </div>
      <p className="wd-bg-color-yellow wd-fg-color-black">
        This paragraph has a yellow background with black text, so it stays
        easy to read
      </p>
    </div>
  );
}