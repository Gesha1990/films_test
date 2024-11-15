import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Rater from 'react-rater';
import 'react-tooltip/dist/react-tooltip.css';

const Rates = ({
  vote_average,
  place
}: {
  vote_average: number;
  place: string;
}) => {
  //   Fix library warnings
  const error = console.error;
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
        data-tooltip-id={`${vote_average}${place}`}
      />
      <ReactTooltip
        id={`${vote_average}${place}`}
        content={`Rating: ${vote_average}`}
      />
    </div>
  );
};
export default React.memo(Rates);
