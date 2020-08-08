<template>
  <div class="page">
    <div class="cont1">
      <div class="cont1-l">
        <ul>
          <li v-for="y in msg">{{y.name}}</li>
        </ul>
      </div>
      <div class="cont1-r">
        <p>
          <router-link to="/cont2">戏剧</router-link>
          <router-link to="/cont3">体育</router-link>
          <router-link to="/cont4">亲子</router-link>
          <router-link to="/cont5">摇滚</router-link>
          <router-link to="/cont6">舞蹈古典</router-link>
        </p>
        <p>
          <img src="../assets/a1.png" />
        </p>
        <p>
          <span v-for="y in msg2">{{y.name}}</span>
        </p>
      </div>
    </div>
    <div class="rm">
      <p class="h">热门推荐</p>
      <ul>
        <li v-for="yr in msg3">
          <p>
            <img :src="yr.ii" />
          </p>
          <p>{{yr.name}}</p>
          <p>票价：<span>{{yr.s}}</span> 起</p>
        </li>
      </ul>
    </div>
    <ul class="list">
      <li v-for="y in msg8" class="lis-8">
        <div class="list-box">
          <div class="lis-2">
            <p class="lis-1">{{y.name1}}</p>
            <ol class="lis-5">
              <li><img :src="y.name" /></li>
              <div class="lis-3">
              <li v-for="y in msg4" >
                <div class="lis-6">
                  <div> <img :src="y.ii" /> </div>
                  <div>
                    <p>{{y.name1}}</p>
                    <p>2020/03/27~2020/03/31</p>
                    <p>{{y.name3}}</p>
                    <p>{{y.name4}}</p>
                  </div>
                </div>
              </li>
              </div>
            </ol>
          </div>
          <ul class="lis-4">
            <li v-for="y in msg5">{{y.name}}</li>
            <li v-for="y in msg6"> <img :src="y.name" /> </li>
          </ul>
        </div>

      </li>
    </ul>
  </div>
</template>
<style scoped="scoped">
  @import '../style/cont1.css';
</style>
<script src="../script/cont1.js">

</script>
