"use client";
import React, { useState, useEffect, Fragment } from 'react';
//== Component Logic
import useLogic from './logic';
//= Styles
import classes from './matching.module.scss';

let IsMatching = false;

const colors_list = [
  "#0C134F",
  "#5C469C",
  "#116D6E",
  "#2ecc71",
  "#f39c12",
  "#000000",
  "#735F32",
  "#C69749",
  "#704F4F",
  "#950101",
  "#F806CC",
  "#270082",
  "#7A0BC0",
  "#610094",
  "#B25068",
  "#2a293e",
  "#112222",
  "#0000aa",
  "#033500",
  "#6f7755",
  "#d1001c",
  "#c14a09",
  "#d5b60a",
  "#220a0a",
  "#341c02"
]

function Matching({
  matchingData,
  keyWord = "content",
  options = {
    linesColor: '#ff0000',
    lineHoverColor: '#ffff00',
    randomizeLineColor: true,
    enableElementsColorEffects: true
  },
  className,
  dir = 'rtl',
  onMatch,
  onUnMatch
}: IProps) {
  const [selectedElement, setSelectedElement] = useState<HTMLParagraphElement | null>(null);
  const [startPosition, setStartPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [svgDims, setSvgDims] = useState({ width: 0, height: 0, innerWidth: 0, rightXOffset: 0, leftXOffset: 0 });
  const [randomColor, setRandomColor] = useState(generate_random_color(0));
  // Component Logic
  const { correctAnswer, showCorrection, setStudentAnswer } = useLogic();

  useEffect(() => {
    const width = document.querySelector(`.${classes.matching}`)!.getBoundingClientRect().width;
    const innerWidth = document.querySelector(`.${classes.matching_area}`)!.getBoundingClientRect().width + 20;
    const rightXOffset = document.querySelector(`.${classes.righthand}`)!.getBoundingClientRect().width + 20;
    const leftXOffset = document.querySelector(`.${classes.righthand}`)!.getBoundingClientRect().width + 20;
    const height = document.querySelector(`.${classes.matching}`)!.getBoundingClientRect().height;
    setSvgDims({ width, height, innerWidth, rightXOffset, leftXOffset });
  }, []);

  /**
   * Function Handles And Set the start position of the matching
   * - Set IsMatching to true to prevents other functions & handlers from execution while matching 
   * - Set startPosition to the position of current clicked item (the matching box span) to let start drawing svg line from that point
   * - Substracting container top and left from the position is helpful to make accurate position of the start point whatever the matching div position is changed
   */
  function handleMouseDown(event: React.MouseEvent<HTMLParagraphElement>) {
    event.stopPropagation();
    if (event.currentTarget.parentElement!.style.borderColor) return;

    IsMatching = true;
    const element = event.currentTarget.parentElement! as HTMLParagraphElement;
    setSelectedElement(element);

    const matchingElement = event.currentTarget.closest(`.${classes.matching}`)!;

    const containerTop = matchingElement.getBoundingClientRect().top;
    const containerLeft = matchingElement.getBoundingClientRect().left;

    const elementOffset = offset(element);
    const xValue = dir === 'rtl' ? elementOffset.left : elementOffset.right;
    setStartPosition({ x: xValue - containerLeft, y: elementOffset.top - containerTop + (element.getBoundingClientRect().height / 2) });

    const random_color = generate_random_color(Array.prototype.indexOf.call(matchingElement.querySelector(`.${classes.righthand}`)!.childNodes, event.currentTarget.parentElement));
    if (options?.randomizeLineColor) setRandomColor(random_color);

    if (options?.enableElementsColorEffects) {
      const color = options?.randomizeLineColor ? hexToRgb(random_color)?.toString() : options?.linesColor ? hexToRgb(options.linesColor)?.toString() : '209, 0 ,0'
      event.currentTarget.parentElement!.style.setProperty('border-color', `rgba(${color}, 0.8)`);
      event.currentTarget.parentElement!.style.setProperty('box-shadow', `0 0 7px rgba(${color}, 0.8)`);
    }
  }


  /**
   * Function Handles Drawing SVG Line while user is dragging or holding the mouse after clicking on an item
   * - Checks IsMatching should be true and selectedElement to be exists to prevents errors while drawing 
   * - ID is used to mark and identify the current svg line to makes it easier to draw without conflicts with other lines
   * - Creating a new SVG Line and sets the x1,y1 according to the start position of the selected item
   * - Sets the x2,y2 according to the current mouse position (with respect to the container to avoid mistakes if the container position changed)
   * - Attach the arrow head shape to the line
   * - Check if there are any line with the same ID is in SVG, if there is, then remove it and append the new one to the SVG
   * - ReAppend `matching_area` element is helpful to refresh the svg element which allows lines to be shown correctly
   */
  function handleMouseMove(event: React.MouseEvent) {
    if (!selectedElement || !IsMatching) return;

    const ID = `line-${startPosition.x.toFixed(0)}x${startPosition.y.toFixed(0)}`;

    const matchingElement = event.currentTarget;
    const containerTop = matchingElement.getBoundingClientRect().top;
    const containerLeft = matchingElement.getBoundingClientRect().left;

    const line = document.createElement('line') as (HTMLElement & SVGElement);
    line.setAttribute('id', ID)
    line.setAttribute("x1", startPosition.x.toFixed(0));
    line.setAttribute("y1", startPosition.y.toFixed(0));
    line.setAttribute("x2", (event.clientX - containerLeft).toFixed(0));
    line.setAttribute("y2", (event.clientY - containerTop).toFixed(0));
    line.setAttribute("marker-end", `url(#arrowhead-${ID})`);
    // Dynamic CSS Styling
    if (options?.linesColor) line.style.setProperty(`--line-color`, options.linesColor);
    if (options?.lineHoverColor) line.style.setProperty(`--hover-color`, options.lineHoverColor);
    if (options?.randomizeLineColor) line.style.setProperty(`--line-color`, randomColor || "#000000");

    if (matchingElement.querySelector(`.${classes.matching_area} svg#temp-container #${ID}`)) {
      matchingElement.querySelector(`.${classes.matching_area} svg#temp-container #${ID}`)!.remove();
      matchingElement.querySelector(`.${classes.matching_area} svg#temp-container #arrowhead-${ID}`)!.remove();
    }
    matchingElement.querySelector(`.${classes.matching_area} svg#temp-container`)!.appendChild(createMarker(ID));
    matchingElement.querySelector(`.${classes.matching_area} svg#temp-container`)!.appendChild(line);
    matchingElement.querySelector(`.${classes.matching_area}`)!.innerHTML = matchingElement.querySelector(`.${classes.matching_area}`)!.innerHTML;
  }


  /**
   * Function Handles Connecting The Selected Item to The Matched Item and Draw The Final SVG Line
   * - Checks IsMatching should be true and selectedElement to be exists to prevents errors while drawing 
   * - Checks if the final target of the mouse holding is a matching box, if not then remove the drawn line
   * - Creating SVG Line and sets the x1,y1 according to the start position of the selected item
   * - Sets the x2,y2 according to the matching box of the matched element (with respect to the position of the container)
   * - Adjusts x2,y2 values to make the arrow head shape in a suitable position
   * - Attach the arrow head shape to the line
   * - Check if the user changed the styling options
   * - Check if there are any line with the same ID is in SVG, if there is, then remove it and append the new one to the SVG
   * - ReAppend `matching_area` element is helpful to refresh the svg element which allows lines to be shown correctly
   */
  function handleMouseUp(event: React.MouseEvent<HTMLParagraphElement>) {
    if (!selectedElement || !IsMatching) return;
    const matchingElement = event.currentTarget.closest(`.${classes.matching}`)!;
    if ((event.target as HTMLElement).tagName !== 'SPAN') {
      handleStopMatching(matchingElement);
      return;
    }

    if (event.currentTarget.style.borderColor) return;

    const ID = `line-${startPosition.x.toFixed(0)}x${startPosition.y.toFixed(0)}`;
    event.currentTarget.id = ID;
    selectedElement.id = ID;
    const PATH = document.createElement('path') as (HTMLElement & SVGElement);
    PATH.setAttribute('id', ID);

    const pathConfig = {
      x1: "10",
      y1: "0",
      x2: "0",
      y2: "0",
      c1: 0,
      c2: 0,
      c3: 0
    };

    // if (dir === 'rtl') pathConfig.x1 = svgDims.innerWidth.toFixed(0);
    if (dir === 'rtl') pathConfig.x1 = (svgDims.innerWidth - 10).toFixed(0);
    else pathConfig.x1 = "0";
    pathConfig.y1 = startPosition.y.toFixed(0);

    const endPoint = event.currentTarget!;
    const elementOffset = offset(endPoint);
    const containerTop = matchingElement.getBoundingClientRect().top;

    const X2 = dir === 'rtl' ? 15 : svgDims.innerWidth - 15;
    const Y2 = elementOffset.top - containerTop + (endPoint.getBoundingClientRect().height / 2) + (dir === 'rtl' ? 0 : -5);

    pathConfig.x2 = X2.toFixed(0);
    pathConfig.y2 = Y2.toFixed(0);
    pathConfig.c1 = X2 * 2;
    pathConfig.c2 = Y2;
    pathConfig.c3 = X2 / 2;
    PATH.setAttribute('d', `M${pathConfig.x1} ${pathConfig.y1} C ${dir === 'rtl'
      ? `${pathConfig.c1 * 2.5} ${pathConfig.c2}, ${pathConfig.c1} ${pathConfig.c2}`
      : `${pathConfig.c1 / 2} ${pathConfig.c2}, ${pathConfig.c3 / 4} ${pathConfig.c2}`}, ${pathConfig.x2} ${pathConfig.y2}`)
    // line.setAttribute("x2", X2.toFixed(0));
    // line.setAttribute("y2", Y2.toFixed(0));
    PATH.setAttribute("marker-end", `url(#arrowhead-${ID})`);
    PATH.classList.add(classes.hoverable);
    // Dynamic CSS Styling
    if (options?.linesColor) PATH.style.setProperty(`--line-color`, options.linesColor);
    if (options?.lineHoverColor) PATH.style.setProperty(`--hover-color`, options.lineHoverColor);
    if (options?.randomizeLineColor) PATH.style.setProperty(`--line-color`, randomColor);

    if (options?.enableElementsColorEffects) {
      const color = options?.randomizeLineColor ? hexToRgb(randomColor)?.toString() : options?.linesColor ? hexToRgb(options.linesColor)?.toString() : '209, 0 ,0'
      event.currentTarget.style.setProperty('border-color', `rgba(${color}, 0.8)`);
      event.currentTarget.style.setProperty('box-shadow', `0 0 7px rgba(${color}, 0.8)`);
    }

    if (matchingElement.querySelector(`.${classes.matching_area} svg#line-container #${ID}`)) {
      matchingElement.querySelector(`.${classes.matching_area} svg#line-container #${ID}`)!.remove();
      matchingElement.querySelector(`.${classes.matching_area} svg#line-container #arrowhead-${ID}`)!.remove();
    }
    matchingElement.querySelector(`.${classes.matching_area} svg#line-container`)!.appendChild(createMarker(ID, options?.randomizeLineColor ? randomColor : undefined));
    matchingElement.querySelector(`.${classes.matching_area} svg#line-container`)!.appendChild(PATH);
    matchingElement.querySelector(`.${classes.matching_area} svg#temp-container`)!.innerHTML = "";
    matchingElement.querySelector<HTMLDivElement>(`.${classes.matching_area}`)!.innerHTML = matchingElement.querySelector<HTMLDivElement>(`.${classes.matching_area}`)!.innerHTML;

    IsMatching = false;

    const item = {
      from: matchingData.righthand.items.find(item => item[keyWord] === selectedElement.textContent?.trim())?.[keyWord],
      to: matchingData.lefthand.items.find(item => item[keyWord] === event.currentTarget.textContent?.trim())?.[keyWord]
    }

    if (onMatch) {
      onMatch(item)
    }
    setStudentAnswer((prev: object[]) => [...prev, item])
  }


  /**
   * Function creates svg marker (arrow head shape) to be used in SVG Line drawing
   */
  function createMarker(id: string, color?: string | undefined) {
    const marker = document.createElement('marker');
    const polygon = document.createElement('polygon');
    marker.setAttribute('id', `arrowhead-${id}`);
    marker.setAttribute('markerWidth', "5");
    marker.setAttribute('markerHeight', "5");
    marker.setAttribute('refX', "0");
    marker.setAttribute('refY', "2.5");
    marker.setAttribute('orient', "auto");
    polygon.setAttribute('points', '0 0, 4 2.5, 0 5');
    polygon.setAttribute('fill', color ? color : 'currentColor');
    marker.appendChild(polygon);

    return marker;
  }


  /**
   * Function Handles Removing The SVG Line If the user stopped holding the mouse in any area but the matching box
   * - Checks IsMatching should be true
   * - Check if the line exits, if it is, then remove it
   * - Remove Matched Elements Color Effect
   * - ReAppend `matching_area` element is helpful to refresh the svg element which allows lines to be shown correctly
   */
  function handleStopMatching(matchingElement: HTMLElement | Element | null, event?: React.MouseEvent) {
    if (IsMatching) {
      if (!matchingElement) matchingElement = event?.currentTarget.closest(`.${classes.matching}`) || document.querySelector(`.${classes.matching}`)!;

      const ID = `line-${startPosition.x.toFixed(0)}x${startPosition.y.toFixed(0)}`;
      if (matchingElement.querySelector(`.${classes.matching_area} svg#temp-container #${ID}`)) {
        matchingElement.querySelector(`.${classes.matching_area} svg#temp-container #${ID}`)!.remove();
        matchingElement.querySelector(`.${classes.matching_area} svg#temp-container #arrowhead-${ID}`)!.remove();
      }
      matchingElement.querySelector<HTMLDivElement>(`.${classes.matching_area}`)!.innerHTML = matchingElement.querySelector<HTMLDivElement>(`.${classes.matching_area}`)!.innerHTML;
      IsMatching = false;

      if (options?.enableElementsColorEffects) {
        const color = options?.randomizeLineColor ? hexToRgb(randomColor)?.toString() : options?.linesColor ? hexToRgb(options.linesColor)?.toString() : '209,0,0';
        const serlizedColor = color?.split(',').join(', ');
        matchingElement
          .querySelectorAll(`p[style="border-color: rgba(${serlizedColor}, 0.8); box-shadow: rgba(${serlizedColor}, 0.8) 0px 0px 7px;"]`)
          // @ts-ignore
          .forEach((element: HTMLElement) => {
            element.style.removeProperty('border-color');
            element.style.removeProperty('box-shadow');
          });
      }

      matchingElement.querySelector<HTMLDivElement>(`.${classes.matching_area}`)!.innerHTML = matchingElement.querySelector<HTMLDivElement>(`.${classes.matching_area}`)!.innerHTML;
    }
  }


  /**
   * Function Handles Removing The SVG Line If the user stopped holding the mouse in any area but the matching box
   * - Checks IsMatching should be true
   * - Check if the line exits, if it is, then remove it
   * - Remove Matched Elements Color Effect
   * - ReAppend `matching_area` element is helpful to refresh the svg element which allows lines to be shown correctly
   */
  function handleRemoveLine(event: React.MouseEvent<HTMLElement>) {
    const element = event.target as HTMLElement;
    if (element.tagName === "path") {
      const ID = element.id;
      element.remove();

      const matchingElement = event.currentTarget.closest(`.${classes.matching}`)!;

      if (onUnMatch) {
        const from = matchingElement.querySelector<HTMLParagraphElement>(`.${classes.righthand} p#${ID}`)!;
        const to = matchingElement.querySelector<HTMLParagraphElement>(`.${classes.lefthand} p#${ID}`)!;

        const item = {
          from: matchingData.righthand.items.find(item => item[keyWord] === from.textContent?.trim())?.[keyWord],
          to: matchingData.lefthand.items.find(item => item[keyWord] === to.textContent?.trim())?.[keyWord]
        }

        if (from && to) {
          onUnMatch(item);
        }
        // @ts-ignore
        setStudentAnswer((prev: object[]) => prev.filter(one => one.from !== item.from && one.to !== item.to));
      }

      if (options?.enableElementsColorEffects) {
        const sve_line_color = (event.target as HTMLElement).style.getPropertyValue('--line-color');
        const color = options?.randomizeLineColor ? hexToRgb(sve_line_color)?.toString() : options?.linesColor ? hexToRgb(options.linesColor)?.toString() : '209,0,0';
        const serlizedColor = color?.split(',').join(', ');
        matchingElement
          .querySelectorAll(`p[style="border-color: rgba(${serlizedColor}, 0.8); box-shadow: rgba(${serlizedColor}, 0.8) 0px 0px 7px;"]`)
          // @ts-ignore
          .forEach((element: HTMLElement) => {
            element.style.removeProperty('border-color');
            element.style.removeProperty('box-shadow');
          });
      }
    }
  }


  /**
   * Function generates random hex code to randomize the lines color
   */
  function generate_random_color(index: number) {
    return colors_list[index];
  }


  /**
   * Function coverts hex code to rgb
   */
  function hexToRgb(hex: string, result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) {
    return result ? result.map(i => parseInt(i, 16)).slice(1) : null
  }

  return (
    <>
      <h2>مُدَّ خَطًّا بَيْنَ الْكَلِمَةِ وَجَمْعِها!</h2>
      <div className={`${classes.matching} ${className} ${dir === 'ltr' ? classes.ltr : ''}`} onMouseMove={handleMouseMove} onMouseUp={(event) => handleStopMatching(null, event)}>
        {/* Right Hand Items */}
        <div className={classes.righthand}>
          <h3>{matchingData.righthand.title}</h3>
          {
            matchingData.righthand.items.length ?
              (
                matchingData.righthand.items.map((matchingItem, index) => (
                  <p key={index} className={options?.itemsClassName || ''}>
                    {matchingItem[keyWord]}
                    <span className={`matching-start-point ${classes.matching_box}`} onMouseDown={handleMouseDown}></span>
                  </p>)
                )
              ) : null
          }
        </div>
        {/* Matching Area Items */}
        <div className={classes.matching_area} onDoubleClick={handleRemoveLine}>
          <svg
            height={svgDims.height}
            width={svgDims.width}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              // @ts-ignore
              '--arrow-color': options?.linesColor || '--line-color'
            }}
            id="temp-container"
          >
          </svg>
          <svg
            height={svgDims.height}
            width={svgDims.innerWidth}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              position: 'absolute',
              top: 0,
              left: dir === 'ltr' ? svgDims.leftXOffset : 'unset',
              right: dir === 'rtl' ? svgDims.rightXOffset : 'unset',
              zIndex: 100,
              // @ts-ignore
              '--arrow-color': options?.linesColor || '--line-color'
            }}
            id="line-container"
          >
          </svg>
        </div>
        {/* Left Hand Items */}
        <div className={classes.lefthand}>
          <h3>{matchingData.lefthand.title}</h3>
          {
            matchingData.lefthand.items.length ?
              (
                matchingData.lefthand.items.map((matchingItem, index) => (
                  <p key={index} onMouseUp={handleMouseUp} className={options?.itemsClassName || ''}>
                    {matchingItem[keyWord]}
                    <span className={`matching-end-point ${classes.matching_box}`}></span>
                  </p>)
                )
              ) : null
          }
        </div>
      </div>
      {showCorrection &&
        <div className={`correctData ${showCorrection.correct ? 'correct' : 'wrong'}`}>
          {showCorrection.data.map((one, idx) => (
            <Fragment key={idx}>
              {idx === 0 ?
                <p><i className="fa-solid fa-lightbulb-on"></i> {one}</p>
                :
                <p key={idx}>{one}</p>
              }
            </Fragment>
          ))}
        </div>
      }
      <div className="checkAnswer">
        <button onClick={correctAnswer}>فحص الإجابات</button>
      </div>
    </>
  )
}

function offset(element: HTMLParagraphElement | HTMLElement | Element) {
  const rect = element.getBoundingClientRect();

  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
    right: rect.right + window.scrollX
  };
}

interface IProps {
  matchingData: {
    righthand: {
      title: string;
      items: MatchingItem[];
    };
    lefthand: {
      title: string;
      items: MatchingItem[];
    };
  };
  keyWord?: string;
  options?: {
    randomizeLineColor?: boolean;
    linesColor?: string;
    lineHoverColor?: string;
    itemsClassName?: string;
    enableElementsColorEffects?: boolean;
  }
  className?: string;
  dir?: 'ltr' | 'rtl';
  onMatch?: (matches: { from: string | undefined, to: string | undefined }) => any;
  onUnMatch?: (matches: { from: string | undefined, to: string | undefined }) => any;
}

interface MatchingItem {
  [key: string]: string;
}

export default Matching