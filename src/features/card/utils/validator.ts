const checkIsValidPattern = (value: string, pattern: RegExp) => {
  return pattern.test(value);
};

export const checkIsValidLength = (value: string, length: number) => {
  return value.length <= length;
};

export const checkIsValidPatternAndLength = ({
  value,
  regExp,
  length,
}: {
  value: string;
  regExp: RegExp;
  length: number;
}) => {
  return checkIsValidPattern(value, regExp) && checkIsValidLength(value, length);
};
