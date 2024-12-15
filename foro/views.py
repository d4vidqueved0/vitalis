from django.shortcuts import render, redirect
from .models import Discucion
from .forms import DiscucionForm
from django.contrib.auth.decorators import login_required

# Create your views here.


def foro(request):
    discusiones = Discucion.objects.all()
    return render(request, 'foro/foro.html', {'discusiones': discusiones})


@login_required
def agregar_discusion(request):
    if request.method == 'GET':
        form = DiscucionForm()
        return render(request, 'foro/agregar_discusion.html', {'form':form})
    else:
        form = DiscucionForm(request.POST, request.FILES)   
        if form.is_valid:
            discusion = form.save(commit=False)
            discusion.autor = request.user
            discusion.save()
            return redirect('foro:foro')
        else:
            return render(request, 'foro/agregar_discusion.html', {'form':form})


def detalle_discusion(request, pk):
    discusion = Discucion.objects.get(pk=pk)
    return render(request, 'foro/detalle_discusion.html',{'discusion':discusion})
