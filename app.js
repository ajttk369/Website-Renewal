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

const categories = ['스킨케어', '선케어', '클렌징', '클렌징', '클렌징', '스킨케어', '스킨케어', '메이크업', '선케어', '클렌징', '스킨케어', '건강식품'];
products.forEach((product, index) => {
  product.id = product.image.split('/').pop().replace(/\.[^.]+$/, '');
  product.category = categories[index];
  product.amount = Number(product.price.replace(/[^0-9]/g, ''));
});

// Stock, distance and pickup windows are demonstration data, not live store information.
const stores = [
  { id: 'gangnam', name: '강남대로점', distance: 0.8, window: '당일 18:30 이후', stock: [6, 8, 5, 4, 3, 7, 0, 5, 6, 0, 10, 0] },
  { id: 'yeoksam', name: '역삼중앙점', distance: 1.4, window: '당일 19:00 이후', stock: [4, 5, 0, 6, 2, 4, 0, 1, 3, 0, 8, 0] },
  { id: 'seolleung', name: '선릉역점', distance: 1.8, window: '익일 11:00 이후', stock: [3, 5, 4, 3, 5, 3, 0, 4, 4, 0, 6, 0] }
].map((store) => ({ ...store, stock: Object.fromEntries(products.map((product, index) => [product.id, store.stock[index]])) }));
products.forEach((product) => {
  product.badges = product.badges.filter((badge) => badge !== '픽업가능');
  if (stores.some((store) => store.stock[product.id] > 0)) product.badges.unshift('픽업가능');
});

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

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const money = (amount) => amount.toLocaleString('ko-KR') + '원';
const findProduct = (id) => products.find((product) => product.id === id);
const icon = (name) => '<i data-lucide="' + name + '" aria-hidden="true">' + ({ heart: '♡', plus: '+', minus: '−', trash: '×' }[name] || '') + '</i>';
const icons = () => window.lucide?.createIcons();
const storageKey = 'oliveRenewalState:v1';
const maxQuantity = 20;
const filter = { query: '', category: '전체', badge: '전체', wished: false };
let storeFilter = 'all';
let activeModal = null;
let returnFocus = null;
let toastTimer;
let storageWarning = false;

function defaultState() {
  return { cart: products.slice(0, 4).map((product) => ({ id: product.id, quantity: 1 })), wishes: [], store: null, coupon: false };
}

function normalizeState(value) {
  if (!value || !Array.isArray(value.cart)) throw new Error('Invalid state');
  const seen = new Set();
  const cart = value.cart.filter((item) => {
    if (!item || !findProduct(item.id) || seen.has(item.id) || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > maxQuantity) return false;
    seen.add(item.id);
    return true;
  }).map((item) => ({ id: item.id, quantity: item.quantity }));
  return {
    cart,
    wishes: [...new Set(Array.isArray(value.wishes) ? value.wishes.filter((id) => !!findProduct(id)) : [])],
    store: stores.some((store) => store.id === value.store) ? value.store : null,
    coupon: value.coupon === true
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === null ? defaultState() : normalizeState(JSON.parse(saved));
  } catch {
    storageWarning = true;
    return defaultState();
  }
}
let state = loadState();

function notify(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4500);
}

function storeResult(store) {
  const missing = state.cart.filter((item) => (store.stock[item.id] || 0) < item.quantity);
  return { store, missing, matched: state.cart.length - missing.length, complete: state.cart.length > 0 && missing.length === 0 };
}

function commit() {
  if (state.store && !storeResult(stores.find((store) => store.id === state.store)).complete) {
    state.store = null;
    notify('상품 또는 수량이 변경되어 선택 매장을 해제했습니다.');
  }
  try { localStorage.setItem(storageKey, JSON.stringify(state)); $('#storageNotice').hidden = true; }
  catch { $('#storageNotice').hidden = false; }
  renderCart();
  renderProducts();
}

