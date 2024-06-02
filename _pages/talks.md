---
author_profile: false
classes: wide
permalink: /talks/
---

<style>
#boxcolor {
  background-color: #F5F5F5;
  border-radius:20px;
  padding: 10px;
} 

</style> 

<h4> <b> Talks and Events </b></h4>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

{% assign i = 1 %}
{% for talks in site.data.talks %}
  <div id="boxcolor">
    <h5 style='font-weight:bold'> {{talks.title}} </h5>
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
  <br>
{% endfor %}
