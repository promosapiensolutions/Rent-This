const listings = [
  {
    id: "family-camping-bundle",
    title: "Family camping bundle",
    meta: "Tent, 4 sleeping bags, lantern, camp chairs",
    category: "camping",
    rate: 45,
    deposit: 150,
    distance: "0.8 mi",
    image: "assets/listing-family-camping-bundle.png",
    tags: ["Sleeps 4", "Porch pickup", "Photos required"]
  },
  {
    id: "weekend-paddleboard-set",
    title: "Weekend paddleboard set",
    meta: "Inflatable board, pump, paddle, dry bag",
    category: "water",
    rate: 38,
    deposit: 180,
    distance: "1.4 mi",
    image: "assets/listing-paddleboard-set.png",
    tags: ["Water", "Return dry", "Deposit held"]
  },
  {
    id: "pop-up-shade-canopy",
    title: "Pop-up shade canopy",
    meta: "10x10 canopy, stakes, side wall, roller bag",
    category: "shade",
    rate: 24,
    deposit: 95,
    distance: "2.1 mi",
    image: "assets/listing-shade-canopy.png",
    tags: ["Events", "Easy handoff", "Fits SUV"]
  },
  {
    id: "backpacking-starter-kit",
    title: "Backpacking starter kit",
    meta: "Two packs, two pads, stove, headlamps",
    category: "camping",
    rate: 52,
    deposit: 220,
    distance: "3.6 mi",
    image: "assets/listing-backpacking-kit.png",
    tags: ["Lightweight", "2 people", "Fuel excluded"]
  },
  {
    id: "cooler-camp-kitchen",
    title: "Cooler and camp kitchen",
    meta: "Large cooler, table, cookware, wash bins",
    category: "camping",
    rate: 32,
    deposit: 120,
    distance: "4.2 mi",
    image: "assets/listing-camp-kitchen.png",
    tags: ["Cooking", "Clean return", "Weekend ready"]
  },
  {
    id: "lake-day-float-pack",
    title: "Lake day float pack",
    meta: "Two floats, hand pump, waterproof phone cases",
    category: "water",
    rate: 18,
    deposit: 65,
    distance: "5.5 mi",
    image: "assets/listing-lake-floats.png",
    tags: ["Lake", "Inspect seams", "Compact"]
  },
  {
    id: "fishing-family-bundle",
    title: "Fishing family bundle",
    meta: "2 poles, tackle box, net, starter lures",
    category: "sports",
    rate: 22,
    deposit: 90,
    distance: "1.1 mi",
    image: "assets/listing-fishing-bundle.png",
    tags: ["Fishing", "2 poles", "Tackle box"]
  },
  {
    id: "rubber-raft-pair",
    title: "Rubber raft pair",
    meta: "Two rafts, oars, pump, patch kit",
    category: "water",
    rate: 42,
    deposit: 175,
    distance: "2.8 mi",
    image: "assets/listing-rubber-rafts.png",
    tags: ["Rafts", "Oars", "Patch kit"]
  },
  {
    id: "croquet-set",
    title: "Croquet set",
    meta: "Mallets, wickets, balls, carrying bag",
    category: "games",
    rate: 16,
    deposit: 55,
    distance: "1.9 mi",
    image: "assets/listing-croquet-set.png",
    tags: ["Backyard", "Party", "Family game"]
  },
  {
    id: "pool-volleyball-net",
    title: "Pool volleyball net",
    meta: "Pool net, ball, anchors, storage bag",
    category: "games",
    rate: 20,
    deposit: 70,
    distance: "3.3 mi",
    image: "assets/listing-pool-volleyball-net.png",
    tags: ["Pool", "Party", "Summer"]
  },
  {
    id: "portable-generator-compact",
    title: "Quiet camping generator",
    meta: "Compact inverter generator, extension cord",
    category: "power",
    rate: 35,
    deposit: 250,
    distance: "2.4 mi",
    image: "assets/listing-generator-compact.png",
    tags: ["Power", "Camping", "Events"]
  },
  {
    id: "portable-generator-large",
    title: "Large event generator",
    meta: "Wheeled generator for parties and backup power",
    category: "power",
    rate: 55,
    deposit: 350,
    distance: "4.1 mi",
    image: "assets/listing-generator-large.png",
    tags: ["Power", "Wheeled", "High output"]
  },
  {
    id: "baseball-pitching-machine",
    title: "Baseball pitching machine",
    meta: "Machine, ball bucket, extension cord",
    category: "sports",
    rate: 48,
    deposit: 275,
    distance: "2.2 mi",
    image: "assets/listing-baseball-pitching-machine.png",
    tags: ["Baseball", "Practice", "Ball bucket"]
  },
  {
    id: "softball-pitching-machine",
    title: "Softball pitching machine",
    meta: "Softball machine, yellow balls, power cord",
    category: "sports",
    rate: 50,
    deposit: 280,
    distance: "3.7 mi",
    image: "assets/listing-softball-pitching-machine.png",
    tags: ["Softball", "Training", "Weekend"]
  },
  {
    id: "kids-winter-bundle",
    title: "Kids winter bundle",
    meta: "Moon boots, gloves, hats, goggles",
    category: "winter",
    rate: 26,
    deposit: 100,
    distance: "1.7 mi",
    image: "assets/listing-kids-winter-bundle.png",
    tags: ["Kids", "Snow trip", "Warm gear"]
  },
  {
    id: "sleds-and-snow-play",
    title: "Sleds and snow play kit",
    meta: "Two sleds, gloves, goggles, snow toys",
    category: "winter",
    rate: 24,
    deposit: 90,
    distance: "2.9 mi",
    image: "assets/listing-sleds-snow-play.png",
    tags: ["Sleds", "Snow day", "Family"]
  },
  {
    id: "ski-clothing-bundle",
    title: "Ski clothing bundle",
    meta: "Ski bibs, jackets, gloves, hats",
    category: "winter",
    rate: 38,
    deposit: 180,
    distance: "4.8 mi",
    image: "assets/listing-ski-clothing-bundle.png",
    tags: ["Ski bibs", "Jackets", "Cold weather"]
  },
  {
    id: "lake-towable-pack",
    title: "Lake towable pack",
    meta: "Towable tubes, rope, pump, lake bag",
    category: "water",
    rate: 44,
    deposit: 175,
    distance: "3.1 mi",
    image: "assets/listing-lake-towable-pack.png",
    tags: ["Towable", "Inner tubes", "Lake"]
  },
  {
    id: "kneeboard-and-rope",
    title: "Towable kneeboard",
    meta: "Kneeboard, tow rope, vest, storage bag",
    category: "water",
    rate: 32,
    deposit: 145,
    distance: "3.9 mi",
    image: "assets/listing-kneeboard-rope.png",
    tags: ["Kneeboard", "Tow rope", "Lake"]
  },
  {
    id: "water-skis",
    title: "Water skis",
    meta: "Pair of skis, rope, fitted carry bag",
    category: "water",
    rate: 34,
    deposit: 160,
    distance: "5.2 mi",
    image: "assets/listing-water-skis.png",
    tags: ["Water skis", "Boat day", "Classic"]
  },
  {
    id: "wake-surf-board",
    title: "Wake surf board",
    meta: "Wake surf board, rope, board sock",
    category: "water",
    rate: 46,
    deposit: 240,
    distance: "6.0 mi",
    image: "assets/listing-wake-surf-board.png",
    tags: ["Wake surf", "Board", "Premium"]
  }
];

