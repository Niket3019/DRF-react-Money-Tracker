from . import views
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
router = routers.DefaultRouter()

router.register('MoneysBudget',views.MoneysBudgetViewSet,basename='MoneysBudget')
router.register('Expenses',views.ExpensesViewSet,basename='Expenses')

urlpatterns = [
    path('admin/', admin.site.urls),
   path('', include(router.urls)),
]