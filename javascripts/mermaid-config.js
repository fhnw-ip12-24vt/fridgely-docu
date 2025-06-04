// Mermaid configuration
window.addEventListener('load', function () {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'dark',
            securityLevel: 'loose',
            fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true
            }
        });

        // Force render all mermaid diagrams after page load
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    }
});
