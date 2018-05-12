<template>
  <div>
    <button class="zan-btn">取消订单</button>
    <TopTips/>
    <div class="weui-article">
  <div class="weui-article__h1">大标题</div>
  <div class="weui-article__section">
    <div class="weui-article__title">章标题</div>
    <div class="weui-article__section">
      <div class="weui-article__h3">1.1 节标题</div>
      <div class="weui-article__p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div class="weui-article__p">
        images
      </div>
    </div>
  </div>
</div>
    <todolist v-on:addTodo='saveValue'
    v-on:toggleItem='toggleItem'
    v-on:removeItem='removeItem'
    v-bind='motto'></todolist>
  </div>
</template>

<script>
import todolist from '@/components/todo-list.vue'
import TopTips from 'mpvue-zanui/src/components/zan/toptips'

export default {
  data () {
    return {
      motto: {
        say: 'Hello',
        items: wx.getStorageSync('items') || [],
      },
    }
  },
  components: {
    todolist,
    TopTips,
  },
  created: function() {
    console.log('todo', this)
  },
  methods: {
    saveValue(val) {
      console.log('todo', this.$children[0].showZanTopTips('123312'))
      this.motto.items.push({
        name: val,
        completed: false,
      })
      wx.setStorageSync('items', this.motto.items)
    },
    toggleItem(index) {
      this.motto.items[index].completed = !this.motto.items[index].completed
      wx.setStorageSync('items', this.motto.items)
    },
    removeItem(index) {
      this.motto.items.splice(index, 1)
      wx.setStorageSync('items', this.motto.items)
    }
  }
}
</script>

<style scoped>

</style>
