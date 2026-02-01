<script>
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("mode",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}
</script>
