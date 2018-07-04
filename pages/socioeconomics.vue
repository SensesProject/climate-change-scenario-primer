<template>
  <section class="wrapper">
    <h2>Socioeconomics</h2>
    <p>The SSP-RCP Scenario Framework is a combination of socioeconomic and emission scenario assumptions. The framework opens a broad and explorable space of possible futures other scenarios - explorative and normative - can connect to.</p>

    <h3 id="ssps">SSPs</h3>

    <p>There are five Shared Socioeconomic Pathways (SSPs) narrating different socioeconomic futures. This is important as we can&rsquo;t predict the future and these narratives have drastically different implications for our challenges regarding climate change mitigation and adaptation.</p>

    <LayoutListItem>
      <VisSsp
        slot="graphic"
        :ssp="1"/>
      <div>
        <h4>SSP1: Sustainability—Taking the green road</h4>
        <p>The world shifts gradually, but pervasively, toward a more sustainable path, emphasizing more inclusive development that respects perceived environmental boundaries. Increasing evidence of and accounting for the social, cultural, and economic costs of environmental degradation and inequality drive this shift. The combination of directed development of environmentally friendly technologies, a favorable outlook for renewable energy, institutions that can facilitate international cooperation, and relatively low energy demand results in relatively <strong>low challenges to mitigation</strong>. At the same time, the improvements in human well-being, along with strong and flexible global, regional, and national institutions imply <strong>low challenges to adaptation</strong>.</p>
      </div>
    </LayoutListItem>

    <LayoutListItem>
      <VisSsp
        slot="graphic"
        :ssp="2"/>
      <div>
        <h4>SSP2: Middle of the road</h4>
        <p>The world follows a path in which social, economic, and technological trends do not shift markedly from historical patterns. Development and income growth proceeds unevenly, with some countries making relatively good progress while others fall short of expectations. Most economies are politically stable. Globally connected markets function imperfectly. Global and national institutions work toward but make slow progress in achieving sustainable development goals, including improved living conditions and access to education, safe water, and health care. These moderate development trends leave the world, on average, facing <strong>moderate challenges to mitigation and adaptation</strong>, but with significant heterogeneities across and within countries.</p>
      </div>
    </LayoutListItem>

    <LayoutListItem>
      <VisSsp
        slot="graphic"
        :ssp="3"/>
      <div>
        <h4>SSP3: Regional rivalry—A rocky road</h4>
        <p>A resurgent nationalism, concerns about competitiveness and security, and regional conflicts push countries to increasingly focus on domestic or, at most, regional issues. This trend is reinforced by the limited number of comparatively weak global institutions, with uneven coordination and cooperation for addressing environmental and other global concerns. Policies shift over time to become increasingly oriented toward national and regional security issues, including barriers to trade, particularly in the energy resource and agricultural markets. Growing resource intensity and fossil fuel dependency along with difficulty in achieving international cooperation and slow technological change imply <strong>high challenges to mitigation</strong>. The limited progress on human development, slow income growth, and lack of effective institutions, especially those that can act across regions, implies <strong>high challenges to adaptation</strong> for many groups in all regions.</p>
      </div>
    </LayoutListItem>

    <LayoutListItem>
      <VisSsp
        slot="graphic"
        :ssp="4"/>
      <div>
        <h4>SSP4: Inequality—A road divided</h4>
        <p>Highly unequal investments in human capital, combined with increasing disparities in economic opportunity and political power, lead to increasing inequalities and stratification both across and within countries. Over time, a gap widens between an internationally-connected society that is well educated and contributes to knowledge- and capital-intensive sectors of the global economy, and a fragmented collection of lower-income, poorly educated societies that work in a labor intensive, low-tech economy. The combination of some development of low carbon supply options and expertise, and a well-integrated international political and business class capable of acting quickly and decisively, implies <strong>low challenges to mitigation</strong>. <strong>Challenges to adaptation are high</strong> for the substantial proportions of populations at low levels of development and with limited access to effective institutions for coping with economic or environmental stresses.</p>
      </div>
    </LayoutListItem>

    <LayoutListItem>
      <VisSsp
        slot="graphic"
        :ssp="5"/>
      <div>
        <h4>SSP5: Fossil-fueled development—Taking the highway</h4>
        <p>Driven by the economic success of industrialized and emerging economies, this world places increasing faith in competitive markets, innovation and participatory societies to produce rapid technological progress and development of human capital as the path to sustainable development. The push for economic and social development is coupled with the exploitation of abundant fossil fuel resources and the adoption of resource and energy intensive lifestyles around the world. The strong reliance on fossil fuels and the lack of global environmental concern result in potentially <strong>high challenges to mitigation</strong>. The attainment of human development goals, robust economic growth, and highly engineered infrastructure results in <strong>relatively low challenges to adaptation</strong> to any potential climate change for all but a few.</p>
      </div>
    </LayoutListItem>

    <p>These narratives play out differently across variables. In the following chart the SSPs are mapped along challenges for adaptation and challenges for mitigation. Starting with education another variable is shown through color: The darker the color the higher the value.</p>

    <LayoutCarousel :interactive="{is: 'VisSspComparison', step: 0}">

      <div>
        <h4>Education</h4>
        <p>Education plays a key role in socioeconomics, as it is closely linked to the fertility rate. The progressive SSP1 and SSP5 futures show high education, while the educational level in the SSP3 world is quite low. In the inequal SSP4 there are regional differences, ranging from medium education in higher income countries to low education in lower income countries.</p>
      </div>
    </LayoutCarousel>

    <div>
      <div>
        <h4>International Trade</h4>
        <p>Trade is another important aspect. It shows how globalized and connected the world is. In most futures there will be a medium amount of international trade. In SSP5 it's high and in SSP3, a world of regional rivalry, it is low.</p>
      </div>
    </div>
    <div>
      <div>
        <h4>Technology developement</h4>
        <p>Rapid technological developement is important for economic success. But technology also plays a key role when it comes through adapting to and mitigating climate change. Overall there's a similar pattern to education. While in the inequal SSP4 it varies between high to low. </p>
      </div>
    </div>

    <h3 id="rcps">RCPs</h3>

    <p>Globally enforced emission policies will help us to reach climate goals. This is where representative concentration pathways (RCPs) come in. Again there are five scenarios, ranging from RCP 1.9 to RCP 8.5. The value stands for the forcing, the link between emissions and global mean temperature, in 2100.</p>

    <p>The Paris Agreement aims to keep the global mean temperature below 2°C, this corresponds to a forcing of 2.6 W/m<sup>2</sup> respectively the RCP 2.6.</p>

    <table>
      <thead>
        <tr>
          <th> RCP </th>
          <th> Forcing </th>
          <th> Temperature </th>
          <th> Description </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> RCP 1.9 </td>
          <td> 1.9 W/m2 </td>
          <td> ~1.5°C </td>
          <td> Declining Emissions </td>
        </tr>
        <tr>
          <td> RCP 2.6 </td>
          <td> 2.6 W/m2 </td>
          <td> ~2.0°C </td>
          <td> Declining Emissions </td>
        </tr>
        <tr>
          <td> RCP 4.5 </td>
          <td> 4.5 W/m2 </td>
          <td> ~2.4°C </td>
          <td> Stabilising Emissions </td>
        </tr>
        <tr>
          <td> RCP 6.0 </td>
          <td> 6.0 W/m2 </td>
          <td> ~2.8°C </td>
          <td> Stabilising Emissions </td>
        </tr>
        <tr>
          <td> RCP 8.5 </td>
          <td> 8.5 W/m2 </td>
          <td> ~4.3°C </td>
          <td> Rising Emissions </td>
        </tr>
      </tbody>
    </table>

    <p>SSPs and RCPs work great together. SSP-Baseline Scenarios show, what will happen without the implementation of futher climate change policies, while SSPx-RCPx Scenarios demonstrate what&rsquo;s possible when applying climate change policies.</p>
    <LayoutRecap>
      <li>a</li>
    </LayoutRecap>
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
  h4 {
    margin: 0 0 $spacing-unit / 2;
  }
}
</style>
