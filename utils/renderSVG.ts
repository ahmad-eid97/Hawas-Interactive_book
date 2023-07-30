var svgtojsx = require('svg-to-jsx');

export default async function renderSVG(svgString: string) {
  const svg = await svgtojsx(svgString);
  return svg;
}