const grid = document.querySelector("#listing-grid");
const chips = document.querySelectorAll(".chip");
const itemSearch = document.querySelector("#item-search");
const selectedTitle = document.querySelector("#selected-title");
const selectedMeta = document.querySelector("#selected-meta");
const dailyRate = document.querySelector("#daily-rate");
const deposit = document.querySelector("#deposit");
const fee = document.querySelector("#fee");
const total = document.querySelector("#total");
const rentalDays = document.querySelector("#rental-days");
const pickupTime = document.querySelector("#pickup-time");
const returnTime = document.querySelector("#return-time");
const ownerPrice = document.querySelector("#owner-price");
const ownerValue = document.querySelector("#owner-value");
const listingPreview = document.querySelector("#listing-preview");
const profileForm = document.querySelector("#profile-form");
const profileName = document.querySelector("#profile-name");
const profileArea = document.querySelector("#profile-area");
const previewName = document.querySelector("#preview-name");
const previewArea = document.querySelector("#preview-area");
const profileAvatar = document.querySelector("#profile-avatar");
const newItemTitle = document.querySelector("#new-item-title");
const aiCategory = document.querySelector("#ai-category");
const newItemRate = document.querySelector("#new-item-rate");
const newItemValue = document.querySelector("#new-item-value");
const newItemMeta = document.querySelector("#new-item-meta");
const newItemPickup = document.querySelector("#new-item-pickup");
const newItemCondition = document.querySelector("#new-item-condition");
const newItemPhoto = document.querySelector("#new-item-photo");
const ownerTerms = document.querySelector("#owner-terms");
const previewItemTitle = document.querySelector("#preview-item-title");
const previewItemMeta = document.querySelector("#preview-item-meta");
const previewItemRate = document.querySelector("#preview-item-rate");
const previewItemDeposit = document.querySelector("#preview-item-deposit");
const newListingImage = document.querySelector("#new-listing-image");
const publishStatus = document.querySelector("#publish-status");
const reserveButton = document.querySelector("#reserve-button");
const reservationModal = document.querySelector("#reservation-modal");
const reservationCopy = document.querySelector("#reservation-copy");
const smsPreviewText = document.querySelector("#sms-preview-text");
const modalListLink = document.querySelector("#modal-list-link");
const garagePins = document.querySelectorAll(".garage-pin");
const garageItemTitle = document.querySelector("#garage-item-title");
const garageItemDetail = document.querySelector("#garage-item-detail");
const garageRate = document.querySelector("#garage-rate");
const garageDays = document.querySelector("#garage-days");
const garageMonthly = document.querySelector("#garage-monthly");
const garageTotal = document.querySelector("#garage-total");

