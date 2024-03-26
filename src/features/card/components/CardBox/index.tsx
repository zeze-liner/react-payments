import { ReactNode } from 'react';
import { CardTop } from './CardTop';
import { CardBottom } from './CardBottom';
import { CardMiddle } from './CardMiddle';
import { CardBoxType } from '@/features/card/types/cardShapeTypes';
import { CARD_BOX_TYPE } from '@/features/card/constants/cardShape';

interface Props {
  type: CardBoxType;
  children: ReactNode;
}

export const CardBox = ({ type, children }: Props) => {
  const renderCard = (type: CardBoxType) => {
    if (type === CARD_BOX_TYPE.big) {
      return <div className="card-inner big-card">{children}</div>;
    }

    // type === CARD_BOX_TYPE.empty;
    return <div className="card-inner empty-card">{children}</div>;
  };

  return <div className="card-box">{renderCard(type)}</div>;
};

CardBox.Top = CardTop;
CardBox.Middle = CardMiddle;
CardBox.Bottom = CardBottom;
