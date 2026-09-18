import React, { useEffect, useRef } from 'react';

export function DossierBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 800);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width * 0.7,
      y: height * 0.3,
      targetX: width * 0.7,
      targetY: height * 0.3,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const parent = canvas.parentElement;
    parent?.addEventListener('mousemove', handleMouseMove);

    const nodeCount = 28;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      pulseSpeed: number;
      pulsePhase: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
        alpha: Math.random() * 0.4 + 0.2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let scanY = 0;
    let scanDirection = 1;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const radialGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width * 0.45, 300)
      );
      radialGlow.addColorStop(0, 'rgba(255, 189, 53, 0.08)');
      radialGlow.addColorStop(0.5, 'rgba(255, 189, 53, 0.02)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      const cornerGlow = ctx.createRadialGradient(0, height, 0, 0, height, 350);
      cornerGlow.addColorStop(0, 'rgba(0, 180, 216, 0.04)');
      cornerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cornerGlow;
      ctx.fillRect(0, 0, width, height);

      const gridSize = 40;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      ctx.fillStyle = 'rgba(255, 189, 53, 0.18)';
      for (let x = gridSize; x < width; x += gridSize * 3) {
        for (let y = gridSize; y < height; y += gridSize * 3) {
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        n.pulsePhase += n.pulseSpeed;
        const currentAlpha = n.alpha + Math.sin(n.pulsePhase) * 0.15;

        ctx.fillStyle = `rgba(255, 189, 53, ${Math.max(0.1, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(255, 189, 53, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      scanY += scanDirection * 0.8;
      if (scanY > height) {
        scanY = height;
        scanDirection = -1;
      } else if (scanY < 0) {
        scanY = 0;
        scanDirection = 1;
      }

      const beamGradient = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
      beamGradient.addColorStop(0, 'rgba(255, 189, 53, 0)');
      beamGradient.addColorStop(0.5, 'rgba(255, 189, 53, 0.08)');
      beamGradient.addColorStop(1, 'rgba(255, 189, 53, 0)');
      ctx.fillStyle = beamGradient;
      ctx.fillRect(0, scanY - 30, width, 60);

      const laserLine = ctx.createLinearGradient(0, 0, width, 0);
      laserLine.addColorStop(0, 'rgba(255, 189, 53, 0)');
      laserLine.addColorStop(0.2, 'rgba(255, 189, 53, 0.35)');
      laserLine.addColorStop(0.5, 'rgba(255, 220, 120, 0.7)');
      laserLine.addColorStop(0.8, 'rgba(255, 189, 53, 0.35)');
      laserLine.addColorStop(1, 'rgba(255, 189, 53, 0)');
      ctx.strokeStyle = laserLine;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      parent?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="dossier-canvas-layer"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
