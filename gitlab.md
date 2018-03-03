Command line instructions(gitlab 命令行常用命令介绍)

Git global setup
git config --global user.name "duan"
git config --global user.email "763300134@qq.com"

Create a new repository
git clone git@gitlab.com:duanshaobo/angularjs-movie.git
cd angularjs-movie
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Existing folder
cd existing_folder
git init
git remote add origin git@gitlab.com:duanshaobo/angularjs-movie.git
git add .
git commit -m "Initial commit"
git push -u origin master

Existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin git@gitlab.com:duanshaobo/angularjs-movie.git
git push -u origin --all
git push -u origin --tags