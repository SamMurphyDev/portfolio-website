import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { animated } from 'react-spring';

export const SocialButtons: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollPosition]);

  return (
    <div className="fixed-block fixed-right">
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/s-murphy/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-linkedin">
            <animated.span className="name">LinkedIn</animated.span>
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="sr-only">Sam Murphy's LinkedIn Profile</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Master-Mas/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github">
            <span className="name">GitHub</span>
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">Sam Murphy's GitHub profile</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@sammurphy.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-email">
            <span className="name">Email</span>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="sr-only">Sam Murphy's Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
