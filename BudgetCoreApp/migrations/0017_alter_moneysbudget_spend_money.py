# Generated by Django 4.1 on 2023-01-14 05:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BudgetCoreApp', '0016_alter_expenses_total_income'),
    ]

    operations = [
        migrations.AlterField(
            model_name='moneysbudget',
            name='spend_money',
            field=models.IntegerField(default=0),
        ),
    ]
