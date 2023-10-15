## backend

### setup
- python3 -m venv venv
- source venv/bin/activate
- pip install django
- pip install djangorestframework
- django-admin startproject core backend

- python3 manage.py startapp <name_project>

### database
- python3 manage.py makemigrations <name_project>
- python3 manage.py migrate

### run
- python3 manage.py runserver

## frontend
- npm run dev
