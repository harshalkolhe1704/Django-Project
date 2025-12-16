from django.urls import path
from . import views

urlpatterns = [
    path('',views.task_list,name='task_list'),
    path('create/',views.task_create,name='task_create'),
    path('<int:pk>/upadte/',views.task_update, name='task-update'),
    path('<int:pk>/delete/',views.task_delete, name='task-delete'),
]