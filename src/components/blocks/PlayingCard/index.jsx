import * as React from 'react';
import classNames from 'classnames';
import { CARD_RANKS, CARD_COLORS } from './constants';
import './styles.scss';

type Props = {
  rank: string,
  color: string,
};

const PlayingCard = (props: Props) => {
  const { rank, color, className } = props;

  const validate = {
    rank: false,
    color: false,
  };

  let Component = null;

  CARD_RANKS.forEach((value) => {
    if (value === rank) {
      validate.rank = true;
    }
  });

  CARD_COLORS.forEach((value) => {
    if (value === color) {
      validate.color = true;
    }
  });

  if (validate.rank === true && validate.color === true) {
    const componentClass = classNames(
      'PlayingCard',
      className,
    );

    Component = (
      <div className={componentClass}>
        {rank}
        <span>-</span>
        {color}
      </div>
    );
  } else {
    Component = (
      <h1>Invalid prop types</h1>
    );
  }

  return Component;
};

export default PlayingCard;
