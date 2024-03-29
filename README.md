## Links

[Youtube Tutorial](https://www.youtube.com/watch?v=9fH09nJGm-U)  
[Original Source Code](https://github.com/DMezhenskyi/angular-named-router-outlet)  
[CLI Overview and Command Reference](https://angular.io/cli)  
[Resolving EACCES permissions errors when installing packages globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)  

## Commands

```
# COMMANDS TO RUN THE APPLICATION

- Install yarn
sudo apt remove cmdtest
sudo apt remove yarn
sudo npm install -g yarn
yarn --version

- Set Node.js right version
nvm install 18.13
nvm use 18.13
nvm ls

- Install project dependencies
yarn install

- Resolving EACCES permissions errors when installing packages globally
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
vi ~/.profile
Add this line in the ~/.profile file:
export PATH=~/.npm-global/bin:$PATH
source ~/.profile
Add this path ~/.npm-global/bin in the PATH variable in the ~/.bashrc
source ~/.bashrc

- Install Angular CLI
npm install -g @angular/cli
ng --help
ng serve

# COMMANDS TO BUILD THE APPLICATION FROM SCRATCH

ng new project-with-outlets
ng g c user/user-sidebar
ng g c user/user-details
ng g c photos/photos-sidebar
ng g c photos/photos-details
ng generate module app --flat
ng generate module app-routing --flat --module=app
ng add @angular/material
ng serve
```
