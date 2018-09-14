<template>
  <div class="LayoutRadioGroup">
    <template
      v-for="(option, i) in options">
      <input
        :key="`button-${option.value}`"
        :value="option.value"
        :id="`bt-${i}`"
        :checked="propxyValue === option.value"
        type="radio"
        @input="propxyValue = $event.target.value">
      <label
        :key="`label-${option.value}`"
        :for="`bt-${i}`"
        :class="[option.color, {highlight: highlight.find(d => d === option.value)}, {highlighting: highlight.length > 0}]"
        @mouseover="hover(option.value)"
        @mouseleave="hover(null)">
        <span>
          <div class="radio">
            <div class="circle"/>
          </div>
          <div class="label">
            {{ option.label }}
          </div>
        </span>
        <wbr>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: null
    },
    highlight: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // propxyValue: this.options[0].value
    }
  },
  computed: {
    propxyValue: {
      // getter
      get: function () {
        return this.value
      },
      // setter
      set: function (value) {
        this.$emit('input', value)
        // var names = newValue.split(' ')
        // this.firstName = names[0]
        // this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    hover (value) {
      this.$emit('hover', value)
    }
  }
  // computed: {
  //   propxyValue: {
  //     get () {
  //       return this.value
  //     },
  //     set (value) {
  //       this.$emit('input', value)
  //     }
  //   }
  // }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";
.LayoutRadioGroup {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  font-size: 0.8em;

  label {
    padding: 0 $spacing / 4;
    span {
      white-space: nowrap;
    }

    .radio {
      width: 18px;
      height: 18px;
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      border-radius: 50%;
      border: 2px solid $color-black;
      transition: border-color 0.1s;
      transform: translateY(-1px);

      .circle {
        background: $color-black;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        opacity: 0;
        transition: transform 0.4s, background 0.4s, opacity 0.4s;
        transform: translateX(3px) scale(0.1);
      }
    }
    .label {
      vertical-align: middle;
      margin-left: $spacing / 4;
      transition: color 0.1s;
      display: inline-block;
      transform: translateY(-1px);
      transition: color 0.4s;
      white-space: nowrap;
      max-width: calc(100% - 1.3rem - 2px - #{$spacing * 0.5})
    }

    &.blue {
      .radio {
        border-color: $color-blue;
        .circle {
          background: $color-blue;
        }
      }
      // .label {
      //   color: $color-blue;
      // }
    }
    &.green {
      .radio {
        border-color: $color-green;
        .circle {
          background: $color-green;
        }
      }
      // .label {
      //   color: $color-green;
      // }
    }
    &.yellow {
      .radio {
        border-color: $color-yellow;
        .circle {
          background: $color-yellow;
        }
      }
      // .label {
      //   color: $color-yellow;
      // }
    }
    &.red {
      .radio {
        border-color: $color-red;
        .circle {
          background: $color-red;
        }
      }
      // .label {
      //   color: $color-red;
      // }
    }
    &.violet {
      .radio {
        border-color: $color-light-violet;
        .circle {
          background: $color-light-violet;
        }
      }
      // .label {
      //   color: $color-light-violet;
      // }
    }

    &.highlight {
      .radio {
        .circle {
          opacity: 1;
          transform: translateX(3px);
        }
      }
    }
  }

  input[type=radio] {
    visibility: hidden;
    position: absolute;
    pointer-events: none;
  }

  input[type=radio]:checked + label {
    .radio {
      .circle {
        opacity: 1;
        transform: translateX(3px);
      }
    }

    &.blue {
      .label {
        color: $color-blue;
      }
    }
    &.green {
      .label {
        color: $color-green;
      }
    }
    &.yellow {
      .label {
        color: $color-yellow;
      }
    }
    &.red {
      .label {
        color: $color-red;
      }
    }
    &.violet {
      .label {
        color: $color-light-violet;
      }
    }

    &.highlighting {
      .radio {
        .circle {
          opacity: 0;
          transform: translateX(3px) scale(0.1);
        }
      }
      &.highlight {
        .radio {
          .circle {
            opacity: 1;
            transform: translateX(3px);
          }
        }
      }
    }
  }
}
</style>
