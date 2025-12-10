import React from 'react';

const Logo = ({ className = "", size = 40 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Shaheer365 Logo"
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
            </defs>

            {/* Abstract S shape formed by two interlocking paths */}
            <path
                d="M70 30C70 18.9543 61.0457 10 50 10C38.9543 10 30 18.9543 30 30C30 41.0457 38.9543 50 50 50"
                stroke="url(#logoGradient)"
                strokeWidth="12"
                strokeLinecap="round"
            />
            <path
                d="M30 70C30 81.0457 38.9543 90 50 90C61.0457 90 70 81.0457 70 70C70 58.9543 61.0457 50 50 50"
                stroke="url(#logoGradient)"
                strokeWidth="12"
                strokeLinecap="round"
            />

            {/* 365 dots/squares motif representing Microsoft/Community */}
            <rect x="75" y="20" width="10" height="10" rx="2" fill="#3b82f6" opacity="0.8" />
            <rect x="15" y="70" width="10" height="10" rx="2" fill="#8b5cf6" opacity="0.8" />
        </svg>
    );
};

export default Logo;
