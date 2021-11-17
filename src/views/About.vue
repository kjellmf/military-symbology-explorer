<template>
  <article
    class="
      max-w-3xl
      lg:max-w-4xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
      mt-8
      prose prose-sm
      sm:prose
      lg:prose-lg
      pb-10
    "
  >
    <h1>About</h1>

    <p>
      The joint military symbology explorer is a hobby project created for
      experimenting with the
      <a href="https://github.com/Esri/joint-military-symbology-xml"
        >Joint Military Symbology Markup Language (JMSML)</a
      >

      and for playing with various Javascript frameworks and tools.
    </p>
    <p>
      The JMSML project is an initiative by
      <a href="http://www.esri.com/">Esri</a>, and provides a data encapsulation
      of
      <a
        href="https://www.jcs.mil/Portals/36/Documents/Doctrine/Other_Pubs/ms_2525d.pdf"
        >MIL-STD-2525D (pdf)</a
      >
      and
      <a
        href="https://nso.nato.int/nso/zPublic/ap/PROM/APP-6%20EDD%20V1%20E.pdf"
        >NATO Joint Military Symbology APP-6(D) (pdf)</a
      >.
    </p>

    <h2>Licensing and copyright</h2>

    <p>JMSML schema and instance data: Copyright 2014 Esri</p>

    <p>Symbol SVG files: Copyright 2014 DISA (SSMC Technical Working Group).</p>

    <p>
      The source code for the symbology explorer is
      <a href="https://github.com/kjellmf/military-symbology-explorer"
        >available on GitHub</a
      >
      under the Apache 2 license.
    </p>

    <h2>Technical details</h2>

    <p>
      The first version of this site was published in 2015. The 2021 edition of
      the site has mostly the same content but it works much better on mobile
      devices and different screen resolutions. Angular has been replaced with
      Vue 3 and instead of Bootstrap I now use Tailwind CSS for layout and
      styling.
    </p>

    <p>
      All of the symbol definitions and symbol SVG files are from the
      <a href="https://github.com/Esri/joint-military-symbology-xml"
        >JMSML project</a
      >. I have just converted the data to a Javascript-friendly format and
      assembled the different SVG files into symbols.
    </p>

    <p>
      Please note that the symbology explorer is an experiment. I don't
      recommend using the techniques I have used in production for the following
      reasons:
    </p>

    <ul>
      <li>
        Almost all of the JMSML data is loaded into memory (see
        <a
          href="https://github.com/kjellmf/military-symbology-explorer/blob/master/data/jmsml.js"
          >jmsml.js</a
        >) when the page is loaded. Unless you are writing a symbology explorer
        this approach is a waste of memory.
      </li>
      <li>
        Drawing a symbol requires up to six different SVGs (and many server
        request). In a production system combine the SVGs on the server and send
        only one SVG file to the client.
      </li>
    </ul>
  </article>
</template>

<script>
export default {};
</script>
