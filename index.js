const data = [
  {
    title: "Iran",
    description:
      "Iran, also known as Persia and officially as the Islamic Republic of Iran, is a country located in West Asia. It is bordered by Iraq and Turkey to the west, by Azerbaijan and Armenia to the northwest, by the Caspian Sea and Turkmenistan to the north, by Afghanistan and Pakistan to the east, and by the Gulf of Oman and the Persian Gulf to the south. It covers an area of 1.64 million square kilometres (0.63 million square miles), making it the 17th-largest country. With an estimated population of 86.8 million, Iran is the 17th-most populous country in the world, and the second largest in the Middle East. Its largest city is the capital Tehran, followed by Mashhad, Isfahan, Karaj, Shiraz, and Tabriz.",
  },
  {
    title: "London",
    description:
      'London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its mediaeval boundaries. The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. Since the 19th century, the name "London" also refers to the metropolis around this core, historically split among the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire, which since 1965 has largely comprised Greater London, which is governed by 33 local authorities and the Greater London Authority.',
  },
  {
    title: "Italy",
    description:
      "Italy, country of south-central Europe, occupying a peninsula that juts deep into the Mediterranean Sea. Italy comprises some of the most varied and scenic landscapes on Earth and is often described as a country shaped like a boot. At its broad top stand the Alps, which are among the world's most rugged mountains.Italy has over 3,000 museums. The national sport of Italy is soccer (known as football outside of America). Italy's national dish is pasta. The Italian language evolved from the Latin of the Roman Empire.",
  },
];
const links = document.querySelector("nav");
const entries = document.querySelector("section");
data.forEach((entry) => {
  const h1 = document.createElement("h1");
  h1.textContent = entry.title;
  h1.id = entry.title;
  const p = document.createElement("p");
  p.textContent = entry.description;
  const div = document.createElement("div");
  div.appendChild(h1);
  div.appendChild(p);
  entries.appendChild(div);
  const link = document.createElement("a");
  link.href = `#${entry.title}`;
  link.textContent = entry.title;
  links.appendChild(link);
});
