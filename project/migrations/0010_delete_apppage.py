# Generated by Django 3.0.4 on 2020-06-06 07:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0045_assign_unlock_grouppagepermission'),
        ('wagtailforms', '0004_add_verbose_name_plural'),
        ('wagtailredirects', '0006_redirect_increase_max_length'),
        ('project', '0009_auto_20200606_0316'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AppPage',
        ),
    ]
