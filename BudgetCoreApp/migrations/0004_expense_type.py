# Generated by Django 4.1 on 2023-01-11 17:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('BudgetCoreApp', '0003_expense_money_delete_profiles'),
    ]

    operations = [
        migrations.CreateModel(
            name='Expense_Type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Expense_type', models.CharField(max_length=20)),
                ('Usser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
