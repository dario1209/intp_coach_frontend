# 🧠 INTP Coach

> **A productivity coach designed specifically for INTP minds** — combining systematic thinking with AI-powered guidance, wrapped in elegant Art Deco aesthetics.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

---

## ✨ What Makes This Different

**INTP Coach** isn't just another productivity app. It's built from the ground up to work *with* the INTP cognitive style, not against it:

- 🎯 **Experiment-Driven** — Track hypotheses about your productivity, not just tasks
- 🧪 **Focus System Debugging** — Identify and fix the root causes of distraction loops
- 📊 **Pattern Recognition** — Visualize your productivity experiments and their outcomes
- 💬 **AI Coaching** — Powered by Perplexity AI for contextual, intelligent guidance
- 🎨 **Art Deco Design** — Beautiful, functional interface inspired by 1920s modernism

---

## 🎨 Design Philosophy

The interface embraces **Art Deco** aesthetics — geometric precision, elegant gradients, and gold accents that make productivity feel *luxurious* rather than mundane.

### Color Palette
- **Deco Gold** (#D4AF37) — Highlights and primary actions
- **Deco Bronze** (#CD7F32) — Hover states and warmth
- **Deco Navy** (#1B2845) — Primary text and backgrounds
- **Deco Cream** (#F5F5DC) — Light backgrounds and accents
- **Deco Teal** (#008B8B) — Secondary highlights

---

## 🚀 Features

### 🗨️ Intelligent Chat Interface
- Real-time AI coaching powered by Perplexity
- Context-aware responses based on your INTP profile
- Loading states with elegant animations
- Message history tracking

### 📋 Goal & Experiment Tracking
- **Active Goals** — What you're working on right now
- **Experiments** — Productivity hypotheses you're testing
- **Status Badges** — Visual indicators for pending/active/completed states
- **Focus Score** — Track your concentration metrics

### 🎛️ Three-Panel Layout
1. **Left Sidebar** — Navigation and quick actions
2. **Center Chat** — Main coaching interface
3. **Right Panel** — Goals, experiments, and profile stats

### 🔧 Technical Highlights
- **React Query** — Efficient server state management
- **Zustand** — Lightweight client state (goals, profile, experiments)
- **Custom Components** — No bloated UI libraries, just purpose-built components
- **TypeScript** — Full type safety across the codebase
- **Responsive Design** — Mobile-friendly with touch-optimized interactions

---

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/intp-coach-frontend.git
cd intp-coach-frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your API URL:
# NEXT_PUBLIC_API_URL=https://your-backend.railway.app

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your INTP Coach.

---

## 🏗️ Project Structure

```
intp_coach_frontend/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Main coach interface
│   │   └── globals.css         # Global styles + Art Deco variables
│   │
│   ├── components/
│   │   ├── layout/             # Shell, Sidebar, RightPanel, DecoFrame
│   │   ├── chat/               # ChatWindow, MessageBubble, InputBar
│   │   ├── coach/              # IntpProfileCard, GoalList, ExperimentBoard
│   │   └── ui/                 # Button, Card, Badge, Tabs, Tooltip
│   │
│   ├── hooks/
│   │   ├── useCoachChat.ts     # Chat state with React Query
│   │   └── useSessionPlan.ts   # Session state with Zustand
│   │
│   ├── lib/
│   │   ├── apiClient.ts        # API wrapper
│   │   ├── utils.ts            # Helper functions
│   │   └── artDecoTheme.ts     # Theme tokens
│   │
│   └── types/
│       └── coach.ts            # TypeScript interfaces
│
├── public/
│   ├── logo.svg
│   └── deco-patterns/          # SVG patterns for borders
│
└── tailwind.config.mjs         # Tailwind + custom theme
```

---

## 🎯 Usage

### Starting a Coaching Session

1. **Open the app** and you'll see your INTP profile card
2. **Ask a question** in the chat interface:
   - *"Help me debug my focus system"*
   - *"Why do I keep getting distracted by research rabbit holes?"*
   - *"Create an experiment to test my optimal work block length"*

3. **Track your goals** in the right panel:
   - Add new goals
   - Mark them as active/pending/completed
   - See your experiment count and focus score

### Example Workflows

**Debugging Distraction Loops:**
```
You: "I keep opening Twitter when I should be coding"
Coach: "Let's analyze this pattern. What triggers the urge to check Twitter?"
You: "Usually when I hit a difficult problem"
Coach: "Classic avoidance behavior. Let's design an experiment..."
```

**Designing Productivity Experiments:**
```
You: "I want to test if Pomodoro works for me"
Coach: "Great! Let's set up a hypothesis-driven experiment.
       Hypothesis: 25-minute work blocks will increase my focus score.
       Metrics: Track focus score before/after implementing Pomodoro..."
```

---

## 🔌 API Integration

This frontend connects to the INTP Coach backend (deployed on Railway). The backend handles:
- Perplexity AI integration
- Session persistence
- Experiment tracking
- Analytics

### API Endpoints Used
- `POST /api/coach/chat` — Send messages to the AI coach
- `GET /api/sessions` — Retrieve session history
- `POST /api/experiments` — Create new productivity experiments

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first styling |
| **React Query** | Server state management |
| **Zustand** | Client state management |
| **Lucide React** | Beautiful icon library |

### Custom Components

All UI components are custom-built without external dependencies:
- ✅ No shadcn/ui
- ✅ No Material-UI
- ✅ No class-variance-authority
- ✅ Simple, maintainable, and purpose-built

---

## 🎨 Customization

### Changing the Theme

Edit `tailwind.config.mjs` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      'deco-gold': '#D4AF37',
      'deco-bronze': '#CD7F32',
      'deco-navy': '#1B2845',
      // Add your own colors here
    }
  }
}
```

### Adding New Components

Follow the existing patterns in `src/components/ui/`:
```typescript
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface YourComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "custom";
}

const YourComponent = forwardRef<HTMLDivElement, YourComponentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return <div ref={ref} className={cn("base-styles", className)} {...props} />;
  }
);
```

---

## 🧪 For INTPs, By INTPs

This project is designed with deep understanding of INTP cognitive patterns:

- **Systems Thinking** — Focus on root causes, not symptoms
- **Experimentation** — Test hypotheses rather than follow rigid rules
- **Pattern Recognition** — Visualize what works (and what doesn't)
- **Minimal Friction** — No unnecessary ceremony or motivational fluff
- **Intellectual Honesty** — Acknowledges when you're procrastinating, helps you understand *why*

---

## 🤝 Contributing

Contributions are welcome! This is an experimental project, and feedback from other INTPs is valuable.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions
- New experiment templates
- Additional coaching prompts
- UI/UX improvements
- Performance optimizations
- Documentation improvements

---

## 📝 License

MIT License - feel free to use this for your own productivity experiments.

---

## 🙏 Acknowledgments

- **Perplexity AI** — For powering the intelligent coaching
- **INTP Community** — For the insights into what actually works for our minds
- **Art Deco Movement** — For the aesthetic inspiration

---

## 📬 Contact

Built by an INTP, for INTPs.

**Questions?** Open an issue on GitHub.

**Feedback?** PRs are welcome.

---

<div align="center">

**[View Demo](#) • [Report Bug](https://github.com/yourusername/intp-coach-frontend/issues) • [Request Feature](https://github.com/yourusername/intp-coach-frontend/issues)**

Made with ☕ and systematic thinking

</div>
