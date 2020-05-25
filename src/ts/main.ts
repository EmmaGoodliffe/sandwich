const app = document.querySelector("#app");
const inputEl = (id: string, leftBorder: boolean, topBorder: boolean) =>
  `<input type="text" id="${id}" class="${
    (leftBorder ? "left" : "") + (topBorder ? " top" : "")
  }" />`;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    app.innerHTML += inputEl(`${i},${j}`, j % 3 === 0, i % 3 === 0);
  }
  app.innerHTML += "<br />";
}

app.innerHTML += '<button id="go">Go</button>';

interface Number_ {
  value: number;
  row: number;
  col: number;
}

const getRows = (numbers: Number_[]) => {
  const rows: number[][] = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const { row } = number;
    const value = number.value || 0;
    rows[row] instanceof Array ? rows[row].push(value) : (rows[row] = [value]);
  }
  return rows;
};

const getCols = (numbers: Number_[]) => {
  const cols: number[][] = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const { col } = number;
    const value = number.value || 0;
    cols[col] instanceof Array ? cols[col].push(value) : (cols[col] = [value]);
  }
  return cols;
};

const sandwichSum = (arr: number[]) => {
  const oneIndex = arr.indexOf(1);
  const nineIndex = arr.indexOf(9);
  const middleNumbers =
    oneIndex < nineIndex
      ? arr.slice(oneIndex + 1, nineIndex)
      : arr.slice(nineIndex + 1, oneIndex);
  try {
    return middleNumbers.reduce((acc, val) => acc + val);
  } catch (err) {
    return 0;
  }
};

document.querySelector("#go").addEventListener("click", () => {
  // Collect data
  const numbers: Number_[] = [...document.querySelectorAll("input")].map(
    input => {
      const { value, id } = input;
      const [row, col] = id.split(",");
      return {
        value: parseInt(value),
        row: parseInt(row),
        col: parseInt(col),
      };
    },
  );

  // Sum rows
  const rows = getRows(numbers);
  const rowSums = rows.map(row => sandwichSum(row));
  // Sum cols
  const cols = getCols(numbers);
  const colSums = cols.map(col => sandwichSum(col));
  console.log({ rowSums, colSums });
});
