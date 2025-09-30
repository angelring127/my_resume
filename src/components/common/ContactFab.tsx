"use client";

import React from "react";

interface ContactFabProps {
  label: string;
  title?: string;
  onClick: () => void;
}

export default function ContactFab({ label, title, onClick }: ContactFabProps) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "auto",
        height: "auto",
        background: "linear-gradient(135deg, #00bcd4, #0097a7)",
        color: "white",
        border: "none",
        borderRadius: "50px",
        padding: "0.9rem 1.25rem",
        fontSize: "0.875rem",
        fontWeight: 500,
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(0, 188, 212, 0.4)",
        zIndex: 1000,
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.boxShadow = "0 6px 25px rgba(0, 188, 212, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 188, 212, 0.4)";
      }}
      title={title ?? label}
      aria-label={title ?? label}
    >
      <span style={{ fontSize: "1rem" }}>✉️</span>
      <span>{label}</span>
    </button>
  );
}
