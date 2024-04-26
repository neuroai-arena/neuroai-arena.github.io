---
title: "ARENA - Talks and Events"
layout: homelay
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
    <b><h4> {{talks.title}} </h4></b>
    <h4>{{talks.speaker}},  {{talks.date}}</h4>
    <h5> {{talks.location}} </h5>
    <p>
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Description
    </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        {{talks.abstract}}
      </div>
    </div>
  {% assign number_printed = number_printed | plus: 1 %}
  </div>
  {% endfor %}
</div>