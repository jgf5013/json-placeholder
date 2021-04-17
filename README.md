# json-placeholder

## Prerequisites
Make sure you have the following installed
* These instructions use [NPM](https://www.npmjs.com/) but you may consider [Yarn](https://yarnpkg.com/) as well if you're more comfortable with that.
* [Angular CLI](https://angular.io/cli)

<hr>

## How to Run
1. Check out the [Prerequests](#Prerequisites) section above!

#### Launching the App
1. `npm install` <-- Make sure your dependencies are up-to-date!
2. `ng serve --open`: this will start the application and automatically open it in your default browser. Leave off the `--open` option to just start it without auto-launching

#### Tests
* Unit: `ng test`
* End-to-end: `ng e2e`

<hr>

## Gotchas
#### Angular Material
I used [Angular Material](https://material.angular.io/) for this app as it provides a nice clean and simple user experience. Be careful when importing Material Modules though as they increase module load time and, if not imported correctly, will cause the application to not render. It can be easy to make such a mistake if you accidentally important the same module twice - this is the main reason I've created [AppMaterialModule](https://github.com/jgf5013/json-placeholder/blob/main/src/app/material/app-material.module.ts).

#### Unit Test Scenario for PostService::shuffle
To not write a test scenario for the `shuffle` method within [PostService](https://github.com/jgf5013/json-placeholder/blob/main/src/app/post/post.service.ts) that checks to ensure the resulting array is in a different order than the original array. Though the probability is small, there's a `1/n!` chance the elements will come out in the same order they were sent in.

#### End-to-End Testing Framework
Protractor is being used as end-to-end testing framework but is being deprecated (reaching end of development lifecycle in Fall of 2022) as mentioned [here](https://github.com/angular/protractor/issues/5502). The application should be migrated to [Cypress](https://www.cypress.io/) or something similar.

<hr>

## Design Choices

#### Code Structure
I prefer a flat folder structure as opposed to deeply nested directory structure. Editors will sort files alphabetically so as long as consistent naming standards are followed it will be just as easy to find files (keyboard shortcuts are great too!) and in addition, you don't need several clicks to drill into a deeply nested folder.

#### Error Handling on API Call
I chose to rethrow the post API error back to the calling component to allow for easily readable markup that closely aligns with API response.

#### Post Component Toggle
I implemented the logic of replacing the information on the component with the alternative information (`userId` vs. `id`) using a list of enumerated values and a modulus operator. This allows us to easily add additional information to the [PostComponent](https://github.com/jgf5013/json-placeholder/blob/main/src/app/post/post.component.ts) by adding an addition array element into the [POST_SIDES constant](https://github.com/jgf5013/json-placeholder/blob/main/src/app/post/constants.ts)

Note: I could have added a #11 to the link above to link to the line-number but I've found that's often not the best choice when a file is undergoing active development.

#### Responsive Design
I pride myself on making apps that are mobile friendly and almost always develop with the responsive "Toogle device toolbar" on.
![Responsive Design](https://github.com/jgf5013/json-placeholder/blob/main/responsive-design.png)
If you resize your browser or view the application from your phone, you should see the squares adjust size to fit within your screen. This has been tested down to a width of 240px ([Unihertz Jelly](https://www.unihertz.com/jelly-2.html) viewport)

#### Layout
I really like [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and prefer it for most use-cases, but [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) makes more sense for something that is a strict 10x10 layout.

#### Angular Material (again)
As mentioned in the [Gotchas](#Gotchas) section, this application uses Angular Material. Though I do like this look and feel, it does give a minor impression that the app is somehow connected to Google. Decisions such as these should be carefully considered by the organization.

#### Additional Fun
I like the idea that there's a grid of information, some how which isn't visible until the post is "turned over" and thought it might be fun to show an association between posts from the same user. The API return elements sorted by `userId` so row 1 contains all posts from `userId=1`, row 2 contains all posts from `userId=1`, etc. but this isn't guaranteed and I thought it would be fun to highlight posts from related users. You can see the power of this but switching the `SHUFFLE` constant to `true` in [post/constants.ts](https://github.com/jgf5013/json-placeholder/blob/main/src/post/constants.ts).

#### To Use a Spinner
I decided to not use a spinner when loading the posts. The call comes back consistently fast and so presenting a loader for a quarter of a second gives the impression that the page is 'flickering' incorrectly. If API call time would be > 0.5s I would reconsider.

<hr>

## Questions
