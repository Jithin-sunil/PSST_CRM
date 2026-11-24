from django.http import JsonResponse
from .models import tbl_academicyear, tbl_financialyear, tbl_university, tbl_user,tbl_role

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

def delete_financial_year(request, financial_year_id):
    if request.method == 'DELETE':
        try:
            financial_year_record = tbl_financialyear.objects.get(id=financial_year_id)
            financial_year_record.delete()
            return JsonResponse({'msg': 'Financial year deleted successfully'}, status=200)
        except tbl_financialyear.DoesNotExist:
            return JsonResponse({'error': 'Financial year not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

def update_financial_year(request, financial_year_id):
    if request.method == 'POST':
        try:
            financial_year_record = tbl_financialyear.objects.get(id=financial_year_id)
            from_date = request.POST.get('fromDate')
            to_date = request.POST.get('toDate')
            from_year = from_date.split('-')[0]
            to_year = to_date.split('-')[0]
            financialyear_name = f"{from_year} - {to_year}"

            financial_year_record.financialyear_startdate = from_date
            financial_year_record.financialyear_enddate = to_date
            financial_year_record.financialyear_name = financialyear_name
            financial_year_record.save()

            return JsonResponse({'msg': 'Financial year updated successfully'}, status=200)
        except tbl_financialyear.DoesNotExist:
            return JsonResponse({'error': 'Financial year not found'}, status=404)

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

def delete_university(request, university_id):
    if request.method == 'DELETE':
        try:
            university_record = tbl_university.objects.get(id=university_id)
            university_record.delete()
            return JsonResponse({'msg': 'University deleted successfully'}, status=200)
        except tbl_university.DoesNotExist:
            return JsonResponse({'error': 'University not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

def update_university(request, university_id):
    if request.method == 'POST':
        try:
            university_record = tbl_university.objects.get(id=university_id)
            university_name = request.POST.get('universityName')

            # Check for unique constraint
            if tbl_university.objects.filter(university_name=university_name).exclude(id=university_id).exists():
                return JsonResponse({'error': 'University name already exists'}, status=400)

            university_record.university_name = university_name
            university_record.save()

            return JsonResponse({'msg': 'University updated successfully'}, status=200)
        except tbl_university.DoesNotExist:
            return JsonResponse({'error': 'University not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

def users(request):
    if request.method == 'POST':
        user_employeecode = request.POST.get('userEmployeecode')
        user_name = request.POST.get('userName')
        user_email = request.POST.get('userEmail')
        user_mobile = request.POST.get('userMobile')
        user_password = request.POST.get('userPassword')

        # Check for unique constraints
        if tbl_user.objects.filter(user_employeecode=user_employeecode).exists():
            return JsonResponse({'error': 'Employee code already exists'}, status=400)
        if tbl_user.objects.filter(user_email=user_email).exists():
            return JsonResponse({'error': 'Email already exists'}, status=400)

        user_record = tbl_user.objects.create(
            user_employeecode=user_employeecode,
            user_name=user_name,
            user_email=user_email,
            user_mobile=user_mobile,
            user_password=user_password
        )
        return JsonResponse({'msg': 'User created successfully'}, status=201)
    if request.method == 'GET':
        users_data = list(
            tbl_user.objects
            .values('id', 'user_employeecode', 'user_name', 'user_email', 'user_mobile', 'user_password')
            .order_by('user_name')
        )
        return JsonResponse({'usersData': users_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)

def delete_user(request, user_id):
    if request.method == 'DELETE':
        try:
            user_record = tbl_user.objects.get(id=user_id)
            user_record.delete()
            return JsonResponse({'msg': 'User deleted successfully'}, status=200)
        except tbl_user.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


def update_user(request, user_id):
    if request.method == 'POST':
        try:
            user_record = tbl_user.objects.get(id=user_id)
            user_employeecode = request.POST.get('userEmployeecode')
            user_name = request.POST.get('userName')
            user_email = request.POST.get('userEmail')
            user_mobile = request.POST.get('userMobile')
            user_password = request.POST.get('userPassword')

            if tbl_user.objects.filter(user_employeecode=user_employeecode).exclude(id=user_id).exists():
                return JsonResponse({'error': 'Employee code already exists'}, status=400)
            if tbl_user.objects.filter(user_email=user_email).exclude(id=user_id).exists():
                return JsonResponse({'error': 'Email already exists'}, status=400)

            user_record.user_employeecode = user_employeecode
            user_record.user_name = user_name
            user_record.user_email = user_email
            user_record.user_mobile = user_mobile
            user_record.user_password = user_password
            user_record.save()

            return JsonResponse({'msg': 'User updated successfully'}, status=200)
        except tbl_user.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)



def roles(request):
    if request.method == 'POST':
        role_name = request.POST.get('roleName', '').strip()

        if not role_name:
            return JsonResponse({'error': 'Role name is required'}, status=400)

        if tbl_role.objects.filter(role_name__iexact=role_name).exists():
            return JsonResponse({'error': 'Role name already exists'}, status=400)

        role_record = tbl_role.objects.create(
            role_name=role_name,
        )
        return JsonResponse({'msg': 'Role created successfully'}, status=201)

    if request.method == 'GET':
        roles_data = list(
            tbl_role.objects
            .values('id', 'role_name')
            .order_by('role_name')
        )
        return JsonResponse({'rolesData': roles_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)


def update_role(request, role_id):
    if request.method == 'POST':
        try:
            role_record = tbl_role.objects.get(id=role_id)
            role_name = request.POST.get('roleName', '').strip()

            if not role_name:
                return JsonResponse({'error': 'Role name is required'}, status=400)

            if tbl_role.objects.filter(
                role_name__iexact=role_name
            ).exclude(id=role_id).exists():
                return JsonResponse({'error': 'Role name already exists'}, status=400)

            role_record.role_name = role_name
            role_record.save()

            return JsonResponse({'msg': 'Role updated successfully'}, status=200)

        except tbl_role.DoesNotExist:
            return JsonResponse({'error': 'Role not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


def delete_role(request, role_id):
    if request.method == 'DELETE':
        try:
            role_record = tbl_role.objects.get(id=role_id)
            role_record.delete()

            return JsonResponse({'msg': 'Role deleted successfully'}, status=200)

        except tbl_role.DoesNotExist:
            return JsonResponse({'error': 'Role not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)
