// Fridgely Documentation

// STL File Downloader
function initSTLDownloader() {
    const downloadButtons = document.querySelectorAll('.stl-download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function () {
            const fileCard = this.closest('.stl-card');
            const fileName = fileCard.dataset.file;
            const basePath = '../SAD/';
            const filePath = basePath + fileName;

            // Create a temporary anchor element
            const downloadLink = document.createElement('a');
            downloadLink.href = filePath;
            downloadLink.download = fileName;

            // Add to DOM, click and remove
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            // Animation effect for feedback
            const originalText = this.textContent;
            const originalBg = this.style.backgroundColor;

            this.textContent = 'Heruntergeladen!';
            this.style.backgroundColor = 'var(--md-accent-fg-color, #ff9100)';
            this.style.color = '#ffffff';

            // Add a checkmark icon
            const checkIcon = document.createElement('span');
            checkIcon.innerHTML = ' ✓';
            checkIcon.style.marginLeft = '5px';
            this.appendChild(checkIcon);

            // Add a subtle pulse animation
            this.style.animation = 'pulse 0.5s ease-in-out';

            // Reset after delay
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = originalBg;
                this.style.animation = '';
                this.style.color = '';
            }, 2000);
        });
    });

    // Add glow effect for cards
    const cards = document.querySelectorAll('.stl-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            const cardInner = this.querySelector('.stl-card-inner');
            cardInner.style.boxShadow = '0 10px 25px rgba(var(--md-primary-fg-color--rgb, 64, 81, 181), 0.3), 0 0 15px rgba(var(--md-primary-fg-color--rgb, 64, 81, 181), 0.2)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            const cardInner = this.querySelector('.stl-card-inner');
            cardInner.style.boxShadow = '';
        });
    });
}


// Add animation classes to elements as they scroll into view
function initScrollAnimations() {
    // Elements that will be animated
    const elementsToAnimate = [
        { selector: '.sad-image-container', classes: 'animate-fade-in' },
        { selector: '.sad-feature', classes: 'animate-slide-up' },
        { selector: '.team-member', classes: 'animate-slide-up' },
        { selector: '.info-card', classes: 'animate-slide-up' },
        { selector: 'blockquote', classes: 'animate-fade-in' },
        { selector: 'h2', classes: 'animate-slide-in' },
        { selector: '.doc-link', classes: 'animate-pulse' },
        { selector: '.learning-goals', classes: 'animate-fade-in' }
    ];

    // Create CSS for animations if not already present
    if (!document.getElementById('scroll-animations-css')) {
        const style = document.createElement('style');
        style.id = 'scroll-animations-css';
        style.textContent = `
            .animate-fade-in { opacity: 0; transition: opacity 0.8s ease, transform 0.8s ease; }
            .animate-fade-in.visible { opacity: 1; }
            
            .animate-slide-up { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
            .animate-slide-up.visible { opacity: 1; transform: translateY(0); }
            
            .animate-slide-in { opacity: 0; transform: translateX(-30px); transition: opacity 0.8s ease, transform 0.8s ease; }
            .animate-slide-in.visible { opacity: 1; transform: translateX(0); }
            
            .animate-grow { opacity: 0; transform: scale(0.8); transition: opacity 0.8s ease, transform 0.8s ease; }
            .animate-grow.visible { opacity: 1; transform: scale(1); }
        `;
        document.head.appendChild(style);
    }

    // Add classes to elements
    elementsToAnimate.forEach(item => {
        const elements = document.querySelectorAll(item.selector);
        elements.forEach(el => {
            el.classList.add(item.classes);
        });
    });

    // Check if element is in viewport and add visible class
    function checkIfInView() {
        const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-in, .animate-grow');
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;

        elements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.getBoundingClientRect().top + windowTopPosition;
            const elementBottomPosition = elementTopPosition + elementHeight;

            // Check if element is in viewport
            if (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) {
                element.classList.add('visible');
            }
        });
    }

    // Run on load and scroll
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
    window.addEventListener('load', checkIfInView);
    // Initial check
    setTimeout(checkIfInView, 100);
}

