(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileHero = document.querySelector("[data-hero]");
  const mobileBusiness = document.querySelector("[data-business]");


  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileHero.classList.toggle("is-hidden");
    mobileBusiness.classList.toggle("is-up");
  });
})();