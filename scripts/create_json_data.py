# -*- coding: utf-8 -*-
"""Extract JSON data from jmsml_D_Base.xml"""
from collections import OrderedDict, defaultdict

import os
from os.path import join, abspath, normpath
import sys

import xml.etree.ElementTree as ET

import json


PROJECT_PATH = join(abspath(os.path.dirname(__file__)), "")

JMSML_PROJECT_PATH = join(PROJECT_PATH, r"..\..\joint-military-symbology-xml")
XML_INSTANCE_PATH = normpath(join(JMSML_PROJECT_PATH, "instance/"))
BASE_FILE = normpath(join(XML_INSTANCE_PATH, 'jmsml_D_Base.xml'))
JMSML_CONFIG_FILE = normpath(join(JMSML_PROJECT_PATH, 'source/JointMilitarySymbologyLibraryCS/jmsml.config'))

NAMESPACE = "{http://disa.mil/JointMilSyML.xsd}"
import logging

logging.basicConfig()
log = logging.getLogger()
log.setLevel(logging.DEBUG)


def create_element_dict(digits, element_id, label):
    ordered_dict = OrderedDict()
    ordered_dict["digits"] = digits
    ordered_dict["label"] = label
    if element_id:
        ordered_dict["id"] = element_id
    return ordered_dict


def ns_tag(tag_name, namespace=NAMESPACE):
    return "%s%s" % (namespace, tag_name)


def extract_two_digit_code_data(tree, element_name1, element_name2):
    context = tree.findall('.//%s%s' % (NAMESPACE, element_name1))
    context_code = tree.findall('.//%s%s' % (NAMESPACE, element_name2))

    ll = []
    used_ids = set()
    for idx, element in enumerate(context):
        digit_one = context_code[idx].find('%sDigitOne' % NAMESPACE)
        digit_two = context_code[idx].find('%sDigitTwo' % NAMESPACE)
        element_id = element.get('ID')
        if element_id not in used_ids:
            label = element.get('Label')
            if 'Extension' in label:
                continue
            ll.append(create_element_dict(digit_one.text + digit_two.text, element_id, label))
            used_ids.add(element_id)

    return sorted(ll, key=lambda x: x['digits'])


def extract_two_digit_code_data2(tree, element_name1, element_name2):
    context = tree.findall('.//%s%s' % (NAMESPACE, element_name1))
    context_code = tree.findall('.//%s%s' % (NAMESPACE, element_name2))

    ll = []
    used_ids = set()
    for idx, element in enumerate(context):
        digit_one = context_code[idx].find('%sDigitOne' % NAMESPACE)
        digit_two = context_code[idx].find('%sDigitTwo' % NAMESPACE)
        element_id = element.get('ID')
        if element_id not in used_ids:
            label = element.get('Label')
            if 'Extension' in label:
                continue
            ll.append(create_element_dict(digit_one.text + digit_two.text, element_id, label))
            used_ids.add(element_id)

    return sorted(ll, key=lambda x: x['digits'])


def extract_symbolset_data(tree):
    context_code = tree.find('.//%sSymbolSetCode' % (NAMESPACE,))
    digit_one = context_code.find('%sDigitOne' % NAMESPACE).text
    digit_two = context_code.find('%sDigitTwo' % NAMESPACE).text
    root = tree.getroot()
    ss_id = root.get('ID')
    ss_label = root.get('Label')
    digits = digit_one + digit_two
    symbol_set_data = create_element_dict(digits, ss_id, ss_label)
    symbol_set_data["dimensionId"] = root.get('DimensionID')
    symbol_set_data["geometry"] = root.get('Geometry')
    return symbol_set_data


def extract_element_data(element, tag_name="EntityCode"):
    code_element = element.find('.//%s%s' % (NAMESPACE, tag_name))
    digit_one = code_element.find('%sDigitOne' % NAMESPACE).text
    digit_two = code_element.find('%sDigitTwo' % NAMESPACE).text or ""

    ss_id = element.get('ID')
    ss_label = element.get('Label')
    digits = digit_one + digit_two
    element_dict = create_element_dict(digits, ss_id, ss_label)
    if 'Graphic' in element.attrib:
        element_dict['graphic'] = element.get('Graphic')
    elif element.get('Icon', '') == "FULL_FRAME":
        element_dict['cloverGraphic'] = element.get('CloverGraphic')
        element_dict['diamondGraphic'] = element.get('DiamondGraphic')
        element_dict['rectangleGraphic'] = element.get('RectangleGraphic')
        element_dict['squareGraphic'] = element.get('SquareGraphic')
    if 'AlternativeGraphic' in element.attrib:
        element_dict['alternativeGraphic'] = element.get('AlternativeGraphic')
    if 'Remarks' in element.attrib:
        element_dict['remarks'] = element.get('Remarks')
    if "LimitUseTo" in element.attrib:
        limit_use_to = [element_id for element_id in element.get('LimitUseTo').split(' ') if element_id]
        limit_use_to.sort()
        element_dict['limitUseTo'] = limit_use_to
    if "Category" in element.attrib:
        element_dict["category"] = element.get('Category')
    if "Icon" in element.attrib:
        element_dict['icon'] = element.get('Icon')

    return element_dict


