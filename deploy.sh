npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:rasimoner/cari.git master:gh-pages

cd -