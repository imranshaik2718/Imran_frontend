import { useState, useEffect, useRef } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface Message {
  id?: number;
  sender: "user" | "bot";
  text: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Tell me about yourself",
    answer:
      "I'm Imran Ali, a Front-End Developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. Currently, I work as a Front-End Developer at Zunipixel, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Zunipixel's frontend, ensuring our platform meets web accessibility standards and best practices.\n\nI specialize in building responsive, high-performance web applications using modern technologies like React.js, Next.js, TypeScript, and Tailwind CSS — turning complex ideas into clean, functional user interfaces. In my spare time, I love exploring new frontend tools, contributing to personal projects, and experimenting with design systems or UI animations.",
  },
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContentRef = useRef<HTMLDivElement>(null);
  const typingIntervalRef = useRef<number | null>(null);
  const userScrolledRef = useRef<boolean>(false);

  // Check if user is near bottom of chat
  const isNearBottom = () => {
    if (!chatContentRef.current) return true;
    const { scrollTop, scrollHeight, clientHeight } = chatContentRef.current;
    // Consider "near bottom" if within 100px of bottom
    return scrollHeight - scrollTop - clientHeight < 100;
  };

  // Auto-scroll to bottom smoothly when new messages are added (only if user hasn't manually scrolled)
  useEffect(() => {
    if (!isTyping && messages.length > 0 && isNearBottom()) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        userScrolledRef.current = false;
      }, 100);
    }
  }, [messages.length]); // Only trigger on message count change, not during typing

  // Smooth scroll when typing starts
  useEffect(() => {
    if (isTyping && isNearBottom()) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }, [isTyping]);

  // Handle manual scrolling
  useEffect(() => {
    const chatContent = chatContentRef.current;
    if (!chatContent) return;

    const handleScroll = () => {
      if (!isNearBottom()) {
        userScrolledRef.current = true;
      } else if (isNearBottom() && !isTyping) {
        userScrolledRef.current = false;
      }
    };

    chatContent.addEventListener("scroll", handleScroll);
    return () => chatContent.removeEventListener("scroll", handleScroll);
  }, [isTyping]);

  // Cleanup typing interval on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const typeMessage = (fullText: string, delay: number = 20) => {
    // Clear any existing typing interval
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    setIsTyping(true);
    let currentIndex = 0;
    
    // Add empty bot message to start typing with unique ID
    const botMessageId = Date.now();
    setMessages((prev) => [...prev, { id: botMessageId, sender: "bot", text: "" }]);

    // Initial smooth scroll when typing starts (only if near bottom)
    if (isNearBottom()) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }

    typingIntervalRef.current = window.setInterval(() => {
      currentIndex++;
      const currentText = fullText.substring(0, currentIndex);
      
      setMessages((prev) => {
        const updated = [...prev];
        const botMessageIndex = updated.findIndex((msg) => msg.id === botMessageId);
        if (botMessageIndex !== -1) {
          updated[botMessageIndex] = { id: botMessageId, sender: "bot", text: currentText };
        }
        return updated;
      });

      // Minimal auto-scroll during typing (only every 50 chars to allow manual scrolling)
      if (currentIndex % 50 === 0 && isNearBottom() && !userScrolledRef.current) {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      if (currentIndex >= fullText.length) {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
        }
        setIsTyping(false);
        // Final scroll when typing completes (only if near bottom)
        if (isNearBottom() && !userScrolledRef.current) {
          setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }, 100);
        }
      }
    }, delay);
  };

  const handleQuestionClick = (questionText: string, answerText: string) => {
    // Add user question as a message with unique ID
    const userMessageId = Date.now();
    setMessages((prev) => [...prev, { id: userMessageId, sender: "user", text: questionText }]);
    
    // Smooth scroll to show the new user message
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
    
    // Show typing indicator, then type out the answer
    setTimeout(() => {
      typeMessage(answerText, 15);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || isTyping) return;

    const userInput = inputMessage.trim();
    
    // Add user message with unique ID
    const userMessageId = Date.now();
    setMessages((prev) => [...prev, { id: userMessageId, sender: "user", text: userInput }]);
    
    // Clear input immediately
    setInputMessage("");

    // Process bot response
    setTimeout(() => {
      let botResponse = "";

      // Check for "hi" or "hello" (case-insensitive)
      if (userInput.toLowerCase() === "hi" || userInput.toLowerCase() === "hello") {
        botResponse = "Hello, how can I help you?";
      } else {
        // Try to find matching question
        const matchedQuestion = questions.find(
          (q) => q.question.toLowerCase() === userInput.toLowerCase()
        );
        if (matchedQuestion) {
          botResponse = matchedQuestion.answer;
        } else {
          botResponse = "I'm here to help! Please select one of the questions above or ask me something specific.";
        }
      }

      // Type out the response
      typeMessage(botResponse, 15);
    }, 500);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset messages after closing animation
    setTimeout(() => {
      setMessages([]);
      setInputMessage("");
    }, 200);
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
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
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
          className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-[#112240] border border-[#64ffda]/20 rounded-lg shadow-2xl flex flex-col overflow-hidden"
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
          <div ref={chatContentRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Show welcome message and questions if no messages yet */}
            {messages.length === 0 && (
              <>
                <div className="bg-[#0a192f] border border-[#64ffda]/20 rounded-lg p-3 text-sm text-[#ccd6f6]">
                  👋 Hi! I'm here to help. Click on any question below to get an
                  answer:
                </div>

                {/* Questions as clickable bubbles */}
                <div className="space-y-2">
                  {questions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuestionClick(q.question, q.answer)}
                      className="w-full text-left bg-[#0a192f] hover:bg-[#172a45] border border-[#64ffda]/10 hover:border-[#64ffda]/30 rounded-lg p-3 transition-all duration-200 group"
                    >
                      <p className="text-sm text-[#ccd6f6] group-hover:text-white">
                        {q.question}
                      </p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Show conversation messages */}
            {messages.length > 0 && (
              <div className="space-y-4">
                {messages
                  .filter((msg) => msg.text !== "" || msg.sender === "user")
                  .map((msg) => (
                    <div
                      key={msg.id || `msg-${msg.sender}-${msg.text.substring(0, 10)}`}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 text-sm whitespace-pre-wrap ${
                          msg.sender === "user"
                            ? "bg-[#64ffda] text-[#0a192f]"
                            : "bg-[#0a192f] text-[#ccd6f6] border border-[#64ffda]/20"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[#0a192f] border border-[#64ffda]/20 rounded-lg p-3 text-sm text-[#ccd6f6]">
                      <div className="flex items-center gap-1">
                     
                        <div className="flex gap-1">
                          <span className="animate-pulse">.</span>
                          <span className="animate-pulse [animation-delay:0.2s]">.</span>
                          <span className="animate-pulse [animation-delay:0.4s]">.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="bg-[#0a192f] border-t border-[#64ffda]/20 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 bg-[#112240] border border-[#64ffda]/20 rounded-lg px-4 py-2 text-sm text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda]/50"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#64ffda] text-[#0a192f] rounded-lg px-4 py-2 hover:bg-[#52e0c4] transition-colors flex items-center justify-center"
                aria-label="Send message"
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
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            {/* Show all questions as small buttons when messages exist */}
            {messages.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {questions
                  .filter((q) => q.id !== 1)
                  .map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuestionClick(q.question, q.answer)}
                      className="text-xs bg-[#112240] border border-[#64ffda]/10 hover:border-[#64ffda]/30 text-[#ccd6f6] hover:text-white rounded px-2 py-1 transition-all"
                    >
                      {q.question}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
