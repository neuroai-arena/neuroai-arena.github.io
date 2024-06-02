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
<h6 style='text-align: center;font-weight:bold'> {{talks.title}} </h6>
 <b>Who and When?</b> {{talks.speaker}},  {{talks.date}} <br>
<b>Where?</b> <span>{{talks.location | markdownify | remove: '<p>' | remove: '</p>'}}</span>
<p>
<button class="btn btn-primary" style='text-align: center' type="button" data-toggle="collapse" data-target="#collapseExample{{ i }}" aria-expanded="false" aria-controls="collapseExample{{ i }}">
  Description
</button>
</p>
<div class="collapse" id="collapseExample{{ i }}">
<p>
    {{talks.abstract}}
    </p>
{{if talks.recording}}
    <a href="{{talks.recording}}" class="btn btn-primary">Recording</a>
{{endif}}
</div>
{% assign i = i | plus: 1 %}
</div>
{% endfor %}
</div>*