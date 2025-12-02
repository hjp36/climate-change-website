// Simple language toggle for the kiosk website
// Add translations for each page element here
const translations = {
  en: {
  topTitle4: "Arctic Circle",
  heading4: "Arctic Circle's Melting Glaciers",
  learnMore4: "Learn More",
  howToHelp4: "How to Help!",
  bp4_1: "Warming temperatures caused by the burning of greenhouse gases",
  bp4_2: "Melts glaciers at rapid speeds because average temperatures are now higher",
  bp4_3: "Melting ice also contributes to rising sea levels",
  bp4_4: "Destroys habitats for many species within the Arctic Circle",
  help4_1: "Try to carpool with people or ride a bike, it releases less emissions into the air",
  help4_2: "Shut off lights and appliances when not in use",
  help4_3: "Use energy star appliances (Approved appliances that use less energy)",
    home: "Home",
    back: "Back",
    page2: "Page 2",
    homeTitle: "Help save our world!",
    california: "California",
    somalia: "Somalia",
    southSudan: "South Sudan",
    arcticCircle: "Arctic Circle",
    heading1: "The California Wildfires",
    learnMore1: "Learn More",
    howToHelp1: "How to Help!",
    bp1_1: "Rising temperatures",
    bp1_2: "Drying vegetation out, causing fire to spread more easily",
    bp1_3: "Impact on air quality and health",
    bp1_4: "Destruction of homes and habitats",
    help1_1: "Shop secondhand and reduce plastic use to minimize waste and consumption",
    help1_2: "Plant native species in your yard, which are more drought-tolerant",
    heading: "Somalia Droughts",
    learnMore: "Learn More",
    howToHelp: "How to Help!",
    bp1: "Increasing temperatures and altering rain patterns",
    bp2: "Leads to more evaporation",
    bp3: "Failed seasons",
    bp4: "More severe and prolonged droughts that kill agriculture",
    help1: "Shortening your shower by 5 minutes, it can save up to 15 gallons of water",
    help2: "Reduce, reuse, and recycle to minimize waste and conserve energy and resources",
    heading3: "South Sudan Floods",
    learnMore3: "Learn More",
    howToHelp3: "How to Help!",
    bp3_1: "more intense rainfall",
    bp3_2: "warmer temps create increased evaporation and moisture in the atmosphere",
    bp3_3: "shifts in global weather patterns",
    help3_1: "Wash clothes with cold water and airdry them",
    help3_2: "Support local and community-level organization like reforestation and agriculture",
  },
  es: {
    topTitle4: "Arctic Circle",
    heading4: "Arctic Circle's Melting Glaciers",
    learnMore4: "Learn More",
    howToHelp4: "How to Help!",
    bp4_1: "Warming temperatures caused by the burning of greenhouse gases",
    bp4_2: "Melts glaciers at rapid speeds because average temperatures are now higher",
    bp4_3: "Melting ice also contributes to rising sea levels",
    bp4_4: "Destroys habitats for many species within the Arctic Circle",
    help4_1: "Try to carpool with people or ride a bike, it releases less emissions into the air",
    help4_2: "Shut off lights and appliances when not in use",
    help4_3: "Use energy star appliances (Approved appliances that use less energy)",
    topTitle: "North America",
    home: "Inicio",
    topTitle4: "Círculo Ártico",
    heading4: "Glaciares derretidos del Círculo Ártico",
    learnMore4: "Aprende más",
    howToHelp4: "¡Cómo ayudar!",
    bp4_1: "El aumento de las temperaturas causado por la quema de gases de efecto invernadero",
    bp4_2: "Los glaciares se derriten rápidamente porque las temperaturas promedio son más altas",
    bp4_3: "El derretimiento del hielo también contribuye al aumento del nivel del mar",
    bp4_4: "Destruye hábitats de muchas especies dentro del Círculo Ártico",
    help4_1: "Intenta compartir el coche con otras personas o ir en bicicleta, así se liberan menos emisiones al aire",
    help4_2: "Apaga las luces y los electrodomésticos cuando no los uses",
    help4_3: "Utiliza electrodomésticos con certificación Energy Star (aprobados para usar menos energía)",
    back: "Atrás",
    topTitle: "Norteamérica",
    back: "Atrás",
    home: "Inicio",
    page2: "Página 2",
    homeTitle: "¡Ayuda a salvar nuestro mundo!",
    california: "California (Incendios de California)",
    somalia: "Somalia (Sequías)",
    southSudan: "Sudán del Sur (Inundaciones)",
    arcticCircle: "Círculo Ártico (Glaciares derretidos)",
    heading1: "Los incendios forestales de California",
    learnMore1: "Aprende más",
    howToHelp1: "¡Cómo ayudar!",
    bp1_1: "Aumento de las temperaturas",
    bp1_2: "La vegetación se seca, lo que facilita la propagación del fuego",
    bp1_3: "Impacto en la calidad del aire y la salud",
    bp1_4: "Destrucción de hogares y hábitats",
    help1_1: "Compra de segunda mano y reduce el uso de plástico para minimizar el desperdicio y el consumo",
    help1_2: "Planta especies nativas en tu jardín, que son más resistentes a la sequía",
    heading: "Sequías en Somalia",
    learnMore: "Aprende más",
    howToHelp: "¡Cómo ayudar!",
    bp1: "Aumento de temperaturas y alteración de los patrones de lluvia",
    bp2: "Conduce a más evaporación",
    bp3: "Temporadas fallidas",
    bp4: "Sequías más severas y prolongadas que destruyen la agricultura",
    help1: "Reducir la ducha en 5 minutos puede ahorrar hasta 15 galones de agua",
    help2: "Reducir, reutilizar y reciclar para minimizar residuos y conservar recursos y energía",
    heading3: "Inundaciones en Sudán del Sur",
    learnMore3: "Aprende más",
    howToHelp3: "¡Cómo ayudar!",
    bp3_1: "lluvias más intensas",
    bp3_2: "temperaturas más cálidas crean más evaporación y humedad en la atmósfera",
    bp3_3: "cambios en los patrones climáticos globales",
    help3_1: "Lava la ropa con agua fría y sécala al aire",
    help3_2: "Apoya organizaciones locales y comunitarias como la reforestación y la agricultura",
  }
};

function setLanguage(lang) {
  localStorage.setItem('siteLang', lang);
  document.documentElement.setAttribute('lang', lang);
  for (const key in translations[lang]) {
    const el = document.querySelector(`[data-i18n='${key}']`);
    if (el) el.textContent = translations[lang][key];
  }
}

function getLanguage() {
  return localStorage.getItem('siteLang') || 'en';
}

function toggleLanguage() {
  // No longer used, replaced by direct buttons
}

window.addEventListener('DOMContentLoaded', () => {
  setLanguage(getLanguage());
  const enBtn = document.getElementById('lang-en-btn');
  const esBtn = document.getElementById('lang-es-btn');
  if (enBtn) {
    enBtn.addEventListener('click', () => setLanguage('en'));
  }
  if (esBtn) {
    esBtn.addEventListener('click', () => setLanguage('es'));
  }
});
