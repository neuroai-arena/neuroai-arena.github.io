---
author_profile: false
classes: wide
permalink: /talks/
---

<style>
#boxcolor {
  background-color: #CAD2C5;
  border-radius:10px;
  padding: 20px;
} 
</style> 

<h3 style="text-align:center;font-weight:bold"> Talks and Events </h3>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

{% assign i = 1 %}
{% assign sort_talks = site.data.talks | orderby: 'date_js' %}
{% for talks in sort_talks %}
<div style="margin-bottom: 20px;">
  <div id="boxcolor">
    <h5 style='font-weight:bold; color: #2F3E46'> {{talks.title}} </h5>
    <p>
      <b>Speaker: </b> {{talks.speaker}} <br>
      <b>Date: </b>  {{talks.date}}<br>
      <b>Place:</b> {{talks.location | markdownify | remove: '<p>' | remove: '</p>'}}
    </p>
    <div class="buttons">
      {% if talks.abstract  != blank %}
        <button class="btn btn-primary" style=' text-align: center'  data-toggle="collapse" data-target="#collapseExample{{ i }}" aria-expanded="false" aria-controls="collapseExample{{ i }}">
          Description
        </button>
      {% endif %}
      {% if talks.recording  != blank %}
        <a class="btn btn-secondary" href="{{talks.recording}}" style="color: white;text-decoration: none"> Recording</a>
      {% endif %}
      <div class="collapse" id="collapseExample{{ i }}">
        <p> {{talks.abstract}} </p>
      </div>
    </div>
    {% assign i = i | plus: 1 %}
  </div>
</div>
{% endfor %}
