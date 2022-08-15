![Desktop-8](https://user-images.githubusercontent.com/74157337/183978743-d50a4736-f83c-4e66-b21c-8a8b08eb77c0.png)

# Comparely

Comparely is a web application that compare the contents of excel files

# Application Structure

## Branches

1. `frontend`: Frontend developers would push their code in HTML, CSS and JavaScript to this branch
2. `main`: Backend code and code ready for deployment is contained in this branch
3. `frontend_react`: Frontend code from frontend branch get's converted to ReactJS and is connected to
   the FastAPI backend for it's functionality and then pushed to this branch

## `main` branch

1. `alembic/`: This folder contains database migrations in it's versions folder. We're using alembic database
2. `app/`: This contain the backend logic for the whole application
3. `static/`: This contains the folder where excel files would be uploaded to also the ReactJS project would

## Deployment Instructions

1. Create a folder: `mkdir folder_name`
2. Change directory to the folder: `cd folder_name`
3. Clone main branch to folder: `git clone --branch main https://github.com/zuri-training/Proj_excel_Team-102.git .`
4. Create virtual environment: `python3 -m venv venv`
5. Activate virtual environment: `source venv/bin/activate`
6. Install packages: `pip install -r requirements.txt`
7. Create database, database_user and password for the project: PostgreSQL database
8. Create a new file .env and copy the contents of .env_template into it and replace:

-   {DB} with database name
-   {DB_HOST} with localhost
-   {DB_PORT} with 5432
-   {DB_USERNAME} with database username
-   {DB_PASSWORD} with database password

9. Run database migrations: `alembic upgrade head`
10. You can test project with `uvicorn app.index:app` that would spin up a local server that you can test with `curl localhost:8000` if you get an html format response the project is up and running. Hit `ctrl c` to stop test server.
11. Follow this link on how to deploy a FastAPI project on ubuntu and using nginx and Ignore the steps already done above. [Hot to deploy a FastAPI project](https://www.vultr.com/docs/how-to-deploy-fastapi-applications-with-gunicorn-and-nginx-on-ubuntu-20-04/)

![Dash](https://user-images.githubusercontent.com/74157337/183977059-3c46aed6-fe78-406b-a73f-25a8a4082cd8.png)

<!-- ABOUT THE PROJECT -->

## About The Project

**User:** Unauthenticated

1. Visit the platform to view basic information about it
2. View and Interact with the documentation
3. Register to view more details
4. No access to use until registered

**User:** Authenticated

1. Full access to the platform
2. Allow upload csv/excel file
3. Users should get the option to:
    1. Highlight duplicates in a single file
    2. Remove duplicates and return a single file
    3. Remove duplicates and return 2 files
    4. Highlight duplicates and return 2 files
4. Show usage example to users
5. Allow user save data and come back to download

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Core features

1.  Highlight duplicates in a single file
2.  Remove duplicates and return a single file
3.  Remove duplicates and return 2 files
4.  Highlight duplicates and return 2 file

## Additional features

1. Search and Highlight
2. Search and Replace
3. Diff Checker

## Built With

-   [PostgreSQL](https://postgresql.org/)
-   [HTML](https://learn-html.org/)
-   [CSS](https://web.dev/learn/css/)
-   [REACT](https://reactjs.org/)
-   [FastAPI](https://fastapi.tiangolo.com/)
-   [FIGMa](www.figma.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Live Demo

<a href="" target="_blank">Video</a>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

-   [Abletis](https://abletis.com)
-   [Aspose](https://www.Aspose.com/tools/emoji-cheat-sheet)
-   [Google Fonts](https://fonts.google.com/)
-   [Font Awesome](https://fontawesome.com)
-   [React Icons](https://react-icons.github.io/react-icons/search)
-   [FIGMA](https://figma.com)
-   [Notion](https://notion.so)

## Comparely Links

-   [figma Link](https://www.figma.com/file/bxyWr1yL7bF1wrqU8gVYAk/Comparely?node-id=2%3A3)
-   [Notion Link](https://feline-space-8a7.notion.site/Proj_team_102-460d4d8074724d38b10ae2d488f10711)
-   [final Video Presentation](https://drive.google.com/file/d/1PZvT_0BKroghGQ9ubGEDkGDKmi5Zt7_O/view?usp=sharing)

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.
