from django import forms
from .models import Discucion

class DiscucionForm(forms.ModelForm):
    class Meta:
        model = Discucion
        fields = ['titulo', 'descripcion', 'imagen']
        widgets = {
            'titulo': forms.TextInput(attrs={'class': 'form-control'}),
            'descripcion': forms.Textarea(attrs={'class': 'form-control'}),
            'imagen': forms.FileInput(attrs={'class': 'form-control'}),
        }
