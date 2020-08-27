import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { animated, useSpring } from 'react-spring';
import {} from 'react-spring/renderprops-universal';
import { useMeasure } from 'react-use';
import VisibilitySensor from 'react-visibility-sensor';
import { AboutMeSection } from './components/AboutMe';
import { ContactSection } from './components/Contact';
import { Headline } from './components/Headline';
import { SocialButtons } from './components/SocialButtons';

const MenuContainerWrapper: React.FC<{ useWrapper: boolean }> = ({
  useWrapper,
  children,
}) => {
  const [bind, { width }] = useMeasure<HTMLDivElement>();
  const expand = useSpring({
    // maxWidth: width,
    config: { duration: 2000 },
  });

  return (
    <animated.div
      ref={bind}
      className={`container justify-content-end ${
        !useWrapper ? 'no-width' : ''
      }`}
      style={expand}>
      {children}
    </animated.div>
  );
};

const VisibilityWrapper: React.FC<{
  callback: (id: string) => void;
  sectionId: string;
}> = ({ callback, children, sectionId: id }) => {
  const minorCall = useCallback(
    (isVisable: boolean) => {
      isVisable && callback(id);
    },
    [callback, id]
  );
  return (
    <VisibilitySensor partialVisibility={true} onChange={minorCall}>
      {children}
    </VisibilitySensor>
  );
};

const App = () => {
  if (window.location.hostname === 'www.sammurphy.dev') {
    document.head.appendChild({
      ...document.createElement('link'),
      rel: 'canonical',
      href: 'https://sammurphy.dev',
    });
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollPosition]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (viewPortHeight !== window.innerHeight) {
        setViewPortHeight(window.innerHeight);
      }
    };

    window.addEventListener('resize', handleWindowResize, { passive: true });

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [setViewPortHeight, viewPortHeight]);

  const shouldMenuBeInContainer = scrollPosition >= viewPortHeight * 0.55;

  const [inViewSection, setInViewSection] = useState('home');
  const viewingCallback = useCallback((id: string) => setInViewSection(id), []);

  return (
    <Router>
      <nav className="navbar fixed-top justify-content-end">
        <MenuContainerWrapper useWrapper={shouldMenuBeInContainer}>
          {shouldMenuBeInContainer && (
            <HashLink smooth={true} to="#home" className="btn">
              Home
            </HashLink>
          )}
          <HashLink smooth={true} to="#portfolio" className="btn">
            Portfolio
          </HashLink>
          <HashLink smooth={true} to="#about" className="btn">
            About
          </HashLink>
          <HashLink smooth={true} to="#contact" className="btn">
            Contact
          </HashLink>
        </MenuContainerWrapper>
      </nav>
      <section className="app">
        <VisibilityWrapper sectionId="home" callback={viewingCallback}>
          <main className="container h-100" id="home">
            <div className="row h-100 align-items-center justify-content-center">
              <Headline />
            </div>
          </main>
        </VisibilityWrapper>
        <div className="fixed-wrapper">
          <SocialButtons />
        </div>
        <div className="container">
          <VisibilityWrapper sectionId="about" callback={viewingCallback}>
            <AboutMeSection />
          </VisibilityWrapper>
          <VisibilityWrapper sectionId="contact" callback={viewingCallback}>
            <ContactSection />
          </VisibilityWrapper>
        </div>
      </section>
    </Router>
  );
};

export default App;
