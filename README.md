
# Duolingo Clone

This is a Duolingo-inspired language learning platform built as part of my software engineering course portfolio project. The application is designed to be both fun and educational, providing an engaging way for users to learn new languages while earning points, completing quests, and challenging their friends on the leaderboard.

<br>

## Features

- 🌐 **Next.js 14 & Server Actions**: Built with the latest version of Next.js, utilizing server actions for efficient handling of backend logic.
- 🗣 **AI Voices**: Implemented AI-generated voices for language lessons using Elevenlabs AI, bringing a more immersive experience to users.
- 🎭 **Amazing Characters**: Characters and avatars in the app are powered by assets from KenneyNL, adding a vibrant visual appeal.
- 🔐 **Authentication**: User authentication and management are handled using Clerk, ensuring secure and seamless sign-ins.
- 🔊 **Sound Effects**: Enhanced user experience with engaging sound effects throughout the app.
- ❤️ **Hearts System**: Users are given a limited number of hearts to complete lessons, adding a layer of challenge to the learning process.
- 🌟 **Points / XP System**: Earn points and experience as you progress through lessons, encouraging continuous learning.
- 💔 **No Hearts Left Popup**: A friendly reminder when users run out of hearts, prompting them to either regain hearts or practice old lessons.
- 🚪 **Exit Confirmation Popup**: Ensures users don't accidentally lose progress by confirming before exiting a lesson.
- 🔄 **Practice Old Lessons**: Allows users to regain hearts by revisiting and practicing previously completed lessons.
- 🏆 **Leaderboard**: Compete with friends and other users to see who can earn the most points.
- 🗺 **Quests & Milestones**: Complete quests and reach milestones to unlock rewards and advance in the game.
- 🛍 **Shop System**: Exchange points for hearts or other in-game items in the shop.
- 💳 **Pro Tier**: Upgrade to the Pro tier for unlimited hearts, with payments processed through Stripe.
- 🏠 **Landing Page**: A welcoming landing page that introduces the app and its features.
- 📊 **Admin Dashboard**: Managed through React Admin, providing comprehensive tools for overseeing app usage and content.
- 🌧 **ORM using DrizzleORM**: Efficient database interactions using DrizzleORM.
- 💾 **PostgresDB using NeonDB**: Data stored securely in a PostgresDB managed by NeonDB.
- 🚀 **Deployment on Vercel**: The app is deployed and hosted on Vercel for reliable and scalable performance.
- 📱 **Mobile Responsiveness**: Fully responsive design ensuring a smooth experience across all devices.

<br>

## Getting Started

To get started with the project, clone the repository and follow the instructions below.

```bash
git clone https://github.com/yourusername/duolingo-clone.git
cd duolingo-clone
```

<br>

### Install Dependencies

Make sure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
```

<br>

### Environment Variables

Create a `.env.local` file in the root directory and add the necessary environment variables as outlined in the `.env.example` file.

<br>

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

<br>

### Deployment

The application is deployed on Vercel. For deployment instructions, refer to [Vercel's documentation](https://vercel.com/docs).

<br>

## Acknowledgments

- **[Duolingo Brand Page](https://design.duolingo.com/)**: For the amazing character assets.
- **Elevenlabs AI**: For the AI-generated voices.
- **Clerk**: For handling authentication.
- **NeonDB**: For database management.
- **Stripe**: For payment processing.

<br>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify and expand this README to suit your project's specific needs!
