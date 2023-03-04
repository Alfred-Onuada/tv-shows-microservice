FROM python:3.11

WORKDIR /search_service

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENV DB_URL="your.mongodb.url"

ENV FLASK_RUN_PORT=8001

EXPOSE 8001

CMD ["flask", "--app", "app",  "run", "--host=0.0.0.0"]