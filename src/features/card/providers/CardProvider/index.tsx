import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { CARD_INPUT } from '@/features/card/constants/cardInputValue';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { compareCardNumber } from '../../utils/cardFinder';

interface CardContextInterface {
  input: CardInputInterface;
  onChange: <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => void;
  cards: CardInputInterface[];
  addCard: (card: CardInputInterface) => void;
  editCard: ({
    cardNumber,
    card,
  }: {
    cardNumber: CardInputInterface['cardNumber'];
    card: CardInputInterface;
  }) => void;
  resetInput: () => void;
}

const CardContext = createContext<CardContextInterface | null>(null);

interface Props {
  children: ReactNode;
}

const CardProvider = ({ children }: Props) => {
  const [input, setInput] = useState(CARD_INPUT);
  const [cards, setCards] = useState<CardInputInterface[]>([]);
  const onChange = useCallback(
    <T extends keyof CardInputInterface>(
      prop: keyof CardInputInterface,
      nextVal: CardInputInterface[T],
    ) => {
      setInput((prev) => ({ ...prev, [prop]: nextVal }));
    },
    [setInput],
  );

  const addCard = useCallback((card: CardInputInterface) => {
    setCards((prev) => [...prev, card]);
  }, []);

  const editCard = useCallback(
    ({
      cardNumber,
      card,
    }: {
      cardNumber: CardInputInterface['cardNumber'];
      card: CardInputInterface;
    }) => {
      setCards((prev) =>
        prev.map((c) => (compareCardNumber(c.cardNumber, cardNumber) ? { ...c, card } : c)),
      );
    },
    [],
  );

  const resetInput = useCallback(() => {
    setInput(CARD_INPUT);
  }, []);

  const value = useMemo(
    () => ({
      input,
      cards,
      onChange,
      addCard,
      editCard,
      resetInput,
    }),
    [input, cards, onChange, addCard, editCard, resetInput],
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
};

export { CardProvider, useCard };
