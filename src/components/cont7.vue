<template>
  <div class="page">
    <div class="lie-top">
      <p>共 <span>23</span> 个商品 </p>
    </div>
    <div class="lie-con">
      <div class="lie-left">
        <div class="lie-left-t">
          <ul>
            <li><span v-for="y in msg1">{{y.name}}</span> </li>
            <li><span v-for="y in msg2">{{y.name}}</span></li>
            <li><span v-for="y in msg3">{{y.name}}</span></li>
          </ul>
        </div>
        <div class="lie-left-b">
          <div class="tab">
            <div class="tab-header">
              <ul>
                <li>热门推荐</li>
                <li>最近开场</li>
                <li>最近上架</li>
              </ul>
              <ul>
                <li>
                  <img src="../assets/c8.png" />
                </li>
                <li><img src="../assets/c9.png" /></li>
              </ul>
            </div>
            <div class="tab-cont1">
              <div class="contt">
                <ul>
                  <li v-for="y in msg5" class="con3">
                    
                    <div><router-link to="/cont8"> <img :src="y.ii" /> </router-link></div>
                    <div>
                      <p>{{y.name1}}</p>
                      <p>{{y.name2}}</p>
                      <p>{{y.name3}}</p>
                      <p>{{y.name4}}</p>
                      <p><span>{{y.name5}}</span> 售票中</p>
                      <p>{{y.name6}}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="contt">内容2</div>
              <div class="contt">内容3</div>
            </div>
          </div>
          <div class="ye">
            <ul>
             <p>共23条</p>
              <li>&lt;</li>
              <li>1</li>
              <li>2</li>
              <li>&gt;</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lie-right">
        <p>您可能还喜欢</p>
        <ul>
          <li v-for="y in msg4" class="con1">
            <div> <img :src="y.ii" /> </div>
            <div>
              <p>{{y.name1}}</p>
              <p>{{y.name2}}</p>
              <p>{{y.name3}}</p>
              <p><span>{{y.name4}}</span>起</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">
  @import url("../style/cont7.css");
</style>
<script src="../script/cont7.js"></script>
