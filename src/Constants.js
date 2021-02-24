const API_PATH = '/';
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
        CONNECTION_ERROR: 'فشل في الاتصال الى السيرفر'
    }
};

const AdminUser ="Admin"
const AdminPass ="Admin111"

module.exports = { API_PATH, SNACKBAR_PROPS , AdminUser, AdminPass};