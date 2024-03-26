import { CardChipSize } from '@/features/card/types/cardUITypes';
import { CARD_CHIP_SIZE } from '@/features/card/constants/cardShape';

interface Props {
  size: CardChipSize;
}

export const CardChip = ({ size }: Props) => {
  if (size === CARD_CHIP_SIZE.small) {
    return <div className="small-card__chip" />;
  }

  // size === CARD_CHIP_SIZE.big;
  return <div className="big-card__chip" />;
};
