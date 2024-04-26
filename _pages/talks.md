---
title: "ARENA - Talks and Events"
permalink: /talks/
---
<style>

.show-hide-text {
  display: flex;
  flex-wrap: wrap;
}

.show-hide-text a {
  order: 2;
}

.show-hide-text p {
  position: relative;
  overflow: hidden;
  max-height: 60px; // The Height of 3 rows
}

.show-hide-text p {
  display: -webkit-box;
  -webkit-line-clamp: 3; // 3 Rows of text
  -webkit-box-orient: vertical;
}

.show-less {
  display: none;
}

.show-less:target {
  display: block;
}

.show-less:target ~ p {
  display: block;
  max-height: 100%;
}

.show-less:target + a {
  display: none;
}
</style>

# Talks and Events

<div class="row">
  {% for talks in site.data.talks %}
  <div class="col-md-6">
    <h4> <b>{{talks.title}}</b> </h4>
    <h4>{{talks.speaker}},  {{talks.date}}</h4>
    <h5> {{talks.location}} </h5>

          {{talks.abstract}}

    </div>
  </div>
  {% endfor %}
</div>
