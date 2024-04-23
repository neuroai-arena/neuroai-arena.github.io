---
title: "ARENA - Talks and Events"
layout: gridlay
excerpt: "ARENA - Talks and Events"
sitemap: false
permalink: /talks/
---

# Talks and Events

{% assign number_printed = 0 %}
{% for talks in site.data.talks %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}
<div class="col-sm-6 clearfix">
  <h4><b>{{talks.title }}</b></h4>
  <h4>{{talks.speaker}},  {{talks.date}}</h4>
  <h5>{{ talks.location }}</h5>
  {{ talks.abstract}}

  <ul style="overflow: hidden">

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
