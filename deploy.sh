#!/usr/bin/env sh

set -e

npm run build

cd dist

git checkout github-pages
git add -A
git commit -m 'deploy'

git push -f https://github.com/BrightsDays/brightsdays.github.io.git github-pages

cd -