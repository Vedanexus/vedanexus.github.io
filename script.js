<script>
(function () {
  const btn = document.getElementById("darkToggle");
  const saved = localStorage.getItem("mode");
  if (saved === "dark") document.body.classList.add("dark");

  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "mode",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }
})();
</script>
