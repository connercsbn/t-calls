import re
import sys

if len(sys.argv) != 3:
    print('Usage: t-calls.py [en.yml] [file.jsx]')
    sys.exit()

TRANSLATE_FILE = sys.argv[1]
HOMEPAGE_FILE = sys.argv[2]

def main():
    matches = []
    with open( TRANSLATE_FILE ) as file:
        for line in file:
            match = re.search(r'(^.+:)(.*)', line)
            if match:
                matches.append(match.group(1, 2))
        matches.sort(key=lambda t: len(t[1]), reverse=True)
        for match in matches:
                search_and_replace(match[0], match[1])


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
