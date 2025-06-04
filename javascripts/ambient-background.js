/**
 * Ambient and Reactive Background Effects for MkDocs
 * This script adds interactive elements to the background
 */

document.addEventListener('DOMContentLoaded', function() {
    createBackgroundParticles();
    createAmbientLight();
});

/**
 * Creates floating particles in the background
 */
function createBackgroundParticles() {
    const particleCount = 40; // Increased particle count

    // Create a fixed container for particles so they don't extend the page
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.left = '0';
    particleContainer.style.top = '0';
    particleContainer.style.width = '100vw';
    particleContainer.style.height = '100vh';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '-1'; 
    particleContainer.style.overflow = 'hidden';
    particleContainer.className = 'ambient-particle-container';
    document.body.insertBefore(particleContainer, document.body.firstChild);

    // Blue theme colors
    const particleColors = [
        'rgba(41, 121, 255, 0.4)',
        'rgba(64, 156, 255, 0.3)',
        'rgba(100, 181, 246, 0.5)',
        'rgba(25, 118, 210, 0.3)',
        'rgba(144, 202, 249, 0.2)'
    ];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'ambient-particle';
        particle.style.overflow = 'hidden';

        // Random size with larger range
        const size = Math.random() * 7 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random color from our blue palette
        const colorIndex = Math.floor(Math.random() * particleColors.length);
        particle.style.backgroundColor = particleColors[colorIndex];
        
        // Randomized box shadow for glow effect
        const glowSize = Math.floor(Math.random() * 12) + 5;
        particle.style.boxShadow = `0 0 ${glowSize}px 2px ${particleColors[colorIndex]}`;

        // Position absolutely within the container
        particle.style.position = 'absolute';

        // Random initial position within viewport
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;

        // Random opacity
        particle.style.opacity = (Math.random() * 0.15 + 0.05).toString();

        // Add animation with random duration and delay
        const duration = Math.random() * 60 + 30;
        const delay = Math.random() * 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particleContainer.appendChild(particle);
    }
}

/**
 * Creates an ambient light effect that follows the cursor
 */
function createAmbientLight() {
    // Create main ambient light
    const light = document.createElement('div');
    light.className = 'ambient-light';
    document.body.appendChild(light);
    
    // Create a secondary smaller, brighter light for enhanced effect
    const brightLight = document.createElement('div');
    brightLight.className = 'ambient-light';
    brightLight.style.width = '20vw'; 
    brightLight.style.height = '20vh';
    brightLight.style.background = 'radial-gradient(circle, rgba(100, 181, 246, 0.06) 0%, rgba(41, 121, 255, 0.04) 30%, transparent 100%)';
    brightLight.style.filter = 'blur(100px)';
    brightLight.style.opacity = '0.1';
    document.body.appendChild(brightLight);

    // Position initial lights in center
    light.style.left = '50%';
    light.style.top = '50%';
    light.style.transform = 'translate(-50%, -50%)';
    brightLight.style.left = '50%';
    brightLight.style.top = '50%';
    brightLight.style.transform = 'translate(-50%, -50%)';

    // Make the lights follow mouse movement with a delay
    document.addEventListener('mousemove', function(e) {
        // Calculate position with a subtle delay for smooth movement
        requestAnimationFrame(function() {
            light.style.left = `${e.clientX}px`;
            light.style.top = `${e.clientY}px`;
            light.style.transform = 'translate(-50%, -50%)';
              // Bright light follows with more delay for interesting effect
            setTimeout(() => {
                brightLight.style.left = `${e.clientX}px`;
                brightLight.style.top = `${e.clientY}px`;
                brightLight.style.transform = 'translate(-50%, -50%)';
            }, 100);
        });
    });    // For mobile - follow touch
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 0) {
            requestAnimationFrame(function() {
                light.style.left = `${e.touches[0].clientX}px`;
                light.style.top = `${e.touches[0].clientY}px`;
                light.style.transform = 'translate(-50%, -50%)';
                
                // Bright light follows with delay
                setTimeout(() => {
                    brightLight.style.left = `${e.touches[0].clientX}px`;
                    brightLight.style.top = `${e.touches[0].clientY}px`;
                    brightLight.style.transform = 'translate(-50%, -50%)';
                }, 100);
            });
        }
    });

    // Add subtle pulsing effect to the lights
    setInterval(function() {
        // Main light pulsing
        light.style.opacity = 0.4 + Math.random() * 0.3;
        const mainSize = 80 + Math.random() * 20;
        light.style.width = `${mainSize}vw`;
        light.style.height = `${mainSize}vh`;
        
        // Bright light pulsing with different timing
        brightLight.style.opacity = 0.6 + Math.random() * 0.4;
        const brightSize = 40 + Math.random() * 15;
        brightLight.style.width = `${brightSize}vw`;
        brightLight.style.height = `${brightSize}vh`;
    }, 3000);
}

