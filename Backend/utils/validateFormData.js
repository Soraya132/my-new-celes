function validateFormData(data) {
    const errors = [];

    // Full name
    if (!data.fullName || data.fullName.trim().length === 0) {
        errors.push('Full name is required.');
    } else if (!/^[a-zA-Z\s]+$/.test(data.fullName.trim())) {
        errors.push('Full name should only contain letters and spaces.');
    }

    // Email
    if (!data.email || data.email.trim().length === 0) {
        errors.push('Email is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
        errors.push('Invalid email format.');
    }

    // Contact Info
    if (!data.phoneNumber || String(data.phoneNumber).trim().length === 0) {
        errors.push('Phone number is required.');
    } else if (!/^\+\d{1,3}-?\d+$/.test(String(data.phoneNumber).trim())) {
        errors.push('Phone number should include the country code and only contain digits.');
    }

    // Gender
    const validGenders = ['female', 'male', 'non-binary', 'other'];
    if (!data.gender || !validGenders.includes(data.gender.toLowerCase())) {
        errors.push('Please select your gender from the provided options.');
    }

    // Country
    if (!data.country || data.country.trim().length === 0) {
        errors.push('Country is required.');
    }

    // Highest Academic Qualification
    if (!data.highestQualification || !['high school', 'college/university'].includes(data.highestQualification.toLowerCase())) {
        errors.push('Highest academic qualification must be either "high school" or "college/university".');
    } else {
        if (data.highestQualification.toLowerCase() === 'college/university') {
            if (!data.college || data.college.trim().length === 0) {
                errors.push('College/University name is required.');
            }
            if (!data.currentAcademicYear || data.currentAcademicYear.trim().length === 0) {
                errors.push('Current academic year is required.');
            }
        }
    }

    // Preferred Internship Specialization
    const validSpecializations = [
        'frontend web development', 'ui/ux design', 'database management', 'product management', 'cybersecurity',
        'backend web development', 'fullstack web development', 'graphic designer', 'technical writer', 'mobile development',
        'human resource', 'finance', 'social media manager', 'Data Analytics'
    ];
    if (!data.preferredInternship || !validSpecializations.includes(data.preferredInternship.toLowerCase().trim())) {
        errors.push('Preferred internship specialization is required.');
    }

    // Skill Level
    if (!data.skillLevel || !['junior', 'mid', 'expert'].includes(data.skillLevel.toLowerCase())) {
        errors.push('Skill level is required and must be either "junior", "mid", or "expert".');
    }

    // How Did You Learn About Us
    if (!data.howDidYouLearnAboutUs || !['social media', 'online job portals', 'referrals', 'other'].includes(data.howDidYouLearnAboutUs.toLowerCase())) {
        errors.push('How did you learn about us is required and must be one of "social media", "online job portals", "referrals", or "other".');
    } else if (data.howDidYouLearnAboutUs.toLowerCase() === 'other' && (!data.otherSource || data.otherSource.trim().length === 0)) {
        errors.push('If you selected "other", please specify the source.');
    }

    // Transaction Code
    if (!data.transactionCode || data.transactionCode.trim() === '') {
        errors.push('Transaction code is required.');
    }

    // Payment Name
    if (!data.paymentName || data.paymentName.trim() === '') {
        errors.push('Payment name is required.');
    }

    return errors;
}

module.exports = validateFormData;