// Enhance code blocks with copy button and syntax highlighting
function initCodeBlockEnhancements() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        // Add language badge
        const pre = codeBlock.parentElement;
        const language = codeBlock.className.split('-')[1];

        if (language) {
            const badge = document.createElement('div');
            badge.className = 'code-language-badge';
            badge.textContent = language;
            pre.appendChild(badge);

            // Add styles for badge
            const style = document.createElement('style');
            style.textContent = `
                .code-language-badge {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: var(--md-primary-fg-color);
                    color: white;
                    padding: 2px 8px;
                    font-size: 0.7em;
                    border-radius: 0 4px 0 4px;
                    opacity: 0.8;
                }
                
                pre {
                    position: relative;
                }
            `;
            document.head.appendChild(style);
        }
    });
}

// Add copy buttons to code blocks
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach(block => {
        // Only process code blocks which are not mermaid diagrams
        var firstLine = block.innerHTML.split('\n')[0];

        // Skip mermaid blocks
        if (firstLine.includes('graph') || firstLine.includes('sequenceDiagram') ||
            firstLine.includes('gantt') || firstLine.includes('pie') || 
            firstLine.includes('%%') || firstLine.includes('stateDiagram') ||
            firstLine.includes('flowchart') || firstLine.includes('mindmap') ||
            firstLine.includes('erDiagram') || firstLine.includes('quadrantChart')) {
            return;
        }

        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';

        button.addEventListener('click', function () {
            const codeText = code.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                // Visual feedback
                button.textContent = 'Copied!';
                button.classList.add('copied');

                // Reset after 2 seconds
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            });
        });

        block.appendChild(button);

        // Add styles for button
        const style = document.createElement('style');
        style.textContent = `
            .copy-button {
                position: absolute;
                bottom: 5px;
                right: 5px;
                background: rgba(45, 45, 45, 0.8);
                color: white;
                border: none;
                border-radius: 4px;
                padding: 5px 10px;
                font-size: 0.8em;
                cursor: pointer;
                transition: all 0.2s ease;
                opacity: 0;
            }
            
            pre:hover .copy-button {
                opacity: 1;
            }
            
            .copy-button:hover {
                background: var(--md-primary-fg-color);
            }
            
            .copy-button.copied {
                background: #4CAF50;
            }
        `;
        document.head.appendChild(style);
    });
}

// Add image zooming capability
function initImageZoom() {
    const images = document.querySelectorAll('.md-content img:not(.emoji)');

    images.forEach(img => {
        // Make image clickable
        img.style.cursor = 'zoom-in';

        img.addEventListener('click', function () {
            // Create modal overlay
            const overlay = document.createElement('div');
            overlay.className = 'image-zoom-overlay';

            // Create zoomed image
            const zoomedImg = document.createElement('img');
            zoomedImg.src = img.src;
            zoomedImg.className = 'zoomed-image';

            // Create close button
            const closeButton = document.createElement('button');
            closeButton.className = 'zoom-close-button';
            closeButton.innerHTML = '&times;';

            // Add elements to overlay
            overlay.appendChild(zoomedImg);
            overlay.appendChild(closeButton);
            document.body.appendChild(overlay);

            // Close on overlay or button click
            overlay.addEventListener('click', function (e) {
                if (e.target === overlay || e.target === closeButton) {
                    document.body.removeChild(overlay);
                }
            });

            // Close on escape key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && document.querySelector('.image-zoom-overlay')) {
                    document.body.removeChild(overlay);
                }
            });
        });
    });

    // Add styles for zoom functionality
    const style = document.createElement('style');
    style.textContent = `
        .image-zoom-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: zoom-out;
        }
        
        .zoomed-image {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
            transform: scale(0.9);
            opacity: 0;
            animation: zoom-in 0.3s forwards;
        }
        
        @keyframes zoom-in {
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        .zoom-close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            background: transparent;
            color: white;
            border: none;
            font-size: 30px;
            cursor: pointer;
            padding: 10px;
            transition: all 0.2s ease;
        }
        
        .zoom-close-button:hover {
            transform: scale(1.2);
        }
    `;
    document.head.appendChild(style);
}

