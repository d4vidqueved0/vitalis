from django.db import models
from django.contrib.auth.models import User

class Discucion(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='imagenes/', blank=True, null=True)
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha_subida = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
    
class Respuestas(models.Model):
    respuesta = models.CharField(max_length=500)
    discusion = models.ForeignKey(Discucion, on_delete=models.CASCADE, related_name="respuestas")
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.respuesta
