import type { fuelLog } from "@/types/fuelLogTypes";

export function calculateCostPerKm(logs: fuelLog[]) {
  if (!logs || logs.length === 0) {
    return "No logs found";
  }

  const totalCost = logs.reduce((sum, log) => sum + log.totalCost, 0);
  const totalKm = logs.reduce((sum, log) => sum + log.kilometersDriven, 0);

  if (totalKm === 0) return "0.00";

  return (totalCost / totalKm).toFixed(2).toString();
}
export function calculateMonthlyCost(logs: fuelLog[]) {
  const totalCost = logs.reduce((sum, log) => sum + log.totalCost, 0);

  return totalCost.toFixed(2).toString();
}

export function calculateAvgConsumption(logs: fuelLog[]) {
  if (!logs || logs.length === 0) {
    return "No logs found";
  }

  const totalLitres = logs.reduce((sum, log) => sum + log.litres, 0);
  const totalKm = logs.reduce((sum, log) => sum + log.kilometersDriven, 0);

  if (totalKm === 0 || totalLitres === 0) return "0.00";

  return ((totalLitres / totalKm) * 100).toFixed(2).toString();
}
