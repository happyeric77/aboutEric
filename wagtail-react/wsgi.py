#
# import os
# from django.core.wsgi import get_wsgi_application
#
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wagtail-react.settings.production')
#
#
# application = get_wsgi_application()


import os
from django.core.wsgi import get_wsgi_application
from dj_static import Cling

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wagtail-react.settings.production')

application = Cling(get_wsgi_application())
