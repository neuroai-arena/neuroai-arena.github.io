---
author_profile: false
classes: wide
permalink: /talks/
---
<h2> <b> Talks and Events </b></h2>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

{% assign i = 1 %}
<div class="row">
  {% for talks in site.data.talks %}
    <h5 style='font-weight:bold'> {{talks.title}} </h5>
    <p> <b>Speaker:</b> {{talks.speaker}}</p >
    <p><b>Date: </b> <span> {{talks.date}}</span><br></p >
    <p><b>Place:</b> <span>{{talks.location | markdownify | remove: '<p>' | remove: '</p>'}}</span></p >
    <p>
      <button class="btn btn-primary" style='display: inline-block; text-align: center' type="button" data-toggle="collapse" data-target="#collapseExample{{ i }}" aria-expanded="false" aria-controls="collapseExample{{ i }}">
        Description
      </button>
    </p>
    <div class="collapse" id="collapseExample{{ i }}">
      <p>
          {{talks.abstract}}
          </p>
    </div>
    <div>    
      {{if talks.recording  != blank}}
        <button type="button" class="btn btn-primary" style="display: inline-block;" > <a href="{{talks.recording}}" style="color: white;"> Recording</a></button>
      {{endif}}
    </div>
  {% assign i = i | plus: 1 %}
  {% endfor %}
</div>*