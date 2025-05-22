**MyStore React JS Project**

**What is the use of this Repo**

This Project is a Simple ReactJS Project(My Store) which demonstrates the following

- Creating a Component in React
- Creating Home and ProductList page to display products fetched from api
- The project has feature to change the prouct list from Grid view to Table view
- The project support filter option to sort the Product based on the price(High to Low and Low to High)
- Making HTTP calls
- Communicating between parent and child component
- Using Basic Routing in React
- The project is responsive and accessible
- The project Template can be used to build bigger projects

**Prerequisites**

Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

**Cloning and Running the Application in local**

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

npm install
In order to run the application Type the following command

npm run dev
The Application Runs on localhost:5173

**Application design**

**Components**

Home Component : This Component displays a home page title with navigation bar(Home, Products). This is the defualt page display when user launches the application

ProductLis Component : This Component displays a list of Products. This Component gets the data from a api(https://fakestoreapi.com/products)

ProductCard Component : This Component displays a details of Product which includes title, price, product-image and rating.

ProductsCardSkeleton Component : This Component display a Card skeleton till the time product data is loading from the api.

Common component: NavBar, Loader, Table

**HTTP client**

axios library is used to make HTTP Calls

**URL**

The application has two url /home and product-list which ties to Home Component and ProductList Component

**Resources**

ReactJS : Refer to https://reactjs.org/ to understand the concepts of ReactJS

