---
classes: wide
author_profile: false
excerpt: "ARENA: Team members"
sitemap: false
permalink: /team/
---

<h3 style="text-align:center;font-weight:bold">Meet the Team</h3>

<div class="container">
  <div class="row" style="text-align:center">
    {% for member in site.data.team_members %}
    <div class="col-md-4" style="display: flex; justify-content: center;">
      <div style="border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); height: 300px; width: 90%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <a href="{{member.url}}">
          <div style="height: 130px; width: 100px; overflow: hidden; border-radius: 10%; margin-top: 15px;">
            <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" style="height: 130px;width: 100px; object-fit: cover;">
          </div>
        </a>
        <h6 style="margin-top: 15px;"><b>{{member.name }}</b></h6>
        <h6>{{member.title}}</h6>
        <p>{{ member.affiliation }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<style> 
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>