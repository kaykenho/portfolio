from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=255)
    summary = models.TextField()
    skills = models.JSONField()  # Example: ["Business Intelligence", "AI Software Development"]
    languages = models.JSONField()  # Example: ["Spanish (Limited Working)", "English (Native)", "Portuguese (Native)"]
    certifications = models.JSONField()  # Example: ["IBM DevOps Essentials", "Responsible AI"]
    experience = models.JSONField()  # List of experience items with title, company, dates, and description
    education = models.JSONField()  # List of education items with degree, institution, and dates   