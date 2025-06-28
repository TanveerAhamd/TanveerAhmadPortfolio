// src/components/WhatsAppButton.tsx
import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "923000695646"; // International format without +
  const message = encodeURIComponent("Greetings!.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-4 z-50"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 3, // 👈 Slower animation
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="Chat on WhatsApp"
        className="w-10 h-10"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
