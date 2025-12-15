# Duka Mkononi Website

[![Deploy to GitHub Pages](https://github.com/chingalo-family/duka-mkononi-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/chingalo-family/duka-mkononi-website/actions/workflows/deploy.yml)

Modern, responsive website for the [Duka Mkononi mobile application](https://github.com/chingalo-family/duka-mkononi-app).

## 🌐 Live Website

Visit the live website at: [https://chingalo-family.github.io/duka-mkononi-website/](https://chingalo-family.github.io/duka-mkononi-website/)

## 📱 About Duka Mkononi

Duka Mkononi (Shop in Hand) is a modern mobile point of sale application designed to help small businesses manage their operations efficiently. The application provides features for:

- 📊 Sales tracking and analytics
- 📦 Inventory management
- 💰 Point of sale transactions
- 👥 Customer management
- 🔒 Secure data handling

## 🎨 Features

This website includes:

- **Modern Design**: Clean, professional UI with gradient accents
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized assets and minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels
- **Interactive**: Smooth animations and transitions
- **GitHub Pages Ready**: Automated deployment via GitHub Actions

## 🚀 Local Development

To run the website locally:

1. Clone the repository:
```bash
git clone https://github.com/chingalo-family/duka-mkononi-website.git
cd duka-mkononi-website
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then visit http://localhost:8000
```

## 📦 Project Structure

```
duka-mkononi-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment workflow
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure JS
- **Google Fonts**: Inter font family
- **GitHub Pages**: Free hosting
- **GitHub Actions**: Automated deployment

## 🚢 Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` or `master` branch.

### Manual Deployment

If you need to deploy manually:

1. Ensure GitHub Pages is enabled in repository settings
2. Set the source to "GitHub Actions"
3. Push changes to the main branch
4. The workflow will automatically deploy the site

### GitHub Pages Configuration

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select "GitHub Actions"
3. The site will be available at `https://chingalo-family.github.io/duka-mkononi-website/`

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for use by the community.

## 🔗 Related Projects

- [Duka Mkononi App](https://github.com/chingalo-family/duka-mkononi-app) - The main mobile application

## 👥 Maintained By

[Chingalo Family](https://github.com/chingalo-family)

---

**Built with ❤️ for small business owners everywhere**
