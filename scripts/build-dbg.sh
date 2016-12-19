#!/bin/bash
if [ ! -d ../build ]; then
	mkdir ../build
fi

if [ ! -f ../build/bundle.js ]; then
	touch ../build/bundle.js
fi

../node_modules/.bin/browserify ../src/scripts/view.jsx --debug -t babelify -o ../build/bundle.js