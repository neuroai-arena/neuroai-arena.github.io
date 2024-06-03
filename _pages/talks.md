---
author_profile: false
classes: wide
permalink: /talks/
---
$text-color: #2F3E46;
$muted-text-color: #52796F;
$primary-color: #84A98C;
$border-color: mix(#fff, #393e46, 75%);
$footer-background-color: $primary-color;
$link-color: #393e46;
$masthead-link-color: $text-color;
$masthead-link-color-hover: $text-color;
$masthead-background-color: #CAD2C5;
$navicon-link-color-hover: mix(#fff, $text-color, 80%);

.page__footer {
  color: #CAD2C5 !important; // override
<style>
#boxcolor {
  background-color: #84A98C;
  border-radius:10px;
  padding: 20px;
} 
</style> 

<h3 style="text-align:center;font-weight:bold"> Talks and Events </h3>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

{% assign i = 1 %}
{% for talks in site.data.talks %}
<div style="margin-bottom: 20px;">
  <div id="boxcolor">
    <h5 style='font-weight:bold;color:#CAD2C5"'> {{talks.title}} </h5>
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
