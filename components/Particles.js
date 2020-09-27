import ParticleField from "react-particles-webgl";

export default function Particles() {
  const config = {
    showCube: false,
    dimension: "3D",
    velocity: 0.5,
    boundaryType: "passthru",
    antialias: false,
    direction: {
      xMin: -0.4,
      xMax: 0.4,
      yMin: -1.0,
      yMax: 1,
      zMin: -1,
      zMax: 1,
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
