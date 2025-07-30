# Contributing to Code Reviewer AI

Thank you for your interest in contributing to Code Reviewer AI! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When creating a bug report, please include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and OS information

### Suggesting Enhancements

We welcome feature requests! When suggesting enhancements, please:

- Use a clear and descriptive title
- Provide a detailed description of the proposed functionality
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the coding standards below
   - Add tests if applicable
   - Update documentation as needed
4. **Commit your changes**
   ```bash
   git commit -m 'feat: add your feature description'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

## 📋 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

Examples:
feat: add new language support
fix: resolve API key validation issue
docs: update installation instructions
style: format code according to style guide
refactor: simplify component structure
test: add unit tests for new feature
```

### TypeScript Guidelines

- Use strict TypeScript configuration
- Define proper interfaces and types
- Avoid `any` type when possible
- Use proper error handling

### React Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Follow React best practices

## 🧪 Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Test in multiple browsers
- Test responsive design

## 📚 Documentation

- Update README.md if needed
- Add JSDoc comments for functions
- Update API documentation if applicable
- Include examples for new features

## 🔧 Local Development Setup

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
   ```bash
   cp .env.example .env.local
   # Add your Gemini API key to .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

Before submitting a PR, please:

- Test the build process: `npm run build`
- Ensure the app works in production mode
- Check for any console errors
- Verify all features work as expected

## 📞 Getting Help

If you need help with contributing:

- Open an issue with the `help wanted` label
- Join our discussions
- Check existing documentation

## 🎉 Recognition

Contributors will be recognized in:

- The project README
- Release notes
- GitHub contributors list

Thank you for contributing to Code Reviewer AI! 🚀 