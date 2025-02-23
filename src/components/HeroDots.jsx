import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import throttle from "lodash/throttle";
import circleDiameters from "./HeroData/circle_diameters.json";

const DotGrid = (props) => {
  const {
    dotSize = 0,
    dotColor = 0xffffff, // White color in HEX
    maxDotSize = 5, // Maximum size of the dots
    dotSpacing = 30, // Spacing between dots
    gridRows = 55, // Number of rows in the grid
    gridColumns = 55, // Number of columns in the grid
    waveThickness = 40, // Thickness of the waves
    mouseInfluenceRadius = 150, // Radius of the mouse influence
    baseChromaticOffset = 10, // Base chromatic offset
    maxChromaticDistance = 300, // Maximum distance for chromatic aberration
  } = props;

  const containerRef = useRef(null);
  const appRef = useRef(null);
  const dotsRef = useRef([]);
  const wavesRef = useRef([]);
  const framesRef = useRef(circleDiameters);
  const mousePosition = useRef({ x: -1, y: -1 });
  const currentFrameIndex = useRef(0);

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  console.log(`Mobile device detected: ${isMobile}`);

  useEffect(() => {
    if (!containerRef.current) return;
    // Clear any existing children to ensure fresh initialization
    containerRef.current.innerHTML = '';

    const app = new PIXI.Application({
      width: gridColumns * dotSpacing,
      height: gridRows * dotSpacing,
      backgroundAlpha: 0,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    });

    containerRef.current.appendChild(app.view);
    appRef.current = app;

    const dotContainer = new PIXI.Container();
    dotContainer.sortableChildren = true; // Enable zIndex sorting
    app.stage.addChild(dotContainer);

    // Initialize dots
    for (let i = 0; i < gridRows; i++) {
      for (let j = 0; j < gridColumns; j++) {
        const dot = new PIXI.Container();
        dot.x = j * dotSpacing;
        dot.y = i * dotSpacing;

        const redHalo = new PIXI.Graphics();
        redHalo.blendMode = PIXI.BLEND_MODES.ADD;
        redHalo.zIndex = 0; // Red halo below blue, green, and main dot
        dot.addChild(redHalo);

        const blueHalo = new PIXI.Graphics();
        blueHalo.blendMode = PIXI.BLEND_MODES.ADD;
        blueHalo.zIndex = 1; // Blue halo above red
        dot.addChild(blueHalo);

        const greenHalo = new PIXI.Graphics();
        greenHalo.blendMode = PIXI.BLEND_MODES.ADD;
        greenHalo.zIndex = 2; // Green halo above blue and red
        dot.addChild(greenHalo);

        const mainDot = new PIXI.Graphics();
        mainDot.zIndex = 3; // Main white dot on top
        dot.addChild(mainDot);

        dotContainer.addChild(dot);
        dotsRef.current.push({ dot, mainDot, redHalo, blueHalo, greenHalo, i, j });
      }
    }

    // Create throttled mouse move handler
    const throttledMouseMove = throttle(handleMouseMove, 50);
    app.view.addEventListener("mousemove", throttledMouseMove);
    app.view.addEventListener("click", handleMouseClick);

    app.ticker.add(() => {
      animateFrames();
      animateWaves();
      renderDots();
    });

    return () => {
      throttledMouseMove.cancel();
      app.view.removeEventListener("mousemove", throttledMouseMove);
      app.view.removeEventListener("click", handleMouseClick);
      app.ticker.stop();
      app.destroy(true, true);
    };
  }, []);

  const animateFrames = () => {
    if (!framesRef.current.length) return;
    currentFrameIndex.current = (currentFrameIndex.current + 1) % framesRef.current.length;
  };

  const animateWaves = () => {
    const now = Date.now();
    wavesRef.current = wavesRef.current.filter((wave) => {
      const elapsed = now - wave.startTime;
      if (elapsed > 3000) return false;
      wave.radius = (elapsed / 3000) * 500;
      wave.intensity = Math.max(0, 1 - elapsed / 1500);
      return true;
    });
  };

  const calculateDotSize = (x, y, i, j) => {
    let size = 0;
    for (const wave of wavesRef.current) {
      const distance = Math.sqrt((wave.x - x) ** 2 + (wave.y - y) ** 2);
      if (distance >= wave.radius - waveThickness && distance <= wave.radius + waveThickness) {
        const fadeFactor = 1 - Math.abs(distance - wave.radius) / waveThickness;
        size += fadeFactor * wave.intensity * maxDotSize;
      }
    }
    if (!isMobile) {
      if (appRef.current && appRef.current.view) {
        const mouseDist = Math.sqrt(
          (mousePosition.current.x - x) ** 2 + (mousePosition.current.y - y) ** 2
        );
        if (mouseDist <= mouseInfluenceRadius) {
          const mouseFactor = 1 - mouseDist / mouseInfluenceRadius;
          size += mouseFactor * (maxDotSize * 0.5);
        }
      }
    }
    const frameDiameter = framesRef.current[currentFrameIndex.current]?.[j]?.[i];
    if (typeof frameDiameter === "number") {
      size += frameDiameter;
    }
    size = Math.max(size, 0);
    size = Math.min(size, maxDotSize);
    return size;
  };

  const renderDots = () => {
    dotsRef.current.forEach(({ dot, mainDot, redHalo, blueHalo, greenHalo, i, j }) => {
      if (!dot || !dot.parent) return;
      const x = dot.x;
      const y = dot.y;
      const size = calculateDotSize(x, y, i, j);
      redHalo.clear();
      blueHalo.clear();
      greenHalo.clear();
      mainDot.clear();
      if (size <= 0) return;
      mainDot.beginFill(dotColor);
      mainDot.drawCircle(0, 0, size / 2);
      mainDot.endFill();
      const dx = x - mousePosition.current.x;
      const dy = y - mousePosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < maxChromaticDistance && size > maxDotSize * 0.5) {
        const directionX = dx / distance;
        const directionY = dy / distance;
        const redOffset = baseChromaticOffset * (distance / maxChromaticDistance);
        redHalo.beginFill(0xff0000, 0.9 * (1 - distance / maxChromaticDistance));
        redHalo.drawCircle(-directionX * redOffset, -directionY * redOffset, size / 2);
        redHalo.endFill();
        const blueOffset = baseChromaticOffset * 0.8 * (distance / maxChromaticDistance);
        blueHalo.beginFill(0x0000ff, 0.9 * (1 - distance / maxChromaticDistance));
        blueHalo.drawCircle(directionX * blueOffset, directionY * blueOffset, size / 2);
        blueHalo.endFill();
        const greenOffset = baseChromaticOffset * 0.5 * (distance / maxChromaticDistance);
        greenHalo.beginFill(0x00ff00, 0.9 * (1 - distance / maxChromaticDistance));
        greenHalo.drawCircle(directionX * greenOffset, -directionY * greenOffset, size / 2);
        greenHalo.endFill();
      }
    });
  };

  const handleMouseMove = (event) => {
    if (!appRef.current || !appRef.current.view) return;
    const rect = appRef.current.view.getBoundingClientRect();
    mousePosition.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handleMouseClick = (event) => {
    if (!appRef.current || !appRef.current.view) return;
    const rect = appRef.current.view.getBoundingClientRect();
    wavesRef.current.push({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      radius: 0,
      startTime: Date.now(),
    });
  };

  return <div ref={containerRef} />;
};

export default DotGrid;