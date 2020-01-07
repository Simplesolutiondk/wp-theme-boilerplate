# WP Theme Boilerplate ```v1.0.6```

## Including

This theme includes all the basic for a wordpress theme.

## Installation of the theme

[Boilerplate theme repository link](https://bitbucket.org/simple-solution/wp-theme-boilerplate/src/master/)

### Method 1 - Without Git

- Go to the link listed above and download the repository.
  - Switch branch to master. If you aren't on master, you won't have the newest update.
- Un-Zip the downloaded file and move the theme-folder to wp-content/themes
- Now go to the wordpress admin-panel and change your theme to the newly installed theme.

### Method 2 - With Git

SSH:   ```git clone git@bitbucket.org:simple-solution/wp-theme-boilerplate.git```

HTTPS: ```git clone https://<your-bitbucket-username-here>@bitbucket.org/simple-solution/wp-theme-boilerplate.git```

- Open your terminal and cd into the wp-content/themes-folder and run either the command for SSH or HTTPS
  - This will download the newest version of the theme boilerplate from master.

#### The Node Modules we use in the boiler

*We don't use React & ReactDOM from node_modules, but instead loads that in via. CDN*

##### Dependencies

- ```@babel/core``` — It provides basic core babel configuration
- ```@babel/preset-env``` — It allows to work with latest ES6/ES7/ES8 features
- ```@babel/preset-react``` — It allows to work with react syntax which is JSX
- ```webpack-cli``` - Is the Command Line Interface (CLI) for webpack we then use to be able to run commands.

##### devDependencies

- ```babel-loader``` - Babel-loader will convert all ES6+ and React code to ES5 for multi-browser and backwards compatability support.
- ```webpack``` - It will compile all our SASS and REACT.JS code into CSS and JavaScript ES5 for multi-browser support.
- ```css-loader``` - Translates CSS into CommonJS.
- ```node-sass``` - It natively compile .scss files to css.
- ```sass-loader``` - Compiles SASS to CSS <- Makes use of node-sass module.
- ```mini-css-extract-plugin``` - Extracts all CSS from the compiled .js file to .css.
- ```optimize-css-assets-webpack-plugin``` - It will search for CSS assets during the Webpack build and will optimize \ minimize the CSS.
