<template>
  <div>
    <canvas id="gameCanvas" ref="gameCanvas" width="1000" height="500" class="gameCanvas"
            @mousedown="mouseDown" @mouseup="mouseUp" @mousemove="mouseMove"></canvas>
  </div>
</template>

<script>
  import Controls from '../services/Controls';
  import Connection from '../services/Connection';

  export default {
    data() {
      return {
        controls: new Controls(),
        connection: new Connection()
      };
    },

    created() {
      window.addEventListener('keyup', this.controls.keyUp);
      window.addEventListener('keydown', this.controls.keyDown);
    },

    mounted() {
      Self.canvas = this.$refs.gameCanvas.getContext("2d");
    },

    methods: {
      mouseDown(e) {
        this.controls.mouseDown(e);
      },
      mouseUp(e) {
        this.controls.mouseUp(e);
      },
      mouseMove(e) {
        this.controls.mouseMove(e);
      }
    }
  }
</script>

<style>
  .gameCanvas {
    border: black solid 1px;
  }
</style>
