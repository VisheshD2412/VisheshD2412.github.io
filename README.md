# Vishesh Dalwal - Personal Portfolio

A clean, modern, and responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. Features a dark theme by default with the ability to toggle to light mode.

## Features

- **Dark/Light Theme Toggle**: Switch between themes with preference saved in localStorage
- **Responsive Design**: Fully responsive across all device sizes
- **Scroll Animations**: Subtle fade-in animations as sections come into view
- **Modern UI**: Clean, professional design with smooth hover effects
- **No Dependencies**: Built with pure HTML, CSS, and JavaScript

## Sections

1. **Hero Section**: Your name and tagline
2. **About Section**: Personal description
3. **Skills Section**: Technical skills displayed as pill badges
4. **Projects Section**: Project cards with descriptions and buttons
5. **Contact Section**: Social media links

## Customization

### Personal Information

Edit the following in `index.html`:

- Your name in the hero section
- Tagline in the hero section
- About text in the about section
- Project titles and descriptions
- Contact links (GitHub, LinkedIn, Twitter)

### Styling

The CSS uses CSS variables for easy customization. Main color variables are in `styles.css`:

```css
:root {
  --bg-primary: #0a0a0a; /* Main background */
  --bg-secondary: #1a1a1a; /* Secondary background */
  --text-primary: #ffffff; /* Main text color */
  --text-secondary: #cccccc; /* Secondary text color */
}
```

### Adding Projects

To add more projects, duplicate the project card structure in the HTML:

```html
<div class="project-card">
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-description">Your project description here.</p>

  <a href="https://VisheshD2412.github.io/notes-app/" target="_blank"
    ><button class="project-btn">View Project</button></a
  >
</div>
```

### Adding Skills

To add more skills, add more skill tags in the skills section:

```html
<span class="skill-tag">Your Skill</span>
```

## File Structure

```
crsrportfolio/
├── index.html      # Main HTML file
├── styles.css      # CSS styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Getting Started

1. **Add your profile image**: Place a photo named `profile.jpg` in the root directory (200x210px recommended)
2. Open `index.html` in your web browser
3. The portfolio will load with the dark theme by default
4. Click the moon/sun icon in the top-right to toggle themes
5. Scroll to see the fade-in animations

## Customization Tips

1. **Replace placeholder content**: Update all text content with your personal information
2. **Add real project links**: Replace the placeholder project buttons with actual links
3. **Update contact links**: Add your real social media URLs
4. **Add your own images**: Consider adding project screenshots or a profile photo
5. **Customize colors**: Modify the CSS variables to match your brand colors

## Features to Add Later

- Project screenshots or images
- Contact form functionality
- Blog section
- Downloadable resume
- More interactive animations
- Portfolio gallery

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using HTML, CSS, and JavaScript
