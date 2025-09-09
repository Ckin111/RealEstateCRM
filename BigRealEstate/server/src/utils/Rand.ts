const between = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const betweenNotLast = ([min, max]: [number, number], last: number[]) => {
  if (min === max) return min;
  const num = between(min, max);
  if (num === last[0]) return betweenNotLast([min, max], last);
  last[0] = num;
  return num;
};

const flip = () => Math.round(Math.random()) === 1;

const Rand = {
  between,
  betweenNotLast,
  flip,
};

export default Rand;
