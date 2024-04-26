---
title: "ARENA - Talks and Events"
layout: homelay
permalink: /talks/
---

# Talks and Events


{% assign i = 1 %}

{% for talks in site.data.talks %}

<h4 style='font-weight: bold;'> {{talks.title}} </h4>
<h4>{{talks.speaker}},  {{talks.date}}</h4>
<h5> {{talks.location}} </h5>
<p>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample{{ i }}" aria-expanded="false" aria-controls="collapseExample{{ i }}">
  Description
</button>
</p>
<div class="collapse" id="collapseExample{{ i }}">
    {{talks.abstract}}
</div>
{% assign i = i | plus: 1 %}
{% endfor %}
