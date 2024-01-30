export const exampleYields = [
	{
		id: "0",
		investment: 100000,
	},
	{
		id: "1",
		investment: 500000,
	},
	{
		id: "2",
		investment: 1000000,
	},
];

// Function for calculating the monthly yield of an inverson
export const calculateYield = (investment: number, yearYield: number): number => {
	const monthlyYield = (yearYield / 12)/100;
	const resultMonthlyYield = (investment * monthlyYield);
	return resultMonthlyYield;
}