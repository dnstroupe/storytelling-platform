Interactive Data Storytelling Platform

Welcome to the Interactive Data Storytelling Platform. This project allows users to create data-driven stories by combining text, images, charts, and maps in an interactive interface. It's built using HTML, Tailwind CSS, JavaScript, Chart.js, and Leaflet.js. The project is deployed on GitHub Pages and can be accessed here.

Features

Custom Story Builder:
Upload datasets (CSV/JSON) to generate interactive charts.
Add text, images, and embed videos to create a rich media experience.
Pre-built, responsive templates styled with Tailwind CSS for visually appealing stories.
Drag-and-Drop Interface:
Drag and drop elements to organize the story.
Flexible layouts enabled by Tailwind CSS Grid and utility classes.
Interactive Visuals:
Chart.js: Create interactive charts (e.g., bar charts, line charts) from uploaded datasets.
Leaflet.js: Generate interactive maps with markers, tooltips, and zoom features to visualize geographical data.
Responsive Design:
Mobile-first responsive design using Tailwind CSS breakpoints.
Custom themes and animations using Tailwind CSS utilities.
Technologies

HTML5
CSS3 (Tailwind CSS for styling)
JavaScript (ES6)
Chart.js (for interactive charts)
Leaflet.js (for interactive maps)
GitHub Pages (for deployment)
Installation and Setup

If you'd like to run the project locally, follow these steps:

Clone the repository:
git clone https://github.com/dnstroupe/storytelling-platform.git
Navigate to the project directory:
cd storytelling-platform
Install dependencies (if using Tailwind locally):
Make sure you have Node.js installed, then run:

npm install
Build the CSS using Tailwind:
If you're developing locally and want to rebuild the Tailwind CSS file, run:

npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch
Open the index.html file in your browser to view the project locally.
Deployment

The project is deployed on GitHub Pages and is live at:
Interactive Data Storytelling Platform

To deploy the project on GitHub Pages:

Ensure the project is set up correctly, with the build output (e.g., the dist folder) included in the repository.
Push the changes to the gh-pages branch or configure the Pages settings to deploy from the main branch (if using a /docs folder or root).
Future Enhancements

Adding more interactive templates for users.
Implementing additional chart types and customization options.
Adding the ability to save and share data stories as embeddable content.
License

This project is licensed under the MIT License - see the LICENSE file for details.
