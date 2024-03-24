import { DISPLAY_MAX_LENGTH_CARD_OWNER_NAME } from '@/features/card/constants/display';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { formattedDisplayCardNumber } from '@/features/card/utils/formattedString';
import { Text } from '@/components/atoms/Text';
import { useMemo } from 'react';

interface Props {
  companyName: CardInputInterface['companyName'];
  ownerName: CardInputInterface['ownerName'];
  cardNumber: CardInputInterface['cardNumber'];
  expirationDate: CardInputInterface['expirationDate'];
}

export const CardInputDisplay = ({ companyName, ownerName, cardNumber, expirationDate }: Props) => {
  const displayCardNumber = useMemo(() => formattedDisplayCardNumber(cardNumber), [cardNumber]);

  return (
    <div className={'card-box'}>
      <div className={'empty-card'}>
        <div className={'card-top'}>{companyName}</div>
        <div className={'card-middle'}>
          <div className="small-card__chip" />
        </div>
        <div className={'card-bottom'}>
          <div className={'card-bottom__number'}>
            <Text className={'card-text'}>{displayCardNumber}</Text>
          </div>
          <div className={'card-bottom__info'}>
            <Text className={'card-text'}>
              {ownerName.slice(0, DISPLAY_MAX_LENGTH_CARD_OWNER_NAME) || 'NAME'}
            </Text>
            <Text className={'card-text'}>
              {expirationDate.MM || 'MM'} / {expirationDate.YY || 'YY'}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
