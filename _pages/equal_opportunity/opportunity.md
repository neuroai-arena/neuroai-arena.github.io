---
title: <h3 style="text-align:center;font-weight:bold"> Equal Opportunities </h3>
permalink: /opportunities/
entries_layout: grid
author_profile: false
classes: wide
---



<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    text-align: center;
  }
  .grid-item {
    position: relative;
    overflow: hidden;
  }
  .grid-item img {
    width: 100%;
    transition: 0.5s ease;
  }
  .grid-item:hover img {
    filter: brightness(50%);
  }
  .grid-item .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
</style>
<div class="grid-container">
  <div class="grid-item">
    <a href="/opportunities/events">
      <img src="../assets/images/posts/1.jpg" alt="Events">
      <div class="text">Events</div>
    </a>
  </div>
  <div class="grid-item">
    <a href="/opportunities/equal_opportunities">
      <img src="../assets/images/posts/2.jpg" alt="Equal Opportunity">
      <div class="text">Equal Opportunity</div>
    </a>
  </div>
  <div class="grid-item">
    <a href="/opportunities/gowomen">
      <img src="../assets/images/posts/3.jpg" alt="GoWomen!">
      <div class="text">GoWomen!</div>
    </a>
  </div>
</div>