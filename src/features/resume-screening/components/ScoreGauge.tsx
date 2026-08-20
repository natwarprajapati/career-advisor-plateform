import React from 'react';
import { motion } from 'framer-motion';

interface ScoreGaugeProps {
  score: number;
  label?: string;
  size?: number;
}

export const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score, label = 'ATS Score', size = 120 }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 80) return '#10B981'; // Emerald
    if (s >= 65) return '#F59E0B'; // Amber
    return '#EF4444'; // Red
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="stroke-muted/30"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={getColor(score)}
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-primary">{score}</span>
          <span className="text-[10px] text-muted-foreground uppercase font-semibold">/ 100</span>
        </div>
      </div>
      {label && <p className="text-sm font-medium text-muted-foreground mt-2">{label}</p>}
    </div>
  );
};
