
from django.urls import path
from server import views

urlpatterns = [
    path('', views.home),
    path('academic-year/', views.academic_year),
    path('financial-year/', views.financial_year),
    path('university/', views.university),
]
