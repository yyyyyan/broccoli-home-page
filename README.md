# A Site for Broccoli &amp; Co.

## Contents

[Run It Locally](#run-it-locally)<br />
[Functional Description](#functional-description)<br />
[Technical Design](#technical-design)

## Run It Locally

### Requirements

Make sure you have Node v14.17.0 or later version.

In the project directory, run first:

#### `npm install`

### Available Scripts

In the project directory:

#### `npm run dev`

Runs the app in the development mode.<br />
Please make sure [http://localhost:3000](http://localhost:3000) is available.

#### `npm run build`

Builds the app for production to the `dist` folder.<br />

#### `npm run check`

Runs the type checking.<br />

#### `npm run test`

Runs the specs.<br />

## Functional Description

Users can request an invitation via home page (tested with the latest versions of Chrome, Safari and Firefox).

They could also toggle the theme for a better visual experience :)

![Home Page](screenshots/broccoli_1.png?raw=true "Title")
![Request an Invitation](screenshots/broccoli_2.png?raw=true "Title")
![Verify your Input](screenshots/broccoli_3.png?raw=true "Title")
![All Done](screenshots/broccoli_4.png?raw=true "Title")

## Technical Design

### Overview

Since the first version of Broccoli & Co. is pretty simple, I built the project with minimum but necessary pieces.
When more features come, it can comfortably scale without breaking current design.

### Runtime Dependencies

Besides React.js, I used [react-modal](https://github.com/reactjs/react-modal)
and [styled-components](https://github.com/styled-components/styled-components).

styled-components was a surprise because I hadn't practiced it a lot. Thanks to this project, I ran over its doc and now
consider it an excellent option to reuse styles smoothly with React. <br />

### Dev Dependencies

I chose the classic way with Webpack and Babel plugins to bundle the code. The project is fully typed with Typescript
to ensure that the logic is readable and predictable.

For a faster compilation, I didn't include ts-compiler in the pipeline but its type checking is ran everytime we commit
or launch the production build.

### Testing

Due to time limitations (my main focus was on how to make a decent overall design), I didn't write enough specs to test
the app's behaviours. The request util is tested with Jest and I hope it covers some important part.

