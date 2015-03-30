Our portfolio site runs on Jekyll, with development aided by Gulp.

## Prerequisites

* Ruby
* NodeJS & NPM

## Usage

#### 1. Install Jekyll

```sh
$ gem install jekyll
```

#### 2. Install Gulp globally

```sh
$ npm install --global gulp
```

#### 3. Install project dependencies

Navigate to the project folder, and run:

```sh
$ npm install
```
#### 4. Run Gulp

```sh
$ gulp
```

The following will occur when the `gulp` command is run:

* A Browserify server will spin up at `localhost:3000`
* All SASS files will be compiled
* All Javascript will be packaged for easy updating
* All new images will be minified
* Jekyll will run a build of all files, depositing them in the _build folder
* Browserify will serve the _build folder and then watch the main project folder for changes
* When a change takes place, the appropriate subtask for that file type will run

## Development Roadmap

* Fix navigation on mobile
* Navigation icon color
* Minification
* Syntax highlighting
* Extensionless permalinks: http://jekyllrb.com/docs/permalinks/