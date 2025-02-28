# AI Mock Interview

**AI Mock Interview** is an innovative web application that allows you to simulate realistic interview scenarios powered by artificial intelligence. Whether you’re preparing for technical, behavioural, or industry-specific interviews, this tool enables you to customize your mock interview sessions to practice and refine your skills.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Reference Images](#reference-images)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The AI Mock Interview app leverages modern web technologies to offer a comprehensive interview simulation experience. Built with **Next.js**, the application integrates various features such as speech-to-text processing, real-time webcam support, and AI-generated responses to create a dynamic, interactive environment. This tool is perfect for anyone looking to practice interview techniques on any topic, regardless of their experience level.

## Features

- **Dynamic Interview Simulation**: Generate custom interview questions tailored to your selected topic.
- **Speech-to-Text Integration**: Convert spoken responses into text, making it easier to review and analyze your performance.
- **Webcam Support**: Utilize your webcam for a more engaging, face-to-face interview experience.
- **Responsive Design**: Developed with Tailwind CSS to ensure a mobile-friendly and responsive UI.
- **AI-Powered Responses**: Leverage generative AI to simulate realistic and challenging interview scenarios.
- **Data Management**: Integrated with Drizzle ORM and Drizzle Kit for efficient data handling.
- **Secure Authentication**: Use Clerk for seamless and secure user authentication.

## Demo

Experience the live demo of the application on Vercel: [AI Mock Interview Demo](https://ai-mock-interview-one-nu.vercel.app)

## Reference Images

![image](https://github.com/user-attachments/assets/6147eff4-769d-4ece-8369-ce84e3302806)
![image](https://github.com/user-attachments/assets/268ae421-4b06-41d9-b4d7-683449a71ff0)
![image](https://github.com/user-attachments/assets/933be02a-19c2-4742-a92e-e34ad15eb87a)
![image](https://github.com/user-attachments/assets/72889cdb-e6a3-4e08-a25f-21dbe8b2da02)
![image](https://github.com/user-attachments/assets/a1a109b5-d519-49cd-b1e8-11ce705ce92a)

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/namanrox/ai-mock-interview.git
   cd ai-mock-interview
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser and navigate to** [http://localhost:3000](http://localhost:3000).

### Editing the Project

The main application code is located in the `app/` directory, with the primary page at `app/page.js`. As you make changes, the page auto-updates, enabling a smooth development workflow.

## Project Structure

The repository is organized as follows:

```bash
ai-mock-interview/
├── app/                 # Next.js application files
├── components/          # Reusable UI components
├── lib/                 # Helper functions and utilities
├── public/              # Static assets
├── utils/               # Utility functions and configurations
├── .gitignore           # Files to be ignored by Git
├── LICENSE              # MIT License information
├── README.md            # This file
├── package.json         # Project configuration and dependencies
├── tailwind.config.mjs  # Tailwind CSS configuration
├── postcss.config.mjs   # PostCSS configuration
└── next.config.mjs      # Next.js configuration
```

## Built With

- **[Next.js](https://nextjs.org)** – A React framework for production.
- **[Tailwind CSS](https://tailwindcss.com)** – Utility-first CSS framework for rapid UI development.
- **[React](https://reactjs.org)** – JavaScript library for building user interfaces.
- **[Drizzle ORM](https://orm.drizzle.team/)** – Lightweight ORM for TypeScript.
- **[Clerk](https://clerk.dev)** – Provides secure authentication and user management.
- **Generative AI** – For powering realistic interview simulations.
- Additional tools: PostCSS, react-webcam, and speech-to-text integrations.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request. For major changes, please open an issue to discuss your ideas first.

### How to Contribute

1. **Fork the repository.**
2. **Create your feature branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit your changes:**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request.**

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## Contact

For questions or feedback, please reach out:

- **Repository Owner**: [namanrox](https://github.com/namanrox)
- **Project Demo**: [ai-mock-interview-one-nu.vercel.app](https://ai-mock-interview-one-nu.vercel.app)

---

Enjoy building and refining your interview skills with AI Mock Interview!
