import xml.etree.ElementTree as ET
import os

def escape_special_characters(text):
    return text.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

def parse_xml_to_json(xml_file):
    ns = {
        'cr': 'urn:crystal-reports:schemas',
        'xsi': 'http://www.w3.org/2000/10/XMLSchema-instance'
    }
    tree = ET.parse(xml_file)
    root = tree.getroot()

    field_mapping = {
        "{_qryFIFO.ItemNo}": "PartID",
        "{_qryFIFO.Date}": "DateAdded",
        "{_qryFIFO.QtyToStock}": "QtyToStock",
        "{_qryFIFO.UnitCost}": "UnitCost",
        "{@Value}": "Value",
        "{_qryFIFO.DescriptionMed}": "Description",
        "{_qryFIFO.VendorNo}": "VendorID",
        "{_qryFIFO.Name}": "VendorName"
    }

    json_data = []

    for formatted_area_pair in root.findall(".//cr:FormattedAreaPair[@Level='1'][@Type='Details']", ns):
        item = {
            "PartName": "Placeholder",
            "Type": {
                "T1": ["Placeholder", "success"],
                "T2": ["Placeholder", "danger"],
                "T3": ["Placeholder", "primary"]
            }
        }
        for report_object in formatted_area_pair.findall(".//cr:FormattedReportObject", ns):
            field_name = report_object.get('FieldName', '')
            json_field = field_mapping.get(field_name)
            if json_field:
                formatted_value = report_object.find('cr:FormattedValue', ns)
                if formatted_value is not None and formatted_value.text:
                    item[json_field] = escape_special_characters(formatted_value.text)
        if item:
            json_data.append(item)

    return json_data

def format_as_js_object(json_data):
    formatted_output = "const partData = [\n"
    for item in json_data:
        formatted_output += "    {\n"
        for key, value in item.items():
            if key == "Type":
                formatted_output += f"        {key}: {{\n"
                for subkey, subvalue in value.items():
                    formatted_output += f"            {subkey}: [\"{subvalue[0]}\", \"{subvalue[1]}\"],\n"
                formatted_output = formatted_output.rstrip(',\n') + "\n        },\n"
            else:
                formatted_output += f"        {key}: \"{value}\",\n"
        formatted_output = formatted_output.rstrip(',\n') + "\n    },\n"
    formatted_output += "];\n"
    return formatted_output

def write_output(xml_file, output):
    base = os.path.splitext(xml_file)[0]
    output_file = f"{base}.js"
    with open(output_file, 'w') as file:
        file.write(output)

# File processing
xml_file = 'IPC.xml'
json_data = parse_xml_to_json(xml_file)
formatted_output = format_as_js_object(json_data)
write_output(xml_file, formatted_output)
