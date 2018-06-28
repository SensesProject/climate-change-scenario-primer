<template>
  <section class="wrapper">
    <h2>What are Climate Change Scenarios?</h2>
    <p>When we talk about climate change we talk about a future 10, 30 or 80 years from now. We can&rsquo;t predict this future, but we can create scenarios – descriptions of how the future might unfold. These scenarios help us to gain in-depth insights on how climate change reflects in different futures and are a tool to communicate climate change.</p>

    <div class="scenario-overview">
      <svg
        width="100%"
        viewBox="0 0 477 298">
        <g transform="translate(-82.000000, -3.000000)">
          <g transform="translate(64.000000, 0.000000)">
            <text font-weight="bold">
              <tspan
                x="138.348"
                y="16">Climate Community Scenarios</tspan>
            </text>
            <g transform="translate(0.000000, 68.000000)">
              <text font-weight="bold">
                <tspan
                  x="21.712"
                  y="16">Normative Scenarios</tspan>
              </text>
              <text>
                <tspan
                  x="23.328"
                  y="84">Adaptation Scenarios</tspan>
                <tspan
                  x="27.296"
                  y="104">Mitigation Scenarios</tspan>
              </text>
              <text>
                <tspan
                  x="17.344"
                  y="212">Pathways, Strategies &amp; </tspan>
                <tspan
                  x="72.184"
                  y="232">Policies</tspan>
              </text>
              <path d="M101,28 L101,56"/>
              <polygon points="101 60 106 54 96 54"/>
              <path d="M99,116 L99,184"/>
              <polygon points="99 188 104 182 94 182"/>
            </g>
            <g transform="translate(302.000000, 68.000000)">
              <text>
                <tspan
                  x="8.36"
                  y="84">Socioeconomic Scenarios</tspan>
                <tspan
                  x="30.456"
                  y="104">Emission Scenarios</tspan>
                <tspan
                  x="12.12"
                  y="124">Concentration Scenarios</tspan>
                <tspan
                  x="6.488"
                  y="144">Climate Change Scenarios</tspan>
              </text>
              <text font-weight="bold">
                <tspan
                  x="18.032"
                  y="16">Explorative Scenarios</tspan>
              </text>
              <text>
                <tspan
                  x="7.504"
                  y="212">Climate Impact Scenarios</tspan>
              </text>
              <g transform="translate(95.000000, 28.000000)">
                <path d="M5,0 L5,28"/>
                <polygon points="5 32 10 26 0 26"/>
              </g>
              <g transform="translate(95.000000, 156.000000)">
                <path d="M5,0 L5,28"/>
                <polygon points="5 32 10 26 0 26"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <p>Plenty of different scenarios exist. A general distinction can be made between explorative and normative scenarios. Explorative scenarios, tackle the question of what can happen. They are mostly used on the global level. Normative scenarios, commonly used in regional scenarios, aim to answer what we can do to mitigate and adapt to climate change. While explorative scenarios are mostly model driven and use numbers to describe the future, normative scenarios oftentimes combine numbers and narratives.</p>

    <LayoutNextChapter/>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.wrapper {
  .scenario-overview {
    max-width: 720px;
    @include flex-column;
    svg {
      max-width: 540px;
      overflow: visible;
      text, polygon {
        fill: $color-text;
      }
      path {
        stroke: $color-text;
        stroke-width: 2;
      }
    }
  }
}

</style>
