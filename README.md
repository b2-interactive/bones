# B2 Interactives Bones

## Intro

This is B2 Interactives Bones project.  It is a skeleton for the start of a project that uses:

### Node

Node is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
[http://nodejs.org](http://nodejs.com)
### Grunt

Grunt is a Javascript task runner that automates a lot of the compiling processes.
[http://gruntjs.com](http://gruntjs.com)
### Bower

Power is a front-end package manager. It is used for installing things such as jquery, angular, bootstrap, etc.
[http://bower.io](http://bower.io)
### SASS

Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. It is a css pre processor that gives you a lot more options, such as variables, mixins, functions, etc.

Language Reference:
[http://sass-lang.com](http://sass-lang.com)

Grunt Plugin Reference:
[https://github.com/gruntjs/grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)

### Grunt-Contrib-Imagemin

This is grunts image minimizer that has plenty of different options for you.
[https://github.com/gruntjs/grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
### Grunt-Contrib-JSHint

JSHint is a tool that helps to detect errors and potential problems in your JavaScript code.
[https://github.com/gruntjs/grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
### Grunt-Contrib-Uglify

This grunt plugin is used for minifying your Javascript files.
[https://github.com/gruntjs/grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
### Jade

Jade is one of many Node template engines. It uses a tabular syntax and decrease the amount of code needed.

Language Reference:
[http://jade-lang.com](http://jade-lang.com)

Grunt Plugin Reference:
[https://github.com/gruntjs/grunt-contrib-jade](https://github.com/gruntjs/grunt-contrib-jade)

### Grunt-Contrib-Watch

This grunt plugin is used for watching all of your process and running them as you save files.
[https://github.com/gruntjs/grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

## Installing on Windows Machines

To install on a windows machine you are going to need to make sure you install a few different things:

1.  First thing you need to make sure you have installed is Ruby. Go to [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/)and download the Ruby 2.1.5 installer, either 64-bit or 32-bit depeneding on your machine.
    Once the download is complete run the application file and make sure it adds it to your PATH.
    When it is done installing, open your Command Prompt and type:

      `ruby -v`

    If this doesn't return an Error and you get a version number it is installed correctly.

2.  Second thing that you will want to install is SASS. To do this open up your Command Prompt and type:

      `gem source -a http://rubygems.org`

    This will bring up a message asking if you want to add this insecure source so type y and hit enter.
    This is just a work around for an SSL error you would normally recieve using Ruby 2.1.5.
    Next, you want to install SASS by typing:

      `gem install -g sass`

    This may take a minute or two but once it is done type:

      `sass -v`

    If this doesn't return an Error and you get a version number it is installed correctly.

3.  Another thing that you will want to install is Git. There are two options for this (I would suggest the first one), they are:

      *  This first option is by downloading GitHub for Windows. This will install GitHub's GUI and the command line version of Git as well.
          To get this download go to [https://windows.github.com/](https://windows.github.com/)and click download. Once the download is finished install the application.
          Now depending on what is easier to you, you can use the GUI or the Git Power Shell but we will be using the GUI for the purposes of this walk through.

      *  Second route is using Git for Windows by going to[http://git-scm.com/download/win](http://git-scm.com/download/win)and click the download button. Once the download is complete, run the application file.
          Going through the process you will want to check the Git BASH Here and the Git GUI Here options under the Select Components Menu.
          Also, in the Adjusting Your PATH Environment Menu choose the Use Git From Windows Command Prompt option. Leave everything else as is.

4.  Next thing that you will want to install is Node.js. To do this navigate to [http://nodejs.org](http://nodejs.org)and click the download button. Once the download is complete, run the application file.
    Go through the process and hit install. Once installed open up a new Command Prompt and type:

      `node -v`

    If this doesn't return an error and you get a version number then Node is installed correctly.
    This will also install NPM which is nodes package manager and you will be using this to install
    a few more things.

5.  The last prerequisite is the grunt-cli and is very simple to install.
    All you have to do is open your Command Prompt and type:

      `npm install -g grunt-cli`

    Once it is done and you have no errors you are good to go.
    Now, move down to the section "Git Repository and Set Up".

## Installing on Mac Machines

To install on a Mac machine there are a few things you are going to need to install:

1.  First thing that you will want to install is SASS. Since Ruby comes installed on Mac machines all you have to do this open up your Terminal and type:

      `gem install -g sass`

    This may take a minute or two but once it is done type:
      
      `sass -v`

    If this doesn't return an Error and you get a version number it is installed correctly.

2.  Next thing that you will want to install is Node.js. To do this navigate to [http://nodejs.org](http://nodejs.org)and click the download button. Once the download is complete, run the application file.
    Go through the process and hit install. Once installed open up your Terminal and type:
      
      `node -v`

    If this doesn't return an error and you get a version number then Node is installed correctly.
    This will also install NPM which is nodes package manager and you will be using this to install
    few more things.

3.  We also need to make sure Git is installed on the machine by opening up Terminal and typing
    
      `git`

    If it is not installed already it will open up a prompt that will walk you through the process.

4.  The last prerequisite is the grunt-cli and is very simple to install.
    All you have to do is open your Terminal and type:
      
      `npm install -g grunt-cli`

    Once it is done and you have no errors you are good to go.
    Now, move down to the section "Git Repository and Set Up".

##### MIT License

##### Developed by [B2 Interactive](http://www.b2interactive.com)