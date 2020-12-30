<template>
  <div class="full-screen vertical-flex" style="overflow: hidden;">
    <img v-for="el in slider" :key="el" :src="'static/imgs/'+ el" style="position:absolute; width: 0px; height: 0px;" />
    <slider :indicators="false" class="flex-filler" style="pointer-events:none;">
      <tile v-for="el in slider" :key="el" class="flex-filler" :bkg="'static/imgs/'+ el">
      </tile>
    </slider>
    <div id="header" class="absolute-center-aligned vertical-flex center" style="background: rgba(0,0,0,0.6);">
      <div class="container white-text">
        <h1>
          <big>Thank you for signing up to our newsletter!</big>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { Slider } from 'cmps/lib'
import { Tile } from 'cmps/site'

export default {
  data: function() {
    return {
      slider: [
        'bkg1.jpeg',
        'bkg2.jpeg'
      ]
    }
  },
  components: {
    Slider, Tile
  }
}
</script>

<style scoped>

</style>
