<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="left">
            <div class="row">
              <div class="col-md-6 col-sm-12 left_1">
                <img src="../assets/footerLogo.png" id="footerLogo" alt />
              </div>
              <div class="col-md-3 col-sm-12">
                <img src="../assets/fb.png" id="fb" alt />
                <p>粉絲團</p>
              </div>
              <div class="col-md-3 col-sm-12">
                <img src="../assets/line.png" id="line" alt />
                <p>官方帳號</p>
              </div>
              <div class="col-md-12 col-sm-12 copyRight">
                <p>&copy;2020 一零四資訊科技股份有限公司</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="right">
            <div class="row">
              <div class="col-md-3 col-sm-12">
                <p>關於我們</p>
                <p>常見問題</p>
              </div>
              <div class="col-md-3 col-sm-12">
                <p>服務條款</p>
                <p>新手教學</p>
              </div>
              <div class="col-md-3 col-sm-12">
                <p>老師合約</p>
                <p>聯絡我們</p>
              </div>
              <div class="col-md-3 col-sm-12">
                <p>隱私權政策</p>
                <p>104企業網站</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  background-size: cover;
  background-color: #ed6c1f;
}

.left {
  margin-top: 50px;
}

.right {
  margin-top: 100px;
}

#footerLogo {
  width: 12em;
  display: block;
  margin: auto;
}

#fb,
#line {
  width: 4em;
  display: block;
  margin: auto;
}

footer .left p {
  color: white;
  text-align: center;
}

footer .right p {
  color: white;
  text-align: center;
  font-size: 16px;
}

.copyRight {
  font-size: 20px;
}

@media (max-width: 768px) {
  .right {
    margin-top: 10px;
  }
}
</style>