function productTemplate(product) {
  const wished = state.wishes.includes(product.id);
  return `<article class="product-card">
    <button type="button" class="product-thumb" data-detail="${product.id}" aria-label="${escapeHtml(product.name)} 상세 보기"><img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" width="240" height="180"></button>
    <button type="button" class="wish-button ${wished ? 'active' : ''}" data-wish="${product.id}" aria-label="${escapeHtml(product.name)} ${wished ? '찜 해제' : '찜하기'}" title="${wished ? '찜 해제' : '찜하기'}" aria-pressed="${wished}">${icon('heart')}</button>
    <div class="product-info">
      <h3><button type="button" class="product-name" data-detail="${product.id}">${escapeHtml(product.name)}</button></h3>
      <div class="price-row"><span class="discount">${escapeHtml(product.rate)}</span><p class="price">${money(product.amount)}</p></div>
      <p class="original-price">${escapeHtml(product.originalPrice)}</p>
      <div class="badges">${product.badges.map((badge) => '<span class="badge">' + escapeHtml(badge) + '</span>').join('')}</div>
      <button type="button" data-add="${product.id}">선택 상품에 담기</button>
    </div>
  </article>`;
}

function renderProducts() {
  const tokens = filter.query.toLocaleLowerCase('ko-KR').split(/\s+/).filter(Boolean);
  const list = products.filter((product) =>
    tokens.every((token) => (product.name + ' ' + product.category + ' ' + product.badges.join(' ')).toLocaleLowerCase('ko-KR').includes(token)) &&
    (filter.category === '전체' || product.category === filter.category) &&
    (filter.badge === '전체' || (filter.badge === '세일' ? parseInt(product.rate, 10) > 0 : product.badges.includes(filter.badge))) &&
    (!filter.wished || state.wishes.includes(product.id)));
  $('#productGrid').innerHTML = list.map(productTemplate).join('');
  $('#productEmpty').hidden = list.length > 0;
  $('#resultCount').textContent = (filter.query ? '"' + filter.query + '" · ' : '') + (filter.wished ? '찜한 상품 · ' : '') + list.length + '개 상품';
  $('#filterReset').hidden = !filter.query && filter.category === '전체' && filter.badge === '전체' && !filter.wished;
  $('#categorySelect').value = filter.category;
  document.querySelectorAll('.filter-tabs [data-product-filter]').forEach((button) => {
    const active = button.dataset.productFilter === filter.badge;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $('#wishFilter').setAttribute('aria-pressed', String(filter.wished));
  icons();
}

function cartTemplate(item) {
  const product = findProduct(item.id);
  return `<li>
    <img class="mini-product-img" src="${product.image}" alt="" width="44" height="52">
    <div class="cart-item-info"><button type="button" class="text-button" data-detail="${product.id}">${escapeHtml(product.name)}</button><span>${money(product.amount * item.quantity)}</span></div>
    <div class="cart-item-actions">
      <div class="quantity-control">
        <button type="button" data-qty="${product.id}" data-step="-1" aria-label="${escapeHtml(product.name)} 수량 줄이기" ${item.quantity === 1 ? 'disabled' : ''}>${icon('minus')}</button>
        <span aria-label="수량">${item.quantity}</span>
        <button type="button" data-qty="${product.id}" data-step="1" aria-label="${escapeHtml(product.name)} 수량 늘리기" ${item.quantity === maxQuantity ? 'disabled' : ''}>${icon('plus')}</button>
      </div>
      <button type="button" class="remove-button" data-remove="${product.id}" title="상품 삭제" aria-label="${escapeHtml(product.name)} 삭제">${icon('trash')}</button>
    </div>
  </li>`;
}

function storeTemplate(result) {
  const { store, missing, matched, complete } = result;
  const selected = state.store === store.id;
  return `<article class="store-card ${selected ? 'best' : ''}">
    <div><strong>${escapeHtml(store.name)}${selected ? ' · 선택됨' : ''}</strong>
    <p>${store.distance}km · ${matched}/${state.cart.length}종 수량 충족 · ${escapeHtml(store.window)}</p>
    <span class="stock-status ${complete ? 'available' : ''}">${complete ? '전체 상품 픽업 가능' : matched ? '일부 상품 재고 부족' : '픽업 불가'}</span>
    ${missing.length ? '<details><summary>부족한 상품 ' + missing.length + '종</summary><ul>' + missing.map((item) => '<li>' + escapeHtml(findProduct(item.id).name) + ' · 요청 ' + item.quantity + '개 / 재고 ' + (store.stock[item.id] || 0) + '개</li>').join('') + '</ul></details>' : ''}
    </div>
    <button type="button" data-store="${store.id}" ${!complete || selected ? 'disabled' : ''}>${selected ? '선택됨' : complete ? '선택' : '재고 부족'}</button>
  </article>`;
}

function renderStores() {
  const results = stores.map(storeResult).sort((a, b) => Number(b.complete) - Number(a.complete) || b.matched - a.matched || a.store.distance - b.store.distance);
  $('#storeCards').innerHTML = state.cart.length ? results.map(storeTemplate).join('') : '<p class="empty-message">상품을 담으면 픽업 매장을 확인할 수 있습니다.</p>';
  const visible = results.filter((result) => storeFilter !== 'complete' || result.complete);
  $('#modalStoreCards').innerHTML = !state.cart.length ? '<p class="empty-message">먼저 상품을 선택해주세요.</p>' : visible.length ? visible.map(storeTemplate).join('') : '<p class="empty-message">모든 상품의 수량을 충족하는 매장이 없습니다. 전체 매장에서 부족한 상품을 확인해주세요.</p>';
  document.querySelectorAll('[data-store-filter]').forEach((button) => {
    const active = button.dataset.storeFilter === storeFilter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const selected = results.find((result) => result.store.id === state.store && result.complete);
  const suggested = results.find((result) => result.complete);
  const result = selected || suggested;
  $('#pickupStatus b').textContent = result ? (selected ? '' : '추천 · ') + result.store.name : '선택 매장 없음';
  $('#pickupStatus span').textContent = result ? result.store.distance + 'km · ' + result.matched + '/' + state.cart.length + '종 가능 · ' + result.store.window + ' (데모)' : state.cart.length ? '전체 매장에서 상품별 재고를 확인해주세요.' : '상품을 선택하면 매장을 추천합니다.';
}

function renderCart() {
  $('#cartList').innerHTML = state.cart.length ? state.cart.map(cartTemplate).join('') : '<li class="empty-message">선택한 상품이 없습니다.</li>';
  const quantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + findProduct(item.id).amount * item.quantity, 0);
  const eligible = !!state.store && storeResult(stores.find((store) => store.id === state.store)).complete && subtotal >= 30000;
  const discount = state.coupon && eligible ? 3000 : 0;
  $('#cartCount').textContent = String(quantity);
  $('#selectedCount').textContent = state.cart.length + '종 · ' + quantity + '개';
  $('#cartTotal').textContent = '상품 합계 ' + money(subtotal) + (discount ? ' · 쿠폰 −3,000원 · 예상 금액 ' + money(subtotal - discount) : state.coupon && state.cart.length ? ' · 쿠폰은 3만원 이상, 전체 픽업 매장 선택 시 적용' : '');
  $('#couponButton').textContent = state.coupon ? '쿠폰 받기 완료' : '쿠폰 받기';
  $('#couponButton').disabled = state.coupon;
  renderStores();
  icons();
}

function resetFilters() {
  Object.assign(filter, { query: '', category: '전체', badge: '전체', wished: false });
  $('#searchInput').value = '';
  renderProducts();
}

function scrollProducts() { $('#products').scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' }); }

function closeLayer(restore = true) {
  if (!activeModal) return;
  activeModal.classList.remove('show');
  activeModal.setAttribute('aria-hidden', 'true');
  document.querySelectorAll('.site-header, main, .site-footer').forEach((element) => { element.inert = false; });
  document.body.classList.remove('modal-open');
  activeModal = null;
  if (restore) (returnFocus?.isConnected ? returnFocus : $('#wishFilter')).focus({ preventScroll: true });
}

function openLayer(modal) {
  const origin = activeModal ? returnFocus : document.activeElement;
  closeLayer(false);
  returnFocus = origin;
  activeModal = modal;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.querySelectorAll('.site-header, main, .site-footer').forEach((element) => { element.inert = true; });
  document.body.classList.add('modal-open');
  modal.querySelector('.close-modal').focus({ preventScroll: true });
}

function showDetail(id) {
  const product = findProduct(id);
  if (!product) return;
  $('#productDetail').innerHTML = `<div class="detail-layout">
    <img class="detail-image" src="${product.image}" alt="${escapeHtml(product.name)}" width="420" height="420">
    <div class="detail-copy"><p class="eyebrow">${escapeHtml(product.category)}</p><h2 id="detailTitle">${escapeHtml(product.name)}</h2>
    <div class="price-row"><span class="discount">${escapeHtml(product.rate)}</span><strong class="price">${money(product.amount)}</strong></div>
    <p class="original-price">${escapeHtml(product.originalPrice)}</p>
    <div class="badges">${product.badges.map((badge) => '<span class="badge">' + escapeHtml(badge) + '</span>').join('')}</div>
    <h3>매장별 재고</h3><ul class="detail-stocks">${stores.map((store) => '<li><span>' + escapeHtml(store.name) + '</span><strong>' + (store.stock[id] ? store.stock[id] + '개' : '픽업 불가') + '</strong></li>').join('')}</ul>
    <p class="detail-note">재고와 수령 시간은 데모 데이터입니다. 실제 주문이나 예약은 진행되지 않습니다.</p>
    <label class="detail-quantity" for="detailQuantity">수량<input id="detailQuantity" type="number" min="1" max="${maxQuantity}" step="1" value="1"></label>
    <p id="detailNotice" class="detail-notice" role="status"></p>
    <button type="button" class="detail-add" data-detail-add="${id}">선택 상품에 담기</button>
    <a href="#pickup-flow" class="detail-cart-link" data-show-cart>선택 목록과 매장 확인</a>
    </div></div>`;
  openLayer($('#productModal'));
}

function addProduct(id, quantity = 1) {
  if (!findProduct(id) || !Number.isInteger(quantity) || quantity < 1 || quantity > maxQuantity) return '수량은 1~20개의 정수로 입력해주세요.';
  const item = state.cart.find((entry) => entry.id === id);
  if ((item?.quantity || 0) + quantity > maxQuantity) return '상품별 최대 20개까지 선택할 수 있습니다.';
  if (item) item.quantity += quantity;
  else state.cart.push({ id, quantity });
  commit();
  return '';
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let heroIndex = 0;
let heroPaused = reducedMotion.matches;
let heroTimer;
let heroPending;
const hero = $('.hero-banner');

function renderHeroSlide(index, immediate = false) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  const selectedIndex = heroIndex;
  const slide = heroSlides[selectedIndex];
  clearTimeout(heroPending);
  $('#heroBannerImage').style.opacity = immediate || reducedMotion.matches ? '1' : '0';
  heroPending = setTimeout(() => {
    $('#heroBannerImage').src = slide.image;
    $('#heroBannerImage').alt = slide.alt;
    $('#heroBannerBrand').textContent = slide.brand;
    $('#heroBannerTitle').replaceChildren();
    slide.title.split('<br>').forEach((line, index) => {
      if (index) $('#heroBannerTitle').append(document.createElement('br'));
      $('#heroBannerTitle').append(document.createTextNode(line));
    });
    $('#heroBannerDesc').textContent = slide.desc;
    $('#bannerCount').textContent = (selectedIndex + 1) + '/' + heroSlides.length;
    $('#heroBannerImage').style.opacity = '1';
  }, immediate || reducedMotion.matches ? 0 : 120);
}

function startHeroAuto() {
  clearInterval(heroTimer);
  $('#bannerPause').textContent = heroPaused ? '▶' : 'Ⅱ';
  $('#bannerPause').setAttribute('aria-label', heroPaused ? '배너 자동 재생' : '배너 일시정지');
  $('#bannerPause').setAttribute('aria-pressed', String(heroPaused));
  if (heroPaused || document.hidden || activeModal || hero.matches(':hover') || hero.contains(document.activeElement)) return;
  heroTimer = setInterval(() => renderHeroSlide(heroIndex + 1), 5000);
}

function initCategories() {
  const names = ['전체', ...new Set(products.map((product) => product.category))];
  $('#categorySelect').innerHTML = names.map((name) => '<option value="' + escapeHtml(name) + '">' + escapeHtml(name) + '</option>').join('');
  $('#categoryMenu').innerHTML = names.map((name) => '<button type="button" data-category="' + escapeHtml(name) + '">' + escapeHtml(name) + '</button>').join('');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('button, a');
  if (!trigger || trigger.disabled) return;
  const data = trigger.dataset;
  if (trigger.classList.contains('close-modal')) { closeLayer(); startHeroAuto(); }
  else if (trigger.classList.contains('open-store-modal')) { event.preventDefault(); storeFilter = 'all'; renderStores(); openLayer($('#storeModal')); startHeroAuto(); }
  else if (trigger.classList.contains('require-login')) { event.preventDefault(); openLayer($('#loginModal')); startHeroAuto(); }
  else if (data.detail) { showDetail(data.detail); startHeroAuto(); }
  else if (trigger.hasAttribute('data-show-cart')) { closeLayer(); startHeroAuto(); }
  else if (data.detailAdd) {
    const error = addProduct(data.detailAdd, Number($('#detailQuantity').value));
    if (error) { $('#detailNotice').textContent = error; return; }
    $('#detailNotice').textContent = '상품을 담았습니다. 선택 목록에서 수량과 매장을 확인할 수 있습니다.';
    notify('선택 상품에 담았습니다.');
  }
  else if (data.add) { const error = addProduct(data.add); notify(error || '선택 상품에 담았습니다.'); }
  else if (data.wish) {
    state.wishes = state.wishes.includes(data.wish) ? state.wishes.filter((id) => id !== data.wish) : [...state.wishes, data.wish];
    commit();
    const replacement = document.querySelector('[data-wish="' + data.wish + '"]');
    (replacement || $('#wishFilter')).focus({ preventScroll: true });
  }
  else if (data.qty) {
    const item = state.cart.find((entry) => entry.id === data.qty);
    if (!item) return;
    item.quantity = Math.min(maxQuantity, Math.max(1, item.quantity + Number(data.step)));
    commit();
    const replacement = document.querySelector('[data-qty="' + data.qty + '"][data-step="' + data.step + '"]');
    (replacement?.disabled ? replacement.parentElement.querySelector('button:not(:disabled)') : replacement)?.focus({ preventScroll: true });
  }
  else if (data.remove) {
    const index = state.cart.findIndex((item) => item.id === data.remove);
    state.cart = state.cart.filter((item) => item.id !== data.remove);
    commit();
    const buttons = document.querySelectorAll('[data-remove]');
    (buttons[Math.min(index, buttons.length - 1)] || $('.cart-panel .open-store-modal')).focus({ preventScroll: true });
  }
  else if (data.store) {
    const store = stores.find((item) => item.id === data.store);
    if (!store || !storeResult(store).complete) { notify('선택 상품의 재고를 다시 확인해주세요.'); return; }
    state.store = store.id;
    commit();
    closeLayer();
    startHeroAuto();
    notify(store.name + '을 픽업 매장으로 선택했습니다. 실제 예약은 진행되지 않습니다.');
  }
  else if (data.storeFilter) { storeFilter = data.storeFilter; renderStores(); }
  else if (data.productFilter) {
    if (trigger.tagName === 'A') { filter.query = ''; filter.category = '전체'; $('#searchInput').value = ''; }
    filter.badge = data.productFilter;
    filter.wished = false;
    renderProducts();
  }
  else if (data.category) {
    filter.category = data.category;
    filter.query = '';
    filter.badge = '전체';
    filter.wished = false;
    $('#searchInput').value = '';
    $('#categoryMenu').hidden = true;
    $('.category-button').setAttribute('aria-expanded', 'false');
    renderProducts();
    scrollProducts();
    $('#categorySelect').focus({ preventScroll: true });
  }
  else if (trigger.id === 'wishFilter') { filter.wished = !filter.wished; filter.query = ''; filter.category = '전체'; filter.badge = '전체'; $('#searchInput').value = ''; renderProducts(); scrollProducts(); }
  else if (trigger.id === 'filterReset' || trigger.hasAttribute('data-reset-filters')) { resetFilters(); $('#categorySelect').focus({ preventScroll: true }); }
  else if (trigger.classList.contains('category-button')) {
    $('#categoryMenu').hidden = !$('#categoryMenu').hidden;
    trigger.setAttribute('aria-expanded', String(!$('#categoryMenu').hidden));
  }
  else if (trigger.id === 'couponButton') { state.coupon = true; commit(); notify('픽업 쿠폰을 받았습니다. 3만원 이상, 전체 픽업 매장 선택 시 적용됩니다.'); }
  else if (data.demoInfo) notify(data.demoInfo);
  else if (trigger.getAttribute('href') === '#') { event.preventDefault(); notify('이 메뉴는 화면 시안입니다. 실제 회원·정책 서비스는 제공하지 않습니다.'); }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.category-button, .category-menu')) {
    $('#categoryMenu').hidden = true;
    $('.category-button').setAttribute('aria-expanded', 'false');
  }
  if (activeModal && event.target === activeModal) { closeLayer(); startHeroAuto(); }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLayer();
    if (!$('#categoryMenu').hidden) { $('#categoryMenu').hidden = true; $('.category-button').setAttribute('aria-expanded', 'false'); $('.category-button').focus(); }
    startHeroAuto();
  }
  if (event.key !== 'Tab' || !activeModal) return;
  const focusable = [...activeModal.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), select, summary, [tabindex="0"]')].filter((element) => element.getClientRects().length);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!first) { event.preventDefault(); return; }
  if (event.shiftKey && (document.activeElement === first || !activeModal.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && (document.activeElement === last || !activeModal.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
});
$('.search').addEventListener('submit', (event) => { event.preventDefault(); filter.query = $('#searchInput').value.trim().slice(0, 100); filter.wished = false; renderProducts(); scrollProducts(); });
$('#searchInput').addEventListener('input', () => { filter.query = $('#searchInput').value.trim().slice(0, 100); renderProducts(); });
$('#categorySelect').addEventListener('change', (event) => { filter.category = event.target.value; renderProducts(); });
$('.login-form').addEventListener('submit', (event) => event.preventDefault());
$('#bannerPrev').addEventListener('click', () => { renderHeroSlide(heroIndex - 1); startHeroAuto(); });
$('#bannerNext').addEventListener('click', () => { renderHeroSlide(heroIndex + 1); startHeroAuto(); });
$('#bannerPause').addEventListener('click', () => { heroPaused = !heroPaused; startHeroAuto(); });
hero.addEventListener('mouseenter', startHeroAuto);
hero.addEventListener('mouseleave', startHeroAuto);
hero.addEventListener('focusin', startHeroAuto);
hero.addEventListener('focusout', () => setTimeout(startHeroAuto, 0));
document.addEventListener('visibilitychange', startHeroAuto);
reducedMotion.addEventListener('change', (event) => { heroPaused = event.matches; startHeroAuto(); });
window.addEventListener('storage', (event) => {
  if (event.key !== storageKey && event.key !== null) return;
  state = loadState();
  if (state.store && !storeResult(stores.find((store) => store.id === state.store)).complete) state.store = null;
  renderCart();
  renderProducts();
  if (activeModal === $('#productModal')) { closeLayer(); startHeroAuto(); }
  notify('다른 탭의 선택 상품과 매장 정보를 반영했습니다.');
});

// Connect existing editorial cards to matching products without changing their composition.
document.querySelectorAll('.weekly-card, .suggest-grid article, .only-grid article, .trend-product, .event-tile').forEach((article) => {
  const product = products.find((item) => item.image === article.querySelector('img')?.getAttribute('src'));
  if (!product) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'editorial-link';
  button.dataset.detail = product.id;
  button.setAttribute('aria-label', product.name + ' 상세 보기');
  article.append(button);
});
document.querySelectorAll('.more-link').forEach((link) => {
  link.href = '#products';
  link.dataset.productFilter = link.closest('.update-section') ? '신상' : '전체';
});
document.querySelectorAll('.ranking-grid article').forEach((article) => {
  const name = article.querySelector('span').textContent;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'editorial-link';
  button.dataset.category = name;
  button.setAttribute('aria-label', name + ' 상품 보기');
  article.append(button);
});
const footerTargets = ['#pickup', '#products', '#pickup-flow', '#membership'];
document.querySelectorAll('.footer-links > div:nth-child(2) a').forEach((link, index) => { link.href = footerTargets[index]; });
initCategories();
if (state.store && !storeResult(stores.find((store) => store.id === state.store)).complete) state.store = null;
renderCart();
renderProducts();
renderHeroSlide(0, true);
startHeroAuto();
if (storageWarning) notify('저장된 선택 정보를 읽지 못해 기본 목록을 표시합니다. 실제 계정 정보는 저장하지 않습니다.');
