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

const googleReviewsConfig = {
  // Fill these values to enable live Google reviews sync.
  placeId: "",
  apiKey: "",
  languageCode: "fr",
  regionCode: "FR",
  // Optional: use your own backend endpoint to avoid exposing API key in frontend.
  proxyEndpoint: "",
};

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
  { type: "WhatsApp", value: "+33 6 13 86 83 55", link: "https://wa.me/33613868355", icon: "whatsapp" },
  { type: "Instagram", value: "@osiria.nettoyage", link: "https://www.instagram.com/osiria.nettoyage?igsh=MXNmN3JwYzZ5ODJveQ==", icon: "instagram" },
];

const googleReviewsShareLink = "https://share.google/wXvCFwXebhhjbii5w";

const emailJsQuoteConfig = {
  publicKey: "09r7iQxVJC1vzMWoj",
  serviceId: "service_fqptxtd",
  templateId: "template_5q2egov",
};

function mountList(selector, items, template) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.innerHTML = items.map(template).join("");
}

function starsMarkup() {
  return '<div class="stars" aria-label="Note 5 sur 5">★★★★★</div>';
}

function starsFromRating(rating) {
  const fullStars = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
  return "★★★★★".slice(0, fullStars) + "☆☆☆☆☆".slice(0, 5 - fullStars);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function initialsFromName(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "CL";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function normalizeGoogleReview(review) {
  const text =
    review?.text?.text ||
    review?.originalText?.text ||
    review?.text ||
    "Avis client";
  const name =
    review?.authorAttribution?.displayName ||
    review?.author_name ||
    "Client";

  return {
    text: String(text),
    name: String(name),
    detail: "Avis Google",
    initials: initialsFromName(name),
    rating: Number(review?.rating || 5),
  };
}

function renderReviewsList(items) {
  mountList(
    "[data-reviews]",
    items,
    (item) => `
      <article class="review-card reveal">
        <div class="stars" aria-label="Note ${item.rating || 5} sur 5">${starsFromRating(item.rating || 5)}</div>
        <p>${escapeHtml(item.text)}</p>
        <div class="review-card__author">
          <span class="review-card__avatar">${escapeHtml(item.initials)}</span>
          <span><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.detail)}</span></span>
        </div>
      </article>`
  );
}

function updateRatingsPanel(rating, userCount, fetchedReviews) {
  const ratingValue = document.querySelector("[data-rating-value]");
  const ratingCount = document.querySelector("[data-rating-count]");
  const ratingStars = document.querySelector(".score-panel__rating .stars");

  if (ratingValue) {
    const safeRating = Number(rating || 0).toFixed(1);
    ratingValue.innerHTML = `${safeRating}<span>/5</span>`;
  }

  if (ratingCount) {
    ratingCount.textContent = `${Number(userCount || 0)} avis verifies`;
  }

  if (ratingStars) {
    const stars = starsFromRating(rating || 0);
    ratingStars.textContent = stars;
    ratingStars.setAttribute("aria-label", `Note ${Number(rating || 0).toFixed(1)} sur 5`);
  }

  // Google Places does not provide a full histogram in this endpoint.
  // We approximate bar distribution with fetched review sample.
  const sample = Array.isArray(fetchedReviews) ? fetchedReviews : [];
  if (!sample.length) return;

  const counts = { 5: 0, 4: 0, 3: 0, 2: 0 };
  sample.forEach((review) => {
    const rounded = Math.round(Number(review.rating || 0));
    if (counts[rounded] !== undefined) counts[rounded] += 1;
  });

  const total = sample.length || 1;
  Object.entries(counts).forEach(([star, count]) => {
    const row = document.querySelector(`[data-rating-bar="${star}"]`);
    if (!row) return;

    const percent = Math.round((count / total) * 100);
    const bar = row.querySelector("i");
    const value = row.querySelector("b");
    if (bar) bar.style.width = `${percent}%`;
    if (value) value.textContent = `${percent}%`;
  });
}

async function initLiveGoogleReviews() {
  const { placeId, apiKey, languageCode, regionCode, proxyEndpoint } = googleReviewsConfig;
  if (!placeId) return;

  try {
    const endpoint = proxyEndpoint
      ? `${proxyEndpoint}?placeId=${encodeURIComponent(placeId)}`
      : `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=${encodeURIComponent(
          languageCode
        )}&regionCode=${encodeURIComponent(regionCode)}`;

    const response = await fetch(endpoint, {
      headers: proxyEndpoint
        ? {}
        : {
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "rating,userRatingCount,reviews",
          },
    });

    if (!response.ok) throw new Error(`Google reviews request failed (${response.status})`);
    const data = await response.json();

    const normalized = (data.reviews || []).map(normalizeGoogleReview).filter((item) => item.text);
    if (normalized.length) renderReviewsList(normalized);
    updateRatingsPanel(data.rating, data.userRatingCount, normalized);
  } catch (error) {
    console.warn("Google reviews sync failed:", error);
  }
}

function initSimpleReviewsWidget() {
  const panel = document.querySelector("[data-reviews-panel]");
  const reviewsNode = document.querySelector("[data-reviews]");
  if (!reviewsNode) return;

  if (panel) panel.style.display = "none";
  reviewsNode.classList.add("reviews-grid--widget");
  if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.head.appendChild(script);
  }

  reviewsNode.innerHTML = `
    <div class="reviews-widget reveal">
      <div class="elfsight-app-887f3d24-5b37-49e2-9216-ae1d7f53b926" data-elfsight-app-lazy></div>
    </div>`;
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
      <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="contact-method reveal">
        <span class="contact-method__icon">${icons[item.icon]}</span>
        <h3>${item.type}</h3>
        <p>${item.value}</p>
      </a>`
  );

  const contactsNode = document.querySelector("[data-contacts]");
  if (contactsNode) {
    contactsNode.classList.add("contact-methods--enhanced");
    contactsNode.insertAdjacentHTML(
      "afterbegin",
      `
      <form class="contact-method contact-method--form reveal" data-quote-mail-form data-mail-to="yazid123487@gmail.com">
        <span class="contact-method__icon">${icons.email}</span>
        <h3>Devis par email</h3>
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="tel" name="phone" placeholder="Votre telephone" required />
        <textarea name="message" rows="3" placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>`
    );
  }
}

function initHeader() {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");

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

function fixContactLinks() {
  const contactsContainer = document.querySelector("[data-contacts]");
  if (contactsContainer) {
    const contactSection = contactsContainer.closest("section") || contactsContainer.parentElement;
    if (contactSection && !contactSection.id) {
      contactSection.id = "contact";
    }
  }

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

function initQuoteMailComposer() {
  const form = document.querySelector("[data-quote-mail-form]");
  if (!(form instanceof HTMLFormElement)) return;
  const submitButton = form.querySelector('button[type="submit"]');

  const isEmailJsReady =
    typeof window.emailjs !== "undefined" &&
    emailJsQuoteConfig.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY" &&
    emailJsQuoteConfig.serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
    emailJsQuoteConfig.templateId !== "YOUR_EMAILJS_TEMPLATE_ID";

  if (isEmailJsReady) {
    window.emailjs.init({ publicKey: emailJsQuoteConfig.publicKey });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.getAttribute("data-mail-to");
    const nameField = form.querySelector('input[name="name"]');
    const phoneField = form.querySelector('input[name="phone"]');
    const messageField = form.querySelector('textarea[name="message"]');
    if (
      !email ||
      !(nameField instanceof HTMLInputElement) ||
      !(phoneField instanceof HTMLInputElement) ||
      !(messageField instanceof HTMLTextAreaElement)
    ) {
      return;
    }

    const name = nameField.value.trim();
    const phone = phoneField.value.trim();
    const message = messageField.value.trim();
    if (!name || !phone || !message) return;

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "Envoi...";
    }

    const fallbackToMailto = () => {
      const subject = encodeURIComponent("Demande de devis Osiria");
      const body = encodeURIComponent(
        `Nom: ${name}\nTelephone: ${phone}\n\nMessage:\n${message}\n\n---\nEnvoye depuis la page devis Osiria`
      );
      window.location.href = `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
    };

    if (!isEmailJsReady) {
      fallbackToMailto();
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = "Envoyer";
      }
      return;
    }

    window.emailjs
      .send(emailJsQuoteConfig.serviceId, emailJsQuoteConfig.templateId, {
        from_name: name,
        phone,
        message,
        to_email: email,
      })
      .then(() => {
        form.reset();
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.textContent = "Envoye";
          setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = "Envoyer";
          }, 1800);
        }
      })
      .catch(() => {
        fallbackToMailto();
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.disabled = false;
          submitButton.textContent = "Envoyer";
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

document.addEventListener("DOMContentLoaded", () => {
  initContent();
  initSimpleReviewsWidget();
  initHeader();
  initReveal();
  fixContactLinks();
  initSmoothScroll();
  initQuoteMailComposer();
});
