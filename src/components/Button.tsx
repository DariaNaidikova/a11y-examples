import React, { FC } from 'react';
import Button from 'intergalactic/button';
import ArrowRightM from 'intergalactic/icon/ArrowRight/m';

type Props = {
    onClick?: (event: React.SyntheticEvent) => void
}

export const IconButton: FC<Props> = ({onClick}) => {
  return (
      <Button use='primary' mr={2} onClick={onClick}>
        <Button.Addon tag={ArrowRightM} />
      </Button>
  );
};
