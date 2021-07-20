interface CovidCases {
  month: Date;
  cases: number;
}

interface CovidCasesDay {
  Date: Date;
  Cases: number;
}

export function parseResponseData(data: CovidCasesDay[]) {
  const list: CovidCases[] = []

  let compareDate: string;
  let month: Date;
  let lastDayCases: number = 0;
  let totalCases: number;

  data.forEach((element: CovidCasesDay) => {
    const date = new Date(element.Date);

    if (compareDate !== `${date.getMonth()}${date.getFullYear()}`) {
      compareDate = `${date.getMonth()}${date.getFullYear()}`;
      month = element.Date;
      totalCases = 0;
    };

    totalCases = totalCases + (element.Cases - lastDayCases);

    const index = list.findIndex(item => item.month === month)
    if (index >= 0) {
      list[index] = {
        ...list[index],
        cases: + totalCases,
      }
    } else {
      list.push({
        month,
        cases: totalCases
      })
    }

    lastDayCases = element.Cases;
  });

  return list;
}