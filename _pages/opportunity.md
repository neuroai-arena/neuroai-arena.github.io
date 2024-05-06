---
title: "ARENA - Equal Opportunities"
layout: homelay
permalink: /opportunities
---

# Equal Opportunity


{% assign i = 1 %}
<div class="row">
{% for tabs in site.equal_opp.tab %}
<div class="col-sm-6 clearfix">
<h4 style='font-weight: bold;'> {{tabs.tab}} </h4>
<h4>{{tabs.text}}</h4>
{% assign i = i | plus: 1 %}
</div>
{% endfor %}
</div>
