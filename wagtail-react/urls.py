from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path
from .views import dubuggerTest

from wagtail.admin import urls as wagtailadmin_urls
from wagtail.core import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls
from django.conf.urls.static import static
from project.views import sendGridEmail
from django.views.generic import TemplateView

from .api import api_router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', dubuggerTest, name='home'),

    path('cms/', include(wagtailadmin_urls)),
    path('documents/', include(wagtaildocs_urls)),
    path('pages/', include(wagtail_urls)),
    path('api/v2/', api_router.urls),
    path('api/email/', sendGridEmail),
    re_path(r'^index/$', TemplateView.as_view(template_name='index.html')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
        path('', dubuggerTest, name='home'),


    ] + urlpatterns
