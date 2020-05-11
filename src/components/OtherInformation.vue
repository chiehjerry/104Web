<template>
  <div class="row">
    <div class="col-md-6" v-for="item in otherData" :key="item.id">
      <div class="card bg-dark text-white">
        <img class="card-img" :src="item.bkImage" alt="Card image" />
        <div class="overlay">
          <div class="hostPhoto">
            <img :src="item.host.picture" alt />
          </div>
          <div class="infoLocation">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.location.city}}</p>
          </div>
          <div class="infoFeeRank">
            <p class="card-text">NT$ {{item.fee}}</p>
            <p class="card-text" v-if="item.rank>0">{{item.rank}} &#9733;</p>
            <p class="card-text" v-else>尚未評論</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    otherData: {
      type: Array
    }
  }
};
</script>


<style>
.card {
  border: 0;
  margin: 5px -10px 5px;
}

.card img {
  height: 234px;
}

.card {
  position: relative;
}
.overlay {
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.overlay img {
  height: 3.5em;
  width: 3.5em;
  border-radius: 50%;
}

.overlay h5,
.overlay p {
  margin-bottom: 0;
}

.overlay .hostPhoto {
  flex: 1;
}
.overlay .infoLocation {
  flex: 5;
}

.overlay .infoFeeRank {
  flex: 2;
}

.overlay:hover {
  background-color: #ed6c1f;
}
</style>
