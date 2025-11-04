"use client";
import React from "react";

interface FlowerButtonProps {
  text: string;
  onClick?: () => void;
}

export default function FlowerButton({ text, onClick }: FlowerButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      <div className="wrapper">
        <p className="text">{text}</p>

        {[...Array(6)].map((_, i) => (
          <div className={`flower flower${i + 1}`} key={i}>
            <div className="petal one"></div>
            <div className="petal two"></div>
            <div className="petal three"></div>
            <div className="petal four"></div>
          </div>
        ))}
      </div>
    </button>
  );
}
