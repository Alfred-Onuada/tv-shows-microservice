FROM python:3.11

WORKDIR /search_service

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV DB_URL=mongodb+srv://adminUser:adminPassword@todo-db.az8gh.mongodb.net/admin

ENV FLASK_RUN_PORT=8002

EXPOSE 8002

CMD ["flask", "--app", "app",  "run", "--host=0.0.0.0"]