// Add scroll to top button
function addScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'scroll-top-button';
    button.innerHTML = '&uarr;';
    button.title = 'Scroll to top';

    // Add scroll event listener to show/hide button
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });

    // Add click event to scroll to top
    button.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);

    // Add styles for scroll to top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--md-primary-fg-color);
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            z-index: 100;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        
        .scroll-top-button.visible {
            opacity: 0.8;
            transform: translateY(0);
        }
        
        .scroll-top-button:hover {
            opacity: 1;
            transform: translateY(-5px);
        }
    `;
    document.head.appendChild(style);
}

// Add subtle scroll progress indicator
function addScrollProgress() {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';

    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(to right, var(--md-primary-fg-color), var(--md-accent-fg-color));
            z-index: 1000;
            opacity: 0.8;
            transition: width 0.2s ease;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percent = (scrollTop / scrollHeight) * 100;

        progress.style.width = `${percent}%`;
    });
}


// Add hover effect for images
function enhanceImageHover() {
    // Style for image hover effects
    const style = document.createElement('style');
    style.textContent = `
        .md-content img:not(.emoji) {
            transition: transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease;
        }
        
        .md-content img:not(.emoji):hover {
            filter: brightness(1.1);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
    `;
    document.head.appendChild(style);
}

// Add animated code highlighting
function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        // Only process code blocks which are not mermaid diagrams
        var firstLine = block.innerHTML.split('\n')[0];

        // Skip mermaid blocks
        if (firstLine.includes('graph') || firstLine.includes('sequenceDiagram') ||
            firstLine.includes('gantt') || firstLine.includes('pie') ||
            firstLine.includes('%%') || firstLine.includes('stateDiagram') ||
            firstLine.includes('flowchart') || firstLine.includes('mindmap') ||
            firstLine.includes('erDiagram') || firstLine.includes('quadrantChart')) {
            return;
        }

        // Split code by lines
        const lines = block.innerHTML.split('\n');

        // Remove trailing empty line if present (common in code blocks)
        if (lines.length > 1 && lines[lines.length - 1].trim() === '') {
            lines.pop();
        }

        // Rebuild with line animations
        if (lines.length === 1) {
            // One-liner: wrap in a span for animation, but no block display
            block.innerHTML = `<span class="code-line" style="animation-delay:0ms">${lines[0]}</span>`;
            block.parentElement.classList.add('oneliner-code');
        } else {
            // Multiline: keep block display
            const wrappedLines = lines.map((line, index) => {
                const delay = index * 50; // ms delay for each line
                return `<span class="code-line" style="animation-delay: ${delay}ms">${line}</span>`;
            });
            block.innerHTML = wrappedLines.join('\n');
            block.parentElement.classList.remove('oneliner-code');
        }
    });

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .code-line {
            display: contents;
            animation: code-line-appear 0.5s ease forwards;
            opacity: 0;
            transform: translateX(-10px);
        }
        pre.oneliner-code code .code-line {
            display: inline;
        }
        @keyframes code-line-appear {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        /* Adjust copy button for oneliner */
        pre.oneliner-code {
            display: flex;
            align-items: center;
            position: relative;
            background-color: var(--md-code-bg-color);
        }
        pre.oneliner-code code {
            flex: 1 1 auto;
            white-space: pre;
        }
        pre.oneliner-code .copy-button {
            position: static;
            margin-left: 10px;
            margin-right: 10px;
            opacity: 1 !important;
            bottom: auto;
            right: auto;
            transform: none;
        }
    `;
    document.head.appendChild(style);
}

// Add subtle animation to tables
function enhanceTables() {
    const style = document.createElement('style');
    style.textContent = `
        .md-typeset table {
            position: relative;
            overflow: hidden;
        }
        
        .md-typeset table::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 200%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
            transform: skewX(-20deg);
            animation: table-shine 8s infinite;
        }
        
        @keyframes table-shine {
            0% { left: -100%; }
            20%, 100% { left: 100%; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize all the ambient effects
document.addEventListener('DOMContentLoaded', function () {
    // Initialize original features
    initScrollAnimations();
    initCodeBlockEnhancements();
    addCopyButtons();
    initImageZoom();
    addScrollToTopButton();
    initSTLDownloader();

    // Initialize new ambient effects
    addScrollProgress();
    enhanceImageHover();
    enhanceCodeBlocks();
    enhanceTables();


    // Add special animation for STL downloader when visible
    const stlContainer = document.querySelector('.stl-downloader-container');
    if (stlContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stlContainer.classList.add('animate-fade-in', 'visible');

                    // Add a subtle staggered entrance animation to cards
                    const cards = stlContainer.querySelectorAll('.stl-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 50);
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.2 });

        observer.observe(stlContainer);
    }
});