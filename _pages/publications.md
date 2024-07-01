---
author_profile: false
excerpt: "ARENA -- Publications."
sitemap: false
permalink: /publications/
---


---
excerpt: "Publications"
permalink: publications/
classes: wide
years: [2024,2023,2022,2021,2020,2019,2018,2017,2016, 2015]
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