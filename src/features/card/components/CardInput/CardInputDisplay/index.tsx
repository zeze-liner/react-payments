import { useMemo } from 'react';
import { CARD_BOX_TYPE, CARD_CHIP_SIZE } from '@/features/card/constants/cardShape';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { CardNumber } from '@/features/card/components/CardNumber';
import { CardInfo } from '@/features/card/components/CardInfo';
import { CardChip } from '@/features/card/components/CardChip';
import { CardBox } from '@/features/card/components/CardBox';
import {
  formattedDisplayCardNumber,
  formattedExpirationDate,
  formattedOwnerName,
} from '@/features/card/utils/formattedString';

interface Props {
  companyName: CardInputInterface['companyName'];
  ownerName: CardInputInterface['ownerName'];
  cardNumber: CardInputInterface['cardNumber'];
  expirationDate: CardInputInterface['expirationDate'];
}

export const CardInputDisplay = ({ companyName, ownerName, cardNumber, expirationDate }: Props) => {
  const displayCardNumber = useMemo(() => formattedDisplayCardNumber(cardNumber), [cardNumber]);
  const displayOwnerName = formattedOwnerName(ownerName);
  const displayExpirationDate = formattedExpirationDate(expirationDate);

  return (
    <CardBox type={CARD_BOX_TYPE.empty}>
      <CardBox.Top>{companyName}</CardBox.Top>
      <CardBox.Middle>
        <CardChip size={CARD_CHIP_SIZE.small} />
      </CardBox.Middle>
      <CardBox.Bottom>
        <CardNumber cardNumber={displayCardNumber} />
        <CardInfo ownerName={displayOwnerName} expirationDateMMYY={displayExpirationDate} />
      </CardBox.Bottom>
    </CardBox>
  );
};
