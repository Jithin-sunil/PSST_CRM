from django.db import models


class tbl_academicyear(models.Model):
    academicyear_name = models.CharField(max_length=100)
    academicyear_startdate = models.DateField()
    academicyear_enddate = models.DateField()


class tbl_financialyear(models.Model):
    financialyear_name = models.CharField(max_length=100)
    financialyear_startdate = models.DateField()
    financialyear_enddate = models.DateField()

class tbl_university(models.Model):
    university_name = models.CharField(max_length=100)

class tbl_college(models.Model):
    college_name = models.CharField(max_length=100)
    university = models.ForeignKey(tbl_university, on_delete=models.CASCADE)
    college_address = models.TextField()
    college_isautonomous = models.BooleanField(default=False)


class tbl_program(models.Model):
    program_name = models.CharField(max_length=100)

class tbl_specialization(models.Model):
    specialization_name = models.CharField(max_length=100)
    program = models.ForeignKey(tbl_program,on_delete=models.CASCADE)

class tbl_category(models.Model):
    category_name = models.CharField(max_length=100)

class tbl_technology(models.Model):
    technology_name = models.CharField(max_length=100)

class tbl_user(models.Model):
    user_employeecode = models.CharField(max_length=30, unique=True)
    user_name = models.CharField(max_length=150)
    user_email = models.EmailField(max_length=150, unique=True)
    user_mobile = models.CharField(max_length=20)
    user_password = models.CharField(max_length=128)

class tbl_role(models.Model):
    role_name = models.CharField(max_length=100)


class tbl_screen(models.Model):
    screen_code = models.CharField(max_length=100)
    screen_name = models.CharField(max_length=150)
    screen_module = models.CharField(max_length=100)


class tbl_userrole(models.Model):
    user = models.ForeignKey(tbl_user, on_delete=models.CASCADE)
    role = models.ForeignKey(tbl_role, on_delete=models.CASCADE)


class tbl_rolescreen(models.Model):
    role = models.ForeignKey(tbl_role, on_delete=models.CASCADE)
    screen = models.ForeignKey(tbl_screen, on_delete=models.CASCADE)


class tbl_userscreen(models.Model):
    user = models.ForeignKey(tbl_user, on_delete=models.CASCADE)
    screen = models.ForeignKey(tbl_screen, on_delete=models.CASCADE)


class tbl_enquiry(models.Model):
    enquiry_date  = models.DateField()
    enquiry_studentname = models.CharField(max_length=150)
    enquiry_mobile = models.CharField(max_length=20)
    enquiry_address = models.TextField()
    enquiry_details = models.TextField()
    enquiry_educationtype = models.CharField(max_length=100)
    enquiry_schoolname = models.CharField(max_length=150)
    enquiry_status=models.CharField(max_length=100,default='open')
    category = models.ForeignKey(tbl_category, on_delete=models.CASCADE)
    college = models.ForeignKey(tbl_college, on_delete=models.CASCADE)
    programme = models.ForeignKey(tbl_program, on_delete=models.CASCADE)
    specialization = models.ForeignKey(tbl_specialization, on_delete=models.CASCADE)


class tbl_enquiryfollowup(models.Model):
    enquiry = models.ForeignKey(tbl_enquiry, on_delete=models.CASCADE)
    enquiryfollowup_date = models.DateField()
    enquiryfollowup_nextdate = models.DateField()
    enquiryfollowup_details = models.TextField()
    enquiryfollowup_status = models.IntegerField(default=0)