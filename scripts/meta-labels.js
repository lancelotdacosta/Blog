// Small UX tweak: Quarto labels the page date as "Published".
// This blog uses the date as a "last updated" indicator instead.
document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".quarto-title-meta-heading");
  for (const heading of headings) {
    const text = (heading.textContent || "").trim().toLowerCase();
    if (text === "published" || text === "date") {
      heading.textContent = "Last updated";
    }
  }
});

