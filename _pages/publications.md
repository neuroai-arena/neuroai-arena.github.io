---
author_profile: false
excerpt: "ARENA -- Publications."
sitemap: false
permalink: /publications/
---

<style>
.centeralign {
  text-align: center;
  color:#1F416F;
  font-weight: bold;
}
.centeralign2 {
  color:#1F416F;
  font-weight: bold;
}
</style>


<h6 class="centeralign2"> Project Publications</h6>

{% for y in page.years %}
  {% bibliography -f project_bublications -q @*[year={{y}}]* %}
{% endfor %}
[//]:  <h6 id="{{y}}" class="pubyear"><div class="centeralign2">{{y}}</div></h6>

<h6 class="centeralign2"> Background Publications</h6>

{% for y in page.years %}
  {% bibliography -f background_publications -q @*[year={{y}}]* %}
{% endfor %}
[//]:  <h6 id="{{y}}" class="pubyear"><div class="centeralign2">{{y}}</div></h6>