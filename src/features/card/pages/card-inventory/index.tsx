import { RootLayout } from '@/components/layout/RootLayout';
import { Button } from '@/components/atoms/Button';
import { useCard } from '@/features/card/providers/CardProvider';
import { AppLayout } from '@/components/layout/AppLayout';
import { Heading } from '@/components/atoms/Heading';
import { Header } from '@/components/molecules/Header';
import { VFlex } from '@/components/atoms/VFlex';
import { CardInventoryItem } from '@/features/card/components/CardInventoryItem';

interface Props {
  onChangeStep: (step: 0 | 1 | 2) => void;
}

export const CardInventoryPage = ({ onChangeStep }: Props) => {
  const { cards } = useCard();

  return (
    <RootLayout>
      <AppLayout>
        <Header
          heading={
            <Heading as={'h2'} className={'page-title mb-10'}>
              {'보유 카드'}
            </Heading>
          }
        />
        <VFlex className="gap-6">
          {cards.map((card) => (
            <CardInventoryItem
              key={Object.values(card).join()}
              card={card}
              moveToEditPage={() => onChangeStep(2)}
            />
          ))}
          <div className="card-box">
            <Button
              className="card-inner empty-card"
              type={'button'}
              onClick={() => onChangeStep(1)}
            >
              +
            </Button>
          </div>
        </VFlex>
      </AppLayout>
    </RootLayout>
  );
};
