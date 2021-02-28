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

const isValidEmail = (_email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_email);
}

const isValidFullName = (_fullname) => {
    return _fullname.trim().length > 3 && /^[\u0600-\u06FFa-zA-Z ]+$/.test(_fullname);
}

const isValidMessage = (_message) => {
    return _message.trim().length > 15 && /^[\u0600-\u06FF\u0750-\u077Fa-zA-Z,._@،!?+*%()-]+$/.test(_message);
}

let isAdmin = true;

module.exports = { API_PATH, SNACKBAR_PROPS, isAdmin, isValidFullName, isValidEmail, isValidMessage };