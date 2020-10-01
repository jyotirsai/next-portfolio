import ParticleField from "react-particles-webgl";

export default function Particles() {
  const config = {
    showCube: false,
    dimension: "3D",
    velocity: 0.5,
    boundaryType: "passthru",
    antialias: false,
    direction: {
      xMin: 0,
      xMax: 1,
      yMin: 0.5,
      yMax: 0.6,
      zMin: 0,
      zMax: 0,
    },
    lines: {
      colorMode: "rainbow",
      color: "#351CCB",
      transparency: 1.5,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 173,
      visible: false,
    },
    particles: {
      colorMode: "rainbow",
      color: "#3FB568",
      transparency: 0.5,
      shape: "circle",
      boundingBox: "canvas",
      count: 100,
      minSize: 10,
      maxSize: 75,
      visible: true,
    },
    cameraControls: {
      enabled: true,
      enableDamping: true,
      dampingFactor: 0.2,
      enableZoom: true,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      resetCameraFlag: false,
    },
  };
  return <ParticleField config={config} />;
}
