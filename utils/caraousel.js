export const handleScrollClick = (
  direction,
  setScrollPosition,
  containerId,
  cardWidth
) => {
  const container = document.getElementById(containerId);
  const containerScrollPosition = container.scrollLeft;
  const containerWidth = container.offsetWidth;

  const visibleCards = Math.floor(containerWidth / cardWidth);
  const scrollWidth = cardWidth * visibleCards;

  let newPosition = containerScrollPosition;

  if (direction === "left") {
    newPosition -= scrollWidth;
  } else if (direction === "right") {
    newPosition += scrollWidth;
  }

  if (newPosition < 0) {
    newPosition = 0;
  } else if (newPosition > container.scrollWidth - containerWidth) {
    newPosition = container.scrollWidth - containerWidth;
  }

  setScrollPosition(newPosition);
  container.scrollTo({ left: newPosition, behavior: "smooth" });
};
