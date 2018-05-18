<template>
  <a
    :href="url"
    :target="target"
    :class="'links_button ' + buttonClass">{{ name }}</a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class linkButton extends Vue {
  @Prop() url!: string;

  @Prop() name!: string;

  @Prop({ default: "button--grey" })
  buttonClass!: string;

  @Prop({ default: "_blank" })
  target!: string;

  @Prop({ default: null })
  tooltip!: string | null;
}
</script>

<style lang="scss" scoped>
</style>
