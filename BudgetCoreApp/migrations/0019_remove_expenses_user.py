# Generated by Django 4.1 on 2023-01-14 11:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BudgetCoreApp', '0018_alter_expenses_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='expenses',
            name='user',
        ),
    ]