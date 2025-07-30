# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Code Reviewer AI seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to jahidcric2000@gmail.com.

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the requested information listed below (as much as you can provide) to help us better understand the nature and scope of the possible issue:

* **Type of issue** (buffer overflow, SQL injection, cross-site scripting, etc.)
* **Full paths of source file(s) related to the vulnerability**
* **The location of the affected source code (tag/branch/commit or direct URL)**
* **Any special configuration required to reproduce the issue**
* **Step-by-step instructions to reproduce the issue**
* **Proof-of-concept or exploit code (if possible)**
* **Impact of the issue, including how an attacker might exploit it**

This information will help us triage your report more quickly.

## Preferred Languages

We prefer to receive vulnerability reports in English, but we can also handle reports in other languages if needed.

## Policy

Code Reviewer AI follows the principle of [Responsible Disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure).

## What to expect

When you report a security vulnerability, you can expect:

1. **Acknowledgment**: We'll acknowledge receipt of your report within 48 hours
2. **Assessment**: We'll assess the vulnerability and determine its severity
3. **Updates**: We'll keep you updated on our progress
4. **Resolution**: We'll work to fix the issue and release a patch
5. **Credit**: We'll credit you in our security advisories (unless you prefer to remain anonymous)

## Security Best Practices

When using Code Reviewer AI, please follow these security best practices:

1. **Keep your API keys secure**: Never commit API keys to version control
2. **Use environment variables**: Store sensitive configuration in environment variables
3. **Regular updates**: Keep dependencies updated to the latest secure versions
4. **Input validation**: Always validate user input before processing
5. **HTTPS only**: Use HTTPS in production environments

## Security Features

Code Reviewer AI includes several security features:

- **Input sanitization**: All user inputs are sanitized before processing
- **API key protection**: API keys are stored securely and never exposed to the client
- **CORS protection**: Proper CORS headers are implemented
- **Content Security Policy**: CSP headers are implemented to prevent XSS attacks

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2) and will be clearly marked as security releases in the changelog.

## Contact

For security-related questions or concerns, please contact us at jahidcric2000@gmail.com. 