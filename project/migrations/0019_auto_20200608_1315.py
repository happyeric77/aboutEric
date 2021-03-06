# Generated by Django 3.0.4 on 2020-06-08 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0018_auto_20200607_1549'),
    ]

    operations = [
        migrations.AlterField(
            model_name='app',
            name='aboutPageName',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='app',
            name='aboutPageSubtitle',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='app',
            name='aboutPageText',
            field=models.TextField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='app',
            name='aboutPageTitle',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='app',
            name='contactPageName',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='app',
            name='contactPageSubtitle',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='app',
            name='contactPageText',
            field=models.TextField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='app',
            name='contactPageTitle',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='app',
            name='github',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='app',
            name='homePageName',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='app',
            name='homePageSubtitle',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='app',
            name='homePageText',
            field=models.TextField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='app',
            name='homePageTitle',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='app',
            name='twitter',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]
