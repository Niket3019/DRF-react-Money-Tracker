# Generated by Django 4.1 on 2023-01-12 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BudgetCoreApp', '0008_moneybudget_delete_monies_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='moneybudget',
            name='balance',
        ),
        migrations.AddField(
            model_name='moneybudget',
            name='date',
            field=models.CharField(default=0, max_length=20),
        ),
    ]
