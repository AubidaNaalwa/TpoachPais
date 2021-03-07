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
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isValidFullName = (fullname) => {
    return fullname.trim().length > 3 && /^[\u0600-\u06FFa-zA-Z ]+$/.test(fullname);
}

const isValidMessage = (message) => {
    return message.trim().length > 15 && /^[\u0600-\u06FF\u0750-\u077Fa-zA-Z,._@،!?+*%()-]+$/.test(message);
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