# Django-Project-LMS
# Django Learning Management System (LMS)

A comprehensive web-based Learning Management System built with Django for managing courses, students, teachers, assignments, and course materials.

## 🎯 Project Overview

Django LMS is a full-featured learning platform that enables:
- **Students** to enroll in courses, access materials, submit assignments, and provide feedback
- **Teachers** to create courses, upload materials (notes, assignments, recordings), and manage student progress
- **Administrators** to manage users, courses, and system settings

## ✨ Features

### Student Features
- User registration and authentication with OTP verification
- Course browsing and enrollment with payment processing
- Access to course materials (notes, assignments, recordings)
- Assignment submission and grading
- Course feedback and ratings
- Progress tracking
- Notifications

### Teacher Features
- Course creation and management
- Upload course materials (notes, assignments, recordings)
- Assignment creation and student submission review
- Grade assignment submissions
- View student feedback
- Track student progress

### Admin Features
- User management (students, teachers)
- Course management
- Payment tracking
- System monitoring

## 🛠 Tech Stack

| Component | Technology |
|-----------|-----------|
| Backend | Django 5.2.4 |
| Database | SQLite3 (Development) |
| Frontend | HTML5, CSS3, Bootstrap 5.3.0 |
| Authentication | Django Auth + OTP |
| File Storage | Django File Upload |
| Email | SMTP (Gmail/Custom) |

## 📁 Project Structure

