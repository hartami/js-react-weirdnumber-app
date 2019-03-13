This is an web app which searches weird numbers between 1 and 1000. A "weird number" is a number that is abundant (i.e., the sum of proper divisors is greater than the number) without being pseudoperfect (i.e., no subset of the proper divisors sums to the number itself). The pseudoperfect part of the definition means that finding weird numbers is a case of the subset sum problem (http://mathworld.wolfram.com/WeirdNumber.html , 2019)

The steps to find weird numbers here:
1. Find all propers divisors of each number.
2. Find numbers which has the sum of their proper divisors are greater than the numbers (abundant number). Eliminate other numbers.
3. Check the remaining numbers, if there is a subset which has total element is equal to the number. 
Checking subsets can be done by combinatoric approach, recursive approach, or dynamic programming. This app applies recursive approach which is succesfull enough for the range (1-1000).  The combinatoric appoarch has been tried and showed at withotheralgorithms.js file. This approach was getting slower for checking the subsets of 720 because it has large divisors (29 divisors). Dynamic programming can be tried later.

The result shows 70 and 836 as weird numbers.

More about weird numbers, please visit http://mathworld.wolfram.com/WeirdNumber.html

![mybestbeer](https://user-images.githubusercontent.com/22983605/54244232-5e0c6f80-4534-11e9-94dc-9e038d81b3ad.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
