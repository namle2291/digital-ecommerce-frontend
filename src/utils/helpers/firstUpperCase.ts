const firstUpperCase = (text: string) => {
  return text.at(0)?.toUpperCase() + text.slice(1).toLocaleLowerCase();
};

const firstUpperCaseAll = (text: string) => {
  if (text.includes("-")) {
    text = text
      .split("-")
      .map((item) => {
        return firstUpperCase(item);
      })
      .join(" ");
    return text;
  }
  return text.at(0)?.toUpperCase() + text.slice(1).toLocaleLowerCase();
};

export { firstUpperCase, firstUpperCaseAll };
