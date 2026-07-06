#!/usr/bin/make -f

all: clean
	mkdir -p ./output
	zip ./output/extension.zip LICENSE.md manifest.json content.js day-16-2015-screenshot.png

clean:
	rm -rf ./output
