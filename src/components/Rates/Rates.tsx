import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Rater from 'react-rater';
import 'react-tooltip/dist/react-tooltip.css';

const Rates = ({ vote_average }: { vote_average: number }) => {
  //   Fix library warnings
  const error = console.error;
  /* eslint-disable */
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  return (
    <div>
      <Rater
        total={10}
        rating={Math.round(vote_average)}
        interactive={false}
        data-tooltip-id={`${vote_average}`}
      />
      <ReactTooltip id={`${vote_average}`}>
        <div>{`Rating: ${vote_average}`}</div>
      </ReactTooltip>
    </div>
  );
};
export default React.memo(Rates);
