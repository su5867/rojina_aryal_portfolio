import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
}

export function ThreeCanvas({ className = '' }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Group for all floating design objects
    const group = new THREE.Group();
    scene.add(group);

    // Primary wireframe aesthetic knot in Deep Wine (#722F37)
    const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 100, 16, 2, 3);
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x722F37, // Deep Wine
      metalness: 0.15,
      roughness: 0.3,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    knotMesh.position.set(0.6, 0.2, 0);
    group.add(knotMesh);

    // Inner translucent core in Warm Taupe (#B7A89A)
    const coreGeometry = new THREE.IcosahedronGeometry(0.8, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xB7A89A, // Warm Taupe
      metalness: 0.1,
      roughness: 0.2,
      transmission: 0.7,
      transparent: true,
      opacity: 0.45
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreMesh.position.set(0.6, 0.2, 0);
    group.add(coreMesh);

    // Floating design tokens / satellite spheres
    const satellites: { mesh: THREE.Mesh; speed: number; radius: number; angle: number; yOffset: number }[] = [];
    const satelliteCount = 5;
    const colors = [0x722F37, 0xB7A89A, 0x4A1920, 0x963942, 0xB7A89A];

    for (let i = 0; i < satelliteCount; i++) {
      const size = 0.14 + (i * 0.04);
      const satGeo = i % 2 === 0 ? new THREE.OctahedronGeometry(size, 0) : new THREE.SphereGeometry(size, 16, 16);
      const satMat = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        metalness: 0.3,
        roughness: 0.4,
        wireframe: i === 1
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satellites.push({
        mesh: satMesh,
        speed: (0.3 + (i * 0.12)) * (i % 2 === 0 ? 1 : -1),
        radius: 2.2 + (i * 0.45),
        angle: (i / satelliteCount) * Math.PI * 2,
        yOffset: (Math.random() - 0.5) * 1.5
      });
      group.add(satMesh);
    }

    // Floating design grid rings in Deep Wine / Warm Taupe
    const ringGeo = new THREE.RingGeometry(2.8, 2.82, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x722F37,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.18
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    group.add(ringMesh);

    // Subtle Particle Dust in Warm Taupe
    const particleCount = 60;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x722F37,
      size: 0.03,
      transparent: true,
      opacity: 0.35
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLightWine = new THREE.PointLight(0x722F37, 3, 20);
    pointLightWine.position.set(4, 4, 4);
    scene.add(pointLightWine);

    const pointLightTaupe = new THREE.PointLight(0xB7A89A, 3.5, 15);
    pointLightTaupe.position.set(-4, -3, 2);
    scene.add(pointLightTaupe);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = ((e.clientX / innerWidth) - 0.5) * 1.2;
      targetY = ((e.clientY / innerHeight) - 0.5) * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        knotMesh.rotation.x = elapsed * 0.22 + mouseY * 0.4;
        knotMesh.rotation.y = elapsed * 0.3 + mouseX * 0.4;

        coreMesh.rotation.x = -elapsed * 0.15;
        coreMesh.rotation.y = -elapsed * 0.2;

        ringMesh.rotation.z = elapsed * 0.08;

        satellites.forEach((sat) => {
          sat.angle += sat.speed * delta;
          sat.mesh.position.x = knotMesh.position.x + Math.cos(sat.angle) * sat.radius;
          sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
          sat.mesh.position.y = knotMesh.position.y + sat.yOffset + Math.sin(elapsed * 1.5 + sat.angle) * 0.3;
          sat.mesh.rotation.x += delta * 1.2;
          sat.mesh.rotation.y += delta * 0.8;
        });

        particles.rotation.y = elapsed * 0.02;
        group.rotation.y = mouseX * 0.35;
        group.rotation.x = mouseY * 0.35;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      knotGeometry.dispose();
      knotMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      satellites.forEach((sat) => {
        sat.mesh.geometry.dispose();
        if (Array.isArray(sat.mesh.material)) {
          sat.mesh.material.forEach((m) => m.dispose());
        } else {
          sat.mesh.material.dispose();
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
