---
author_profile: false
excerpt: "ARENA -- Publications."
sitemap: false
permalink: /publications/
---


<h3 style="text-align:center;font-weight:bold">Projects Publications </h3>

{% for publi in site.data.project_publist %}

{% if publi.highlight == 1 %}
  <h2>Group highlights</h2>
  {% break %}
{% endif %}

{% endfor %}

<!-- show the highlighted publications -->

{% assign number_printed = 0 %}
{% for publi in site.data.project_publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


<!-- add space between the sections and add the subsection title if any are highlighted (otherwise no title, as just one "publications" section) -->

{% for publi in site.data.project_publist %}

{% if publi.highlight == 1 %}
  <p> &nbsp; </p>
  <h2>Full List of Related Publications</h2>
  {% break %}
{% endif %}

{% endfor %}

<!-- full list of publications (highlighted and unhighlighted) -->

{% for publi in site.data.project_publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}



# Background Publications

<!-- only show highlighted publications title if any publications are selected to be highlighted -->

{% for publi in site.data.publist %}

{% if publi.highlight == 1 %}
  <h2>Group highlights</h2>
  {% break %}
{% endif %}

{% endfor %}

<!-- show the highlighted publications -->

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


<!-- add space between the sections and add the subsection title if any are highlighted (otherwise no title, as just one "publications" section) -->

{% for publi in site.data.publist %}

{% if publi.highlight == 1 %}
  <p> &nbsp; </p>
  <h2>Full List of Related Publications</h2>
  {% break %}
{% endif %}

{% endfor %}

<!-- full list of publications (highlighted and unhighlighted) -->

{% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}

<p> &nbsp; </p>
