from django.urls import path
from . import views

app_name = 'foro'

urlpatterns = [
    path('', views.foro, name='foro'),
    path('agregar_discusion/', views.agregar_discusion, name='agregar_discusion'),
    path('discusion/<int:pk>', views.detalle_discusion, name='detalle_discusion')
]
