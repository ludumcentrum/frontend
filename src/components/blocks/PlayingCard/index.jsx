import * as React from 'react';

type Props = {
  type: string
};

const PlayingCard = (props: Props) => {
  const { type } = props;

  return (
    <div className="PlayingCard">
      { type }
    </div>
  );
};

export default PlayingCard;
