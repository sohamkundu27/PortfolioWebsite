# Portfolio Website

A sleek, responsive personal portfolio website built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with tech background
  - About section with professional bio
  - Experience timeline with career highlights
  - Skills showcase with progress bars
  - Portfolio grid with 5 featured projects
  - Contact form with validation and notifications
- **Color Scheme**: Black, gray, and blue (#1261A0) theme
- **Smooth Navigation**: Scroll-to-section navigation with active states

## 🛠️ Technologies Used

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS, Radix UI components
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Build Tool**: Create React App with CRACO
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
portfolio-website/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── PortfolioSection.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── ui/ (Radix UI components)
│   │   │   └── Portfolio.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── vercel.json
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
cd frontend
yarn build
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Deploy from root directory**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### Alternative: GitHub Integration

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy from the main branch

## 🎨 Customization

### Personal Information
Update the placeholder content in each section component:

- **Hero Section**: `frontend/src/components/sections/Hero.jsx`
  - Replace "Your Name" with your actual name
  - Update the tagline and description
  - Add your real social media links

- **About Section**: `frontend/src/components/sections/About.jsx`
  - Replace placeholder bio with your story
  - Update experience stats
  - Add your professional headshot

- **Experience**: `frontend/src/components/sections/Experience.jsx`
  - Replace with your actual work experience
  - Update company names, roles, and dates
  - Modify accomplishment descriptions

- **Skills**: `frontend/src/components/sections/Skills.jsx`
  - Adjust skill levels and categories
  - Add or remove technologies
  - Update proficiency percentages

- **Portfolio**: `frontend/src/components/sections/PortfolioSection.jsx`
  - Replace with your actual projects
  - Update project descriptions and images
  - Add real demo and GitHub links

- **Contact**: `frontend/src/components/sections/Contact.jsx`
  - Update contact information
  - Replace email and phone placeholders
  - Modify location information

### Styling
- Colors can be modified in `frontend/tailwind.config.js`
- Custom styles in `frontend/src/App.css` and `frontend/src/index.css`

### Images
- Replace placeholder images with your actual photos
- Hero background image can be changed in `Hero.jsx`
- Profile pictures in About and Hero sections

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuration Files

- **vercel.json**: Vercel deployment configuration
- **tailwind.config.js**: Tailwind CSS configuration
- **craco.config.js**: CRACO configuration for customization

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Made with ❤️ using React & Tailwind CSS**