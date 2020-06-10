# Generated by Django 3.0.4 on 2020-06-06 16:33

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0014_auto_20200606_1621'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carousel',
            name='cards',
            field=wagtail.core.fields.StreamField([('cards', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(max_length=40, required=True)), ('text', wagtail.core.blocks.TextBlock(max_length=200, required=True)), ('button_url', wagtail.core.blocks.CharBlock(max_length=40, required=True))]))], blank=True, null=True),
        ),
    ]