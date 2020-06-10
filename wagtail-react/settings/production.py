from .base import *
from decouple import config
import dj_database_url
# DEBUG = config('DEBUG', cast=bool)
DATABASES = {
    'default': dj_database_url.config()
}

DEBUG = True
ALLOWED_HOSTS = ['personal-porfolio.herokuapp.com']


AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]
