<template>
  <!-- <div class="waypoint" v-waypoint="{ active: true, callback: onWaypoint, options: {threshold: 0.6} }">
      <p v-for="v in 20" :key="v">qwertyuiop---{{v}}</p>
  </div> -->
  <div>
    <div class="top_banner" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">

    </div>
    <!-- <div class="product_box">

    </div>
    <div class="service_box">

    </div> -->
    <div class="bottom_box">

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      intersectionOptions: {
        root: null, //用作视口的元素，用于检查目标的可见性。必须是目标的祖先。如果未指定，则默认为浏览器视口null
        rootMargin: '0px 0px 0px 0px',
        threshold: 1//范围为 0-1: 阈值为1.0意味着当100％的目标在root选项指定的元素中可见时，将调用回调  太假了吧
      }
    }
  },
  methods: {
    onWaypoint({ el, going, direction, _entry }) {
/*    console.log('el', el)
      console.log('going', going)
      console.log('direction', direction)
      console.log('_entry', _entry)
      console.log('this.$waypointMap', this.$waypointMap) */
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        console.log("出现了 waypoint going in!"); //激活-出现了
      }
      if (going === this.$waypointMap.GOING_OUT) {
        console.log("waypoint 离开了!");
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log("waypoint going top!");
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        console.log("waypoint going bottom!");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .top_banner {
    width: 100%;
    height: 700px;
    background-color: aqua;
  }
  .product_box {
    width: 100%;
    height: 532px;
    background-color: aqua;
  }
  .bottom_box {
    width: 100%;
    height: 1200px;
    border: 1px solid #000;
  }
  .waypoint {
    height: 2000px;
    background: #420983;
  }
  .waypoint p {
    background: blueviolet;
    height: 98px;
    color: white;
    border: 1px solid white;
  }
</style>

