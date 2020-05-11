<template>
  <div>
    <div class="first">
      <img src="../assets/home1.png" alt="home" />
      <span>
        <router-link to="/">首頁</router-link>/開班授課
      </span>
    </div>
    <ul class="nav nav-tabs mb-4">
      <li class="nav-item">
        <h4>開班授課</h4>
      </li>
      <li class="nav-item">
        <router-link to="/tour" class="nav-link">導覽</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/other" class="nav-link">才藝</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cooking" class="nav-link">烹飪</router-link>
      </li>
    </ul>
  </div>
</template>



<style>
.first img {
  width: 2em;
}

.first span {
  font-size: 18px;
}

ul h4 {
  padding-top: 8px;
  margin-right: 50px;
}

ul a {
  font-size: 20px;
}
</style>