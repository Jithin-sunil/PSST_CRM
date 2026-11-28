from django.http import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt

def home(request):
    return JsonResponse({'msg':"Welcome to HomePage"})


@csrf_exempt
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

@csrf_exempt
def delete_academic_year(request, academic_year_id):
    if request.method == 'DELETE':
        try:
            academic_year_record = tbl_academicyear.objects.get(id=academic_year_id)
            academic_year_record.delete()
            return JsonResponse({'msg': 'Academic year deleted successfully'}, status=200)
        except tbl_academicyear.DoesNotExist:
            return JsonResponse({'error': 'Academic year not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
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


@csrf_exempt
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

@csrf_exempt
def delete_financial_year(request, financial_year_id):
    if request.method == 'DELETE':
        try:
            financial_year_record = tbl_financialyear.objects.get(id=financial_year_id)
            financial_year_record.delete()
            return JsonResponse({'msg': 'Financial year deleted successfully'}, status=200)
        except tbl_financialyear.DoesNotExist:
            return JsonResponse({'error': 'Financial year not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
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


@csrf_exempt
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

@csrf_exempt
def delete_university(request, university_id):
    if request.method == 'DELETE':
        try:
            university_record = tbl_university.objects.get(id=university_id)
            university_record.delete()
            return JsonResponse({'msg': 'University deleted successfully'}, status=200)
        except tbl_university.DoesNotExist:
            return JsonResponse({'error': 'University not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
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


@csrf_exempt
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
            .values('id', 'user_employeecode', 'user_name', 'user_email', 'user_mobile')
            .order_by('user_name')
        )
        return JsonResponse({'usersData': users_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def delete_user(request, user_id):
    if request.method == 'DELETE':
        try:
            user_record = tbl_user.objects.get(id=user_id)
            user_record.delete()
            return JsonResponse({'msg': 'User deleted successfully'}, status=200)
        except tbl_user.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
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


@csrf_exempt
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

@csrf_exempt
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

@csrf_exempt
def delete_role(request, role_id):
    if request.method == 'DELETE':
        try:
            role_record = tbl_role.objects.get(id=role_id)
            role_record.delete()

            return JsonResponse({'msg': 'Role deleted successfully'}, status=200)

        except tbl_role.DoesNotExist:
            return JsonResponse({'error': 'Role not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)



@csrf_exempt
def screens(request):

    if request.method == 'POST':

        screen_code = request.POST.get('screenCode', '').strip().upper()
        screen_name = request.POST.get('screenName', '').strip()
        screen_module = request.POST.get('screenModule', '').strip()

        if not screen_code or not screen_name or not screen_module:
            return JsonResponse({
                'error': 'All fields are required'
            }, status=400)

        if tbl_screen.objects.filter(screen_code__iexact=screen_code).exists():
            return JsonResponse({
                'error': 'Screen code already exists'
            }, status=400)

        tbl_screen.objects.create(
            screen_code=screen_code,
            screen_name=screen_name,
            screen_module=screen_module
        )

        return JsonResponse({
            'msg': 'Screen registered successfully'
        }, status=201)

    if request.method == 'GET':

        screens_data = list(
            tbl_screen.objects
            .values('id', 'screen_code', 'screen_name', 'screen_module')
            .order_by('screen_module', 'screen_name')
        )

        return JsonResponse({
            'screensData': screens_data
        })

    return JsonResponse({
        'error': 'Method not allowed'
    }, status=405)



@csrf_exempt
def role_screens(request, role_id):

    if request.method == 'GET':

        try:
            role = tbl_role.objects.get(id=role_id)

        except tbl_role.DoesNotExist:
            return JsonResponse({
                'error': 'Role not found'
            }, status=404)

        screens_data = list(
            tbl_rolescreen.objects
            .filter(role=role)
            .values(
                'screen__id',
                'screen__screen_code',
                'screen__screen_name',
                'screen__screen_module'
            )
            .order_by('screen__screen_module', 'screen__screen_name')
        )

        return JsonResponse({
            'roleId': role.id,
            'roleName': role.role_name,
            'screensData': screens_data
        })

    return JsonResponse({
        'error': 'Method not allowed'
    }, status=405)



# PROGRAMME

@csrf_exempt
def programme(request):
    if request.method == 'POST':
        programme_name = request.POST.get('ProgrammeName')

        programme_record_exists = tbl_program.objects.filter(program_name=programme_name,).exists()

        if programme_record_exists:
            return JsonResponse({'error': 'Programme name already exists',}, status=400)

        programme_record = tbl_program.objects.create(program_name=programme_name,)

        return JsonResponse({'msg': 'Programme created successfully',}, status=201)

    if request.method == 'GET':
        programme_data = list(tbl_program.objects.values('id', 'program_name').order_by('program_name'))

        return JsonResponse({'ProgramData': programme_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def delete_programme(request, programme_id):
    if request.method == 'DELETE':
        try:
            programme_record = tbl_program.objects.get(id=programme_id)
            programme_record.delete()
            return JsonResponse({'msg': 'Programme deleted successfully'}, status=200)

        except tbl_program.DoesNotExist:
            return JsonResponse({'error': 'Programme not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def update_programme(request, programme_id):
    if request.method == 'POST':
        try:
            programme_record = tbl_program.objects.get(id=programme_id)

            programme_name = request.POST.get('ProgrammeName')

            programme_record_exists = tbl_program.objects.filter(program_name=programme_name,).exclude(id=programme_id).exists()

            if programme_record_exists:
                return JsonResponse({'error': 'Programme name already exists',}, status=400)

            programme_record.program_name = programme_name
            programme_record.save()

            return JsonResponse({'msg': 'Programme updated successfully'}, status=200)

        except tbl_program.DoesNotExist:
            return JsonResponse({'error': 'Programme not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


# SPECIALIZATION

@csrf_exempt
def specialization(request):
    if request.method == 'POST':
        specialization_name = request.POST.get('SpecializationName')
        program = tbl_program.objects.get(id=request.POST.get('SelectProgram'))

        specialization_record_exists = tbl_specialization.objects.filter(specialization_name=specialization_name,program=program,).exists()

        if specialization_record_exists:
            return JsonResponse({'error': 'Specialization already exists',}, status=400)

        specialization_record = tbl_specialization.objects.create(specialization_name=specialization_name,program=program,)

        return JsonResponse({'msg': 'Specialization created successfully',}, status=201)

    if request.method == 'GET':
        specialization_data = list(tbl_specialization.objects.values('id', 'specialization_name', 'program_id', 'program__program_name').order_by('specialization_name'))
        return JsonResponse({'SpecializationData': specialization_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def delete_specialization(request, specialization_id):
    if request.method == 'DELETE':
        try:
            specialization_record = tbl_specialization.objects.get(id=specialization_id)
            specialization_record.delete()
            return JsonResponse({'msg': 'Specialization deleted successfully'}, status=200)

        except tbl_specialization.DoesNotExist:
            return JsonResponse({'error': 'Specialization not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def update_specialization(request, specialization_id):
    if request.method == 'POST':
        try:
            specialization_record = tbl_specialization.objects.get(id=specialization_id)

            specialization_name = request.POST.get('SpecializationName')
            program = tbl_program.objects.get(id=request.POST.get('SelectProgram'))

            specialization_record_exists = tbl_specialization.objects.filter(specialization_name=specialization_name,program=program,).exclude(id=specialization_id).exists()

            if specialization_record_exists:
                return JsonResponse({'error': 'Specialization already exists',}, status=400)

            specialization_record.specialization_name = specialization_name
            specialization_record.program = program
            specialization_record.save()

            return JsonResponse({'msg': 'Specialization updated successfully'}, status=200)

        except tbl_specialization.DoesNotExist:
            return JsonResponse({'error': 'Specialization not found'}, status=404)

        except tbl_program.DoesNotExist:
            return JsonResponse({'error': 'Programme not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


# CATEGORY

@csrf_exempt
def category(request):
    if request.method == 'POST':
        category_name = request.POST.get('CategoryName')

        category_record_exists = tbl_category.objects.filter(category_name=category_name,).exists()

        if category_record_exists:
            return JsonResponse({'error': 'Category already exists',}, status=400)

        category_record = tbl_category.objects.create(category_name=category_name,)

        return JsonResponse({'msg': 'Category created successfully',}, status=201)

    if request.method == 'GET':
        category_data = list(tbl_category.objects.values('id', 'category_name').order_by('category_name'))
        return JsonResponse({'CategoryData': category_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def delete_category(request, category_id):
    if request.method == 'DELETE':
        try:
            category_record = tbl_category.objects.get(id=category_id)
            category_record.delete()
            return JsonResponse({'msg': 'Category deleted successfully'}, status=200)

        except tbl_category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def update_category(request, category_id):
    if request.method == 'POST':
        try:
            category_record = tbl_category.objects.get(id=category_id)
            category_name = request.POST.get('CategoryName')

            category_record_exists = tbl_category.objects.filter(category_name=category_name,).exclude(id=category_id).exists()

            if category_record_exists:
                return JsonResponse({'error': 'Category already exists',}, status=400)

            category_record.category_name = category_name
            category_record.save()

            return JsonResponse({'msg': 'Category updated successfully',}, status=200)

        except tbl_category.DoesNotExist:
            return JsonResponse({'error': 'Category not found',}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

# TECHNOLOGY

@csrf_exempt
def technology(request):
    if request.method == 'POST':
        technology_name = request.POST.get('TechnologyName')

        technology_record_exists = tbl_technology.objects.filter(technology_name=technology_name,).exists()

        if technology_record_exists:
            return JsonResponse({'error': 'Technology already exists',}, status=400)

        technology_record = tbl_technology.objects.create(technology_name=technology_name,)

        return JsonResponse({'msg': 'Technology created successfully',}, status=201)

    if request.method == 'GET':
        technology_data = list(tbl_technology.objects.values('id', 'technology_name').order_by('technology_name'))
        return JsonResponse({'TechnologyData': technology_data})

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def delete_technology(request, technology_id):
    if request.method == 'DELETE':
        try:
            technology_record = tbl_technology.objects.get(id=technology_id)
            technology_record.delete()
            return JsonResponse({'msg': 'Technology deleted successfully'}, status=200)

        except tbl_technology.DoesNotExist:
            return JsonResponse({'error': 'Technology not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def update_technology(request, technology_id):
    if request.method == 'POST':
        try:
            technology_record = tbl_technology.objects.get(id=technology_id)
            technology_name = request.POST.get('TechnologyName')

            technology_record_exists = tbl_technology.objects.filter(technology_name=technology_name,).exclude(id=technology_id).exists()

            if technology_record_exists:
                return JsonResponse({'error': 'Technology already exists',}, status=400)

            technology_record.technology_name = technology_name
            technology_record.save()

            return JsonResponse({'msg': 'Technology updated successfully',}, status=200)

        except tbl_technology.DoesNotExist:
            return JsonResponse({'error': 'Technology not found',}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)





#enquiry
@csrf_exempt
def enquiry(request):

    if request.method == 'POST':
        enquiry_date=request.POST.get("enquiryDate")
        student_name = request.POST.get('studentName')
        student_mobile = request.POST.get('studentMobile')
        student_address = request.POST.get('studentAddress')
        enquiry_details = request.POST.get('enquiryDetails')
        enquiry_educationtype = request.POST.get('educationType')
        enquiry_schoolname = request.POST.get('schoolName')
        category_id = tbl_category.objects.get(id=request.POST.get('categoryId'))
        college_id = tbl_college.objects.get(id=request.POST.get('collegeId'))
        programme_id = tbl_program.objects.get(id=request.POST.get('programmeId'))
        specialization_id = tbl_specialization.objects.get(id=request.POST.get('specializationId'))
        enquiry_data_exists = tbl_enquiry.objects.filter(
            enquiry_studentname=student_name,
            enquiry_mobile=student_mobile,
            enquiry_details=enquiry_details
        ).exists()

        if enquiry_data_exists:
            return JsonResponse(
                {'error': 'Enquiry already exists'},
                status=400
            )

        tbl_enquiry.objects.create(
            enquiry_date=enquiry_date,
            enquiry_studentname=student_name,
            enquiry_mobile=student_mobile,
            enquiry_address=student_address,
            enquiry_details=enquiry_details,
            enquiry_educationtype=enquiry_educationtype,
            enquiry_schoolname=enquiry_schoolname,
            category=category_id,
            college=college_id,
            programme=programme_id,
            specialization=specialization_id
        )

        return JsonResponse(
            {'message': 'Enquiry added successfully'},
            status=201
        )

    if request.method == 'GET':

        enquiry_data = list(
            tbl_enquiry.objects
            .values(
                'id',
                'enquiry_date',
                'enquiry_studentname',
                'enquiry_mobile',
                'enquiry_address',
                'enquiry_details',
                'enquiry_educationtype',
                'enquiry_schoolname',
                'enquiry_status',
                'category_id',
                'college_id',
                'programme_id',
                'specialization_id'
            )
            .order_by('-id')
        )

        return JsonResponse(
            {'enquiryData': enquiry_data}
        )

    return JsonResponse(
        {'error': 'Method not allowed'},
        status=405
    )

@csrf_exempt
def update_enquiry(request, enquiry_id):
    if request.method == 'POST':
        try:
            enquiry_record = tbl_enquiry.objects.get(id=enquiry_id)

            enquiry_record.enquiry_date = request.POST.get("enquiryDate")
            enquiry_record.enquiry_studentname = request.POST.get('studentName')
            enquiry_record.enquiry_mobile = request.POST.get('studentMobile')
            enquiry_record.enquiry_address = request.POST.get('studentAddress')
            enquiry_record.enquiry_details = request.POST.get('enquiryDetails')
            enquiry_record.enquiry_educationtype = request.POST.get('educationType')
            enquiry_record.enquiry_schoolname = request.POST.get('schoolName')
            enquiry_record.category = tbl_category.objects.get(id=request.POST.get('categoryId'))
            enquiry_record.college = tbl_college.objects.get(id=request.POST.get('collegeId'))
            enquiry_record.programme = tbl_program.objects.get(id=request.POST.get('programmeId'))
            enquiry_record.specialization = tbl_specialization.objects.get(id=request.POST.get('specializationId'))

            enquiry_record.save()

            return JsonResponse({'message': 'Enquiry updated successfully'}, status=200)

        except tbl_enquiry.DoesNotExist:
            return JsonResponse({'error': 'Enquiry not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def delete_enquiry(request, enquiry_id):
    if request.method == 'DELETE':
        try:
            enquiry_record = tbl_enquiry.objects.get(id=enquiry_id)
            enquiry_record.delete()
            return JsonResponse({'message': 'Enquiry deleted successfully'}, status=200)

        except tbl_enquiry.DoesNotExist:
            return JsonResponse({'error': 'Enquiry not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)



@csrf_exempt
def enquiryfollowup(request, enquiry_id):
    if request.method == 'POST':
        enquiry_id = tbl_enquiry.objects.get(id=enquiry_id)
        enquiryfollowup_date = request.POST.get('enquiryFollowupDate')
        enquiryfollowup_nextdate = request.POST.get('enquiryFollowupNextDate')
        enquiryfollowup_details = request.POST.get('enquiryFollowupDetails')
        enquiry_followup_exists = tbl_enquiryfollowup.objects.filter(
            enquiry=enquiry_id,
            enquiryfollowup_date=enquiryfollowup_date,
            enquiryfollowup_details=enquiryfollowup_details
        ).exists()

        if enquiry_followup_exists:
            return JsonResponse(
                {'error': 'Enquiry follow-up already exists'},
                status=400
            )

        tbl_enquiryfollowup.objects.create(
            enquiry=enquiry_id,
            enquiryfollowup_date=enquiryfollowup_date,
            enquiryfollowup_details=enquiryfollowup_details,
            enquiryfollowup_nextdate=enquiryfollowup_nextdate
        )

        return JsonResponse(
            {'message': 'Enquiry follow-up added successfully'},
            status=201
        )
    if request.method == 'GET':
        enquiry_followup_data = list(
            tbl_enquiryfollowup.objects
            .values(
                'id',
                'enquiry',
                'enquiryfollowup_date',
                'enquiryfollowup_details',
                'enquiryfollowup_nextdate'
            )
            .order_by('-id')
        )

        return JsonResponse(
            {'enquiryFollowupData': enquiry_followup_data}
        )

    return JsonResponse(
        {'error': 'Method not allowed'},
        status=405
    )


@csrf_exempt
def update_enquiryfollowup(request, enquiryfollowup_id):
    if request.method == 'POST':
        try:
            enquiry_followup_record = tbl_enquiryfollowup.objects.get(id=enquiryfollowup_id)

            enquiry_followup_record.enquiry_id = tbl_enquiry.objects.get(id=request.POST.get('enquiryId'))
            enquiry_followup_record.enquiryfollowup_date = request.POST.get('enquiryFollowupDate')
            enquiry_followup_record.enquiryfollowup_details = request.POST.get('enquiryFollowupDetails')
            enquiry_followup_record.enquiryfollowup_status = request.POST.get('enquiryFollowupStatus')

            enquiry_followup_record.save()

            return JsonResponse({'message': 'Enquiry follow-up updated successfully'}, status=200)

        except tbl_enquiryfollowup.DoesNotExist:
            return JsonResponse({'error': 'Enquiry follow-up not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

@csrf_exempt
def delete_enquiryfollowup(request, enquiryfollowup_id):
    if request.method == 'DELETE':
        try:
            enquiry_followup_record = tbl_enquiryfollowup.objects.get(id=enquiryfollowup_id)
            enquiry_followup_record.delete()
            return JsonResponse({'message': 'Enquiry follow-up deleted successfully'}, status=200)

        except tbl_enquiryfollowup.DoesNotExist:
            return JsonResponse({'error': 'Enquiry follow-up not found'}, status=404)

    return JsonResponse({'error': 'Method not allowed'}, status=405)