let selectedListing = listings[0];
let activeFilter = "all";
let uploadedListingImage = "assets/listing-backpacking-kit.png";

const garageItems = {
  generator: {
    title: "Generator",
    detail: "Useful for camping, tailgates, events, and short-term backup power.",
    rate: 35,
    days: 4
  },
  trimmer: {
    title: "Weed trimmer",
    detail: "A classic occasional-use item neighbors need for one cleanup day, not permanent storage.",
    rate: 20,
    days: 3
  },
  "pressure-washer": {
    title: "Pressure washer",
    detail: "Driveways, patios, trash bins, and weekend cleanup projects make this a strong rental candidate.",
    rate: 30,
    days: 4
  },
  canopy: {
    title: "Pop-up canopy",
    detail: "Birthday parties, sports weekends, yard sales, and cookouts all need shade for a day.",
    rate: 24,
    days: 4
  },
  tables: {
    title: "Folding tables & chairs",
    detail: "Easy party and event rentals with low setup friction and frequent neighborhood demand.",
    rate: 28,
    days: 4
  },
  cooler: {
    title: "Large cooler",
    detail: "Perfect for lake days, parties, camping, and team events when someone needs extra capacity.",
    rate: 18,
    days: 4
  },
  ladder: {
    title: "Extension ladder",
    detail: "Often needed for a single home project, then stored unused for months.",
    rate: 16,
    days: 3
  },
  sports: {
    title: "Sports gear",
    detail: "Balls, helmets, practice nets, and training gear can rent for practices, parties, and weekend games.",
    rate: 22,
    days: 4
  }
};

