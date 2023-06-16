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
git checkout remotes/origin/master
create .env files (copy .env.dev and fill it)
docker-compose up
go to http://127.0.0.1 and do smth
track your activity on the admin site http://localhost:5173 
_ 
Is something wrong with data sending between the apps? Check your firewall status
