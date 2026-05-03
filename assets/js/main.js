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
  email:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="8" width="32" height="24" rx="2"/><path d="M4 12l16 10 16-10"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M34 19a14 14 0 0 1-1.5 6.4 14.2 14.2 0 0 1-12.7 7.8 14 14 0 0 1-6.4-1.5L5 35l3.2-9.5A14 14 0 0 1 6.7 19 14.2 14.2 0 0 1 14.5 6.3 14 14 0 0 1 20.8 4.8h.8a14 14 0 0 1 12.4 13.4v.8z"/></svg>',
  instagram:
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="6" y="6" width="28" height="28" rx="7"/><path d="M27 19a7 7 0 1 1-6-6 7 7 0 0 1 6 6z"/><circle cx="29" cy="11" r="1.5" fill="currentColor" stroke="none"/></svg>',
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

const contacts = [
  { type: "Email", value: "contact@osiria.fr", link: "mailto:contact@osiria.fr", icon: "email" },
  { type: "WhatsApp", value: "+33 6 00 00 00 00", link: "https://wa.me/33600000000", icon: "whatsapp" },
  { type: "Instagram", value: "@osiria.fr", link: "https://instagram.com/osiria.fr", icon: "instagram" },
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

  mountList(
    "[data-contacts]",
    contacts,
    (item) => `
      <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="contact-card reveal">
        <span class="contact-card__icon">${icons[item.icon]}</span>
        <h3>${item.type}</h3>
        <p>${item.value}</p>
      </a>`
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

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
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

function initLogoMarquee() {
  const root = document.querySelector("[data-logo-marquee]");
  const track = root?.querySelector(".logo-marquee__track");
  if (!root || !track) return;

  const logos = [
    { src: "assets/img/partners/blackbox.png", className: "logo-marquee__item--blackbox" },
    { src: "assets/img/partners/agence-smith.png", className: "logo-marquee__item--smith" },
  ];

  let items = [];
  let frameId = 0;
  let lastTime = performance.now();
  let step = 118;
  let speed = 8;

  const setLogo = (item, logoIndex) => {
    const logo = logos[logoIndex];

    item.logoIndex = logoIndex;
    item.element.className = `logo-marquee__item ${logo.className}`;
    item.image.src = logo.src;
  };

  const render = () => {
    items.forEach((item) => {
      item.element.style.transform = `translate3d(${item.x.toFixed(2)}px, -50%, 0)`;
    });
  };

  const readConfig = () => {
    const isCompact = window.matchMedia("(max-width: 580px)").matches;
    const itemWidth = isCompact ? 112 : 138;
    const gap = isCompact ? 22 : 30;

    step = itemWidth + gap;
    speed = isCompact ? 10 : 11;
  };

  const build = () => {
    readConfig();
    cancelAnimationFrame(frameId);
    track.textContent = "";
    items = [];

    const viewportWidth = root.clientWidth || window.innerWidth;
    const bufferItems = 5;
    let itemCount = Math.ceil(viewportWidth / step) + bufferItems * 2;
    if (itemCount % logos.length !== 0) itemCount += 1;
    const startX = -step * bufferItems;

    for (let index = 0; index < itemCount; index += 1) {
      const logoIndex = index % logos.length;
      const logo = logos[logoIndex];
      const element = document.createElement("span");
      const image = document.createElement("img");

      element.className = `logo-marquee__item ${logo.className}`;
      image.src = logo.src;
      image.alt = "";
      image.decoding = "async";
      image.draggable = false;

      element.appendChild(image);
      track.appendChild(element);
      items.push({ element, image, logoIndex, x: startX + index * step });
    }

    lastTime = performance.now();
    render();
    frameId = requestAnimationFrame(tick);
  };

  const tick = (time) => {
    const delta = Math.min(Math.max((time - lastTime) / 1000, 0), 0.05);
    const rightLimit = (root.clientWidth || window.innerWidth) + step;
    lastTime = time;

    items.forEach((item) => {
      item.x += speed * delta;
    });

    const leftMostItem = items.reduce((current, item) => (item.x < current.x ? item : current), items[0]);
    let leftMost = leftMostItem.x;
    let leftMostLogoIndex = leftMostItem.logoIndex;

    items.forEach((item) => {
      if (item.x > rightLimit) {
        item.x = leftMost - step;
        leftMostLogoIndex = (leftMostLogoIndex - 1 + logos.length) % logos.length;
        setLogo(item, leftMostLogoIndex);
        leftMost = item.x;
      }
    });

    render();
    frameId = requestAnimationFrame(tick);
  };

  const resetClock = () => {
    lastTime = performance.now();
  };

  let resizeTimer = 0;
  const scheduleRebuild = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(build, 120);
  };

  build();
  window.addEventListener("resize", scheduleRebuild, { passive: true });
  window.addEventListener("focus", resetClock);
  window.addEventListener("pageshow", resetClock);
  document.addEventListener("visibilitychange", resetClock);
}

document.addEventListener("DOMContentLoaded", () => {
  initContent();
  initHeader();
  initReveal();
  initSmoothScroll();
  initLogoMarquee();
});