function money(value) {
  return `$${Math.round(value).toLocaleString()}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}

function initials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return (parts[0]?.[0] || "R") + (parts[1]?.[0] || "T");
}

function suggestedDeposit(rate, value) {
  return Math.max(rate * 2, value * 0.3);
}

function inferCategory(text) {
  const value = text.toLowerCase();
  const categoryRules = [
    ["winter", ["winter", "snow", "sled", "ski bib", "ski jacket", "boots", "gloves", "goggles", "moon"]],
    ["water", ["raft", "paddleboard", "lake", "towable", "kneeboard", "inner tube", "water ski", "wake", "surf", "float", "pool"]],
    ["power", ["generator", "power", "inverter", "extension cord"]],
    ["sports", ["pitching", "baseball", "softball", "fishing", "pole", "tackle", "ball", "helmet", "practice"]],
    ["games", ["croquet", "volleyball", "party", "game", "tables", "chairs"]],
    ["shade", ["canopy", "shade", "tent wall"]],
    ["camping", ["tent", "sleeping bag", "cooler", "camp", "backpack", "stove", "lantern"]]
  ];
  return categoryRules.find(([, keywords]) => keywords.some((keyword) => value.includes(keyword)))?.[0] || "household";
}

function rentalDayCount() {
  const start = new Date(pickupTime.value);
  const end = new Date(returnTime.value);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) {
    return 1;
  }
  return Math.max(1, Math.ceil((end - start) / 86400000));
}

function updateBooking() {
  const days = rentalDayCount();
  const subtotal = selectedListing.rate * days;
  const platformFee = Math.max(6, subtotal * 0.12);

  selectedTitle.textContent = selectedListing.title;
  selectedMeta.textContent = selectedListing.meta;
  dailyRate.textContent = money(selectedListing.rate);
  deposit.textContent = money(selectedListing.deposit);
  rentalDays.textContent = String(days);
  fee.textContent = money(platformFee);
  total.textContent = money(subtotal + platformFee);
}

function updateGarageDetail(key) {
  const item = garageItems[key] || garageItems.generator;
  garagePins.forEach((pin) => pin.classList.toggle("is-active", pin.dataset.garageItem === key));
  garageItemTitle.textContent = item.title;
  garageItemDetail.textContent = item.detail;
  garageRate.textContent = `${money(item.rate)}/day`;
  garageDays.textContent = `${item.days} days/mo`;
  garageMonthly.textContent = `${money(item.rate * item.days)}/mo`;
}

function renderListings(filter = "all") {
  activeFilter = filter;
  const query = itemSearch.value.trim().toLowerCase();
  const visible = listings.filter((item) => {
    const categoryMatch = filter === "all" || item.category === filter;
    const searchable = [
      item.title,
      item.meta,
      item.category,
      ...item.tags
    ].join(" ").toLowerCase();
    return categoryMatch && (!query || searchable.includes(query));
  });

  if (!visible.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No exact matches yet</h3>
        <p>Try searching for a broader item like “winter,” “generator,” “water,” “sports,” or “party.”</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = visible.map((item, index) => `
    <article class="listing-card">
      <div class="listing-visual">
        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)} rental listing photo">
      </div>
      <div class="listing-body">
        <div class="listing-top">
          <div>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.meta)}</p>
          </div>
          <span class="rate">${money(item.rate)}/day</span>
        </div>
        <div class="tag-row">
          <span>${escapeHTML(item.distance)}</span>
          ${item.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}
        </div>
        <button class="select-link" type="button" data-id="${escapeHTML(item.id)}">Select</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".select-link").forEach((button) => {
    button.addEventListener("click", () => {
      selectedListing = listings.find((item) => item.id === button.dataset.id) || listings[0];
      updateBooking();
      document.querySelector("#booking-title").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setFilter(filter) {
  chips.forEach((chip) => chip.classList.toggle("is-active", chip.dataset.filter === filter));
  renderListings(filter);
}

function updateOwnerPreview() {
  const price = Number(ownerPrice.value) || 0;
  const value = Number(ownerValue.value) || 0;
  listingPreview.textContent = `${money(price)}/day with a suggested ${money(suggestedDeposit(price, value))} deposit`;
}

function updateProfilePreview() {
  const name = profileName.value || "Rent This member";
  previewName.textContent = name;
  previewArea.textContent = profileArea.value || "Neighborhood pending";
  profileAvatar.textContent = initials(name).toUpperCase();
}

function updateNewListingPreview() {
  const rate = Number(newItemRate.value) || 0;
  const value = Number(newItemValue.value) || 0;
  const suggestedCategory = inferCategory(`${newItemTitle.value} ${newItemMeta.value}`);
  previewItemTitle.textContent = newItemTitle.value || "Untitled rental item";
  previewItemMeta.textContent = newItemMeta.value || "Description pending.";
  previewItemRate.textContent = `${money(rate)}/day`;
  previewItemDeposit.textContent = `${money(suggestedDeposit(rate, value))} deposit`;
  aiCategory.textContent = suggestedCategory.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function publishNewListing(event) {
  event.preventDefault();
  const rate = Number(newItemRate.value) || 1;
  const value = Number(newItemValue.value) || rate * 4;
  const title = newItemTitle.value.trim() || "New rental listing";
  const meta = newItemMeta.value.trim() || "Owner-created rental listing.";

  if (!ownerTerms.checked) {
    publishStatus.textContent = "Check the launch-approved item confirmation before publishing.";
    publishStatus.classList.remove("is-live");
    return;
  }

  const newListing = {
    id: `owner-${Date.now()}`,
    title,
    meta,
    category: inferCategory(`${title} ${meta}`),
    rate,
    deposit: suggestedDeposit(rate, value),
    distance: "New",
    image: uploadedListingImage,
    tags: [newItemPickup.value, newItemCondition.value, "Owner posted"]
  };

  listings.unshift(newListing);
  selectedListing = newListing;
  setFilter("all");
  updateBooking();
  publishStatus.textContent = `${title} is live in the sample marketplace.`;
  publishStatus.classList.add("is-live");
  document.querySelector("#browse").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openReservationModal() {
  const days = rentalDayCount();
  reservationCopy.textContent = `${selectedListing.title} is reserved for ${days} ${days === 1 ? "day" : "days"}. Pickup details and owner contact would be sent by text in the full product.`;
  smsPreviewText.textContent = `Rent This: ${selectedListing.title} is reserved. Pickup and return details are ready. Have items sitting unused? List them and earn.`;
  reservationModal.classList.add("is-open");
  reservationModal.setAttribute("aria-hidden", "false");
}

function closeReservationModal() {
  reservationModal.classList.remove("is-open");
  reservationModal.setAttribute("aria-hidden", "true");
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});

itemSearch.addEventListener("input", () => renderListings(activeFilter));
pickupTime.addEventListener("change", updateBooking);
returnTime.addEventListener("change", updateBooking);
ownerPrice.addEventListener("input", updateOwnerPreview);
ownerValue.addEventListener("input", updateOwnerPreview);
profileName.addEventListener("input", updateProfilePreview);
profileArea.addEventListener("input", updateProfilePreview);
newItemTitle.addEventListener("input", updateNewListingPreview);
newItemRate.addEventListener("input", updateNewListingPreview);
newItemValue.addEventListener("input", updateNewListingPreview);
newItemMeta.addEventListener("input", updateNewListingPreview);
newItemPhoto.addEventListener("change", () => {
  const file = newItemPhoto.files?.[0];
  if (!file) {
    return;
  }
  uploadedListingImage = URL.createObjectURL(file);
  newListingImage.src = uploadedListingImage;
});
profileForm.addEventListener("submit", publishNewListing);
reserveButton.addEventListener("click", openReservationModal);
reservationModal.querySelectorAll("[data-close-modal]").forEach((control) => {
  control.addEventListener("click", closeReservationModal);
});
garagePins.forEach((pin) => {
  pin.addEventListener("click", () => updateGarageDetail(pin.dataset.garageItem));
  pin.addEventListener("mouseenter", () => updateGarageDetail(pin.dataset.garageItem));
});
modalListLink.addEventListener("click", closeReservationModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && reservationModal.classList.contains("is-open")) {
    closeReservationModal();
  }
});

renderListings();
updateBooking();
updateOwnerPreview();
updateProfilePreview();
updateNewListingPreview();
updateGarageDetail("generator");
