from django.db import models
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.api import APIField
from rest_framework.fields import Field
from wagtail.core.fields import StreamField, RichTextField
from stream.blocks import CardBlock

class PagesSerializer(Field):
    def to_representation(self, appPages):
        return_objects = []

        for appPage in appPages:
            try:
                carouselPageObj = {
                    "type": "carousel",
                    "id": appPage.id,
                    "title": appPage.specific.title,
                    "link": appPage.specific.link,
                    "content": appPage.specific.content,
                    "selected": appPage.specific.selected,
                    "download_url": appPage.specific.image.file.url,
                    "cards": [{
                        "type": "",
                        "value": {
                            "title": "",
                            "text": "",
                            "button_url": ""
                        },
                        "id": ""
                    } for _ in appPage.specific.cards],
                }
                return_objects.append(carouselPageObj)
            except:
                pass
        return return_objects


class App(Page):
    subpage_types = [
        'project.Carousel',
    ]
    fields = ['domain', 'homePageName', 'homePageTitle', 'homePageSubtitle',
              'homePageText', 'aboutPageName', 'aboutPageTitle', 'aboutPageText', 'contactPageName',
              'contactPageTitle', 'contactPageSubtitle', 'contactPageText', 'twitter', 'github',
              ]

    domain = models.TextField(max_length=50, null=False, blank=True)
    background = models.ForeignKey('wagtailimages.Image',
                              null=True,
                              blank=True,
                              on_delete=models.SET_NULL,
                              related_name='+')
    jumbotron = models.ForeignKey('wagtailimages.Image',
                                   null=True,
                                   blank=True,
                                   on_delete=models.SET_NULL,
                                   related_name='+')

    homePageName = models.CharField(max_length=50, null=False, blank=True)
    homePageTitle = models.CharField(max_length=50, null=False, blank=True)
    homePageSubtitle = models.CharField(max_length=200, null=False, blank=True)
    homePageText = RichTextField(blank=True)
    aboutPageName = models.CharField(max_length=50, null=False, blank=True)
    aboutPageTitle = models.CharField(max_length=50, null=False, blank=True)
    aboutPageSubtitle = models.CharField(max_length=200, null=False, blank=True)
    aboutPageText = RichTextField(blank=True)
    contactPageName = models.CharField(max_length=50, null=False, blank=True)
    contactPageTitle = models.CharField(max_length=50, null=False, blank=True)
    contactPageSubtitle = models.CharField(max_length=200, null=False, blank=True)
    contactPageText = RichTextField(blank=True)
    twitter = models.CharField(max_length=50, null=False, blank=True, default="")
    github = models.CharField(max_length=50, null=False, blank=True, default="")

    content_panels = Page.content_panels + [
        FieldPanel(field) for field in fields
    ] + [
        ImageChooserPanel('background'),
        ImageChooserPanel('jumbotron')
    ]

    api_fields = [
                     APIField(field) for field in fields
                 ] + [
        APIField("childPages", serializer=PagesSerializer()),
        APIField('background'),
        APIField('jumbotron'),
    ]

    @property
    def childPages(self):
        return self.get_children().public().live()


class Carousel(Page):
    parent_page_types = ['project.App']
    subtitle = models.CharField(max_length=50)
    link = models.URLField(blank=True)
    content = models.CharField(blank=True, max_length=500)
    selected = models.BooleanField(default=False)
    image = models.ForeignKey('wagtailimages.Image',
                              null=True,
                              blank=True,
                              on_delete=models.SET_NULL,
                              related_name='+')
    cards = StreamField([
        ('cards', CardBlock())
    ],  null=True, blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('subtitle'),
        FieldPanel('link'),
        FieldPanel('content'),
        FieldPanel('selected'),
        ImageChooserPanel('image'),
        StreamFieldPanel('cards'),

    ]

    api_fields = [
        APIField('subtitle'),
        APIField('link'),
        APIField('content'),
        APIField('selected'),
        APIField('image'),
        APIField('cards'),
    ]
