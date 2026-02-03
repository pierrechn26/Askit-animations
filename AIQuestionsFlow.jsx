import React from 'react';
import './AIQuestionsFlow.css';

/**
 * AIQuestionsFlow Component
 *
 * Animated SVG component showing dynamic AI-powered question flow.
 * Features:
 * - Blinking loading dots above the AI block
 * - Flow animation on the input line (left to center)
 * - Flow animation on the selected output line (center to right)
 *
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 */
const AIQuestionsFlow = ({ className = '', style = {} }) => {
  return (
    <div className={`ai-questions-flow-container ${className}`} style={style}>
      <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Shadow filter for cards */}
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.08"/>
          </filter>

          {/* Shadow filter for center block */}
          <filter id="centerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000" floodOpacity="0.15"/>
          </filter>

          {/* Arrow marker for green line */}
          <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#22c55e"/>
          </marker>

          {/* Arrow marker for red line */}
          <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
          </marker>
        </defs>

        {/* ==================== LEFT CARD - Question 1 ==================== */}
        <g transform="translate(30, 100)">
          <rect x="0" y="0" width="280" height="300" rx="16" ry="16" fill="white" filter="url(#cardShadow)"/>

          {/* Header with green dot */}
          <circle cx="30" cy="35" r="8" fill="#22c55e"/>
          <text x="50" y="40" fontSize="16" fill="#374151" fontWeight="500">question 1</text>

          {/* Placeholder lines */}
          <rect x="20" y="70" width="240" height="10" rx="5" fill="#e5e7eb"/>
          <rect x="20" y="90" width="200" height="10" rx="5" fill="#e5e7eb"/>
          <rect x="20" y="110" width="160" height="10" rx="5" fill="#e5e7eb"/>

          {/* Radio options */}
          <g transform="translate(20, 150)">
            {/* Option 1 */}
            <rect x="0" y="0" width="240" height="40" rx="8" fill="#f3f4f6"/>
            <circle cx="25" cy="20" r="10" fill="none" stroke="#d1d5db" strokeWidth="2"/>
            <rect x="50" y="14" width="160" height="12" rx="6" fill="#d1d5db"/>

            {/* Option 2 */}
            <rect x="0" y="50" width="240" height="40" rx="8" fill="#f3f4f6"/>
            <circle cx="25" cy="70" r="10" fill="none" stroke="#d1d5db" strokeWidth="2"/>
            <rect x="50" y="64" width="140" height="12" rx="6" fill="#d1d5db"/>

            {/* Option 3 */}
            <rect x="0" y="100" width="240" height="40" rx="8" fill="#f3f4f6"/>
            <circle cx="25" cy="120" r="10" fill="none" stroke="#d1d5db" strokeWidth="2"/>
            <rect x="50" y="114" width="180" height="12" rx="6" fill="#d1d5db"/>
          </g>
        </g>

        {/* ==================== CENTER BLOCK - AI ==================== */}
        <g transform="translate(420, 175)">
          {/* Loading dots above */}
          <g className="loading-dots" transform="translate(50, -30)">
            <circle className="loading-dot loading-dot-1" cx="0" cy="0" r="6" fill="#9ca3af"/>
            <circle className="loading-dot loading-dot-2" cx="24" cy="0" r="6" fill="#6b7280"/>
            <circle className="loading-dot loading-dot-3" cx="48" cy="0" r="6" fill="#4b5563"/>
          </g>

          {/* Main AI block */}
          <rect x="0" y="0" width="100" height="100" rx="20" ry="20" fill="#1a1a1a" filter="url(#centerShadow)"/>

          {/* ChatGPT/OpenAI Logo */}
          <g transform="translate(50, 50)">
            <g fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Outer lines */}
              <path d="M0,-25 L0,-15 M0,15 L0,25"/>
              <path d="M-21.6,-12.5 L-13,-7.5 M13,7.5 L21.6,12.5"/>
              <path d="M-21.6,12.5 L-13,7.5 M13,-7.5 L21.6,-12.5"/>

              {/* Hexagon shape */}
              <path d="M0,-20 L17.3,-10 L17.3,10 L0,20 L-17.3,10 L-17.3,-10 Z"/>

              {/* Inner connections */}
              <path d="M0,-20 L0,-8"/>
              <path d="M17.3,-10 L7,-4"/>
              <path d="M17.3,10 L7,4"/>
              <path d="M0,20 L0,8"/>
              <path d="M-17.3,10 L-7,4"/>
              <path d="M-17.3,-10 L-7,-4"/>

              {/* Center hexagon */}
              <path d="M0,-8 L7,-4 L7,4 L0,8 L-7,4 L-7,-4 Z"/>
            </g>
          </g>
        </g>

        {/* ==================== CONNECTION LINES ==================== */}

        {/* Left to Center (Green flow line) */}
        <path
          className="flow-line-input"
          d="M 310 250 Q 365 250 420 225"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.5"
          markerEnd="url(#arrowGreen)"
        />

        {/* Center to Right cards */}
        {/* Top red dotted line to question 2a */}
        <path
          d="M 520 200 Q 600 150 700 120"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="6 6"
          markerEnd="url(#arrowRed)"
        />

        {/* Middle green line to question 2b (with flow animation) */}
        <path
          className="flow-line-output"
          d="M 520 225 Q 600 225 700 250"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2.5"
          markerEnd="url(#arrowGreen)"
        />

        {/* Bottom red dotted line to question 2c */}
        <path
          d="M 520 250 Q 600 310 700 380"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="6 6"
          markerEnd="url(#arrowRed)"
        />

        {/* ==================== RIGHT CARDS ==================== */}

        {/* Question 2a (Red/Rejected) */}
        <g transform="translate(700, 30)">
          <rect x="0" y="0" width="260" height="150" rx="12" ry="12" fill="white" filter="url(#cardShadow)"/>

          {/* Red dot and title */}
          <circle cx="25" cy="30" r="6" fill="#ef4444"/>
          <text x="42" y="35" fontSize="14" fill="#374151" fontWeight="500">question 2a</text>

          {/* X icon */}
          <g transform="translate(230, 20)">
            <circle cx="0" cy="0" r="12" fill="#fef2f2"/>
            <path d="M-4,-4 L4,4 M4,-4 L-4,4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
          </g>

          {/* Placeholder content */}
          <rect x="20" y="55" width="180" height="8" rx="4" fill="#e5e7eb"/>
          <rect x="20" y="70" width="140" height="8" rx="4" fill="#e5e7eb"/>

          {/* Two boxes */}
          <rect x="20" y="95" width="100" height="40" rx="6" fill="#f3f4f6"/>
          <rect x="135" y="95" width="100" height="40" rx="6" fill="#f3f4f6"/>
        </g>

        {/* Question 2b (Green/Selected) */}
        <g transform="translate(700, 195)" className="selected-card">
          <rect x="0" y="0" width="260" height="150" rx="12" ry="12" fill="white" stroke="#22c55e" strokeWidth="2" filter="url(#cardShadow)"/>

          {/* Green dot and title */}
          <circle cx="25" cy="30" r="6" fill="#22c55e"/>
          <text x="42" y="35" fontSize="14" fill="#374151" fontWeight="500">question 2b</text>

          {/* Checkmark icon */}
          <g transform="translate(230, 20)">
            <circle cx="0" cy="0" r="12" fill="#dcfce7"/>
            <path d="M-4,0 L-1,3 L4,-3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </g>

          {/* Placeholder content */}
          <rect x="20" y="55" width="200" height="8" rx="4" fill="#e5e7eb"/>
          <rect x="20" y="70" width="160" height="8" rx="4" fill="#e5e7eb"/>

          {/* Two boxes with green tint */}
          <rect x="20" y="95" width="100" height="40" rx="6" fill="#dcfce7"/>
          <rect x="135" y="95" width="100" height="40" rx="6" fill="#dcfce7"/>
        </g>

        {/* Question 2c (Red/Rejected) */}
        <g transform="translate(700, 360)">
          <rect x="0" y="0" width="260" height="150" rx="12" ry="12" fill="white" filter="url(#cardShadow)"/>

          {/* Red dot and title */}
          <circle cx="25" cy="30" r="6" fill="#ef4444"/>
          <text x="42" y="35" fontSize="14" fill="#374151" fontWeight="500">question 2c</text>

          {/* X icon */}
          <g transform="translate(230, 20)">
            <circle cx="0" cy="0" r="12" fill="#fef2f2"/>
            <path d="M-4,-4 L4,4 M4,-4 L-4,4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
          </g>

          {/* Placeholder content */}
          <rect x="20" y="55" width="190" height="8" rx="4" fill="#e5e7eb"/>
          <rect x="20" y="70" width="150" height="8" rx="4" fill="#e5e7eb"/>

          {/* Two boxes */}
          <rect x="20" y="95" width="100" height="40" rx="6" fill="#f3f4f6"/>
          <rect x="135" y="95" width="100" height="40" rx="6" fill="#f3f4f6"/>
        </g>
      </svg>
    </div>
  );
};

export default AIQuestionsFlow;
