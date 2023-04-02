import React, { HTMLAttributes, forwardRef } from 'react';

interface HighlightProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  highlight: string[];
}

const Highlight = forwardRef<HTMLDivElement, HighlightProps>((props, ref) => {
  const { highlight, text, ...rest } = props;
  const regexp = (high: string) => new RegExp(`(${high})`, 'gi');

  return (
    <div {...rest} ref={ref}>
      {highlight
        .reduce((acc, high) => acc.map((word) => word.split(regexp(high))).flat(), [text])
        .map((phrase, i) =>
          highlight.find((high) => high === phrase) ? (
            <mark key={`${phrase}_${i}`}>{phrase}</mark>
          ) : (
            <span key={`${phrase}_${i}`}>{phrase}</span>
          )
        )}
    </div>
  );
});

export default Highlight;
