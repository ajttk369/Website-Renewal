const products = [
  {
    name: '아비브 어성초 테카 캡슐 세럼',
    price: '28,900원',
    originalPrice: '34,000원',
    rate: '15%',
    image: 'images/product-abib-heartleaf-serum.png',
    pickup: '픽업 매장 확인',
    badges: ['픽업가능', '오늘드림', '증정']
  },
  {
    name: '메디힐 마데카소사이드 수분 선세럼',
    price: '24,900원',
    originalPrice: '32,000원',
    rate: '22%',
    image: 'images/product-mediheal-sunscreen.jpg',
    pickup: '오늘드림 가능',
    badges: ['오늘드림', '픽업가능']
  },
  {
    name: '바닐라코 클린잇제로 클렌징밤',
    price: '19,900원',
    originalPrice: '25,000원',
    rate: '20%',
    image: 'images/product-banila-cleansing-balm.jpg',
    pickup: '픽업 가능',
    badges: ['세일', '픽업가능']
  },
  {
    name: '바이오더마 센시비오',
    price: '23,500원',
    originalPrice: '29,000원',
    rate: '19%',
    image: 'images/product-bioderma-sensibio.jpg',
    pickup: '근처 매장 보기',
    badges: ['오늘드림', '쿠폰']
  },
  {
    name: '미릴리프 모이스처 클렌징밀크',
    price: '18,900원',
    originalPrice: '24,000원',
    rate: '21%',
    image: 'images/product-mirileaf-cleansing-milk.jpg',
    pickup: '픽업 가능',
    badges: ['픽업가능']
  },
  {
    name: '수분 압축 크림',
    price: '21,900원',
    originalPrice: '28,000원',
    rate: '22%',
    image: 'images/product-moisture-cream.jpg',
    pickup: '강남대로점 픽업',
    badges: ['세일', '픽업가능']
  },
  {
    name: 'NMN 포어 리프팅 앰플',
    price: '32,900원',
    originalPrice: '41,000원',
    rate: '20%',
    image: 'images/product-nmn-pore-lifting-ampoule.jpg',
    pickup: '오늘드림 가능',
    badges: ['신상', '오늘드림']
  },
  {
    name: '홀리카홀리카 마이페이브 피스 아이섀도우',
    price: '7,900원',
    originalPrice: '10,000원',
    rate: '21%',
    image: 'images/product-holika-eyeshadow.jpg',
    pickup: '픽업 가능',
    badges: ['세일', '픽업가능']
  },
  {
    name: '자작나무 수분 선크림',
    price: '11,900원',
    originalPrice: '16,000원',
    rate: '26%',
    image: 'images/product-birch-sunscreen.jpg',
    pickup: '오늘드림 가능',
    badges: ['오늘드림', '픽업가능']
  },
  {
    name: '그레이멜린 카놀라크레이지 클렌징오일',
    price: '14,900원',
    originalPrice: '22,000원',
    rate: '32%',
    image: 'images/product-graymelin-cleansing-oil.jpg',
    pickup: '근처 매장 보기',
    badges: ['세일', '쿠폰']
  },
  {
    name: '메디힐 에센셜 마스크팩',
    price: '9,900원',
    originalPrice: '13,000원',
    rate: '24%',
    image: 'images/product-mediheal-mask-pack.jpg',
    pickup: '픽업 가능',
    badges: ['증정', '픽업가능']
  },
  {
    name: '지노마스터 질유산균',
    price: '39,900원',
    originalPrice: '49,000원',
    rate: '19%',
    image: 'images/product-gynomaster-probiotics.png',
    pickup: '오늘드림 가능',
    badges: ['건강식품', '오늘드림']
  }
];

const stores = [
  {
    name: '강남대로점',
    meta: '0.8km · 4/4개 가능 · 오늘 18:30 이후 픽업',
    best: true,
    action: '선택'
  },
  {
    name: '역삼중앙점',
    meta: '1.4km · 3/4개 가능 · 1개 상품 배송 전환 제안',
    best: false,
    action: '대안 보기'
  },
  {
    name: '선릉역점',
    meta: '1.8km · 4/4개 가능 · 내일 11:00 이후 픽업',
    best: false,
    action: '예약'
  }
];

