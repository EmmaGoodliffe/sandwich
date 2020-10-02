const app = document.querySelector("#app");
const inputEl = (id: string, leftBorder: boolean, topBorder: boolean) =>
  `<input type="text" id="${id}" class="${
    (leftBorder ? "left" : "") + (topBorder ? " top" : "")
  }" />`;

const output = (extraClass: string) =>
  `<input class="output ${extraClass}" value="0" readonly />`;

let html = "<div>";
html += output("blank-output");
for (let i = 0; i < 9; i++) {
  html += output("col-output");
}
html += "</div>";

for (let i = 0; i < 9; i++) {
  html += "<div>";
  html += output("row-output");
  for (let j = 0; j < 9; j++) {
    html += inputEl(`${i},${j}`, j % 3 === 0, i % 3 === 0);
  }
  html += "</div>";
}

html += '<button id="go">Go</button>';

app.innerHTML += html;

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

const getInputs = (selector: string) => {
  return [...document.querySelectorAll(selector)] as HTMLInputElement[];
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
  // Display results
  const rowOutputs = getInputs(".output.row-output");
  const colOutputs = getInputs(".output.col-output");
  for (let i = 0; i < rowSums.length; i++) {
    const sum = rowSums[i];
    const output = rowOutputs[i];
    output.value = `${sum}`;
  }
  for (let i = 0; i < colSums.length; i++) {
    const sum = colSums[i];
    const output = colOutputs[i];
    output.value = `${sum}`;
  }
  // Clear inputs
  getInputs("input:not(.output)").forEach(input => (input.value = ""));
});

document.addEventListener("keypress", e => {
  const { key } = e;
  const isNumber = !isNaN(parseInt(key));
  if (isNumber) {
    const inputs = getInputs("input:not(.output)") as HTMLElement[];
    const focused = document.activeElement as HTMLElement;
    const index = inputs.indexOf(focused);
    if (index != -1) {
      const toFocus = inputs[index + 1];
      if (toFocus) {
        toFocus.focus();
      }
    }
  }
});