def extract_single_code_data(tree, element_name, id_name='ID'):
    context = tree.findall('.//%s%s' % (NAMESPACE, element_name))
    context_code = tree.findall('.//%s%sCode' % (NAMESPACE, element_name))
    ll = []
    for idx, element in enumerate(context):
        label = element.get('Label')
        if 'Extension' in label:
            continue
        ll.append(create_element_dict(context_code[idx].text, element.get(id_name), label))

    return ll


def extract_amplifier(tree, folder_name):
    def extract_graphics(element):
        graphics = defaultdict(OrderedDict)
        for graphic_element in element.iter(ns_tag('Graphic')):
            sig = graphic_element.get('StandardIdentityGroup')
            graphic = graphic_element.get('Graphic')
            graphics[sig]['graphic'] = folder_name + "/" + graphic
        return graphics

    element_info = []
    for element in tree.iter(ns_tag("Amplifier")):
        label = element.get('Label')
        name = element.get('Name')
        digits = element.find(ns_tag("AmplifierCode")).text
        if 'Extension' in label:
                continue
        status_data = OrderedDict()
        status_data['digits'] = digits
        status_data['label'] = label
        status_data['id'] = name

        graphics_data = extract_graphics(element)
        if graphics_data:
            status_data['graphics'] = graphics_data

        element_info.append(status_data)

    return element_info


def extract_amplifier_groups(tree, echelon_folder, amplifier_folder):
    context = tree.findall('.//%s%s' % (NAMESPACE, "AmplifierGroup"))
    context_code = tree.findall('.//%s%sCode' % (NAMESPACE, "AmplifierGroup"))
    ll = []
    for idx, element in enumerate(context):
        label = element.get('Label')
        if 'Extension' in label:
            continue
        if "Echelon" in label:
            folder_name = echelon_folder
        else:
            folder_name = amplifier_folder
        amplifiers = extract_amplifier(element, folder_name)
        dd = create_element_dict(context_code[idx].text, element.get('Name'), label)
        dd["descriptors"] = amplifiers
        ll.append(dd)

    return ll


def extract_symbol_set_instance(instance_file_name):
    log.info("Processing %s", instance_file_name)
    full_instance_file_name = join(XML_INSTANCE_PATH, instance_file_name)
    if not os.path.exists(full_instance_file_name):
        print "Could not find %s" % full_instance_file_name
        return

    tree = ET.parse(full_instance_file_name)
    symbol_set_data = extract_symbolset_data(tree)
    entities = []
    for entity_element in tree.iter(ns_tag("Entity")):
        entity_data = extract_element_data(entity_element)
        entity_types = []
        for entity_type_element in entity_element.iter(ns_tag("EntityType")):
            entity_type_data = extract_element_data(entity_type_element, "EntityTypeCode")
            entity_sub_types = []
            for entity_sub_type_element in entity_type_element.iter(ns_tag("EntitySubType")):
                entity_sub_type_data = extract_element_data(entity_sub_type_element, "EntitySubTypeCode")
                entity_sub_types.append(entity_sub_type_data)

            entity_type_data["entitySubTypes"] = entity_sub_types
            entity_types.append(entity_type_data)

        entity_data["entityTypes"] = entity_types
        entities.append(entity_data)

    # sector one modifier
    sector_one_modifiers_element = tree.find(ns_tag("SectorOneModifiers"))
    sector_one_modifiers = []
    if sector_one_modifiers_element is not None:
        for modifier_one_element in sector_one_modifiers_element.iter(ns_tag("Modifier")):
            modifier_one_data = extract_element_data(modifier_one_element, "ModifierCode")
            sector_one_modifiers.append(modifier_one_data)

    # sector two modifier
    sector_two_modifiers_element = tree.find(ns_tag("SectorTwoModifiers"))
    sector_two_modifiers = []
    if sector_two_modifiers_element is not None:
        for modifier_two_element in sector_two_modifiers_element.iter(ns_tag("Modifier")):
            modifier_two_data = extract_element_data(modifier_two_element, "ModifierCode")
            sector_two_modifiers.append(modifier_two_data)

    symbol_set_data["entities"] = sorted(entities, key=lambda x: x['digits'])
    symbol_set_data["sectorOneModifiers"] = sector_one_modifiers
    symbol_set_data["sectorTwoModifiers"] = sector_two_modifiers
    return symbol_set_data


