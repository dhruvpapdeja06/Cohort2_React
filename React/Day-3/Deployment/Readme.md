<!-- Notes : To install cmd and conceptual notes -->

# Run cmd to install dependencies 

<!-- npm registry code to my local machine -->

# npm init

<!-- If package-lock.json file exit then run this cmd -->
<!-- Install the dependencies from this file -->
# npm install 

<!-- If Package-lock.json file not exits then execute below cmd -->
# npm i parcel 
# npm i react 
# npm i react-dom

<!-- We can deploy our project on Vercel/github/netlify -->

<!-- TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../". -->

<!-- Write production ready code  and deploy it -->


<!-- To start the server run the cmd -->
# npx parcel index.html 

<!-- index.html file pass to the parcel bundler, optimized the code , build the server and run it (create-cache the server to build faster) -->

# npx build parcel index.html

<!-- Bundle -> Bundle the whole code in dist folder.Optimization of img,videos and all dependencies is handle by parcel that file we have it. -->
<!-- In dist folder parcel create the production-level code that deploy on the production, remember first remove the map file before push in prouduction beacuse of that we can get the origional code  -->

<!-- From the map file + js file we can get the business logic of company, My End-goal is to show the website to user ,It doesn't matter what code is written behind it. -->

<!-- For testing purpose I deploy on netlify -->

<!-- By inspecting we can get only the front-end code , not able to see the Backend Logic -->
