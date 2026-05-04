import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 1800;
const SHOOTING_STAR_COUNT = 6;

// Build a soft circular sprite so points render as round glowing dots
const makeCircleTexture = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.4, "rgba(255,255,255,0.6)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
};

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const sprite = useMemo(() => makeCircleTexture(), []);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const colorA = new THREE.Color("hsl(180, 70%, 55%)");
    const colorB = new THREE.Color("hsl(200, 85%, 60%)");
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 6 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const mix = Math.random();
      const c = colorA.clone().lerp(colorB, mix);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x += delta * 0.015;
    const tx = state.pointer.x * 0.3;
    const ty = state.pointer.y * 0.3;
    mouse.current.x += (tx - mouse.current.x) * 0.05;
    mouse.current.y += (ty - mouse.current.y) * 0.05;
    pointsRef.current.rotation.y += mouse.current.x * 0.01;
    pointsRef.current.rotation.x += mouse.current.y * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        map={sprite}
        alphaMap={sprite}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

type Star = {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  life: number;
  maxLife: number;
  active: boolean;
};

const ShootingStars = () => {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.Line[]>([]);
  const stars = useRef<Star[]>(
    Array.from({ length: SHOOTING_STAR_COUNT }, () => ({
      pos: new THREE.Vector3(),
      vel: new THREE.Vector3(),
      life: 0,
      maxLife: 1,
      active: false,
    }))
  );

  const geometries = useMemo(
    () =>
      Array.from({ length: SHOOTING_STAR_COUNT }, () => {
        const g = new THREE.BufferGeometry();
        const positions = new Float32Array(2 * 3);
        g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return g;
      }),
    []
  );

  const materials = useMemo(
    () =>
      Array.from(
        { length: SHOOTING_STAR_COUNT },
        () =>
          new THREE.LineBasicMaterial({
            color: new THREE.Color("hsl(190, 100%, 75%)"),
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          })
      ),
    []
  );

  const spawn = (star: Star) => {
    // Start somewhere in upper area, fly diagonally across
    const startX = (Math.random() - 0.3) * 20;
    const startY = 4 + Math.random() * 6;
    const startZ = -2 + Math.random() * 4;
    star.pos.set(startX, startY, startZ);
    const speed = 8 + Math.random() * 6;
    star.vel.set(-1 - Math.random() * 0.6, -0.6 - Math.random() * 0.4, 0).normalize().multiplyScalar(speed);
    star.life = 0;
    star.maxLife = 1.2 + Math.random() * 0.8;
    star.active = true;
  };

  useFrame((_, delta) => {
    stars.current.forEach((star, i) => {
      if (!star.active) {
        if (Math.random() < 0.004) spawn(star);
        materials[i].opacity = 0;
        return;
      }
      star.life += delta;
      star.pos.addScaledVector(star.vel, delta);

      const tail = star.vel.clone().multiplyScalar(-0.18);
      const tailPos = star.pos.clone().add(tail);

      const arr = geometries[i].attributes.position.array as Float32Array;
      arr[0] = star.pos.x;
      arr[1] = star.pos.y;
      arr[2] = star.pos.z;
      arr[3] = tailPos.x;
      arr[4] = tailPos.y;
      arr[5] = tailPos.z;
      geometries[i].attributes.position.needsUpdate = true;

      const t = star.life / star.maxLife;
      materials[i].opacity = Math.sin(Math.min(t, 1) * Math.PI) * 0.9;

      if (star.life >= star.maxLife) {
        star.active = false;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {geometries.map((geo, i) => (
        <primitive
          key={i}
          object={
            (linesRef.current[i] ||= new THREE.Line(geo, materials[i]))
          }
        />
      ))}
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ParticleField />
        <ShootingStars />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;