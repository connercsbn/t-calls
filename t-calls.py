import re
import sys

TRANSLATE_FILE = sys.argv[1]
HOMEPAGE_FILE = sys.argv[2]

def main():
    if len(sys.argv) != 3:
        print(sys.argv)
        print('Usage: t-calls.py [en.yml] [file.jsx]')
        return
    with open( TRANSLATE_FILE ) as tf:
        for line in tf.readlines():
            match = re.search(r'(^.+:)(.*)', line)
            if match:
                search_and_replace(match.group(1), match.group(2))

def search_and_replace(translation_key, translation):
# Replace english phrase with corresponding t() call
    translation_key = translation_key.strip(' ').strip(':')
    translation = translation.strip()
    replacementText = "{t('" + translation_key + "')}"
    fin = open(HOMEPAGE_FILE, 'rt')
    data = fin.read()
    data = data.replace(translation, replacementText)
    fin.close()
    fin = open(HOMEPAGE_FILE, 'wt')
    fin.write(data)
    fin.close()


if __name__ == '__main__':
    main()
