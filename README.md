This is my realization of LeadSoft evaluation development task Technologies I used:

1. HTML, CSS, JS (vanilla; + express, axios) for create simple website to implement the "End-user gets its own id number, which is stored in cookie. For each web page visiting, information of {end_user_id, web_page_url} is sent to a server (second component)." purpose

2. FastAPI and Python global var as database to implement the "Server gets the information from the first component and sent this information to the third component." Why I use global var instead of the real database that is the question I would like to answer personally.

3. react-admin for "Admin website, which gets the information from the Server {end_user_id, web_page_url} and list this information grouped by end_user_id."

_Additional technical requirements. More technical requirements are implemented – higher rate candidate gets.

Communication between second and third component is done via websocket. **-**
Admin website is build using React Admin library (link is provided below in References). **+**
Solution is put into the docker container/s. To test the solution, docker container/s should + produce 2/3 urls with different ports: url for Simple website, url for Admin website. **+**
_
It's wrong place to substantiate my solutions so I'd prefer to do it personally too.
_
1. git clone <repo>
2. cd <repo>
3. nano /var/www/leadsoft_testtask/leadsoft_backend/.env
4. ORIGINS=YOUR VALUES (http://yourhost:5173 http://yourhost http://yourhost:8080)
5. nano /var/www/leadsoft_testtask/leadsoft_frontend_site/static/js.env
6. HOST=0.0.0.0
7. PORT=8080
8. nano /var/www/leadsoft_testtask/leadsoft_frontend_site/static/main.js
9. find SERVER_URL and change host address to your host (host only, not port/endpoint)
10. nano leadsoft-admin-site/src/dataProvider.ts
11. again, change host to yours (not the port!)
12. docker-compose up
13. go to http://127.0.0.1 and do smth
14. track your activity on the admin site http://localhost:5173 
_
ERROR: Network supernet declared as external but specifies additional attributes (driver).
ANSWER: nano docker-compose.yml -> delete `driver` line (in the end)
frontend_1  | Error: Cannot find module 'express'
ANSWER: nano docker-compose.yml -> find the `frontend` service -> find the `command` line -> change it to 'npm install && cd static/js && node server.js'. Then `docker-compose up`, then REMOVE it on next run
Is something wrong with data sending between the apps? Check your firewall status
Make sure the other apps don't use this host/port
