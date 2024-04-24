---
title: "ARENA - Talks and Events"
layout: gridlay
permalink: /talks/
---

<style>
 /* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content_collapse {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
} 
</style>

# Talks and Events

<div>
  {% for talks in site.data.talks %}
  <h4><b>{{talks.title}}</b></h4>
  <h4>{{talks.speaker}},  {{talks.date}}</h4>
  <h5> {{talks.location}} </h5>
  <button type="button" class="collapsible"> Open Collapsible </button>
  <div class="content_collapse">
    <p> {{talks.abstract}} </p>
  </div>
  {% endfor %}
  </div>
</div>
