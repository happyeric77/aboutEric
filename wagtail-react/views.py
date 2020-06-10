from django.shortcuts import render

def dubuggerTest(request):
    return render(request, 'index.html', {})