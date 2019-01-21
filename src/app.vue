<template>
  <div>
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
import { someVar, Point } from "./type";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  // 初始化数据
  msg: string = someVar;
  obj: Point = {
    x: 1,
    y: "abc"
  };
  // 声明周期钩子
  mounted() {
    this.greet();
    console.log(this.obj);
  }

  // 计算属性
  get computedMsg() {
    return "computed " + this.msg;
  }

  // 方法
  greet() {
    console.log("greeting: " + this.msg);
  }
}
</script>