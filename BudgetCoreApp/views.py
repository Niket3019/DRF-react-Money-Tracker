from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.
from .models import MoneysBudget,Expenses
from .serializers  import  MoneysBudgetSerializer,ExpensesSerializer

class MoneysBudgetViewSet(viewsets.ModelViewSet):
    queryset = MoneysBudget.objects.all()
    serializer_class = MoneysBudgetSerializer
class ExpensesViewSet(viewsets.ModelViewSet):
    queryset = Expenses.objects.all()
    serializer_class =  ExpensesSerializer
