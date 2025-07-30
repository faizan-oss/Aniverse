# 🎌 Aniverse - Your Ultimate Anime Destination

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple.svg)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.15.6-blue.svg)](https://mui.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10.8.0-orange.svg)](https://firebase.google.com/)

Aniverse is your ultimate destination for all things anime! Immerse yourself in a world of captivating narratives, vibrant characters, and breathtaking animation. Explore comprehensive details on your favorite anime series, from plot summaries to character profiles.

## ✨ Features

- **🎬 Anime Discovery**: Browse and discover new anime series
- **📖 Detailed Information**: Comprehensive details about each anime including plot summaries, character profiles, and more
- **🎥 Video Integration**: Watch anime videos and trailers
- **💡 Recommendations**: Get personalized anime recommendations
- **📱 Responsive Design**: Beautiful UI that works on all devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: Material-UI (MUI)
- **Routing**: React Router DOM
- **Backend**: Firebase
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material Icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/faizan-oss/Aniverse.git
   cd Aniverse/aniverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase** (if using backend features)
   - Create a Firebase project
   - Add your Firebase configuration to `src/firebase.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
aniverse/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable React components
│   │   ├── common/        # Common components (Footer, Loader)
│   │   ├── details/       # Anime details components
│   │   └── home/          # Home page components
│   ├── pages/             # Page layouts and routing
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── firebase.js           # Firebase configuration
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Vite configuration
```

## 🎨 Key Components

- **Hero Section**: Eye-catching landing page with anime introduction
- **Card Grid**: Display anime in an attractive grid layout
- **Details Page**: Comprehensive anime information
- **Video Player**: Integrated video viewing experience
- **Recommendations**: Smart anime suggestions

## 🔧 Configuration

### Firebase Setup
If you want to use Firebase features, update the configuration in `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## 🌟 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Faizan** - [GitHub](https://github.com/faizan-oss)

## 🙏 Acknowledgments

- Anime data and inspiration
- Material-UI for the beautiful components
- React community for the amazing ecosystem
- Vite for the fast build tooling

---

⭐ **Star this repository if you found it helpful!**

🎌 **Welcome to Aniverse - Your Ultimate Anime Experience!**
