from rest_framework import serializers
from .models import MoneysBudget,Expenses

class MoneysBudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoneysBudget
        fields = '__all__'

class ExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = '__all__'
