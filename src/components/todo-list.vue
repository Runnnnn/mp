<template>
  <div class='container'>
    <h3>{{say}}</h3>
    <div>
        <div class='userinfo'>
            <input type="text" v-model='value' placeholder="请输入" class='input' focus='true'>
            <button @click='handleClick' size='mini' type='primary'>Add</button>
        </div>
      <ul>
          <li v-for='(item, index) in items' v-bind:key='index'>
              <span @click='handleToggle(index)' v-bind:class='{done: item.completed}' class='item'>{{index + 1}}、{{item.name}}</span>
              <button @click.prevent='handleRemove(index)' size='mini'>remove</button>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
    }
  },
  props: ['say', 'items'],
  methods: {
    handleClick() {
        if (this.value) {
            this.$emit('addTodo', this.value)
            this.value = ''
        }
    },
    handleToggle(index) {
        this.$emit('toggleItem', index)
    },
    handleRemove(index) {
        this.$emit('removeItem', index)
    }
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.done {
    color: red;
    text-decoration: line-through;
}
.item {
    font-size: 40rpx;
    line-height: 100rpx;
    display: inline-block;
    height: 100rpx;
    width: 550rpx;
}
.button {
    width: 160rpx;
    display: inline-block;
    height: 70rpx;
    font-size: 40rpx;
    background: #ccc;
    border-radius: 20rpx;
    text-align: center;
}
.input {
    display: inline-block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
}
</style>
