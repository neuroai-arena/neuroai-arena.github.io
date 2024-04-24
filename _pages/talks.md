---
title: "ARENA - Talks and Events"
layout: gridlay
permalink: /talks/
---

<style>
 div.text-container {
  margin: 0 auto;
  width: 75%;
}

.hideContent {
  overflow: hidden;
  line-height: 1em;
  height: 2em;
}

.showContent {
  line-height: 1em;
  height: auto;
}

.showContent {
  height: auto;
}

.show-more {
  padding: 10px 0;
  text-align: center;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
# Talks and Events

<div>
  {% for talks in site.data.talks %}
  <h4><b>{{talks.title}}</b></h4>
  <h4>{{talks.speaker}},  {{talks.date}}</h4>
  <h5> {{talks.location}} </h5>
  <<div class="content hideContent">
    <p> {{talks.abstract}} </p>
  </div>
    <div class="show-more">
    <a href="#">Show more</a>
  </div>
  {% endfor %}
  </div>
</div>
