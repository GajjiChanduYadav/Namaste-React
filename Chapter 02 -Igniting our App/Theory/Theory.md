# Chapter 02 - Igniting our App
## Q: What is NPM?
A: It is a tool used for ***package management*** and the default package manager for Node projects.  <code>**npm**</code> is the default package manager for the Node.js runtime environment, which allows developers to build server-side applications using JavaScript. In addition to managing packages for Node.js, npm can also be used for managing packages for front-end web development using tools such as React, Angular, or Vue.

Developers can use npm to easily install and manage third-party libraries and packages, which can save a lot of time and effort in building complex applications. npm also provides a registry of thousands of packages that are available for use, making it easier for developers to find and use existing code rather than writing everything from scratch.

##### Note:
       NPM:  "Node  Package Manager" it's not the standard abbreviation for npm .If we go and check the official website of https://www.npmjs.com/ .
		In their website we can find a lot of abbreviation for npm we can also give a name to it . 
		In their official website they didn't specify  "npm stands for node package manager." It doesn't have any standard abbreviation.

##### How to initialize npm?
       npm init
<code>**npm init -y** </code> can be used to skip the setup step, <code> **npm**</code> takes care of it and creates the <code>**package.json**</code> json file automatically , but without configurations.


## Q: What is Parcel/Webpack? Why do we need it?
A:   **Bundler:** A bundler is a tool that is used to <code> **bundle together multiple files and dependencies into a single file**</code> , typically for use in web development. In the context of web development, bundlers are often used to combine JavaScript, CSS, and other assets into a single file that can be served to the browser.

Bundlers like  <code>**Parcel, Webpack, Rollup, and Browserify**</code> take care of many tasks related to bundling, **including resolving dependencies between modules, transpiling code for backwards compatibility, and optimizing code for performance**. They also provide many additional features such as <code>**code splitting, hot module replacement, and tree shaking**</code>.

##### Parcel and Webpack are both module bundlers for JavaScript applications, which means they take a bunch of modules, typically written in separate files, and bundle them together into a single file that can be served to the browser.
     Parcel: Parcel is a zero-configuration module bundler that uses intelligent defaults to bundle your application. It automatically detects your project's entry point, and then recursively analyzes all dependencies to build a graph of modules that need to be bundled together. It supports a variety of file types out of the box, including JavaScript, CSS, HTML, and more. One of the main benefits of Parcel is its simplicity, as it requires little to no configuration to get started.

    Webpack: Webpack is a more configurable module bundler that provides a powerful set of features for optimizing and customizing your application's build process. It uses a configuration file to define how your application should be bundled, and supports a wide range of plugins and loaders that can be used to extend its functionality. Webpack is highly flexible, and can be used to handle a wide variety of project structures and setups.

Both **Parcel** and **Webpack** are popular choices for bundling modern JavaScript applications, and provide many benefits over manually managing dependencies and scripts. By bundling your application, you can reduce the number of HTTP requests needed to load your site, improve performance, and simplify your deployment process. Additionally, module bundlers like Parcel and Webpack allow you to use modern features of JavaScript, such as ES6 modules, and still support older browsers through transpiling and polyfilling.

**Parcel Features:**
- HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
- File watcher algorithm - written in C++.
- Image optimization
- Compatible with older version of browser
- Minification
- Cleaning our code
- Caching while development
- Compresses the files
- Automatic code splitting

**Installation Commands:**

######  To install:
            npm install -D parcel
**-D** is used for development and as a development dependency.

 **- Parcel Commands:**
 
          -  For development build: "npx parcel <entry_point>"
		  -   For production build : "npx parcel build <entry_point> "


## Q: What is .parcel-cache?
.**parcel-cache** is a directory created by the Parcel bundler during the build process. It is used to store cached information about the modules and assets that Parcel processes, in order to speed up subsequent builds.

When Parcel builds your project, it analyzes all of the modules and assets in your project and generates a dependency graph. This graph is then used to determine the order in which modules and assets should be bundled, and how they should be optimized.

To avoid analyzing all of the modules and assets in your project from scratch every time you run a build, Parcel caches this information in the <code>** .parcel cache directory**</code> . This allows Parcel to quickly determine which modules and assets have changed since the last build, and rebuild only the necessary parts of your project.

The . **parcel-cache directory**  is typically located in the **root directory** of your project, and can be safely deleted if you want to clear the cache and force Parcel to rebuild everything from scratch. However, keep in mind that deleting the cache will cause your next build to take longer, since Parcel will need to analyze all of the modules and assets in your project again.

## Q: What is npx?
A: **npx**  is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

**npx stands for "Node Package Runner".**


## Q: What is difference between dependencies vs devDependencies?

A:  **Dependencies**  are the packages that are required for the application or project to run properly. These packages are typically necessary for the functionality of the application and will be installed in the **production environment.**

  **devDependencies**  are packages that are only required during the **development process**. These packages are used for tasks such as testing, linting, and building the project. They are not required for the application to run in production.

The main difference between dependencies and devDependencies is that <code>**dependencies are necessary for the application to function properly**</code> , while <code>**devDependencies are only necessary for the development process.**</code>  In addition, dependencies will typically be installed in the production environment, while devDependencies will not.