const heroSlides = [
  {
    image: 'images/hero-01-survival-beauty.jpg',
    brand: '서바이벌 뷰티',
    title: '길어진 여름 속<br>피부를 구해줄<br>생존 뷰티템',
    desc: '미션 참여하고 키트 받기',
    alt: '길어진 여름 속 피부를 구해줄 생존 뷰티템'
  },
  {
    image: 'images/hero-02-physiogel.jpg',
    brand: '피지오겔',
    title: '속촉촉 겉보송<br>답답함 없는<br>기름종이 선스틱',
    desc: '단독 혜택 & 쿠폰',
    alt: '피지오겔 기름종이 선스틱'
  },
  {
    image: 'images/hero-03-beauty-tool.jpg',
    brand: '미용소품',
    title: '찝찝함 덜고<br>뽀송함은 더하는<br>뷰티툴 관리템',
    desc: '위생적인 뷰티툴 관리 시작하기',
    alt: '찝찝함 덜고 뽀송함은 더하는 뷰티툴 관리템'
  },
  {
    image: 'images/hero-04-betterfocus.jpg',
    brand: '베러포커스',
    title: '지중해 원물로<br>먹으면서 비우는<br>쉬운 습관 시작',
    desc: '푸드올로지 선착순 쿠폰 & 특가',
    alt: '지중해 원물로 먹으면서 비우는 쉬운 습관 시작'
  }
];

const productGrid = document.querySelector('#productGrid');
const cartList = document.querySelector('#cartList');
const storeCards = document.querySelector('#storeCards');
const modalStoreCards = document.querySelector('#modalStoreCards');
const storeModal = document.querySelector('#storeModal');
const loginModal = document.querySelector('#loginModal');
const heroBannerImage = document.querySelector('#heroBannerImage');
const heroBannerBrand = document.querySelector('#heroBannerBrand');
const heroBannerTitle = document.querySelector('#heroBannerTitle');
const heroBannerDesc = document.querySelector('#heroBannerDesc');
const bannerCount = document.querySelector('#bannerCount');
const bannerPrev = document.querySelector('#bannerPrev');
const bannerNext = document.querySelector('#bannerNext');
const bannerPause = document.querySelector('#bannerPause');
let heroIndex = 0;
let heroPaused = false;
let heroTimer;

function productTemplate(product) {
  return `
    <article class="product-card">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="price-row">
          <span class="discount">${product.rate}</span>
          <p class="price">${product.price}</p>
        </div>
        <p class="original-price">${product.originalPrice}</p>
        <div class="badges">
          ${product.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
        </div>
        <button type="button">${product.pickup}</button>
      </div>
    </article>
  `;
}

function cartTemplate(product) {
  return `
    <li>
      <img class="mini-product-img" src="${product.image}" alt="">
      <span>${product.name}</span>
      <strong>1개</strong>
    </li>
  `;
}

function storeTemplate(store) {
  return `
    <article class="store-card ${store.best ? 'best' : ''}">
      <div>
        <strong>${store.name}</strong>
        <p>${store.meta}</p>
      </div>
      <button type="button">${store.action}</button>
    </article>
  `;
}

function render() {
  productGrid.innerHTML = products.map(productTemplate).join('');
  cartList.innerHTML = products.slice(0, 4).map(cartTemplate).join('');
  const storesHtml = stores.map(storeTemplate).join('');
  storeCards.innerHTML = storesHtml;
  modalStoreCards.innerHTML = storesHtml;
  renderHeroSlide(0);
  startHeroAuto();
}

function renderHeroSlide(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[heroIndex];
  heroBannerImage.style.opacity = '0';
  window.setTimeout(() => {
    heroBannerImage.src = slide.image;
    heroBannerImage.alt = slide.alt;
    heroBannerBrand.textContent = slide.brand;
    heroBannerTitle.innerHTML = slide.title;
    heroBannerDesc.textContent = slide.desc;
    bannerCount.textContent = `${heroIndex + 1}/${heroSlides.length}`;
    heroBannerImage.style.opacity = '1';
  }, 120);
}

function startHeroAuto() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => {
    if (!heroPaused) renderHeroSlide(heroIndex + 1);
  }, 5000);
}

function openModal() {
  storeModal.classList.add('show');
  storeModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  storeModal.classList.remove('show');
  storeModal.setAttribute('aria-hidden', 'true');
}

function openLoginModal(event) {
  if (event) event.preventDefault();
  loginModal.classList.add('show');
  loginModal.setAttribute('aria-hidden', 'false');
}

function closeLoginModal() {
  loginModal.classList.remove('show');
  loginModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.open-store-modal').forEach(button => {
  button.addEventListener('click', openModal);
});

document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelectorAll('.require-login').forEach(trigger => {
  trigger.addEventListener('click', openLoginModal);
});

document.querySelector('.login-close').addEventListener('click', closeLoginModal);

storeModal.addEventListener('click', event => {
  if (event.target === storeModal) closeModal();
});

loginModal.addEventListener('click', event => {
  if (event.target === loginModal) closeLoginModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
    closeLoginModal();
  }
});

bannerPrev.addEventListener('click', () => renderHeroSlide(heroIndex - 1));
bannerNext.addEventListener('click', () => renderHeroSlide(heroIndex + 1));
bannerPause.addEventListener('click', () => {
  heroPaused = !heroPaused;
  bannerPause.textContent = heroPaused ? '▶' : 'Ⅱ';
});

render();
