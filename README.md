# Coding exercise

Hi! We would like to ask you to check small application that we've built for you. It's a simplified version of the resraurant list (search result) page.

## Technological stack

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

- Custom, no design system

## How to run the application

Please be sure that your `node.js` and `yarn` have corresponding versions:

- `node.js` **^16.13.0**
- `yarn` **^1.19.1**

To run the application you need to run

```javascript
yarn install
yarn dev
```

In your browser go to `localhost:3000`.

### Important to know

- In the application we have translations, but if you are adding a new translation, you need to restart the application, as HMR doesn't work in that case.

## Application description

Here we will describe the current implemented application (all requirement will be described below). We have a web application with restaurant list, which can be sorted by different sorting attributes. Restaurant cards are not clickable. The application is translated to English, German and Dutch. All network requests are simulated, you can find all data in the codebase.

## Requirements

We have the following tasks:

Story

1. Display additional information in restaurant card

- Minimum order value, formatted as currency
- Average ratings

2. Enhance sorting functionality

- Average rating (descending order)
- Minimum order value (ascending order)

Bug found

1. Alphabetically sorting doesn't work
