const numberFormat = (number: number): any => {
  const formated = new Intl.NumberFormat("vi-VN").format(number);
  return formated;
};

export { numberFormat };
