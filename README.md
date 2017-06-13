Joint military symbology explorer
=================================

An experimental [MIL-STD-2525D](http://www.assistdocs.com/search/document_details.cfm?ident_number=114934)/[APP-6](http://en.wikipedia.org/wiki/NATO_Military_Symbols_for_Land_Based_Systems)
symbology explorer based on the [Joint Military Symbology Markup Language (JMSML)](https://github.com/Esri/joint-military-symbology-xml) 
project.

See the explorer in action at [http://explorer.milsymb.net/](http://explorer.milsymb.net/).

### Warning. This project is currently going through a rewrite from ES5/Angular 1 to Typescript/Vue.

How it works
------------

The [`jmsml.js`](https://github.com/kjellmf/military-symbology-explorer/blob/master/data/jmsml.js) file is basically a Javascript
version of the the [JMSML instance data](https://github.com/Esri/joint-military-symbology-xml/tree/master/instance) converted using
the [`create_json_data.py`](https://github.com/kjellmf/military-symbology-explorer/blob/master/scripts/create_json_data.py) script.
Based on the JMSML data the web application assembles a symbol using several SVG files (one for the frame, one for the symbol, etc.).

This project is a work in progress. 

Getting started
---------------

Clone project:

    $ git clone https://github.com/kjellmf/military-symbology-explorer.git

Additionally you need the SVG files from the [JMSML-project](https://github.com/Esri/joint-military-symbology-xml). The easiest way 
to get them is to clone the JMSML project:

    $ git clone https://github.com/Esri/joint-military-symbology-xml.git

Navigate to the root directory of the project:

    $ cd military-symbology-explorer 
    
Install dependencies :

    $ npm install 
    
Copy the `svg` directory from `joint-military-symbology-xml` into the main directory. If both projects are in the 
same directory, you can use the gulp task `copy-svg-to-main`:

    $ gulp copy-svg-to-main
    
You are now ready to run the web application.

    $ npm run dev







