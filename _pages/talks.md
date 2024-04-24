---
title: "ARENA - Talks and Events"
layout: gridlay
excerpt: "ARENA - Talks and Events"
sitemap: false
permalink: /talks/
---
<style>

  .column {
    float: left;
    padding: 50px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    color: white;
  }

  .tab {
    padding: 20px;
    color: white;
  }

  .row:after {
    overflow: hidden;
    display: table;
    clear: both;
  }

  .closeButton {
    float: right;
    color: white;
    font-size: 35px;
    cursor: pointer;
  }
</style>
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
 <div  onclick="openGrid('expd1');">
  {{ talks.abstract}}

  <ul style="overflow: hidden">

  </ul>
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
<script>
      function openGrid(tabContent) {
        var i, x
        x = document.getElementsByClassName('tab')
        for (i = 0; i < x.length; i++) {
          x[i].style.display = 'none'
        }
        document.getElementById(tabContent).style.display = 'block'
      }
    </script>