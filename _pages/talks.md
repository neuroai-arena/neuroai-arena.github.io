---
author_profile: false
classes: wide
permalink: /talks/
---

<style>
  .buttons {
  width: 960px;
  margin: 0 auto;
}

.btn {
  display: inline-block;
  margin: 0 auto;
}
</style> 

<h4> <b> Talks and Events </b></h4>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

{% assign i = 1 %}
<div class="row">
  {% for talks in site.data.talks %}
    <h5 style='font-weight:bold'> {{talks.title}} </h5>
    <p>
      <b>Speaker: </b> {{talks.speaker}} <br>
      <b>Date: </b>  {{talks.date}}<br>
      <b>Place:</b> {{talks.location | markdownify | remove: '<p>' | remove: '</p>'}}<br>
    </p>
    <div class="buttons">
        {if talks.abstract  != blank}
        <button class="btn btn-primary" style=' text-align: center' type="button" data-toggle="collapse" data-target="#collapseExample{{ i }}" aria-expanded="false" aria-controls="collapseExample{{ i }}">
          Description
        </button>
        {endif}
        {if talks.recording  != blank}
        <button type="button" class="btn btn-primary"> <a href="{{talks.recording}}" style="color: white;"> Recording</a></button>
        {endif}
      <div class="collapse" id="collapseExample{{ i }}">
        <p>
          {{talks.abstract}}
        </p>
      </div>
    </div>
  {% assign i = i | plus: 1 %}
  {% endfor %}
</div>