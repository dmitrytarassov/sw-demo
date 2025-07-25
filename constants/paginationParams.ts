export const PER_PAGE_STEP = 12;

export const PER_PAGE_VARIANTS = [
  PER_PAGE_STEP,
  PER_PAGE_STEP * 2,
  PER_PAGE_STEP * 3,
];

export const MINIMUM_PER_PAGE = Math.min.apply(null, PER_PAGE_VARIANTS);