\`\`\`
Django-Project-LMS/
│
├── Lms_project/                    # Main Django project
│   ├── lms_core/                   # Project settings
│   │   ├── settings.py             # Configuration
│   │   ├── urls.py                 # Main URL router
│   │   └── wsgi.py                 # WSGI config
│   │
│   ├── Accounts/                   # User management app
│   │   ├── models.py               # CustomUser, StudentProfile
│   │   ├── views.py                # Auth views (register, login, logout)
│   │   ├── forms.py                # Auth forms
│   │   ├── urls.py                 # Account URLs
│   │   ├── migrations/             # Database migrations
│   │   └── templates/accounts/     # Auth templates
│   │
│   ├── Student/                    # Student app
│   │   ├── models.py               # StudentProfile, Enrollment, Feedback
│   │   ├── views.py                # Student views (dashboard, courses)
│   │   ├── forms.py                # Student forms
│   │   ├── urls.py                 # Student URLs
│   │   ├── migrations/             # Migrations
│   │   └── templates/student/      # Student templates
│   │
│   ├── Teacher/                    # Teacher app
│   │   ├── models.py               # TeacherProfile, Note, Assignment, Quiz
│   │   ├── views.py                # Teacher views (dashboard, content)
│   │   ├── forms.py                # Teacher forms
│   │   ├── urls.py                 # Teacher URLs
│   │   ├── migrations/             # Migrations
│   │   └── templates/teacher/      # Teacher templates
│   │
│   ├── Courses/                    # Courses app
│   │   ├── models.py               # Course, CourseContent
│   │   ├── views.py                # Course views
│   │   ├── urls.py                 # Course URLs
│   │   ├── migrations/             # Migrations
│   │   └── templates/courses/      # Course templates
│   │
│   ├── templates/                  # Global templates
│   │   ├── base.html               # Base template
│   │   ├── home.html               # Homepage
│   │   └── ...
│   │
│   ├── static/                     # Static files
│   │   ├── css/                    # Custom CSS
│   │   ├── js/                     # JavaScript
│   │   └── images/                 # Images
│   │
│   ├── media/                      # User uploaded files
│   │   ├── course_contents/        # Course materials
│   │   ├── assignments/            # Assignment submissions
│   │   └── ...
│   │
│   ├── manage.py                   # Django management command
│   ├── db.sqlite3                  # SQLite database
│   └── requirements.txt            # Dependencies
│
└── README.md                       # This file
\`\`\`

## 🚀 Installation

### Prerequisites
- Python 3.11+
- pip (Python package manager)
- Virtual environment (recommended)

### Step 1: Clone Repository

\`\`\`bash
git clone <repository-url>
cd Django-Project-LMS
\`\`\`

### Step 2: Create Virtual Environment

**Windows:**
\`\`\`powershell
python -m venv venv
.\\venv\\Scripts\\Activate.ps1
\`\`\`

**macOS/Linux:**
\`\`\`bash
python3 -m venv venv
source venv/bin/activate
\`\`\`

### Step 3: Install Dependencies

\`\`\`bash
cd Lms_project
pip install -r requirements.txt
\`\`\`

### Step 4: Create requirements.txt

\`\`\`
Django==5.2.4
Pillow==10.0.0
python-decouple==3.8
\`\`\`

### Step 5: Run Migrations

\`\`\`bash
python manage.py makemigrations
python manage.py migrate
\`\`\`

### Step 6: Create Superuser

\`\`\`bash
python manage.py createsuperuser
\`\``\`

Follow the prompts to create admin account.

### Step 7: Run Development Server

\`\`\`bash
python manage.py runserver
\`\``\`

Access the application at: http://127.0.0.1:8000/

## ⚙️ Configuration

### settings.py Configuration

Update \`lms_core/settings.py\`:

\`\`\`python
# Add to INSTALLED_APPS
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'Accounts',
    'Student',
    'Teacher',
    'Courses',
]

# Email Configuration (Gmail example)
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'

# Media Files
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Static Files
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Custom User Model
AUTH_USER_MODEL = 'Accounts.CustomUser'
\`\``\`

### Environment Variables

Create \`.env\` file:

\`\`\`
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
\`\``\`

## 📖 Usage Guide

### For Students

1. **Register**
   - Go to http://localhost:8000/accounts/register/
   - Select "Student Registration"
   - Fill in email, password, and profile details

2. **Login**
   - Go to http://localhost:8000/accounts/login/
   - Enter credentials

3. **Browse Courses**
   - Navigate to Student Dashboard
   - Click "My Courses"
   - View available courses

4. **Enroll in Course**
   - Click on course
   - Click "Enroll"
   - Complete payment process

5. **Access Materials**
   - In enrolled course, view:
     - Notes
     - Assignments
     - Recordings

6. **Submit Assignment**
   - Download assignment
   - Complete and submit

7. **Give Feedback**
   - Go to Feedback section
   - Rate and comment on course

### For Teachers

1. **Register as Teacher**
   - Go to http://localhost:8000/accounts/register/
   - Select "Teacher Registration"

2. **Create Course**
   - Go to Teacher Dashboard
   - Click "Create Course"
   - Fill course details and publish

3. **Upload Materials**
   - Go to Course Settings
   - Click "Add Content"
   - Choose type (Note/Assignment/Recording)
   - Upload file

4. **Manage Assignments**
   - View student submissions
   - Review and grade
   - Provide feedback

5. **View Student Progress**
   - Dashboard shows enrollment stats
   - Track student feedback

## 🔗 API Endpoints

### Authentication
- POST /accounts/login/ - User login
- POST /accounts/logout/ - User logout
- POST /accounts/register/ - User registration
- POST /accounts/verify-otp/ - OTP verification

### Student
- GET /student/dashboard/ - Student dashboard
- GET /student/my-courses/ - Enrolled courses
- GET /student/course/<id>/materials/ - Course materials
- POST /student/courses/<id>/payment/ - Enroll in course
- POST /student/feedback/courses/ - Submit feedback

### Teacher
- GET /teacher/dashboard/ - Teacher dashboard
- GET /teacher/course/<id>/contents/ - Course contents
- POST /teacher/course/<id>/contents/add/ - Add content
- GET /teacher/assignments/ - View submissions

### Admin
- GET /admin/ - Admin panel

## 🗄️ Database Schema

### CustomUser (Accounts)
\`\`\`
- id (PK)
- email (unique)
- first_name
- last_name
- role (choices: student, teacher)
- is_active
- created_at
\`\``\`

### StudentProfile (Student)
\`\`\`
- id (PK)
- user (FK: CustomUser)
- address
- mobile_number
- educational_background
- passing_year
- bio
\`\``\`

### TeacherProfile (Teacher)
\`\`\`
- id (PK)
- user (FK: CustomUser)
- full_name
- qualification_type
- institution_name
- passing_year
- bio
\`\``\`

### Course (Courses)
\`\`\`
- id (PK)
- title
- description
- instructor (FK: TeacherProfile)
- price
- created_at
\`\``\`

### CourseContent (Courses)
\`\`\`
- id (PK)
- course (FK: Course)
- title
- content_type (NOTE/ASSIGNMENT/RECORDING)
- file
- description
- created_at
\`\``\`

### Enrollment (Student)
\`\``\`
- id (PK)
- student (FK: StudentProfile)
- course (FK: Course)
- enrollment_date
- payment_completed
- unique_together: (student, course)
\`\``\`

### Feedback (Student)
\`\``\`
- id (PK)
- student (FK: StudentProfile)
- course (FK: Course)
- rating
- feedback_text
- submitted_on
\`\``\`

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. TemplateDoesNotExist Error
**Problem:** Template file not found
**Solution:**
\`\`\`bash
# Verify template path exists:
# Lms_project/templates/student/filename.html

# Check TEMPLATES setting in settings.py
# Ensure APP_DIRS=True
\`\``\`

#### 2. AttributeError: 'Course' object has no attribute 'name'
**Problem:** Using wrong field name
**Solution:**
\`\`\`python
# Course model uses 'title', not 'name'
{{ course.title }}  # Correct
{{ course.name }}   # Wrong
\`\``\`

#### 3. ValueError: Cannot query "Course": Must be "Course" instance
**Problem:** Type mismatch in queries
**Solution:**
\`\``\`python
# Use get_object_or_404 for consistency
course = get_object_or_404(Course, pk=pk)
\`\``\`

#### 4. NoReverseMatch: Reverse for 'login' not found
**Problem:** URL namespace not configured
**Solution:**
\`\``\`python
# In Accounts/urls.py, add:
app_name = "accounts"

# In templates, use:
{% url 'accounts:login' %}
\`\``\`

#### 5. FieldError: Unknown field(s) specified
**Problem:** Form references non-existent model field
**Solution:**
\`\``\`python
# Check model fields match form Meta.fields
# Run: python manage.py shell
# from app.models import Model
# print([f.name for f in Model._meta.fields])
\`\``\`

#### 6. Migration errors
**Solution:**
\`\``\`bash
# Delete old migrations (except __init__.py) and rebuild
python manage.py makemigrations
python manage.py migrate --fake-initial
\`\``\`

## 📝 Development Workflow

### Adding New Feature

1. **Create/Update Model**
   \`\`\`bash
   # Edit models.py in relevant app
   python manage.py makemigrations
   python manage.py migrate
   \`\``\`

2. **Create View**
   - Add function/class in views.py

3. **Add URL Pattern**
   - Update urls.py with new route

4. **Create Template**
   - Add HTML template in templates/app/

5. **Test**
   \`\``\`bash
   python manage.py runserver
   # Access http://localhost:8000/path/
   \`\``\`

## 🔐 Security Notes

- Change SECRET_KEY in production
- Set DEBUG=False in production
- Use environment variables for sensitive data
- Implement HTTPS in production
- Use strong passwords
- Regular database backups

## 📚 Additional Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [SQLite Documentation](https://www.sqlite.org/docs.html)

## 👥 Contributors

- Project Lead: Saura
- Created: November 2025

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 📞 Support

For issues and questions:
1. Check troubleshooting section
2. Review Django documentation
3. Check error messages carefully
4. Review database schema

---

**Last Updated:** November 2025
**Django Version:** 5.2.4
**Python Version:** 3.11+