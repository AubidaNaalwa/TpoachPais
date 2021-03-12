const API_PATH = '/api';
const SNACKBAR_PROPS = {
    SeverityType: {
        ERROR: 'error',
        WARNING: 'warning',
        INFO: 'info',
        SUCCESS: 'success'
    },
    MessageType: {
        SUCCESS_SENT: 'لقد تم ارسال البيانات بنجاح',
        SUCCESS_EMAIL_SENT: 'لقد تم ارسال النموذج بنجاح',
        SUCCESS_SAVED: 'لقد تم حفظ البيانات بنجاح',
        SUCCESS_REMOVED: 'لقد تم حذف البيانات بنجاح',
        FAILED_SAVING: 'فشل في حفظ البيانات',
        FAILED_DELETING: 'فشل في حذف البيانات',
        FAILED_GETTING: 'فشل في قراءة البيانات',
        INFO_EMPTY: 'الرجاء ملئ جميع الخانات الفارغة',
        WARNING_FULLNAME: 'الاسم الكامل غير صحيح',
        WARNING_EMAIL: 'عنوان البريد الالكتروني غير صحيح',
        WARNING_MESSAGE: 'نص الرسالة غير وافي',
        CONNECTION_ERROR: 'فشل في الاتصال الى السيرفر'
    }
};

const isValidEmail = (email) => {
    email = email.trim();
    return email.length > 7 && email.length < 40 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isValidFullName = (fullname) => {
    fullname = fullname.trim();
    return fullname.length > 3 && fullname.length < 20 && /^[\u0600-\u06FFa-zA-Z ]+$/.test(fullname);
}

const isValidMessage = (message) => {
    message = message.trim();
    const regexMessage = new RegExp('^[\u0600-\u06FFa-zA-Z0-9 ,._@،!?+*%)(":-]+$');
    return message.length > 15 && message.length < 200 && regexMessage.test(message);
}

let _menuWidth = '1024px';
let _isAdmin = true;
const menuWidth = {
    get width(){ return _menuWidth; },
    set width(value){ _menuWidth = value; }
}

const isAdmin = {
    get isAdmin(){ return _isAdmin; },
    set isAdmin(value){ _isAdmin = value; }
}

module.exports = { API_PATH, SNACKBAR_PROPS, isAdmin, menuWidth, isValidFullName, isValidEmail, isValidMessage };