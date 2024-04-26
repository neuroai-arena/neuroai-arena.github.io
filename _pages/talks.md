---
title: "ARENA - Talks and Events"
layout: homelay
permalink: /talks/
---

# Talks and Events


{% assign i = 1 %}

{% for talks in site.data.talks %}

<b><h4> {{talks.title}} </h4></b>
<h4>{{talks.speaker}},  {{talks.date}}</h4>
<h5> {{talks.location}} </h5>
<p>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample{{ i }}" aria-expanded="false" aria-controls="collapseExample{{ i }}">
  Description
</button>
</p>
<div class="collapse" id="collapseExample{{ i }}">
  <div class="card card-body">
    {{talks.abstract}}
  </div>
</div>
{% assign assign = assign | plus: 1 %}
{% endfor %}