def extract_symbol_sets(tree):
    symbol_set_ref = tree.findall('.//%s%s' % (NAMESPACE, "SymbolSetRef"))
    symbol_set_instances = set([element.get('Instance') for element in symbol_set_ref if element.get('Label','') != "Internal"])
    symbol_sets = [extract_symbol_set_instance(fn) for fn in symbol_set_instances]
    return sorted(symbol_sets, key=lambda x: x['digits'])


def extract_affiliations(tree, frame_folders):
    affiliations = defaultdict(lambda: defaultdict(OrderedDict))
    for affiliation_element in tree.iter(ns_tag("Affiliation")):
        context_id = affiliation_element.get('ContextID')
        if context_id == "INTERNAL":
            continue
        if context_id in frame_folders:
            folder = frame_folders[context_id]["folderName"] + "/"
        dimension_id = affiliation_element.get('DimensionID')
        standard_identity_id = affiliation_element.get('StandardIdentityID')
        shape = affiliation_element.get('Shape')
        graphic = affiliation_element.get('Graphic')
        planned_graphic = affiliation_element.get('PlannedGraphic')
        civilian_graphic = affiliation_element.get('CivilianGraphic')
        planned_civilian_graphic = affiliation_element.get('PlannedCivilianGraphic')
        gi = OrderedDict()
        if graphic:
            gi["graphic"] = folder + graphic
        if planned_graphic:
            gi["plannedGraphic"] = folder + planned_graphic
        if civilian_graphic:
            gi["civilianGraphic"] = folder + civilian_graphic
        if planned_civilian_graphic:
            gi["plannedCivilianGraphic"] = folder + planned_civilian_graphic

        affiliation = affiliations[context_id]
        affiliation[dimension_id][standard_identity_id] = gi
    return affiliations


def extract_dimensions(tree,):
    dimensions = []
    for dimension_element in tree.iter(ns_tag("Dimension")):
        dimension_id = dimension_element.get('ID')
        if dimension_id == 'INTERNAL':
            continue
        geometry = dimension_element.get('Geometry')
        label = dimension_element.get('Label')
        dimension_data = OrderedDict()
        dimension_data['id'] = dimension_id
        dimension_data['label'] = label
        dimension_data['geometry'] = geometry
        dimensions.append(dimension_data)

    return dimensions

def extract_standard_identity_groups(tree):
    sigs = {}
    si_to_sig = {}
    for sig_element in tree.iter(ns_tag("StandardIdentityGroup")):
        sig_id = sig_element.get('ID')
        label = sig_element.get('Label')
        sig_ids = sig_element.get('StandardIdentityIDs').split(" ")
        for si_id in sig_ids:
            si_to_sig[si_id] = sig_id
        sigs[sig_id] = sig_ids

    return sigs, si_to_sig


def extract_standard_identities(tree):
    standard_identities = extract_single_code_data(tree, "StandardIdentity")
    return standard_identities


def extract_status_or_hqtfd(tree, element_name, folder_name):
    def extract_sub_graphics(element):
        graphics = defaultdict(lambda: defaultdict(OrderedDict))
        for graphic_element in element.iter(ns_tag('Graphic')):
            sig = graphic_element.get('StandardIdentityGroup')
            dimension = graphic_element.get('Dimension')
            graphic = graphic_element.get('Graphic')
            sigd = graphics[sig]
            sigd[dimension]['graphic'] = folder_name + "/" + graphic
        return graphics

    element_info = []
    for element in tree.iter(ns_tag(element_name)):
        label = element.get('Label')
        name = element.get('Name')
        digits = element.find(ns_tag("%sCode" % element_name)).text
        if 'Extension' in label:
                continue
        status_data = OrderedDict()
        status_data['digits'] = digits
        status_data['id'] = name
        status_data['label'] = label
        if "LabelAlias" in element.attrib:
            status_data['labelAlias'] = element.get('LabelAlias')
        if "Graphic" in element.attrib:
            status_data['graphic'] = folder_name + "/" + element.get('Graphic')

        graphics_data = extract_sub_graphics(element)
        if graphics_data:
            status_data['graphics'] = graphics_data

        element_info.append(status_data)

    return element_info


