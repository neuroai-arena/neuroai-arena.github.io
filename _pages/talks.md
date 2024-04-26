---
title: "ARENA - Talks and Events"
permalink: /talks/
---

# Talks and Events

<div class="row">
  {% for talks in site.data.talks %}
  <div class="col-md-6">
    <p>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Button with data-target
    </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        {{talks.abstract}}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
