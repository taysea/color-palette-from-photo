[![Netlify Status](https://api.netlify.com/api/v1/badges/80952d27-f6c6-4b19-ba21-21a0a16c5461/deploy-status)](https://app.netlify.com/sites/color-palette-generator/deploys)

# color-palette-generator

## About

Let photos you like help you find the right color palette for your project. You can browse automatically loaded photos or search for specific photos. When an image is clicked on, the dominant 6 colors are extracted and displayed, allowing you to copy and paste these HEX codes directly into your project. 

## What's really going on?

**grommet-** used to create the UI. The components from its library make it easy to create a responsive layout.

**unsplash-** used to pull the images that populate the layout. On the home page, a random selection of images categorized by Unsplash as "featured" are displayed. However, a specific topic can also be searched for using the search bar. In all cases, the images displayed are coming from Unsplash. The user who uploaded the image is credited on the page that loads when an image is clicked on.

**react-color-extractor-** npm package used to extract six dominant colors from a selected image.

## Run locally

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Demo

### Landing page
<img width="1474" alt="Screen Shot 2022-09-01 at 11 35 27 AM" src="https://user-images.githubusercontent.com/12522275/187992709-2065ef1c-ca96-4bf8-a025-e9a353bb6885.png">

### Search results
<img width="1470" alt="Screen Shot 2022-09-01 at 11 36 14 AM" src="https://user-images.githubusercontent.com/12522275/187992692-a6fe7fe6-c09c-451f-ad03-719ec75e7eb2.png">

### Detail page

<img width="1474" alt="Screen Shot 2022-09-01 at 11 36 25 AM" src="https://user-images.githubusercontent.com/12522275/187992680-00142cd5-f185-4cf4-9599-9c6f9bc13820.png">
