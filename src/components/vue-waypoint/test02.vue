<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <!-- <el-button size="medium">中等按钮</el-button> -->
    <!-- <el-button size="small">小型按钮</el-button> -->
    <!-- <el-button size="mini">超小按钮</el-button> -->
  </el-row>
</template>
<script>
export default {
  data: () => ({
    intersectionOptions: {
      root: document.querySelector('#app'),
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.5 // [0.25, 0.75] if you want a 25% offset!
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),
  methods: {
    onWaypoint1 ({ el, going, direction, _entry }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log(" 1  waypoint going in!"); //激活-出现了
      }
      if (going === this.$waypointMap.GOING_OUT) {
        console.log(" 1  waypoint going out!");
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log(" 1  waypoint going top!");
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        console.log(" 1  waypoint going bottom!");
      }
    },
    onWaypoint3 ({ el, going, direction, _entry }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log(" 3 waypoint going in!"); //激活-出现了
      }
      if (going === this.$waypointMap.GOING_OUT) {
        console.log(" 3 waypoint going out!");
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log(" 3 waypoint going top!");
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        console.log(" 3 waypoint going bottom!");
      }
    },
    onWaypoint4 ({ el, going, direction, _entry }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log(" 4 waypoint going in!"); //激活-出现了
      }
      if (going === this.$waypointMap.GOING_OUT) {
        console.log(" 4 waypoint going out!");
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log(" 4 waypoint going top!");
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        console.log(" 4 waypoint going bottom!");
      }
    },
    onWaypoint5 ({ el, going, direction, _entry }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log(" 5 waypoint going in!"); //激活-出现了
      }
      if (going === this.$waypointMap.GOING_OUT) {
        console.log(" 5 waypoint going out!");
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log(" 5 waypoint going top!");
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        console.log(" 5 waypoint going bottom!");
      }
    },
    onWaypoint8 ({ el, going, direction, _entry }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log(" 8 waypoint going in!"); //激活-出现了
      }
      if (going === this.$waypointMap.GOING_OUT) {
        console.log(" 8 waypoint going out!");
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log(" 8 waypoint going top!");
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        console.log(" 8 waypoint going bottom!");
      }
    }
  }
}
</script>
<style scoped>
  .box {
    margin: 0 auto;
    margin-top: 10px;
    width: 300px;
    height: 300px;
    background-color: aqua;
  }
</style>

