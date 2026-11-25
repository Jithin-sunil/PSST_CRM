
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

    path('programme/', views.programme),
    path('programmedelete/<int:programme_id>/', views.delete_programme),
    path('programmeupdate/<int:programme_id>/', views.update_programme),

    path('specialization/', views.specialization),
    path('specializationdelete/<int:specialization_id>/', views.delete_specialization),
    path('specializationupdate/<int:specialization_id>/', views.update_specialization),

    path('category/', views.category),
    path('categorydelete/<int:category_id>/', views.delete_category),
    path('categoryupdate/<int:category_id>/', views.update_category),

    path('technology/', views.technology),
    path('technologydelete/<int:technology_id>/', views.delete_technology),
    path('technologyupdate/<int:technology_id>/', views.update_technology),

    

]
