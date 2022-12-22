import { object, string,ref } from 'yup';
const validationSchema = object({
   
    email: string().email('gecerli bir mail giriniz').required('Zorunlu alan'),    
    password: string().min(5,'parolanız en az 5 karekter olmalıdır').required('Zorunlu alan'), // şifre min 5 karekter ve zorunlu bir alan olduğunu belirtiyoruz
    passwordConfirm: string().oneOf([ref('password')],'parolalar uyuşmuyor').required('Zorunlu alan')//password ile doğruluk kontrolü yapıyor
});

  export default validationSchema;