// Create triangle SVG elements for background animation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.background-container');
    const colors = ["hsl(320,100%,70%)", "hsl(240,100%,70%)", "hsl(160,100%,70%)", "hsl(80,100%,70%)"];

    // Create 60 shapes (10 columns x 6 rows)
    for (let i = 0; i < 60; i++) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "shape");
        svg.setAttribute("viewBox", "0 0 100 115");
        svg.setAttribute("preserveAspectRatio", "xMidYMin slice");

        // Add 4 triangles to each shape with different colors and animation delays
        for (let j = 0; j < 4; j++) {
            const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.setAttribute("points", "50 57.5, 50 57.5, 50 57.5");
            polygon.setAttribute("fill", "none");
            polygon.setAttribute("stroke", colors[j]);
            polygon.setAttribute("stroke-width", "5");

            const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            animate.setAttribute("attributeName", "points");
            animate.setAttribute("repeatCount", "indefinite");
            animate.setAttribute("dur", "4s");
            animate.setAttribute("begin", j + "s");
            animate.setAttribute("from", "50 57.5, 50 57.5, 50 57.5");
            animate.setAttribute("to", "50 -75, 175 126, -75 126");

            polygon.appendChild(animate);
            svg.appendChild(polygon);
        }

        container.appendChild(svg);
    }
});