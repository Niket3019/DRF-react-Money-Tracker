# Generated by Django 4.1 on 2023-01-14 05:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BudgetCoreApp', '0014_rename_amount_expenses_total_income'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Expense_Type',
        ),
    ]
