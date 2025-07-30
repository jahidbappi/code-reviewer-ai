# Code Reviewer AI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

An AI-powered code review application that provides instant feedback and suggestions for your code. Built with React, TypeScript, and Google's Gemini AI.

## ✨ Features

- **Instant Code Review**: Get AI-powered feedback on your code in seconds
- **Multi-language Support**: Review code in various programming languages
- **Real-time Analysis**: Receive detailed feedback including bugs, improvements, and best practices
- **Modern UI**: Clean and intuitive user interface built with React
- **TypeScript Support**: Full TypeScript implementation for better development experience

## 🚀 Live Demo

Visit the live application: [Code Reviewer AI](https://code-reviewer-ai.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **AI Service**: Google Gemini AI
- **Styling**: CSS Modules
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Google Gemini API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jahidbappi/code-reviewer-ai.git
   cd code-reviewer-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 🎯 Usage

1. **Paste your code** into the text area
2. **Select the programming language** from the dropdown menu
3. **Click "Review Code"** to get instant AI feedback
4. **Review the suggestions** and implement the improvements

## 📁 Project Structure

```
code-reviewer-ai/
├── components/          # React components
│   ├── CodeViewer.tsx  # Code display component
│   ├── ErrorDisplay.tsx # Error handling component
│   ├── FeedbackDisplay.tsx # AI feedback display
│   └── icons/          # SVG icons
├── services/           # API services
│   └── geminiService.ts # Gemini AI integration
├── types.ts           # TypeScript type definitions
├── constants.ts       # Application constants
└── App.tsx           # Main application component
```

## 🔑 Getting a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `.env.local` file

## 🚀 Deployment

### Deploy to Vercel

1. **Fork this repository**
2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your forked repository
   - Add your `VITE_GEMINI_API_KEY` environment variable
   - Deploy!

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```
2. **Deploy the `dist` folder** to Netlify

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Contributing Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for providing the AI capabilities
- [React](https://reactjs.org/) for the amazing frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [TypeScript](https://www.typescriptlang.org/) for type safety

## 📞 Support

If you have any questions or need help, please:

- Open an [issue](https://github.com/jahidbappi/code-reviewer-ai/issues)
- Contact the maintainer at jahidcric2000@gmail.com

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=jahidbappi/code-reviewer-ai&type=Date)](https://star-history.com/#jahidbappi/code-reviewer-ai&Date)

---

**Made with ❤️ by [Jahid Bappi](https://github.com/jahidbappi)**
