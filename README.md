# Instructions
`npm start` for development
`NODE_ENV=production npm start` for a naive server

# General Comments
I used the tutorial from react-router as a skeleton for this dashboard. It uses webpack, express and a bunch of other stuff.

I know you wanted me to use Material but I went with Semantic UI as I am more used to it and to demonstrate my knowledge.

I created fake AJAX requests to simulate requesting data from a micro-service backend on the components.

# Pages
This dashboard contains the following pages:
1) Home page with dashboard
2) Heroes page showing list of heroes
3) Hero page showing individual hero
4) Clients page showing Clients
5) Client page showing individual client
6) Requests page showing Requests

They are all implemented rather naively and contains a lot of hard-coded data. However, for some key things I mocked the data in mockdata and render it from there. They can be found in modules/Mockdata

The rest are just hardcoded to demonstrate what I think could be useful in the dashboard.

# Things I could have included but didn't
1) Adding a hero
2) Blacklisting, changing status, rating, comments on hero and client
3) Maps location
4) Request page showing the request "thread" with all the history of the request
5) More made-up statistics
