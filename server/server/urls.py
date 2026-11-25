
from django.urls import path
from server import views

urlpatterns = [
    path('', views.home),

    path('academic-year/', views.academic_year),
    path('academic-yearupdate/<int:academic_year_id>/', views.update_academic_year),
    path('academic-yeardelete/<int:academic_year_id>/', views.delete_academic_year),

    path('financial-year/', views.financial_year),
    path('financial-yearupdate/<int:financial_year_id>/', views.update_financial_year),
    path('financial-yeardelete/<int:financial_year_id>/', views.delete_financial_year),

    path('university/', views.university),
    path('universityupdate/<int:university_id>/', views.update_university),
    path('universitydelete/<int:university_id>/', views.delete_university),

    path('users/', views.users),
    path('usersupdate/<int:user_id>/', views.update_user),
    path('usersdelete/<int:user_id>/', views.delete_user),

    path('roles/', views.roles),
    path('rolesupdate/<int:role_id>/', views.update_role),
    path('rolesdelete/<int:role_id>/', views.delete_role),

    

]
