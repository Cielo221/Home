const navItems = document.querySelectorAll(".nav_item");

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    navItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.style.opacity = "0.5"; // 오버된 요소를 제외하고 모든 요소의 투명도를 0.5로 설정합니다.
      }
    });
    item.style.opacity = "1"; // 오버된 요소의 투명도를 1로 변경합니다.
  });

  item.addEventListener("mouseout", () => {
    navItems.forEach((otherItem) => {
      otherItem.style.opacity = "1"; // 마우스를 땐 경우 모든 요소의 투명도를 1로 설정합니다.
    });
  });
});
