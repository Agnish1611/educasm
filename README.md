# Educasm - AI-Powered Educational Platform

A Next.js-based conversational education engine powered by GPT-3.5 Turbo, offering an interactive learning experience through exploration and gamified problem-solving.

## 🌟 Features

### Explore Mode
- Real-time conversational learning interface
- Persistent chat history with context retention
- Streaming responses for immediate feedback
- Smart follow-up questions based on conversation context
- Scrollable chat history similar to Perplexity.ai

### Playground Mode
- Interactive problem-solving environment
- Dynamic question generation based on topics
- Play/Pause functionality for session control
- Duolingo-inspired gamification elements
- Supports multiple exam types (JEE, NEET)

## 🛠️ Technical Implementation

### Backend Security
- API calls moved to secure backend using Vercel serverless functions
- Protected API keys and sensitive configurations
- Rate limiting implementation:
  - 15 requests per minute
  - 250 requests per hour
  - 500 requests per day per user session

### Performance Optimizations
- Efficient code organization and cleanup
- Removed unused dependencies
- Optimized API calls and response handling
- Streamlined state management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key (or alternative AI model API key)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/educasm.git
cd educasm
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
educasm/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utility functions
├── services/        # API services
├── types/           # TypeScript definitions
└── public/          # Static assets
```

## 💡 Key Components

### GPT Service
- Handles all AI model interactions
- Implements rate limiting
- Manages streaming responses
- Contextual question handling

### Explore View
- Real-time chat interface
- Context management
- History persistence
- Auto-scroll functionality

### Playground View
- Interactive question interface
- Session management
- Progress tracking
- Gamification elements

## 🔒 Security Features

- Backend API route protection
- Rate limiting implementation
- Secure environment variable handling
- Protected API key management

## 🎮 User Experience

- Responsive design
- Real-time feedback
- Intuitive navigation
- Persistent session management
- Gamified learning elements

## 📝 API Routes

### Explore Mode
- `/api/explore` - Main conversation endpoint
- `/api/explore/stream` - Streaming response endpoint
- `/api/explore/context` - Context management endpoint

### Playground Mode
- `/api/playground/question` - Question generation
- `/api/playground/validate` - Answer validation
- `/api/playground/progress` - Progress tracking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for GPT-3.5 Turbo API
- Vercel for hosting and serverless functions
- Next.js team for the amazing framework

## 🔮 Future Improvements

- Advanced analytics dashboard
- More gamification elements
- Additional exam type support
- Enhanced personalization
- Mobile app development

For more information or questions, please open an issue in the repository.
