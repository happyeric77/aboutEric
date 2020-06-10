# Generated by Django 3.0.4 on 2020-06-06 03:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0008_auto_20200605_1645'),
    ]

    operations = [
        migrations.AddField(
            model_name='app',
            name='aboutPageName',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='aboutPageSubtitle',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='aboutPageText',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='aboutPageTitle',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='contactPageName',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='contactPageSubtitle',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='contactPageText',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='contactPageTitle',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='homePageName',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='homePageSubtitle',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='homePageText',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='app',
            name='homePageTitle',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='app',
            name='domain',
            field=models.TextField(blank=True, max_length=50),
        ),
    ]