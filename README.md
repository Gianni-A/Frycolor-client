# Frycolor-Client

The project is about a social network, it has its normal actions like sign up with a username, email ID, interacts with other users having conversations, sharing moments and much more.
In the social network it permits update your information, upload photos and videos and comment them, update your feedback (News), make a reaction of each publication you made.

This project is for the frontend side made with React Js.

# Pages

## Intro page

Here is where a user can find will find when try to joing to the page of the social network, there are 2 buttons to go, one is to log in (if you already have a username) and the other one is for the creation of a new user

### Files involved

[Pages -> Intro.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/pages/Intro.js)

[CSS -> intro.css](https://github.com/Gianni-A/Frycolor-client/blob/master/src/css/intro.css)


## Sign Up

In this page, the user can put their information like email, username and password in order to register their username and will allow to join to the social network.

### Files involved

[Pages -> Signup.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/pages/Signup.js)

[Redux -> Types -> SignUpTypes.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/redux/types/SignUpTypes.js)

[Redux -> Reducer -> SignUpReducer.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/redux/reducers/SignUpReducer.js)

[Redux -> Actions -> SignUpAction.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/redux/actions/SignUpAction.js)

[CSS -> signup.css](https://github.com/Gianni-A/Frycolor-client/blob/master/src/css/signup.css)


## Forgot password page

If the user forgot their username and need to recover it, needs to joing to the page /forgotPassword and there just need to type their email and it will arrive an email with a link to go to another page and restore their username.

### Files involved

[Pages -> ForgotPassword.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/pages/ForgotPassword.js)

[Redux -> Types -> ForgotPasswordTypes.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/redux/types/ForgotPasswordTypes.js)

[Redux -> Reducers -> ForgotPasswordReducer.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/redux/reducers/ForgotPasswordReducer.js)

[Redux -> Actions -> ForgotPasswordAction.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/redux/actions/ForgotPasswordAction.js)

[CSS -> forgotPassword.css](https://github.com/Gianni-A/Frycolor-client/blob/master/src/css/forgotPassword.css)


## Login page

In this page the user is able to type their credentials, send to back-end site and able to joing to the next page.

### Files involved

[Pages -> Login.js](https://github.com/Gianni-A/Frycolor-client/blob/master/src/pages/Login.js)

[]()

[]()

[]()

[]()


## NewsFeed page

This is the main page of the social network, here the user can find all posts from them and their friends. Also the user is able to create a new post with comment and image. When the user create a new post, this is showed to the main page that other users can see it. On the post, users can react with the heart icon and add comments, also these comment can have reactions.

The owner's post can delete and when this is deleted by the server side, the page refresh automatically without refreshing the page manually.

Also the user who has comments on a post, can delete and edit the comment, when those actions took then the page is refreshing automatically.

On the page, the user can see a menu options, a list of friends they added and the header page where they can see their user and options to logout or change their password which they use to join into the system.

### Files involved

[]()


## Requests Friendship Page

This page helps users to approve or reject requests from other users who wants to add them as a friend. The page is refreshing automatically after the action has been took.

### Files involved

[]()



## User Profile page

In this page, the user can see their information, posts they have been published, list of their friends and the possible to edit their profiles. Also if the user is in another profile, user can add or delete that person of the list of their friends or if there is a request friend then it can approve or decline.

### Files involved

[]()

