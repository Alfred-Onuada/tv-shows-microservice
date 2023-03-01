FROM python:3.11

WORKDIR /search_service

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV DB_URL=mongodb://localhost:27017

ENV FLASK_RUN_PORT=8002

EXPOSE 8002

CMD ["flask", "--app", "app",  "run"]