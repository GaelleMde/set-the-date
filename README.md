# Set the Data

## [See the App!](https://set-the-date.netlify.app/)

![App Logo](/public/Logo.svg)

## Description

**NOTE -** The Set the Date server handles tennis tournament data and manages user favorites.
It also supports user interactions through comments and authentication.

#### [Client Repo here](https://github.com/GaelleMde/set-the-date)
#### [Server Repo here](https://github.com/GaelleMde/set-the-date-server)

## Technologies & Libraries used

**NOTE -** This project was built using the MERN stack (MongoDB, Express.js, React, Node.js) along with the following tools and libraries: CSS, React Context, BootStrap, Cloudinary

# Client Structure

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app 
- **sign up** - As a user I want to sign up on the webpage 
- **login** - As a user I want to be able to log in on the webpage 
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **tournament list** - As a user I want to see all the events available so that I can choose which ones I like to comment or have more info
- **events create** - As a admin I want to create an event
- **edit create** - As a admin I want to edit an event
- **delete create** - As a admin I want to edit an event
- **add favorite** - As a user I want to add tournaments to my favorite list
- **remove favorite** - As a user I want to remove tournaments to my favorite list


## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Login           |                   | public                   | Login form, link to signup, navigate                                                    |
| `/signup`                   | Signup           |                   | public                   | Login form, link to signup, navigate                                                    |
| `/homepage`                 | Homepage         |     FavoriteCard, UpcomingEventCard              | OnlyPrivate     | Displays upcoming events and favorites after login |
| `/event/new`                  | AddEventPage          |                   | user only `<OnlyPrivate>`   | Shows form to add a new event |
| `//event/:eventId`                | EventDetailsPage        | CommentCard, AddComment      | user only `<OnlyPrivate>` | Shows event details and allows adding comments|
| `/event/edit/:eventId`             | EditEventPage       | | user only `<IsPrivate>`  | Shows form to edit selected event                                  |
| `/confirmation`             | ConfirmationPage     |                   | user only `<OnlyPrivate>`  | Shows all games on backlog                                    |
| `/event/all`       | AllEventPage   | SearchBar, AllEventCard        | user only `<OnlyPrivate>`  | Shows a list of all events with search functionalityevent                                   |
| `/favorite`       | FavoritePage   | FavoriteCard         | user only `<IsPrivate>`  | Shows list of favorite events                                |
| `/error`       | ErrorPage   |           | public  | Shows error message when something goes wrong                                |
| `*`       |NotFoundPage    |         | public  | Shows 404 message for undefined routes                             |

## Other Components

- OnlyPrivate
  
## Context

- auth.context
  
## Links

### Collaborators

[Gaëlle Madelaine](https://github.com/GaelleMde)


### Project

[Repository Link Client](https://github.com/GaelleMde/set-the-date)

[Repository Link Server](https://github.com/GaelleMde/set-the-date-server)

[Deploy Link](https://set-the-date.netlify.app/)


### Slides

[Slides Link](www.your-slides-url-here.com)