def extract_jmsml_data(frame_folders, oca_folder, hqtffd_folder, echelon_folder, amplifier_folder):
    if not os.path.exists(BASE_FILE):
        print "Could not find %s" % BASE_FILE
        sys.exit(1)
    tree = ET.parse(BASE_FILE)
    symbol_data = OrderedDict()
    symbol_data['contexts'] = extract_single_code_data(tree, "Context")
    sig, si2sig =  extract_standard_identity_groups(tree)
    symbol_data['standardIdentities'] = extract_standard_identities(tree)
    symbol_data['symbolSets'] = extract_symbol_sets(tree)
    symbol_data['statuses'] = extract_status_or_hqtfd(tree, "Status", oca_folder)
    symbol_data['hqtfDummies'] = extract_status_or_hqtfd(tree, "HQTFDummy", hqtffd_folder)
    symbol_data['amplifier'] = extract_amplifier_groups(tree, echelon_folder, amplifier_folder)
    symbol_data['affiliations'] = extract_affiliations(tree, frame_folders)
    symbol_data['dimensions'] = extract_dimensions(tree)
    symbol_data['standardIdentityGroupMapping'] = si2sig

    return symbol_data


def extract_jmsml_config_data():
    log.info("Processing configuration file %s", JMSML_CONFIG_FILE)
    tree = ET.parse(JMSML_CONFIG_FILE)
    parent_map = dict((c, p) for p in tree.getiterator() for c in p)

    def get_full_folder_path(element):
        parent_element = parent_map.get(element)
        if parent_element is not None and parent_element.tag == ns_tag("GraphicFolder",
                                                                       "{http://esri.com/jmsmlConfig.xsd}"):
            return get_full_folder_path(parent_element) + "/" + element.get('Name')
        else:
            return element.get('Name')

    symbol_set_folders = defaultdict(dict)
    frames = defaultdict(dict)
    for entity_element in tree.iter(ns_tag("GraphicFolder", "{http://esri.com/jmsmlConfig.xsd}")):
        symbol_set_id = ""
        if "Entities" in entity_element.attrib:
            symbol_set_id = entity_element.get('Entities').split()
            sub_key = "entities"
        elif "ModifierOnes" in entity_element.attrib:
            symbol_set_id = entity_element.get('ModifierOnes').split()
            sub_key = "modifierOnes"
        elif "ModifierTwos" in entity_element.attrib:
            symbol_set_id = entity_element.get('ModifierTwos').split()
            sub_key = "modifierTwos"
        elif "Frames" in entity_element.attrib:
            frames[entity_element.get('Frames')]["folderName"] = get_full_folder_path(entity_element)
            continue
        elif "OCA" in entity_element.attrib:
            oca_folder = get_full_folder_path(entity_element)
        elif "HQTFFD" in entity_element.attrib:
            hqtffd_folder = get_full_folder_path(entity_element)
        elif "Echelons" in entity_element.attrib:
            echelon_folder = get_full_folder_path(entity_element)
        elif "Mobilities" in entity_element.attrib:
            amplifier_folder = get_full_folder_path(entity_element)

        for key in symbol_set_id:
            symbol_set_folders[key][sub_key] = get_full_folder_path(entity_element)
            print symbol_set_folders[key][sub_key]

    return symbol_set_folders, frames, oca_folder, hqtffd_folder, echelon_folder, amplifier_folder,


if __name__ == '__main__':
    log.info('Looking for JMSML files in %s', abspath(JMSML_PROJECT_PATH))

    symbolset_folders, frame_folders, oca_folder, hqtffd_folder, echelon_folder, amplifier_folder = extract_jmsml_config_data()
    jmsml_data = extract_jmsml_data(frame_folders, oca_folder, hqtffd_folder, echelon_folder, amplifier_folder)

    for symbol_set in jmsml_data["symbolSets"]:
        symbol_set["graphicFolder"] = symbolset_folders[symbol_set['id']]

    DEST_FILE = join(PROJECT_PATH, '../data/jmsml.js')

    with open(DEST_FILE, 'w') as f:
        json_code = json.dumps(jmsml_data, indent=2)
        config_json_code = json.dumps(symbolset_folders, indent=2)
        f.write("var symbolData=%s;\n" % (json_code, ))