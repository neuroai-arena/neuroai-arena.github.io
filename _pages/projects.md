---
title: "ARENA - Projects"
layout: gridlay
excerpt: "ARENA -- Projects."
sitemap: false
permalink: /projects/
---


# Projects

{% assign number_printed = 0 %}
{% for proj in site.data.projects %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ proj.title }}</pubtit>
  {% if proj.image %}
  <img src="{{ site.url }}{{ site.baseurl }}/images/projpic/{{ proj.image }}" class="img-responsive" width="33%" style="float: left" />
  {% endif %}
  <p ><b><em>{{ proj.pi }}</b></em><br>
  <em>{{ proj.students }}</em></p>
  <p align="justify">{{ proj.info }}</p>
 </div>
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

<p> &nbsp; </p>
