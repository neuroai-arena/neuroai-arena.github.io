var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content_collapse = this.nextElementSibling;
    if (content_collapse.style.display === "block") {
        content_collapse.style.display = "none";
    } else {
        content_collapse.style.display = "block";
    }
  });
} 