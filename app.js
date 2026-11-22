const INPUTS = [
  "Office inbox", "Phone line", "Plans", "Job schedule",
  "Estimates", "Trade texts", "Contracts", "Accounts"
];

const DEPARTMENTS = [
  { name: "Leads", agents: 9, job: "Answers every enquiry the same day, asks about the site, the scope and the budget, and books the site visit." },
  { name: "Estimating", agents: 12, job: "Builds the first estimate from the plans and your past jobs, ready for your numbers." },
  { name: "Trades", agents: 10, job: "Sends every job out for pricing and chases the quotes until they're in." },
  { name: "Scheduling", agents: 11, job: "Books the trades in order and tells every one of them when the job moves." },
  { name: "Variations", agents: 7, job: "Writes up every change on site, gets the client's sign-off and adds it to the next claim." },
  { name: "Claims", agents: 8, job: "Sends the progress claim at every stage and chases it when it's late." },
  { name: "Site ops", agents: 13, job: "Keeps diaries, safety forms and deliveries tracked." }
];

const KNOWLEDGE = ["Past jobs", "Rate sheets", "Contract templates", "Safety procedures"];

const RULES = [
  "One job per agent.",
  "One written workflow per job.",
  "Estimates wait for your numbers.",
  "The client signs every variation first."
];

function chips(el, items) {
  for (const item of items) {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    el.appendChild(chip);
  }
}

chips(document.getElementById("inputs"), INPUTS);
chips(document.getElementById("knowledge"), KNOWLEDGE);

const grid = document.getElementById("departments");
for (const d of DEPARTMENTS) {
  const card = document.createElement("article");
  card.className = "card";
  const h = document.createElement("h3");
  h.textContent = d.name;
  const count = document.createElement("div");
  count.className = "count";
  count.textContent = d.agents + " AI agents";
  const p = document.createElement("p");
  p.textContent = d.job;
  card.append(h, count, p);
  grid.appendChild(card);
}

const rules = document.getElementById("rules");
for (const r of RULES) {
  const li = document.createElement("li");
  li.textContent = r;
  rules.appendChild(li);
}
