const icons = {
  sofa:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="14" width="32" height="18" rx="4"/><path d="M10 14v-2a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2"/><path d="M4 24h32"/><path d="M8 32v3M32 32v3"/></svg>',
  bed:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="16" width="32" height="14" rx="2"/><rect x="4" y="24" width="32" height="6" rx="1"/><path d="M8 16v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4"/><path d="M10 30v4M30 30v4"/></svg>',
  carpet:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="8" width="34" height="24" rx="2"/><path d="M3 18h34M3 28h34M13 8v24M21 8v24M29 8v24"/></svg>',
  chair:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="10" width="32" height="22" rx="2"/><path d="M4 20h32M14 10v22M26 10v22"/><circle cx="20" cy="36" r="2"/></svg>',
  home:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 19 20 8l14 11"/><path d="M10 17v16h20V17"/><path d="M16 33V22h8v11"/></svg>',
  office:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="8" y="6" width="24" height="28" rx="2"/><path d="M14 13h3M23 13h3M14 20h3M23 20h3M14 27h3M23 27h3"/></svg>',
  hotel:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="7" y="8" width="26" height="26" rx="2"/><path d="M13 34v-9h14v9M13 15h.01M20 15h.01M27 15h.01M13 21h.01M20 21h.01M27 21h.01"/></svg>',
  building:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 34V10l14-4v28"/><path d="M22 16h10v18"/><path d="M13 15h3M13 22h3M13 29h3M26 22h2M26 28h2"/></svg>',
  health:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20 34s13-8 13-19a7 7 0 0 0-13-4 7 7 0 0 0-13 4c0 11 13 19 13 19z"/><path d="M20 14v8M16 18h8"/></svg>',
  restaurant:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 6v28M8 6v8a4 4 0 0 0 8 0V6M27 6v28M27 6c4 3 6 8 5 14h-5"/></svg>',
};

const services = [
  {
    icon: "sofa",
    title: "Canapes & sofas",
    text: "Tissu, velours, microfibre, cuir : extraction profonde, anti-acariens et deodorisation avec un resultat visible des la premiere intervention.",
    tag: "Particuliers & pro",
  },
  {
    icon: "bed",
    title: "Matelas",
    text: "Elimination des acariens, bacteries et taches organiques. Assainissement vapeur haute temperature pour un sommeil sain.",
    tag: "Hygiene garantie",
  },
  {
    icon: "carpet",
    title: "Tapis & moquettes",
    text: "Tapis d'orient, laine, synthetique, moquette murale. Injection-extraction vapeur seche, sechage rapide, toutes dimensions.",
    tag: "Toutes tailles",
  },
  {
    icon: "chair",
    title: "Chaises & fauteuils",
    text: "Chaises de bureau, fauteuils design, chaises de salle a manger : toutes matieres, rembourrage et structure inclus.",
    tag: "Mobilier complet",
  },
];

const sectors = [
  {
    icon: "home",
    title: "Particuliers",
    text: "Remise en etat complete de votre interieur. Nous intervenons sur l'ensemble de vos textiles et surfaces rembourrees.",
    pills: ["Canape", "Matelas", "Tapis", "Fauteuils", "Rideaux"],
  },
  {
    icon: "office",
    title: "Bureaux & entreprises",
    text: "Entretien regulier ou remise en etat ponctuelle. Intervention hors heures ouvrees possible pour ne pas perturber votre activite.",
    pills: ["Chaises de bureau", "Moquette", "Salle de reunion"],
  },
  {
    icon: "hotel",
    title: "Airbnb & locations",
    text: "Entre deux locations, remise en etat rapide et professionnelle. Contrats recurrents disponibles pour les gestionnaires multi-logements.",
    pills: ["Canape", "Matelas", "Tapis", "Check-out"],
  },
  {
    icon: "building",
    title: "Coproprietes",
    text: "Parties communes, couloirs, halls d'entree et salles partagees. Devis groupe pour syndics et gestionnaires d'immeubles.",
    pills: ["Moquette commune", "Hall", "Salles communes"],
  },
  {
    icon: "health",
    title: "Sante & bien-etre",
    text: "Cabinets medicaux, spas, centres de massage : exigences d'hygiene elevees, produits certifies pour environnements sensibles.",
    pills: ["Tables de massage", "Salle d'attente", "Fauteuils"],
  },
  {
    icon: "restaurant",
    title: "Hotellerie & restauration",
    text: "Banquettes, fauteuils de restaurant, chambres d'hotel : qualite irreprochable pour maintenir votre image de marque.",
    pills: ["Banquettes", "Chambres", "Lobby", "Bar"],
  },
];

