export class ValiDateForm {

  static emailCheck(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  static passwordCheck(password: string): boolean {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if(passwordRegex.test(password)) {
      return false
    }
    return password.length <= 8;
  }
  static phoneCheck(phone: string): boolean {
    return /^010-\d{3,4}-\d{4}$/.test(phone);
  }
  static formatPhoneNumber(phone: string): string {
    const onlyNumbers = phone.replace(/\D/g, '');

    if (onlyNumbers.startsWith('010')) {
      if (onlyNumbers.length <= 3) {
        return onlyNumbers;
      } else if (onlyNumbers.length <= 7) {
        return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
      } else if (onlyNumbers.length <= 11) {
        return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
      } else {
        return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
      }
    }

    return onlyNumbers;
  }
}
