# create fastapi docker image
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

ARG image_version=website-backend-0.0.1
ENV IMAGE_VERSION=$image_version
EXPOSE 8000
# install pip packages
COPY ./requirements.txt .
RUN pip install --upgrade pip

# Run various pip install commands with ssh keys from host machine.
RUN --mount=type=ssh pip install -r ./requirements.txt && \
  rm -Rf /root/.cache && rm -Rf /tmp/pip-install*

# get api files
COPY ./app .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]