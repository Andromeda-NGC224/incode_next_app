"use client";

import { Button } from "@/components/ui";
import { FormEvent, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoChatboxEllipsesOutline } from "react-icons/io5";
import { MessageSender, AI_ERROR_MESSAGE } from "@/lib/сonstants";
import { Message } from "./types";
import { LoadingSpinner } from "./components";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen((prev) => !prev);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: MessageSender.User,
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("message", inputValue);

      const response = await fetch("/api/chat", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = (await response.json()) as { response: string };
      const aiResponse: Message = {
        id: Date.now(),
        text: data.response,
        sender: MessageSender.AI,
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Failed to fetch AI response:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: AI_ERROR_MESSAGE,
          sender: MessageSender.AI,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Custom spinner component

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={toggleChat}
        className="group backdrop-blur-xl bg-black/30 text-white shadow-2xl shadow-black/20 border border-white/20 rounded-full w-16 h-16 flex items-center justify-center transition-all hover:shadow-xl hover:bg-sky-100 cursor-pointer"
      >
        <IoChatboxEllipsesOutline
          size={32}
          className="text-sky-100 group-hover:text-black/30"
        />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-96 max-w-[90vw] h-[500px] bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col border border-white/30 dark:border-zinc-700/50"
          >
            {/* Header */}
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                Chat assistant
              </h3>
              <button
                onClick={toggleChat}
                className="hover:scale-120 transition"
              >
                <IoClose className="w-6 h-6 text-zinc-500 hover:text-blue-400 cursor-pointer" />
              </button>
            </div>

            {/* Chat Body */}
            <div
              ref={chatBodyRef}
              className="flex-grow p-4 overflow-y-auto text-zinc-700 dark:text-zinc-300 scrollbar-gradient"
            >
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-center text-zinc-500 dark:text-zinc-400">
                    Hello! I&apos;m your chat assistant. Ask me any questions
                    about the functionality of the site.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${
                        msg.sender === MessageSender.User
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-xl ${
                          msg.sender === MessageSender.User
                            ? "bg-blue-500 text-white rounded-br-none"
                            : "bg-gray-200 text-zinc-900 dark:bg-zinc-700 dark:text-white rounded-bl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && <LoadingSpinner />}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-zinc-200 dark:border-zinc-700"
            >
              <input
                type="text"
                placeholder="Your question..."
                className="w-full p-2 bg-white/90 dark:bg-zinc-800/70 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="mt-3 w-full rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:from-blue-600 hover:to-indigo-700 transition"
                disabled={isLoading}
              >
                Send
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
