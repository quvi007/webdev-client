export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box holds a long sentence that does not fit, yet the
          yellow box itself stays exactly 120px wide and 60px tall
        </div>
        <div className="wd-dimension-banner wd-bg-color-gray">Short</div>
        <div className="wd-dimension-banner wd-bg-color-gray">
          This banner has much longer text, but the box stays 200px wide and
          50px tall
        </div>
      </div>
    </div>
  );
}