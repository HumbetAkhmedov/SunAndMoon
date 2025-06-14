const sun_moon = document.getElementById('sun-moon');
// The sky element for stars is #sky
const starsContainer = document.getElementById("sky"); 

sun_moon.addEventListener('click', () => {
    document.documentElement.classList.toggle('night');
    sun_moon.classList.toggle('moon');

    if (document.documentElement.classList.contains('night')) {
        addStars();
    } else {
        removeStars();
    }
});

function addStars() {
    const starCount = 30;
    const minDistance = 8; 
    const stars = [];

    // Ensure starsContainer exists
    if (!starsContainer) {
        console.error("Stars container (#sky) not found!");
        return;
    }

    for (let i = 0; i < starCount; i++) {
        let x, y, tooClose;

        do {
            tooClose = false;
            x = Math.random() * 100; // Stars can be anywhere on the screen
            y = Math.random() * 100; // Stars can be anywhere on the screen

            for (let star of stars) {
                const dx = x - star.x;
                const dy = y - star.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < minDistance) {
                    tooClose = true;
                    break;
                }
            }
        } while (tooClose);

        stars.push({ x, y });

        const starEl = document.createElement("div");
        starEl.classList.add("star");
        starEl.style.left = `${x}vw`;
        starEl.style.top = `${y}vh`;
        starsContainer.appendChild(starEl); // Append to starsContainer (#sky)
    }
}

function removeStars() {
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => star.remove());
}

function addClouds() {
    const cloudCount = 3;
    // Increased minDistance for clouds slightly to give more space
    const minDistance = 30; 

    // The container for clouds is #clouds, not #sky
    const cloudsContainer = document.getElementById("clouds"); 
    const clouds = []; 

    // Ensure cloudsContainer exists
    if (!cloudsContainer) {
        console.error("Cloud container (#clouds) not found!");
        return;
    }

    for (let i = 0; i < cloudCount; i++) {
        let x, y;
        let tooClose;

        do {
            tooClose = false;
            // Y position closer to the center of the #clouds container's height (50vh)
            // If #clouds is 50vh tall and centered with top: 50% and transform: translateY(-50%),
            // then y: 0-100% of its own height.
            // But if we want it relative to the viewport center, then:
            // For clouds, they should be within the #clouds div's bounds.
            // Let's make them span the full height of #clouds (0-100% of its 50vh height)
            // or perhaps 10-90% to avoid edge clipping.
            // The `y` here is relative to the `cloudsContainer`'s `top`.
            // If `cloudsContainer` is 50vh tall, then its internal 0-100% will map to 0-50vh.
            // So, `y = Math.random() * 100;` within the #clouds container should work for vertical spread.
            // If you want them to occupy a specific range within that 50vh, adjust.
            // Let's place them within the middle 60% of the 50vh height for now.
            y = 20 + Math.random() * 60; // 20% to 80% of #clouds container's height

            // X position still within 80% of the viewport width to allow for cloud width
            x = Math.random() * 80;

            for (const existingCloud of clouds) {
                const dx = x - existingCloud.x;
                const dy = y - existingCloud.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < minDistance) {
                    tooClose = true;
                    break;
                }
            }
        } while (tooClose);

        clouds.push({ x, y });

        const cloudEl = document.createElement("div");
        cloudEl.classList.add("cloud"); 

        cloudEl.style.top = `${y}%`; // Use % for y position relative to #clouds container's height
        // Adjusted the startX and endX to ensure clouds move fully across the screen
        // and come from/go out of view
        const startX = -30 - (Math.random() * 20); // From -30vw to -50vw
        const endX = 110 + (Math.random() * 20);   // To 110vw to 130vw
        const duration = 20 + (Math.random() * 20); // 20-40 seconds for movement

        cloudEl.style.setProperty('--cloud-start-x', `${startX}vw`);
        cloudEl.style.setProperty('--cloud-end-x', `${endX}vw`);
        cloudEl.style.setProperty('--cloud-duration', `${duration}s`);
        
        cloudEl.style.left = `${startX}vw`; // Initial placement before animation starts

        cloudsContainer.appendChild(cloudEl); // Append to cloudsContainer (#clouds)
    }
}

// Call addClouds when the page loads
document.addEventListener("DOMContentLoaded", addClouds);
// Removed the addClouds() call at the end, as DOMContentLoaded handles it.