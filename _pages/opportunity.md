---
title: "ARENA - Equal Opportunity"
layout: homelay
permalink: /talks/
---

# Equal Opportunity


{% assign i = 1 %}
<div class="row">
{% for tabs in site.equal_opp.tab %}
<div class="col-sm-6 clearfix">
<h4 style='font-weight: bold;'> {{equal_opp.tab}} </h4>
<h4>{{equal_opp.text}}</h4>
{% assign i = i | plus: 1 %}
</div>
{% endfor %}
</div>