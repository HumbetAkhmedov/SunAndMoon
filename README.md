# SunAndMoon
Dynamic Sky Transition
This project creates a captivating web experience featuring a dynamic sky that seamlessly transitions between day and night, complete with animated clouds and stars. Users can interact with a central "sun/moon" element to trigger this transformation, creating an engaging visual effect.

Features
Day-Night Cycle Toggle: Clickable "sun/moon" element allows users to instantly switch between a vibrant daytime sky and a serene starry night.
Smooth Sky Color Transition: The background color of the sky (controlled by CSS variables) gracefully animates during the day-night change.
Interactive Sun/Moon: The central celestial body dynamically changes appearance (color, shadow, and moon craters) to represent the sun or moon.
Animated Clouds:
Clouds are randomly generated and positioned to create a natural cloudscape.
They drift horizontally across the screen, moving from left to right and then back again in an infinite loop. Each cloud has a randomized speed for a more organic feel.
Clouds also incorporate a subtle vertical "floating" animation to enhance realism.
A collision detection mechanism prevents clouds from spawning too close to each other.
Twinkling Stars: During the night cycle, a set of randomly generated stars appear, adding to the nocturnal ambiance. These stars are dynamically added and removed as the sky transitions.
Pure CSS Styling: All visual elements, including the detailed cloud shapes (using multiple box-shadow layers) and moon craters (using ::after pseudo-elements and radial gradients), are crafted purely with CSS.
JavaScript-Controlled CSS Variables: Animation parameters (like cloud starting/ending positions and durations) are dynamically set via JavaScript through CSS custom properties, offering robust and flexible control.
Technologies Used
HTML: Provides the foundational structure for the sky elements and the interactive sun/moon.
CSS: Handles all visual styling, color transitions, cloud shapes, star appearance, and defines the core animations using @keyframes. CSS custom properties (--var-name) are extensively used for dynamic styling.
JavaScript: Manages the interactive logic (day-night toggle), dynamically generates and positions clouds and stars, implements collision detection, and sets CSS variable values for animation control.
How It Works
HTML Structure: The page includes a main body, a #sun-moon element for interaction, a #sky container for the background and stars, and a #clouds container specifically for the cloud elements.
CSS Styling:
CSS variables (--sky, --sun-moon) in the :root pseudo-class define the primary colors for day and night.
A .night class on the <html> element (or :root) triggers the night mode, overriding these variables.
The #sun-moon element uses background-color and box-shadow for its appearance, with a ::after pseudo-element creating the moon's craters.
.cloud and .star classes define their unique visual styles.
@keyframes rules (float and moveCloud) orchestrate the animations. moveCloud uses CSS variables for its left property, enabling dynamic start/end points. The alternate keyword ensures continuous back-and-forth movement.
JavaScript Logic:
An event listener on the #sun-moon element toggles the .night class on the <html> element and the .moon class on the #sun-moon itself.
The addStars() and removeStars() functions dynamically create or clear star divs within the #sky container based on the day/night state.
The addClouds() function runs on page load:
It calculates random x and y coordinates for each cloud, ensuring they appear within the #clouds container and at a desired vertical height (close to the center of the screen).
It implements a minimum distance check to prevent clouds from overlapping.
It generates random startX, endX, and duration values for each cloud's horizontal movement.
These values are then applied to the individual cloud elements as CSS custom properties (--cloud-start-x, --cloud-end-x, --cloud-duration), allowing each cloud to move independently with unique characteristics.
This project beautifully demonstrates how modern web technologies can be combined to create a captivating and interactive visual experience.
