var svgtojsx = require('svg-to-jsx');

export default async function renderSVG(svg: string) {
  const svgJsx = await svgtojsx(svg);
  console.log(svg)
  return svgJsx;
}