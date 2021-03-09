<template>
  <main>
    <div id="left-container">
      <h1>MQTT - Home</h1>
      <form @submit.prevent="">
        <label>Hostname or IP Address:</label>
        <input type="text" v-model="state.host">
        <label>Port:</label>
        <input type="text" v-model="state.port">
        <label>Topic:</label>
        <input type="text" v-model="state.topic">
        <div>
          <button @click="mqttConnect">Connect</button>
          <button @click="mqttDisconnect">Disconnect</button>
        </div>
      </form>
    </div>
    <div id="right-container">
      <p v-for="(message, index) in state.messages" :key="index">{{message}}</p>
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue';
import mqtt from '../api/mqtt'

export default {
  setup() {
    const state = reactive({
      host: 'localhost',
      port: '1884',
      topic: '#',
      messages: [],
      user: {
        id: '123'
      }
    });

    const mqttConnect = () => {
      mqtt.launch(state.user.id, (state.topic, source) => {
        console.log('message: ', JSON.parse(source.toString()))
      })
    }

    const mqttDisconnect = () => {

    }

    return {
      state,
      mqttConnect,
      mqttDisconnect
    }
  }
}
</script>

<style lang="sass" scoped>
main
  display: grid
  grid-template-columns: 1fr 1fr
  grid-column-gap: 25px

  #left-container
    height: 100vh
    display: flex
    flex-direction: column

    h1
      position: relative
      top: 25%
      text-align: center
      left: 15%

    form
      display: flex
      flex-direction: column
      position: relative
      margin: 25px auto
      top: 45%
      left: 15%
      transform: translateY(-50%)

      label
        margin: 15px 0px 10px 2.5px

      input
        position: relative
        left: 0px
        width: 300px
        border: 1px solid #ededed
        border-radius: 3px
        padding: 5px

      div
        display: flex
        position: relative
        margin: auto

        button
          position: relative
          left: 0px
          width: 100px
          margin: 30px 5px
          border: 1px solid #ededed
          border-radius: 3px
          background-color: white
          padding: 7.5px 5px

        button:hover
          cursor: pointer

  #right-container
    width: 50%
    height: 60%
    background: #fcfcfc
    position: relative
    left: 35%
    top: 50%
    transform: translate(-50%, -50%)
    border: 1px solid #ededed
    border-radius: 5px


</style>