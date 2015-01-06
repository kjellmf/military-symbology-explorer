Joint military symbology explorer
=================================

An experimental [MIL-STD-2525D](http://www.assistdocs.com/search/document_details.cfm?ident_number=114934)/[APP-6](http://en.wikipedia.org/wiki/NATO_Military_Symbols_for_Land_Based_Systems)
symbology explorer based on the [Joint Military Symbology Markup Language (JMSML)](https://github.com/Esri/joint-military-symbology-xml) 
project.

See the explorer in action at [http://kjellmf.github.io/military-symbology-explorer/](http://kjellmf.github.io/military-symbology-explorer/).

How it works
------------

The [`jmsml.js`](https://github.com/kjellmf/military-symbology-explorer/blob/master/data/jmsml.js) file is basically a Javascript
version of the the [JMSML instance data](https://github.com/Esri/joint-military-symbology-xml/tree/master/instance) converted using
the [`create_json_data.py`](https://github.com/kjellmf/military-symbology-explorer/blob/master/scripts/create_json_data.py) script.
Based on the JMSML data the web application assembles a symbol using several SVG files (one for the frame, one for the symbol, etc.).

This project is a work in progress. 

