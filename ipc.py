import re

def reformat_content(match):
    content = match.group(1)  # Extract the content string
    formatted_content = '\n    '.join(content.split('\\n'))
    return '`\n    ' + formatted_content + '\n  `,'

def process_js_file(input_path, output_path):
    # Read the original JS file
    with open(input_path, 'r', encoding='utf-8') as file:
        js_content = file.read()

    # Regular expression to find and replace the content property
    updated_js_content = re.sub(r'content: (\'[^\']+\'|"[^"]+")', reformat_content, js_content)

    # Write the updated JS content to a new file
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(updated_js_content)

# Paths to your input and output files
input_path = 'src/common/data/IPCPages.js'
output_path = 'src/common/data/IPCPagesUpdated.js'

# Process the file
process_js_file(input_path, output_path)

print("Processing completed. The updated file is saved as 'IPCPagesUpdated.js'")