## Q: What is Tree Shaking? in Parcel?
A: **Tree shaking**  is a technique used in modern JavaScript module bundlers like Parcel to **optimize the size of the final bundle by removing unused code from the project's dependencies**. This technique is also known as **dead code elimination.**

When you import a module in your code, the bundler will include the entire module, even if you only use a small part of it. **Tree shaking is a process that analyzes your code and its dependencies to identify and remove the parts of the code that are not used**. This can significantly reduce the size of the final bundle, which can improve the performance of your application.

## Q: What is Hot Module Replacement?
**Hot Module Replacement (HMR)** is a technique used in modern web development to improve the development experience **by allowing changes to be applied to a running application without requiring a full page reload**. This means that when you make changes to your code, the browser will update the page in real-time without losing the application state or refreshing the entire page.

HMR works by replacing only the modules that have changed, rather than reloading the entire page. This allows developers to see the changes they make in real-time, and it can significantly speed up the development process by reducing the time required to make and test changes.

## Q: List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- **Hot Module Replacement:** HMR is a powerful feature that significantly speeds up the development process by allowing developers to see changes in real-time, without having to reload the entire page. This can save a lot of time and effort, especially when making small changes or testing different features.

- **Tree shaking:**  Tree shaking is a technique used in modern JavaScript module bundlers like Parcel to optimize the size of the final bundle by removing unused code from the project’s dependencies. This technique is also known as dead code elimination.

- **Image Optimization:** Image optimization is the process of reducing the file size of images used in web applications, without significantly affecting their visual quality. The goal of image optimization is to improve the performance of web applications, by reducing the amount of data that needs to be downloaded by the user's browser.

- **Minification**

- **Caching while development**

## Q: What is .gitignore? What should we add and not add into it?
A: In Git, the **.gitignore file** is a configuration file that **tells Git which files and directories to ignore when tracking changes in a repository**. When you add a file or directory to the .gitignore file, Git will not track changes to that file or directory.

The .gitignore file is typically located in the root directory of a Git repository, and it can be used to ignore any file or directory that is not required for the project

In our code we shouldn't add the files, which we can <code>**re-generate**</code> in future e.g, <code>**node_modules**</code> , <code>**dist**</code> etc.

## Q: What is the difference between package.json and package-lock.json?

package.json and package-lock.json are both files used in Node.js projects to manage dependencies and their versions.

- **package.json**: This file contains information about the project, including the  <code>**name, version, description, and dependencies**</code> required for the project to run. The file is typically edited by developers to specify the dependencies required for the project, along with their version ranges. The **package.json file** is <code>**intended to be committed to the repository and shared with other developers**</code> , so that everyone working on the project is using the same dependencies.

**package-lock.json:** This file is <code> **automatically generated by npm**</code>  when dependencies are installed. It contains a complete, detailed list of all the dependencies installed for the project, <code>**along with their specific versions and any sub-dependencies.**</code>The purpose of the **package-lock.json** file is to ensure that all developers working on the project have identical dependencies installed, down to the exact version number. This eliminates the possibility of different developers using different versions of the same dependency, which can cause compatibility issues and bugs.

In summary, the** package.json file** is <code>**manually edited by developers to specify the dependencies required for the project**</code> , while the **package-lock.json file** <code> **is automatically generated by npm to ensure that all developers have identical dependencies installed**</code>. The package.json file specifies the** version ranges for dependencies**, while the package-lock.json file specifies **the exact versions installed.**

## Q: Why should I not modify package-lock.json?
A:  It is a **generated file and is not designed to be manually edited**. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit **package-lock.json** to your code repository

You should avoid updating the **package.json** manually since it could break the synchronization between **package.json** and **package-lock. json**.

## Q: What is node_modules ? Is it a good idea to push that on git?
**node_modules is a directory** that is created by Node.js package managers (such as npm or Yarn) when installing dependencies for a Node.js project. It contains all the installed packages and their dependencies, which are required for the project to run. The node_modules directory can be quite large, depending on the number of packages and their size, and can contain thousands of files.


It is generally not a good idea to push the node_modules directory to Git for the following reasons:

- **Large size**: node_modules can be quite large, which can make Git repositories slow and bloated.

- **Redundancy:** The contents of node_modules can be **regenerated** by running the npm install or yarn install command, so there is no need to commit it to Git.

## Q: What is the dist folder?
A: The **dist folder** (short for "distribution") is a directory that  <code>**contains the output of a build process**.</code> It is often used in web development to hold the files that are ready for deployment to a production environment.

In the context of front-end web development, the dist folder typically contains **minified** and **optimized **versions of the source code files, including HTML, CSS, and JavaScript. These files are optimized for performance and may include techniques such as** minification** (removing unnecessary characters and whitespace)**, concatenation** (combining multiple files into one), and **compression** (reducing file size).

The code present in the /dist folder is actually the code which is used on production web applications.

## Q: What is browserlists?
**Browserslist** is a configuration file that is used by several front-end development tools <code>**to specify which browsers a project is expected to support**</code>. The configuration is used to determine which CSS and JavaScript features can be used, and how they will be transpiled or polyfilled for compatibility with the specified browsers.

The Browserslist configuration can be specified in a variety of ways, including within a **package.json** file.

                           -  "browserslist": ["last 2 versions"]


