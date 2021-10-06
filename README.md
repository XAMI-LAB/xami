## Folder structure 

```javascript 

src 
|- api // functions connecting to api.
|- components // react components.
|- exceptions // custom exceptions.
|- hooks // react hooks.
|- layout // layout of the website.
|- models // data models.
|- pages // all pages, including the routing page.
|- queryParams // query parameters used for api.
|- store // redux store.
|- styles // stylesheet of the website.
|- utils // utility functions.

App.tsx // design routing here.
index.tsx // entrance of react.

```


## How can I edit the content in the website

1. Search (ctrl + f) the content you want to update, and replace it.

2. Find the page through the router (App.tsx), and follow the router to certain page or compenent for updating.

## After making some changes, how can I re-deploy the website?

A: AWS will detect the changes on master branch. And, it will rebuild and re-deploy automatically for you.