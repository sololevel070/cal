import os

old_text = 'https://clearnest.app'
new_text = 'https://clearnestcalculator.site'

for root, dirs, files in os.walk('c:\\Users\\Sagar\\Downloads\\cal'):
    if 'node_modules' in dirs:
        dirs.remove('node_modules')
    if '.next' in dirs:
        dirs.remove('.next')
    if '.git' in dirs:
        dirs.remove('.git')
        
    for file in files:
        if file.endswith(('.tsx', '.ts', '.js', '.json', '.html', '.md')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if old_text in content:
                    print(f"Updating {file_path}")
                    new_content = content.replace(old_text, new_text)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
