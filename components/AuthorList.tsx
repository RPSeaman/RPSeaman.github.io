import type React from 'react';

export const AuthorList = ({ description }: { description: string }) => {
  const result: React.ReactNode[] = [];
  const parts = description.split(/__(\*\*.*?\*\*)__/);
  parts.forEach((part, index) => {
    if (index % 2 === 1) {
      const boldText = part.replace(/\*\*/g, '');
      result.push(<u key={index}><strong>{boldText}</strong></u>);
    } else {
      const boldParts = part.split(/\*\*(.*?)\*\*/);
      boldParts.forEach((boldPart, boldIndex) => {
        if (boldIndex % 2 === 1) {
          result.push(<strong key={`${index}-${boldIndex}`}>{boldPart}</strong>);
        } else if (boldPart) {
          result.push(boldPart);
        }
      });
    }
  });
  return <>{result}</>;
};
