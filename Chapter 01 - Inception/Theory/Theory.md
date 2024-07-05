 # Chapter 01 - Inception
## Q: What is Emmet?
A: Emmet is a **plugin** for text editors that allows you to write HTML and CSS code more quickly and efficiently. Originally known as Zen Coding, Emmet was created by front-end developer **Sergey Chikuyonok** in 2008.

 Emmet uses a shorthand syntax to allow developers to write HTML and CSS code faster than they would by hand. For example, instead of typing out the entire HTML tag for an image, you can use the shorthand "img" and Emmet will expand it into the full HTML code. This can save a significant amount of time, especially when writing complex HTML and CSS code.
 

## Q: Difference between a Library and Framework?
A: **Library:** it is a collection of "pre-written code" that provides a set of functionalities that can be used by other programmers or applications. A library typically includes **reusable functions, classes and modules** that can be called by a  program to perform specific tasks.

**Framework:** On the other hand, a framework is a more comprehensive piece of software that provides "a complete set of tools", "guidelines", and "conventions for developing software applications". A framework usually provides a set of **predefined rules, protocols, and procedures** that govern how the application should be developed. 

 The developer then writes their code within the framework, following the prescribed patterns and conventions. A framework can include libraries, but it also provides additional functionality such as templates, APIs, and other tools that are used to build applications. 

A **framework** typically includes "collection of libraries" as well as additional components such as "code generators" "compilers"and "development tools". Framework provides a structure for building applications , often with predefined patterns and guidelines for organizing code and implementing specific features.

##### Example: 
  A library is like a toolbox containing specific tools for specific tasks, while a framework is like a blueprint containing guidelines and conventions for building a complete structure.

**The key difference between librar and framework is:** 
When an application code uses a library, the developer writing the code is in charge of the application flow. **This means the developer decides when to call the library. However, when we use a framework, the framework decides when to call the library.** This shift in control of calling the library from the application code to the framework is an **Inversion of control.**

## Q: What is CDN? Why do we use it?
A: **CDN** stands for <code> **content delivery network**</code>
is  a geographically distributed group of servers that **caches** content close to the end users. A CDN allows for the quick transfer of assests needed for loading internet content, including HTML pages, JS files, CSS files, Images and Videos.

The main aim of the CDN is to deliver the content as "quickly" "cheaply" "reliably" and "securely as possible". In order to improve **<code>**speed and connectivity**</code>** a CDN will place servers at the exchange points between different Networks

##### CDN link: 
    1.  A CDN link is a URL that points to a file hosted on a CDN servers . In HTML a cdn link is typically used to load external resources, such as JS libraries , css , and images into a webpage.
	2.  The purpose of using a CDN link in html is to improve the performance of a "website" or "web application".
	3. When a user visits a website that uses a CDN link , their browser can download the necessary files from a server that is geographically closer to them ,which reduces the time it takes for the files to travel over the internet. This can result in faster page load times and better user experience.

## Q: Why is React known as React?
A: React is a JavaScript Library. The name ‘React’ was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.


## Q: What is crossorigin in script tag?
The **crossorigin** attribute in the HTML <code>**script tag**</code> is used to indicate how the browser should handle requests for a script file that is hosted on a different  <code>**website or domain**</code> than the webpage itself.

When you include a script file in your HTML page using the script tag the browser sends a request to the server hosting the script file to fetch it.If the script file is hosted on a different domain or origin than your web page then the browser may block the request due to a security feature called the **same origin policy**

**We can set the crossorigin attribute to one of the following values:**

**Anonymous**:  This allows the browser to make a cross-origin request for the script file but does not send any credentials are cookies  along with the request
.
**User-Credentials:** This allows the browser to make cross origin request for the script file  and sends any credentials or cookies along with their request.

**Same Origin Policy :** is a security feature implemented by web browsers that prevents scripts loaded from one origin (i.e., domain, protocol, and port) from accessing resources on a different origin. The goal of this policy is to prevent malicious scripts on one domain from accessing or modifying content on another domain.

**For Example:** suppose you have a web page served from **www.example.com**, and that web page contains a script that tries to access data from **api.example.ne**t. If the **api.example.net** server does not allow requests from other domains, then the web page's script will not be able to access that data due to the Same Origin Policy.

The Same Origin Policy applies to various web resources such as <code>**scripts, stylesheets, images, and iframes.**</code>. For instance, if you load an image or script from a different domain, the browser will not allow that resource to access the cookies or local storage of your current domain.

However, there are some exceptions to the Same Origin Policy. For example, a web page can make cross-origin requests using techniques such as <code>**JSONP (JSON with Padding), Cross-Origin Resource Sharing (CORS), or by using a proxy server.**</code>These techniques allow a web page to access resources from other domains, but they require specific configurations on the server-side.

In summary, the Same Origin Policy is a security feature implemented by web browsers to prevent malicious scripts on one domain from accessing or modifying content on another domain. The policy applies to various web resources and can be bypassed using specific techniques that require server-side configuration.

## Q: What is difference between React and ReactDOM?
A: <code>**React** </code>and  <code>**ReactDOM**</code>are two different libraries in the React ecosystem.

**React** is a JavaScript library for building user interfaces. It provides a way to create reusable UI components and manage their state and props. React allows you to create dynamic, high-performance web applications with a declarative and component-based approach. React provides the core functionality for building React applications, including the virtual DOM, component lifecycle methods, and JSX syntax.

**ReactDOM**, on the other hand, is a library that provides the DOM-specific methods that React needs to interact with the browser DOM. ReactDOM is responsible for rendering React components into the browser DOM and updating them when changes occur. It provides methods like ,<code>**ReactDOM.render()**</code>, which takes a React component and mounts it to a DOM element,and<code>**ReactDOM.unmountComponentAtNode()**</code>, which unmounts a React component from the DOM.

In short, React is the ***core library*** for building user interfaces in a declarative and component-based way, while ReactDOM is the library responsible for  ***rendering React components*** into the browser DOM and managing their lifecycle.

It's important to note that while React and ReactDOM are separate libraries, they are often used together and are both included when you install React. When you create a React app, you typically import both React and ReactDOM to use them in your code.

## Q: What is difference between react.development.js and react.production.js files via CDN?
React provides two versions of its JavaScript library that can be used via CDN:  
<code>**react.development.js**</code>and <code>**react.production.js**</code>.

The **react.development.js** file is an uncompressed, development version of the React library. It is intended for use during development and debugging, as it contains additional error checking and warning messages that are helpful for troubleshooting issues in your React code. This version is larger in size than the production version and is not optimized for performance.

The **react.production.j**s file, on the other hand, is a compressed, production-ready version of the React library. It is intended for use in production environments, as it is smaller in size and optimized for performance. This version does not include the additional error checking and warning messages found in the development version, as they can negatively impact performance.

In summary, the main difference between react.development.js and react.production.js is that the former is larger in size and contains additional error checking and warning messages that are useful during development and debugging, while the latter is smaller in size and optimized for performance, making it suitable for use in production environments.

When developing a React application, it's recommended to use the development version of the React library to take advantage of the additional error checking and warning messages. However, when deploying your application to a production environment, you should switch to the production version of the library for optimal performance.

## Q: What is async and defer?
**async** and **defer** are attributes that can be added to the script tag in HTML to control the way in which a script is loaded and executed.

 `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```

**In summary**, async and defer are attributes that control how a script is loaded and executed in the browser. async loads and executes the script asynchronously while the page continues to load, while defer loads the script in the background and executes it after the page has finished parsing. Choosing the appropriate attribute depends on the script's dependencies and the desired loading behavior.



