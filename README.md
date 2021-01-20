
# (◉ ͜ʖ◉))ﾉ彡 FABLAB PROJECT ✧٩(•́⌄•́๑)
>   Customer project realised during our BeCode's bootcamp


##  Index

-   [Description](#description)
-   [Backlog](#backlog)
-   [Objectives](#objectives)
-   [Release Notes](#release-notes)
-   [Toolbox](#toolbox)
-   [The Teams](#the-teams)
    -   Woods 3.21
    -   ...
-   [Timeline](#timeline)

---

## Description

Born from a request from the FabLab team of Charleroi, composed of Delphine and Sylvain, this project aims to improve the user experience "Client" but especially the user experience "Admin".
Indeed, several tools had to be centralized in order to make the management of reservations, estimates and finally invoicing easier.
The first step of this project was carried out by a Woods 3.21 team composed of :
- :star: [Bastien Dewerse - PM Tech - Back](https://github.com/DewerseB)
- :star: [Nicolas Denoël - PM Orga - Front](https://github.com/nicode-io)
- :star: [Mohamed Shmayssany](https://github.com/M-Shmayssany)
- :star: [Robby Delvaux](https://github.com/Delvaux1986)
- :star: [Simon Duquaine](https://github.com/simonduquaine)

During this one, we were able to create a functional prototype allowing us to reserve a machine during a specific time slot chosen by the client.
A reservation is then established, the rental price of the machine being defined automatically, this one can be modified before validating the final invoice.
On the administrator's side: the administrator can create, modify and delete machines and related products. 
He can consult the reservations through a calendar that allows him to navigate between the days and the different time slots in order to consult the use of the machines.

---

##  Backlog

You will find here the objectives to be reached in order to fully meet the client's needs. 
Some objectives have already been partially achieved but require further development.

### User management:     
The main goal here will be the permissions' management for users. You need to define two types (minimum) of users, admin and customer.
The admin user need to see the admin panel while a customer don't. 

### Billing system:      
The main goal is to allow admin user to edit reservation before transforming it into a bill. The objective is to allow admin user to review all reservations before billing, transforming then reservations into bills.
After that, admin user need to have a full report of the bills than can be sent to ULB, indeed the final "real" bill is created outside our scope. 

### Reservation system:  
The main goal here is to create specific rules for reservations, like a machine can't be rented more than one time for a specific time slot, etc...
The rules need to be reviewed with the FabLab team to fit their needs.

### Overall upgrades and integration:
The main goal is open to your team, let's upgrade this project with your fresh and new ideas ;)
You will then be able to integrate the project live so that it can be used on a daily basis by all the members of the FabLab Charleroi, as well as by Delphine and Sylvain, the managers.

---

##  Objectives

### ToDo
-   Backend
    -   Validation and sanitization
    -   Rework relations between Invoices, Reservations and Machines 
-   Frontend
    -   Handling response after request success to redirect the user
    -   Handling message states to provide better feedback to the user
    -   Admin
        -   Allow Admin to adjust the reservation time and price before turning it into an invoice
        -   CRUD for reservations and invoices
        -   Generate an invoices list for the month (and handle archiving)
        -   Add a dropdown list to User management for user type, and Machine/Product edit for availability
        -   Add style to Edit screens
    -   Customer
        -   Customize Home screen
        -   Create Files overview
        -   Allow to modify/delete a reservation
        -   Validation for feedback in forms
    -   Handle session
        -   Customize the UI according to user status
        -   Reservation form should handle logged in users, else it should save the mail
    -   Default hour for the Reservation form should match the time slot

### Bonus
-   Mailing list and newsletter
-   Manage Events (display to users and CRUD for admin)

---

##  Release Notes

### V 1.0
> Contribution from Woods 3.21 Team

-   Admin panel:
    -   Manage machines, products, users and reservations
    -   Overview on reservation's agenda
-   Billing system:
    -   Transform a reserevation into a bill
-   Reservations:
    -   Create a new reservation with a choosen date, machine and comments
    -   View all reservations by time slot in admin panel
    -   Focus on a time slot to see reservations details like the machine used
-   User management:
    -   Register as a new user
    -   Login 
    -   Users can be edited through admin panel

### V 0.2
>   Upgrade with components

-   Admin section with management of:
    -   Invoices 
    -   Reservations
    -   Machines
    -   Products
-   Agenda for admin users:
    -   See all (un)available time slots
    -   See reservation details on hover/click
-   Set global design with a touch of neomorphism
-   Introduce login system / user management
-   Code refactor / Documentation


### V 0.1
>   Set up project

-   Choose packages to be used in project
-   Create a first skeleton
-   Manage communication between back-end and front-end
-   Header / Footer / Navigation
-   Machine picker
-   Image Carousel
-   Relations and Models

---

##  [Toolbox](#toolbox)
>   Tools used in our project

Main language: JAVASCRIPT
Main framework: REACT 

Packages back-end:
-   Bcrypt 
-   Body-parser
-   Concurrently
-   Connect-mongo
-   Cookie-parser
-   Cors
-   Express
-   Express-session
-   Mongoose

Packages front-end:
-   Axios
-   Bootstrap
-   Fortawesome
-   React-bootstrap
-   React-datepicker
-   React-dom
-   React-router
-   React-router-dom
-   React-scripts
-   Reactstrap

---

##  [The Teams](#the-teams)
>   The great people under the hood

### Woods 3.21 
Born from a very nice meeting within the BeCode bootcamp of woods 3.21, our team was ideally composed of both back-end and front-end enthusiasts.

Our two PMs, Bastien and Nicolas, were complementary profiles, one for his technical background and the other for his experience in team management.
Intense exchanges and discussions but often very prolific in terms of results, an enriching experience in terms of project management.

Robby and Mohamed worked with Bastien on the back-end of the project, routing, API, MongoDB/Mongoose etc...
Simon and Nicolas worked on the visual aspect of the components as well as the coherence and unity of the project.

In the end, this first "real" project allowed us to realize the capabilities we have and those we need to acquire as well. From the importance of preparing a project to the importance of respecting a deadline by sometimes making concessions on the final result. A very nice professional experience, but above all a human one.

Thank you Fabulab Team!

### Who's next ?

---

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)


