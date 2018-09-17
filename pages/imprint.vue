<template lang="pug">
  section.wrapper
    h2.h1 Imprint

    p.sans
      strong Contact
      br
      | Cornelia Auer
      br
      | Potsdam Institut für Klimafolgenforschung (PIK)
      br
      | Telegrafenberg A31
      br
      | 14473 Potsdam
    p.sans
      | PO Box 601203
      br
      | 14412 Potsdam
    no-ssr
      p.sans
        | Tel: +49(0)331 288 20787
        br
        | e-mail:
        a(href="mailto:cornelia.auer@pik-potsdam.de")  cornelia.auer@pik-potsdam.de
    p.sans
      | Design and technical development:
      br
      a(href="https://uclab.fh-potsdam.de/") UCLab of the University of Applied Sciences Potsdam

    p.sans
      strong About
      br
      | The website climatescenarios.org is an initiative of the EU project SENSES. The project investigates potential socio-economic futures in the face of climate change and how this knowledge can be made accessible to a broader public.
    p.sans
      | SENSES will develop tools and approaches to make the new generation of climate change scenarios more comprehensible and accessible. Further information can be found on the project website: senses-project.org
    p.sans
      strong Project Consortium
      br
      | Potsdam Institute for Climate Impact Research
      br
      | International Institute for Applied Systems Analysis
      br
      | Stockholm Environment Institute
      br
      | Wageningen University & Research
      br
      | University of Applied Sciences Potsdam
    p.sans
      strong Funding
      br
      | The SENSES project runs from 2017 to 2020. The project SENSES is part of the European Research Area for Climate Services (ERA4CS), an ERA-NET initiated by JPI Climate. It is funded by BMBF (DE), BMWFW (AT), NWO (NL), FORMAS (SE) with co-funding by the European Union (Grant 690462).
    div.funding
      img(src="~/assets/img/funding/logo_EU.svg")
      img(src="~/assets/img/funding/logo_JPI.png")
      img(src="~/assets/img/funding/logo_BMBF.svg")
      img(src="~/assets/img/funding/logo_DLR.svg")
      img(src="~/assets/img/funding/logo_nwo.svg")
      img(src="~/assets/img/funding/logo_formas.svg")

    p.sans
      strong Privacy
      br
      | The internet sites under climatescenarios.org (hereinafter: “Website”) are operated by Potsdam-Institute for Climate Imact Research (hereinafter: “PIK”), Telegraphenberg A31, 14473 Potsdam. The careful and legitimate handling of your data is an important concern for us. The following Privacy Policy explain which personal data are gathered on our website and how and for which purposes these are used. Please, read the Privacy Policy completely before you transmit data to us or use our website in other manner and inform yourself about updates of these Data protection notices on a regular basis. The following Privacy Policy is valid for the use of our website in its respective current version.
    p.sans
      | Automatic Collection of data
      br
      | When you visit our website, we do not collect any data of yours.
    p.sans
      | Use of Cookies
      br
      | Cookies are small text files that are filed on your computer and that your browser stores (locally on your hard disk). We do not use any cookies on this website.
    p.sans
      | Other collection, processing and use of personal data
      br
      | As a rule, you can visit our website without us requiring, collecting, processing or using your personal data. You will remain anonymous as an individual user or at least pseudonymous.
    p.sans
      | Changes to the contents of this Data protection notice
      br
      | PIK reserves the right to change the contents of these Privacy Policy every now and then in accordance with the legal data protection regulations.
</template>

<script>
export default { }
</script>

<style scoped lang="scss">
@import "~@/assets/style/global";

.funding {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  img {
    // flex: 1;
    width: 120px;
    margin: $spacing / 2;

    @include media-query($device-narrow) {
      width: 160px;
      max-height: 100px;
    }
  }
}
</style>
