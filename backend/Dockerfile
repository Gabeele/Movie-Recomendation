FROM python:3-onbuild
WORKDIR /app
COPY ./requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
EXPOSE 5000

CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
