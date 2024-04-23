---
title: "ARENA - Team"
layout: gridlay
excerpt: "ARENA: Team members"
sitemap: false
permalink: /team/
---

# Team

{% assign number_printed = 0 %}
{% for talk in site.data.talks %}

<div class="row">
{% endif %}
<div class="col-sm-6 clearfix">
  <br>
  <h4><b>{{talk.title }}</b></h4>
  <h4>{{talk.speaker}}, {{talk.date}} </h4>
  <h5>{{ talk.abstract }} </h5>
  <h5>{{ talk.location }}</h5>

  <ul style="overflow: hidden">
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
