# Generated by Django 4.1 on 2023-01-14 05:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BudgetCoreApp', '0012_alter_expenses_balance_left_alter_expenses_amount_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='expenses',
            name='Balance_Left',
        ),
    ]
