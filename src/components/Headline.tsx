import React, { useCallback, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useMeasure } from 'react-use';

const durationAmount = 500;

export const Headline: React.FC = () => {
  const words = ['Developer', 'Creator', 'Leader'];

  const [wordWrapperState, setWordWrapperState] = useState(true);
  const [bind, { width }] = useMeasure<HTMLSpanElement>();
  const expand = useSpring({
    paddingRight: wordWrapperState ? 8 : 0,
    width: wordWrapperState ? width : 0,
    config: {
      duration: durationAmount,
      easing: (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2),
    },
  });
  const [wordIndex, setWordIndex] = useState(0);

  const setIndex = useCallback(() => {
    setWordIndex(wordIndex + 1 < words.length ? wordIndex + 1 : 0);
  }, [wordIndex, words.length]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!wordWrapperState) {
          setIndex();
        }
        setWordWrapperState(!wordWrapperState);
      },
      wordWrapperState ? 2000 : durationAmount
    );

    return () => clearTimeout(timer);
  }, [setIndex, wordWrapperState]);

  return (
    <div className="headline col-12">
      <h1 className="headline-title">Sam Murphy</h1>
      <h2 className="headline-subtitle">
        I'm a{' '}
        <animated.div
          className="d-inline-block headline-word-wrapper"
          style={expand}>
          <span ref={bind}>{words[wordIndex]}</span>
        </animated.div>
      </h2>
    </div>
  );
};
