import { CardInputInterface } from '../types/cardTypes';

export const compareCardNumber = (
  cardNumberA: CardInputInterface['cardNumber'],
  cardNumberB: CardInputInterface['cardNumber'],
) => {
  return (Object.keys(cardNumberA) as (keyof CardInputInterface['cardNumber'])[]).every(
    (key) => cardNumberA[key] === cardNumberB[key],
  );
};
