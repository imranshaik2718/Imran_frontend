import { useState, useEffect, useRef } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  
  {
    id: 2,
    question: "Frontend Skills",
    answer:
      "Here are all my frontend skills:\n\n• React.js & React Native\n• JavaScript & TypeScript\n• HTML & SCSS/CSS\n• Next.js\n• Redux (State Management)\n• REST APIs Integration\n• Postman\n• Git & GitHub\n• JSON\n• Node.js\n• Tailwind CSS\n• UI/UX Design\n• Figma\n• WordPress\n• Contentful\n• PHP\n\nI'm constantly learning and staying updated with the latest frontend technologies and best practices.",
  },
  {
    id: 3,
    question: "Qualifications",
    answer:
      "Here are my educational qualifications:\n\n🎓 MBA (Business Analyst)\n   Shadan Institute of Computer Studies, Hyderabad\n\n🎓 Graduation - BSc (Computer Science)\n   SRAS College\n\n🎓 Intermediate\n   Krishnaveni Junior College\n\n🎓 School\n   DAV Model School",
  },
  {
    id: 4,
    question: "Where do you reside?",
    answer: "I reside in Hyderabad, India.",
  },
  {
    id: 5,
    question: "Projects",
    answer:
      "I've worked on various projects including:\n\n• Spotify Connected App - A web app built with Spotify Web API, covering REST APIs, user auth flows, Node, Express, React, and Styled Components.\n\n• Spotify Profile - A web app for visualizing personalized Spotify data, allowing users to view top artists, tracks, recently played tracks, and create new playlists.\n\n• Halcyon Theme - A minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more (100k+ installs).\n\n• Portfolio Site (v4) - Built with Gatsby, featuring a modern design system.\n\nI enjoy building projects that explore real-world frontend challenges and modern UI patterns. You can check out more of my work in the Projects section of my portfolio.",
  },
  {
    id: 6,
    question: "Contact",
    answer:
      "Feel free to reach out to me:\n\n📧 Email: imranshaik1145@gmail.com\n\n📱 Phone: 7842272786\n\nI'm always open to discussing new projects, opportunities, or just connecting with fellow developers!",
  },
];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const handleQuestionClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset answer after a short delay to allow closing animation
    setTimeout(() => {
      setSelectedAnswer(null);
    }, 300);
  };

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      // Add event listener when chatbot is open
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-[#64ffda] text-[#0a192f] rounded-full p-4 shadow-lg hover:bg-[#52e0c4] transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Open chatbot"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-6 right-6 z-50 w-80 h-[500px] bg-[#112240] border border-[#64ffda]/20 rounded-lg shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-[#0a192f] border-b border-[#64ffda]/20 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse"></div>
              <h3 className="text-white font-semibold">Chat Assistant</h3>
            </div>
            <button
              onClick={handleClose}
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              aria-label="Close chatbot"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* Welcome Message */}
            {!selectedAnswer && (
              <div className="mb-4">
                <div className="bg-[#0a192f] border border-[#64ffda]/20 rounded-lg p-3 text-sm text-[#ccd6f6]">
                  👋 Hi! I'm here to help. Click on any question below to get an
                  answer:
                </div>
              </div>
            )}

            {/* Questions List */}
            {!selectedAnswer && (
              <div className="space-y-2">
                {questions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionClick(q.answer)}
                    className="w-full text-left bg-[#0a192f] hover:bg-[#172a45] border border-[#64ffda]/10 hover:border-[#64ffda]/30 rounded-lg p-3 transition-all duration-200 group"
                  >
                    <p className="text-sm text-[#ccd6f6] group-hover:text-white">
                      {q.question}
                    </p>
                  </button>
                ))}
              </div>
            )}

            {/* Selected Answer */}
            {selectedAnswer && (
              <div className="space-y-4">
                <div className="bg-[#0a192f] border border-[#64ffda]/20 rounded-lg p-4">
                  <p className="text-sm text-[#ccd6f6] leading-relaxed whitespace-pre-wrap">
                    {selectedAnswer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedAnswer(null)}
                  className="w-full bg-[#64ffda] hover:bg-[#52e0c4] text-[#0a192f] rounded-lg py-2 px-4 text-sm font-medium transition-colors"
                >
                  ← Back to Questions
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
