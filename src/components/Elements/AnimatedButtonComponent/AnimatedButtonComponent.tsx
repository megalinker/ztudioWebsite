// AnimatedButtonComponent.tsx
import React from 'react';
import './AnimatedButtonComponent.css';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** If provided, the component will render as a link to this URL */
  href?: string;
  /** If you want to open in a new tab */
  newTab?: boolean;
}

const AnimatedButtonComponent: React.FC<AnimatedButtonProps> = ({
  children,
  href,
  newTab = false,
  ...buttonProps
}) => {
  // If href is passed, render an <a> styled as your button:
  if (href) {
    return (
      <div className="animated-button-container">
        <a
          style={{ textDecoration: "none" }}
          className="animated-button"
          href={href}
          {...(newTab
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {children}
        </a>
      </div>
    );
  }

  // Otherwise render a real <button>
  return (
    <div className="animated-button-container">
      <button className="animated-button" {...buttonProps}>
        {children}
      </button>
    </div>
  );
};

export default AnimatedButtonComponent;
