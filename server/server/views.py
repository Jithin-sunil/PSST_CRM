from django.http import JsonResponse
from .models import tbl_academicyear, tbl_financialyear, tbl_university

def home(request):
    return JsonResponse({'msg':"Welcome to HomePage"})

def academic_year(request):
    if request.method == 'POST':
        from_date = request.POST.get('fromDate')
        to_date = request.POST.get('toDate')
        from_year = from_date.split('-')[0]
        to_year = to_date.split('-')[0]
        academicyear_name = f"{from_year} - {to_year}"

        academic_year_record_exists = tbl_academicyear.objects.filter(
            academicyear_startdate=from_date,
            academicyear_enddate=to_date,
        ).exists()
        if academic_year_record_exists:
            return JsonResponse({
                'error': 'Academic year already exists',
            }, status=400)

        academic_year_record = tbl_academicyear.objects.create(
            academicyear_startdate=from_date,
            academicyear_enddate=to_date,
            academicyear_name=academicyear_name,
        )
        return JsonResponse({
            'msg': 'Academic year created successfully',
        }, status=201)

    if request.method == 'GET':
        academic_year_data = list(
            tbl_academicyear.objects
            .values('id', 'academicyear_name', 'academicyear_startdate', 'academicyear_enddate')
            .order_by('academicyear_startdate')
        )
        return JsonResponse({'academicyearData': academic_year_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)


def delete_academic_year(request, academic_year_id):
    if request.method == 'DELETE':
        try:
            academic_year_record = tbl_academicyear.objects.get(id=academic_year_id)
            academic_year_record.delete()
            return JsonResponse({'msg': 'Academic year deleted successfully'}, status=200)
        except tbl_academicyear.DoesNotExist:
            return JsonResponse({'error': 'Academic year not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

def update_academic_year(request, academic_year_id):
    if request.method == 'POST':
        try:
            academic_year_record = tbl_academicyear.objects.get(id=academic_year_id)
            from_date = request.POST.get('fromDate')
            to_date = request.POST.get('toDate')
            from_year = from_date.split('-')[0]
            to_year = to_date.split('-')[0]
            academicyear_name = f"{from_year} - {to_year}"

            academic_year_record.academicyear_startdate = from_date
            academic_year_record.academicyear_enddate = to_date
            academic_year_record.academicyear_name = academicyear_name
            academic_year_record.save()

            return JsonResponse({'msg': 'Academic year updated successfully'}, status=200)
        except tbl_academicyear.DoesNotExist:
            return JsonResponse({'error': 'Academic year not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)



def financial_year(request):
    if request.method == 'POST':
        from_date = request.POST.get('fromDate')
        to_date = request.POST.get('toDate')
        from_year = from_date.split('-')[0]
        to_year = to_date.split('-')[0]
        financialyear_name = f"{from_year} - {to_year}"
        financial_year_record_exists = tbl_financialyear.objects.filter(
            financialyear_startdate=from_date,
            financialyear_enddate=to_date,
        ).exists()
        if financial_year_record_exists:
            return JsonResponse({
                'error': 'Financial year already exists',
            }, status=400)
        
        financial_year_record = tbl_financialyear.objects.create(
            financialyear_startdate=from_date,
            financialyear_enddate=to_date,
            financialyear_name=financialyear_name,
        )
        return JsonResponse({
            'msg': 'Financial year created successfully',
        }, status=201)

    if request.method == 'GET':
        financial_year_data = list(
            tbl_financialyear.objects
            .values('id', 'financialyear_name', 'financialyear_startdate', 'financialyear_enddate')
            .order_by('financialyear_startdate')
        )
        return JsonResponse({'financialyearData': financial_year_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)


def university(request):
    if request.method == 'POST':
        university_name = request.POST.get('universityName')
        university_record_exists = tbl_university.objects.filter(
            university_name=university_name,
        ).exists()
        if university_record_exists:
            return JsonResponse({
                'error': 'University already exists',
            }, status=400)
        university_record = tbl_university.objects.create(
            university_name=university_name,
        )
        return JsonResponse({
            'msg': 'University created successfully',
        }, status=201)

    if request.method == 'GET':
        university_data = list(
            tbl_university.objects
            .values('id', 'university_name')
            .order_by('university_name')
        )
        return JsonResponse({'universityData': university_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)

