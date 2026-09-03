(function () {
  const products = window.ORALBIO_PRODUCTS || [];

  const copy = {
    en: {
      "nav.products": "Products",
      "nav.routine": "Daily Routine",
      "nav.support": "Support",
      "hero.eyebrow": "Independent Household Essentials Brand",
      "hero.title": "Daily goods for a cleaner, calmer home.",
      "hero.body": "ORAL-B IO makes simple household essentials for storage, cleaning, kitchen, laundry, and entryway routines. It is an independent home brand, unrelated to any oral-care company.",
      "hero.cta": "Shop Products",
      "hero.secondary": "View Daily System",
      "intro.oneTitle": "Built for everyday use",
      "intro.oneBody": "Lightweight forms, washable textures, and easy-grip details.",
      "intro.twoTitle": "One home language",
      "intro.twoBody": "Ivory, sage, clay, and graphite across every household zone.",
      "intro.threeTitle": "Visible brand identity",
      "intro.threeBody": "Each product carries the original ORAL-B IO home-and-leaf mark.",
      "products.eyebrow": "Product Line",
      "products.title": "Household basics, designed as a tidy system.",
      "products.body": "Explore eight practical daily products with original AI-generated brand imagery and visible ORAL-B IO marks on the products.",
      "routine.eyebrow": "Daily Routine",
      "routine.title": "Reset the home in four simple moves.",
      "routine.card1Title": "Contain",
      "routine.card1Body": "Clear containers and modular bins make ordinary supplies easier to see and return.",
      "routine.card2Title": "Wipe",
      "routine.card2Body": "Soft towels, sponges, and surface tools support quick counter and entryway refreshes.",
      "routine.card3Title": "Dry",
      "routine.card3Body": "Mats, racks, and towels help handle daily moisture without visual clutter.",
      "routine.card4Title": "Repeat",
      "routine.card4Body": "Consistent colors and clear product marks make the routine feel intentional.",
      "feature.eyebrow": "Brand Note",
      "feature.title": "Independent by design.",
      "feature.body": "This ORAL-B IO website presents an independent household daily necessities brand. The visual identity, product lineup, and product images are original for this site and do not use oral-care branding, dental products, or competitor assets.",
      "feature.stat1": "Daily products",
      "feature.stat2": "Home zones",
      "feature.stat3": "Oral-care products",
      "support.eyebrow": "Support",
      "support.title": "Questions, wholesale, or cooperation.",
      "support.body": "Contact the ORAL-B IO household essentials team for product questions, wholesale inquiries, or launch cooperation.",
      "support.emailLabel": "Email",
      "support.hoursLabel": "Service Hours",
      "support.hours": "Monday to Friday, 9:00-18:00",
      "support.noteLabel": "Independence Note",
      "support.note": "Independent home goods concept, unrelated to any oral-care company.",
      "footer.copy": "ORAL-B IO is an independent household daily goods brand concept and is not affiliated with any oral-care company.",
      "detail.back": "Back To All Products",
      "detail.overview": "Overview",
      "detail.features": "Features",
      "detail.specs": "Specifications",
      "detail.buy": "Request Quote",
      "detail.related": "More From ORAL-B IO",
      "card.view": "View Details"
    },
    zh: {
      "nav.products": "产品系列",
      "nav.routine": "日常系统",
      "nav.support": "联系支持",
      "hero.eyebrow": "独立家常日用品品牌",
      "hero.title": "让日常用品服务一个更清爽的家。",
      "hero.body": "ORAL-B IO 专注收纳、清洁、餐厨、晾晒和玄关日用品，是独立家居品牌，与任何口腔护理公司无关。",
      "hero.cta": "查看产品",
      "hero.secondary": "了解日常系统",
      "intro.oneTitle": "为日常高频使用设计",
      "intro.oneBody": "轻量形态、可清洗材质和顺手握持细节。",
      "intro.twoTitle": "统一的家居语言",
      "intro.twoBody": "象牙白、鼠尾草绿、陶土色与石墨灰贯穿每个家庭场景。",
      "intro.threeTitle": "清晰的品牌识别",
      "intro.threeBody": "每款产品都带有原创 ORAL-B IO 家与叶子的标识。",
      "products.eyebrow": "产品系列",
      "products.title": "把家常用品做成一套整洁系统。",
      "products.body": "这里包含 8 款实用日用品，全部使用原创 AI 生成品牌图片，并在产品上带有 ORAL-B IO 标识。",
      "routine.eyebrow": "日常系统",
      "routine.title": "四个简单动作，让家更容易复位。",
      "routine.card1Title": "收纳",
      "routine.card1Body": "透明密封盒和模块收纳箱，让常用物品更容易看见、拿取和放回。",
      "routine.card2Title": "擦拭",
      "routine.card2Body": "柔洁巾、海绵和台面工具，支持厨房、台面、玄关的快速整理。",
      "routine.card3Title": "晾干",
      "routine.card3Body": "地垫、晾晒架和毛巾帮助处理日常水汽，不增加视觉杂乱。",
      "routine.card4Title": "重复",
      "routine.card4Body": "统一的颜色和清晰标识，让整个日常流程更有秩序。",
      "feature.eyebrow": "品牌说明",
      "feature.title": "从设计上保持独立。",
      "feature.body": "本 ORAL-B IO 网站呈现的是独立家常日用品品牌。视觉识别、产品线和产品图片均为本站原创，不使用口腔护理品牌风格、牙科产品或竞品资产。",
      "feature.stat1": "日用产品",
      "feature.stat2": "家庭场景",
      "feature.stat3": "口腔护理产品",
      "support.eyebrow": "联系支持",
      "support.title": "产品咨询、批发或合作。",
      "support.body": "如需产品咨询、批发询价或上新合作，可联系 ORAL-B IO 家居日用品团队。",
      "support.emailLabel": "邮箱",
      "support.hoursLabel": "服务时间",
      "support.hours": "周一至周五 9:00-18:00",
      "support.noteLabel": "独立说明",
      "support.note": "独立家居用品品牌概念，与任何口腔护理公司无关。",
      "footer.copy": "ORAL-B IO 是独立家常日用品品牌概念，与任何口腔护理公司无关联。",
      "detail.back": "返回全部产品",
      "detail.overview": "产品介绍",
      "detail.features": "产品特点",
      "detail.specs": "规格信息",
      "detail.buy": "咨询报价",
      "detail.related": "更多 ORAL-B IO 产品",
      "card.view": "查看详情"
    }
  };

  function getLanguage() {
    return localStorage.getItem("oralbio-language") || "en";
  }

  function t(key, lang) {
    return copy[lang][key] || copy.en[key] || key;
  }

  function localText(value, lang) {
    if (!value) return "";
    return value[lang] || value.en || "";
  }

  function renderStaticCopy(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n, lang);
    });
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = lang === "zh" ? "EN" : "中文";
      button.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    });
  }

  function productCard(product, lang) {
    return `
      <article class="product-card">
        <a class="product-image-link" href="${product.page}">
          <img src="${product.image}" alt="${localText(product.name, lang)}">
        </a>
        <div class="product-card-body">
          <p class="product-category">${localText(product.category, lang)}</p>
          <h3>${localText(product.name, lang)}</h3>
          <p>${localText(product.summary, lang)}</p>
          <div class="product-card-row">
            <span>${product.price}</span>
            <a href="${product.page}">${t("card.view", lang)}</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderProductGrid(lang) {
    const grid = document.querySelector("[data-product-grid]");
    if (!grid) return;
    grid.innerHTML = products.map((product) => productCard(product, lang)).join("");
  }

  function renderProductDetail(lang) {
    const mount = document.querySelector("[data-product-detail]");
    if (!mount) return;

    const productId = document.body.dataset.productId;
    const product = products.find((item) => item.id === productId);
    if (!product) {
      mount.innerHTML = `<section class="section-shell"><h1>Product not found</h1></section>`;
      return;
    }

    document.title = `${localText(product.name, lang)} | ORAL-B IO`;
    const subject = encodeURIComponent(`ORAL-B IO ${localText(product.name, "en")}`);

    const related = products
      .filter((item) => item.id !== product.id)
      .slice(0, 3)
      .map((item) => productCard(item, lang))
      .join("");

    mount.innerHTML = `
      <section class="detail-hero">
        <div class="detail-image">
          <img src="${product.image}" alt="${localText(product.name, lang)}">
        </div>
        <div class="detail-copy">
          <a class="back-link" href="index.html#products">${t("detail.back", lang)}</a>
          <p class="eyebrow">${localText(product.category, lang)}</p>
          <h1>${localText(product.name, lang)}</h1>
          <p class="detail-summary">${localText(product.summary, lang)}</p>
          <div class="price-row">
            <strong>${product.price}</strong>
            <a class="button primary" href="mailto:hello@oral-b-io-home.com?subject=${subject}">${t("detail.buy", lang)}</a>
          </div>
        </div>
      </section>

      <section class="detail-info">
        <article>
          <h2>${t("detail.overview", lang)}</h2>
          <p>${localText(product.details, lang)}</p>
        </article>
        <article>
          <h2>${t("detail.features", lang)}</h2>
          <ul>
            ${product.features[lang].map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </article>
        <article>
          <h2>${t("detail.specs", lang)}</h2>
          <ul>
            ${product.specs[lang].map((spec) => `<li>${spec}</li>`).join("")}
          </ul>
        </article>
      </section>

      <section class="section-shell related-section">
        <div class="section-heading compact">
          <p class="eyebrow">ORAL-B IO</p>
          <h2>${t("detail.related", lang)}</h2>
        </div>
        <div class="product-grid compact-grid">${related}</div>
      </section>
    `;
  }

  function setLanguage(lang) {
    localStorage.setItem("oralbio-language", lang);
    renderStaticCopy(lang);
    renderProductGrid(lang);
    renderProductDetail(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(getLanguage());
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(getLanguage() === "zh" ? "en" : "zh");
      });
    });
  });
})();