const processSteps = [
  ["01", "Diagnostic", "Analyse des matieres, identification des taches et evaluation de l'etat general avant toute intervention."],
  ["02", "Pre-traitement", "Application de produits professionnels cibles sur chaque type de souillure pour maximiser l'efficacite."],
  ["03", "Extraction", "Injection d'eau chaude sous pression et aspiration simultanee. Sechage en 2 a 4 heures seulement."],
  ["04", "Controle & finition", "Verification du resultat avec vous. Retouches si necessaire. Vous validez avant notre depart."],
];

const reviews = [
  {
    text: "Resultat bluffant sur mon canape velours que je croyais perdu. En deux heures, il etait comme neuf.",
    name: "Amandine C.",
    detail: "Particulier - Neuilly-sur-Seine",
    initials: "AC",
  },
  {
    text: "On fait appel a Osiria entre chaque location Airbnb. Ponctualite, discretion, efficacite : exactement ce qu'on attend.",
    name: "Karim D.",
    detail: "Gestionnaire Airbnb - Paris",
    initials: "KD",
  },
  {
    text: "Mon tapis berbere retrouve apres une tache complexe. Produits respectueux des matieres nobles, equipe tres professionnelle.",
    name: "Sophie B.",
    detail: "Particulier - Le Vesinet",
    initials: "SB",
  },
];

const partners = [
  ["BLACKBOX", "Partenaire strategique", true],
  ["HAUSSMANN+", "Agence immobiliere"],
  ["ATELIER 16", "Decoration interieure"],
  ["RESIDENCES M", "Gestion locative"],
  ["CONCIERG.IDF", "Conciergerie Airbnb"],
];

const commitments = [
  ["Satisfaction garantie", "Si le resultat ne vous convient pas, nous revenons. Sans frais, sans discussion."],
  ["Transparence totale", "Devis detaille avant intervention. Aucun cout cache, aucune mauvaise surprise."],
  ["Respect de vos biens", "Produits certifies adaptes a chaque matiere. Aucun risque sur vos textiles nobles."],
  ["Intervention rapide", "Disponible sous 48h en France entiere. Creneaux tot le matin et weekend."],
];

function mountList(selector, items, template) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.innerHTML = items.map(template).join("");
}

function starsMarkup() {
  return '<div class="stars" aria-label="Note 5 sur 5">★★★★★</div>';
}

function initContent() {
  mountList(
    "[data-services]",
    services,
    (item) => `
      <article class="service-card reveal">
        <div class="service-card__icon">${icons[item.icon]}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <span class="service-card__tag">${item.tag}</span>
      </article>`
  );

  mountList(
    "[data-sectors]",
    sectors,
    (item) => `
      <article class="sector-card reveal">
        <span class="sector-card__icon">${icons[item.icon]}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="pill-list">${item.pills.map((pill) => `<span>${pill}</span>`).join("")}</div>
      </article>`
  );

  mountList(
    "[data-process]",
    processSteps,
    ([number, title, text]) => `
      <article class="process-card reveal">
        <span>${number} -</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>`
  );

  mountList(
    "[data-reviews]",
    reviews,
    (item) => `
      <article class="review-card reveal">
        ${starsMarkup()}
        <p>${item.text}</p>
        <div class="review-card__author">
          <span class="review-card__avatar">${item.initials}</span>
          <span><strong>${item.name}</strong><span>${item.detail}</span></span>
        </div>
      </article>`
  );

  mountList(
    "[data-partners]",
    partners,
    ([name, badge, featured]) => `
      <article class="partner-card${featured ? " is-featured" : ""}">
        <div>
          <strong>${name}</strong>
          <span>${badge}</span>
        </div>
      </article>`
  );

  mountList(
    "[data-commitments]",
    commitments,
    ([title, text], index) => `
      <li>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div><h3>${title}</h3><p>${text}</p></div>
      </li>`
  );
}

function initHeader() {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const syncHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 50);

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  toggle?.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav?.classList.toggle("is-open", !isOpen);
    header?.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav?.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    toggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    header?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = [...elements].indexOf(entry.target) % 4;
        entry.target.style.animationDelay = `${delay * 80}ms`;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initMarquee() {
  // Sélectionne le ou les bandeaux défilants.
  // Ajoute l'attribut data-marquee ou la classe .marquee-track sur ton conteneur HTML.
  const marquees = document.querySelectorAll('.marquee-track, [data-marquee]');

  marquees.forEach((track) => {
    // Clone les enfants pour créer l'illusion d'un défilement infini sans coupure
    const items = Array.from(track.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true'); // Accessibilité : on cache les clones aux lecteurs d'écran
      track.appendChild(clone);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initContent();
  initHeader();
  initReveal();
  initMarquee();
});
