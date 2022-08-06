# Comparely

Comparely is a web application that compare the contents of excel files

## Core features

1.  Highlight duplicates in a single file
2.  Remove duplicates and return a single file
3.  Remove duplicates and return 2 files
4.  Highlight duplicates and return 2 file

## Additional features

1. Search and Highlight
2. Search and Replace
3. Diff Checker

## Technologies

1.  Frontend: HTML, CSS, JavaScript and ReactJS
2.  Backend: Python/FastAPI
3.  Database: PostgreSQL

## Application Structure

### Banches

1. `frontend`: Frontend developers would push their code in HTML, CSS and JavaScript to this branch
2. `main`: Backend code and code ready for deployment is contained in this branch
3. `frontend_react`: Frontend code from frontend branch get's converted to ReactJS and is connected to
   the FastAPI backend for it's functionality and then pushed to this branch

### `main` branch

1. `alembic/`: This folder contains database migrations in it's versions folder. We're using alembic database
   migration tool.
2. `app/`: This contain the backend logic for the whole application
3. `static/`: This contains the folder where excel files would be uploaded to also the ReactJS project would
   be built and pasted into this folder.
