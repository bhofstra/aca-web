<!-- function for button bibtex -->

<script>
function copyBibtex(id) {
  const code = document.getElementById(id);
  if (code) {
    navigator.clipboard.writeText(code.innerText).then(() => {
      alert("✅ BibTeX copied!");
    });
  }
}
</script>

<script>
// altmetric.js
const script = document.createElement('script');
script.src = 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js';
script.async = true;
document.head.appendChild(script);
</script>
