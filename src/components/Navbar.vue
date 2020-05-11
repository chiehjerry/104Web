<template>
  <nav class="navbar navbar-expand-lg line">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon">
        <img src="../assets/Menu.png" alt />
      </span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="../assets/diamond.png" /> 高年級老師，募集中！
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="../assets/doc.png" /> 建立課程
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <!--<nav class="navbar navbar-expand-lg fixed-top line">
    <div class="left_1">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" />
      </router-link>
    </div>

    <div class="right_1">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/diamond.png" /> 高年級老師，募集中！
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../assets/doc.png" /> 建立課程
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>-->
</template>



<script>
export default {
  name: "Navbar"
};
</script>

<style>
.line {
  border-width: 1px;
  border-bottom-style: solid;
  border-color: #d3d3d3;
  padding: 5px;
}

.navbar {
  display: flex;
  background-color: white;
}

.navbar-brand {
  flex: 50;
}

.navbar-brand img {
  width: 15em;
}

.navbar-nav img,
span img {
  width: 2em;
}

#navbarSupportedContent {
  margin-top: 10px;
}

button:focus {
  outline: none;
}
</style>


