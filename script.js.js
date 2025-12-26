// Edit KPI values here (easy updates without changing HTML)
const kpis = {
  peopleYTD: 200,
  peopleMTD: 35,
  avgOffersLast6Months: 2,
  successRate: "75%"
};

document.getElementById("kpiPeopleYTD").textContent = kpis.peopleYTD;
document.getElementById("kpiPeopleMTD").textContent = kpis.peopleMTD;
document.getElementById("kpiAvgOffers").textContent = kpis.avgOffersLast6Months;
document.getElementById("kpiSuccess").textContent = kpis.successRate;

const now = new Date();
document.getElementById("lastUpdated").textContent = now.toLocaleString();
