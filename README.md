#Homework
Hi dear colleague! We would like to ask you to check small application that we've built for you. In this readme you will find all necessary information to run this application, plus all our tasks and expectations. But please don't stop on that. If you have ideas how to improve it, please feel free. Let's go!

##Technological stack
Language:

- Javascript (ES6)

Libraries and frameworks:

- Node.js
- React.js
- Redux
- Sagas

File system organisation:

- Ducks

Architecture and application design:

- Domain-driven design approach

Design and Design System:

- Custom, no DS

##How to run the application
Please be sure that your `node.js` and `yarn` have corresponding versions:

- `node.js` **^12.2.0**
- `yarn` **^1.19.1**

To run the application you need to run

```javascript
yarn install
yarn dev
```

In your browser go to `localhost:3000`.
##Application description
Here we will describe the current implemented application (all requirement will be described below). We have a web application with restaurant list, which can be sorted by different sorting attributes. Restaurant cards are not clickable. The application is translated to English, German and Dutch. All network requests are simulated, you can find all data in the codebase.

##Requirements
We need to implement:

- Sorting attributes
  - by minimum order value (min -> max)
  - by rating (top rated)
- Filtering
  - by delivery type (delivery/pickup)
  - by cuisine
- Click on the restaurant card

  - `console.log` slug of this restaurant, no other action needed

Views:

- Mobile
- Desktop

Browsers:

- Chrome
- Safari
